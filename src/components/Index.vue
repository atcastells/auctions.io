<template>
  <q-layout class="bg-grey-14">
    <div slot="header" class="toolbar">
      <div class="toolbar-content">
      <button class="hide-on-drawer-visible" @click="$refs.drawer.toggle()">
        <i>menu</i>
      </button>
      <q-toolbar-title :padding="1">
        {{title}}
      </q-toolbar-title>
      </div>
      <button v-if="isAuth" @click="$refs.userModal.open()" >
       Welcome {{email}} <i>account_circle</i>
      </button>

      <button v-if="isAuth" @click="disconnect()">
       <i>exit_to_app</i>
       <q-tooltip self="bottom bottom" :offset="[-20, 0]">
         <strong>Close session</strong>
       </q-tooltip>
      </button>
    </div>

    <!-- <q-tabs v-if="isAuth" slot="navigation">
      <q-tab icon="home" route="/home" exact replace></q-tab>
    </q-tabs> -->

    <q-drawer v-if="isAuth" ref="drawer">
      <div class="toolbar">
        <q-toolbar-title>
          Stats
        </q-toolbar-title>
      </div>

      <div v-if="isAuth" class="list platform-delimiter">
        <div style="text-align: center" class="generic-margin">
          <img style="border-radius: 30%; height: 100px;" :src="avatarUrl"/>
        </div>
        <div class="item two-lines">
          <i class="item-primary">monetization_on</i>
          <div class="item-content">
            <input type="number" readonly class="full-width" :value="coins">
          </div>
        </div>
      </div>
    </q-drawer>

    <q-modal v-if="isAuth" ref="userModal" class="maximized" :content-css="{padding: '10px 40px 5px 40px', minWidth: '50vw'}">

      <q-layout>
        <div slot="header" class="toolbar bg-white text-secondary">
          <button @click="$refs.userModal.close()">
            <i>keyboard_arrow_left</i>
          </button>
          <q-toolbar-title :padding="1">
            {{userName}}'s profile
          </q-toolbar-title>
        </div>

        <div class="layout-view  bg-teal">
          <div class="layout-padding large-gutter">
            <div class="flex wrap gutter">
              <div class="width-1of2 ">
                <info-card
                :name = "userName"
                :email = "email"
                :coins = "coins"
                iconName = "info_outline"
                background = "bg-white"
                ></info-card>
              </div>
              <div class="width-1of4 ">
              </div>
              <div class="width-1of4 ">
              </div>
            </div>
          </div>
        </div>
      </q-layout>
    </q-modal>

    <div class="layout-padding generic-margin fit">
    <router-view class="layout-view"></router-view>
    </div>
    <div slot="footer" class="toolbar"></div>
  </q-layout>
</template>


<script>
  import axios from 'axios'
  import { Toast } from 'quasar'
  import infoCard from './infoCard.vue'
  export default {
    components: {
      infoCard
    },
    data () {
      return {
        userId: '',
        userName: '',
        email: '',
        coins: '',
        password: '',
        avatarUrl: '',
        userBids: ''
      }
    },
    methods: {
      disconnect: function () {
        this.$auth.destroyToken()
        location.reload()
      },
      setAuthenticatedUser () {
        let api = this.$utils.getApiUrl()
        let config = {
          headers: {'Authorization': 'Bearer ' + this.$auth.getToken()}
        }

        axios.get('https://auctionserver.ml/api/user', config).then((response) => {
          this.$auth.setAuthenticatedUser(response.body)
          this.userId = response.data.id
          this.userName = response.data.name
          this.coins = response.data.coins
          this.email = response.data.email
          this.avatarUrl = this.getAvatar(this.email, 200)
        })
        axios.get(api + 'bids', config).then((response) => {
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
      }
    },
    created () {
      if (this.isAuth) {
        this.setAuthenticatedUser()
      }
    },
    mounted () {
      window.setInterval(() => {
        this.refreshSession()
      }, 180000)
    }
  }
</script>
