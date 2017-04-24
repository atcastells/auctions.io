<template>
<q-layout class="bg-blue-grey-4">
  <div slot="header" class="toolbar bg-white text-secondary">
    <div class="toolbar-content">
      <button class="hide-on-drawer-visible" @click="$refs.drawer.toggle()">
        <i>menu</i>
      </button>
      <q-toolbar-title :padding="1">
        {{title}}
      </q-toolbar-title>
    </div>
    <button v-if="isAuth" @click="$refs.userModal.open()">
       Welcome {{user.email}} <i>account_circle</i>
      </button>

    <button v-if="isAuth" @click="disconnect()">
       <i>exit_to_app</i>
       <q-tooltip anchor="center right" :offset="[-30,80]">
         <strong>Close session</strong>
       </q-tooltip>
      </button>
  </div>

  <!-- <q-tabs v-if="isAuth" slot="navigation">
      <q-tab icon="home" route="/home" exact replace></q-tab>
    </q-tabs> -->

  <q-drawer v-if="userLoaded" ref="drawer">
    <div class="toolbar bg-teal text-white">
      <q-toolbar-title>
        Stats
      </q-toolbar-title>
    </div>

    <div v-if="isAuth" class="list platform-delimiter">
      <div style="text-align: center" class="generic-margin">
        <img style="border-radius: 30%; height: 100px;" :src="avatarUrl" />
      </div>
      <div class="item two-lines">
        <i class="item-primary">monetization_on</i>
        <div class="item-content">
          <input type="number" readonly class="full-width text-blue text-bold" :value="user.coins">
        </div>
      </div>
      <p class="caption text-center">My bids (Active Auctions)</p>
      <div class="list platform-delimiter">
        <q-collapsible v-for="i in userBids" key="i.id" :label="'Auction: ' + i.id">
          <div class="item" v-for="j in i.bids">
            <i class="item-primary">attach_money</i>
              <div class="item-content">
                {{j}}
              </div>
          </div>
        </q-collapsible>
      </div>
      <p class="caption text-center">My won Auctions</p>
      <div class="list platform-delimiter">
        <div class="item two-lines" v-for="auction in wonAuctions">
          <i class="item-primary">star</i>
          <div class="item-content">
              <span class="label bg-primary text-white">{{auction.id}}</span>
          </div>
        </div>
      </div>
    </div>
  </q-drawer>

  <q-modal ref="userModal" class="maximized" :content-css="{padding: '10px 40px 5px 40px', minWidth: '50vw'}">

    <profile @updateUser="setAuthenticatedUser" @closeProfile="closeProfile" v-if="userLoaded" :user="user" > </profile>

  </q-modal>

  <div class="layout-padding generic-margin fit">
    <transition name="fade">
      <router-view class="layout-view">
      </router-view>
    </transition>
  </div>
  <div slot="footer" class="toolbar bg-teal"></div>
</q-layout>
</template>


<script>
import axios from 'axios'
import { Toast } from 'quasar'
import profile from './profile.vue'
export default {
  components: {
    profile
  },
  data () {
    return {
      user: {},
      avatarUrl: '',
      userBids: [],
      wonAuctions: ''
    }
  },
  methods: {
    closeProfile: function () {
      this.$refs.userModal.close()
    },
    disconnect: function () {
      this.$auth.destroyToken()
      location.reload()
    },
    setAuthenticatedUser () {
      let api = this.$utils.getApiUrl()
      let config = {
        headers: { 'Authorization': 'Bearer ' + this.$auth.getToken() }
      }

      axios.get(api + 'user', config).then((response) => {
        this.$auth.setAuthenticatedUser(response.body)
        this.user = response.data
        this.avatarUrl = this.getAvatar(this.user.email, 200)
      })
    },
    getUserBids () {
      let api = this.$utils.getApiUrl()
      let config = {
        headers: { 'Authorization': 'Bearer ' + this.$auth.getToken() }
      }
      axios.get(api + 'users/' + this.user.id + '/bids/active', config).then((response) => {
        for (let bid in response.data) {
          bid = response.data[bid]
          this.bidList(bid)
        }
      })
    },
    getWonAuctions () {
      let api = this.$utils.getApiUrl()
      let config = {
        headers: { 'Authorization': 'Bearer ' + this.$auth.getToken() }
      }
      axios.get(api + 'users/' + this.user.id + '/winnings', config).then((response) => {
        this.wonAuctions = response.data
      })
    },
    notify (msg) {
      Toast.create(msg)
    },
    getAvatar: function (email, size) {
      let uri = 'https://api.adorable.io/avatars/' + size + '/' + email + '.png'
      return uri
    },
    refreshSession: function () {
      let data = {
        client_id: 6,
        client_secret: 'cZR9DR79MC4miArdU9OC7v9mOwgOTMaCb8DamHax',
        grant_type: 'refresh_token',
        refresh_token: localStorage.getItem('refresh')
      }
      axios.post('https://auctionserver.ml/oauth/token', data).then((response) => {
        if (this.$utils.debug()) {
          console.log('Old token: ' + this.$auth.getToken())
          console.log('New token: ' + response.data.access_token)
        }
        this.$auth.setToken(response.data.access_token, response.data.expires_in + Date.now(), response.data.refresh_token)
      })
    },
    bidList: function (bid) {
      let idExists = false
      for (let i in this.userBids) {
        i = this.userBids[i]
        if (i.id === bid.auction_id) {
          idExists = true
          i.bids.push(bid.coins)
        }
      }
      if (!idExists) {
        let auction = {}
        auction.id = bid.auction_id
        auction.bids = []
        auction.bids.push(bid.coins)
        this.userBids.push(auction)
      }
    }
  },
  props: {
    title: {
      type: String,
      default: 'Auctions.io'
    }
  },
  computed: {
    isAuth () {
      return this.$auth.isAuthenticated()
    },
    userLoaded () {
      return this.user.id > 0
    }
  },
  created () {
    if (this.isAuth) {
      this.setAuthenticatedUser()
    }
  },
  mounted () {
    window.setInterval(() => {
      for (let auction in this.userBids) {
        auction = this.userBids[auction]
        auction.bids = []
      }
      this.getWonAuctions()
      this.getUserBids()
      this.setAuthenticatedUser()
      this.refreshSession()
    }, 20000)
    if (this.userLoaded) {
      this.getUserBids()
    }
  }
}
</script>
