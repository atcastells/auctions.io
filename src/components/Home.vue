<template>
<div>
  <div class="row auto large-gutter">
    <!--  Auction card (loop)  -->
    <div class="width-2of5" v-if="i.closed != 1 && calculateTime(i.enddate,i.id) >= 0 && i.articles.length > 0" v-for="i in auctions" :key="i.id">
      <div class="card shadow-4 bg-white">
        <div class="card-title text-teal"> Auction id: #{{i.id}} </div>
        <div class="list item-delimiter">
          <q-collapsible v-for="item in i.articles" icon="explore" :label="item.name" :key="item.id">
            <div class="item multiple-lines">
              <div class="item-content has-secondary"> {{item.description}} </div>
            </div>
          </q-collapsible>
        </div>
        <div class="card-actions card-no-top-padding">
          <div class="text-secondary"> Ends in: </div>
          <div> {{msToTime(calculateTime(i.enddate,i.id))}} </div>
          <div class="auto"></div> <button @click="bidModal(i.minbid,i.id)" class="primary clear small"><i class="on-left">attach_money</i> Bid</button> </div>
      </div>
    </div>
    <!--  End auction Card  -->
    <q-modal ref="bidModal" :content-css="{padding: '10px'}">
      <div slot="header" class="toolbar bg-white text-secondary">
        <q-toolbar-title :padding="1"> Auction nº {{currentAuction}} </q-toolbar-title>
      </div>
      <div class="row generic-margin">
        <div class="width-1of3 "></div>
        <div class="width-1of3 ">
          <q-numeric v-model="currentBid" :min="minBid"></q-numeric>
        </div>
        <div class="width-1of3 "></div>
      </div>
      <div class="row no-margin"> <button class="primary full-width" :disabled="!canBid" @click="bid()"> Bid! </button> </div>
    </q-modal>
  </div>
</div>
</template>
<script>
import axios from 'axios'
import { Toast } from 'quasar'
export default {
  data () {
    return {
      user: {},
      articleCategories: [],
      categoryFilter: [],
      auctions: [],
      now: '',
      auctionTimeRemaining: [],
      currentBid: 0,
      currentAuction: null,
      minBid: 0
    }
  },
  methods: {
    notify (msg) {
      Toast.create(msg)
    },
    msToTime: function (s) {
      var pad = (n, z = 2) => ('00' + n).slice(-z)
      return pad(s / 3.6e6 | 0) + ' : ' + pad((s % 3.6e6) / 6e4 | 0) + ' : ' + pad((s % 6e4) / 1000 | 0) + '' // + '.' + pad(s % 1000, 3)
    },
    calculateTime: function (time, id) {
      var parsedTime = new Date(Date.parse(time.replace('-', '/', 'g')))
      var pendingTime = parsedTime - this.now
      var idExists = ''
      if (pendingTime >= 0) {
        for (let auction in this.auctionTimeRemaining) {
          if (this.auctionTimeRemaining[auction].id === id) {
            idExists = true
            this.auctionTimeRemaining[auction].timeToEnd = pendingTime
          }
        }
        if (!idExists) {
          var auction = {}
          auction.id = id
          auction.timeToEnd = pendingTime
          this.auctionTimeRemaining.push(auction)
        }
      }
      return pendingTime.toString()
    },
    auctionEnd: function (time) {
      return this.calculateTime(time) < 0
    },
    bidModal: function (minBid, id) {
      if (!this.canBid) {
        this.notify("You don't have enougth coins to make a bid.")
        return
      }
      this.minBid = minBid
      this.currentBid = minBid
      this.currentAuction = id
      this.$refs.bidModal.open()
    },
    bid: function () {
      let api = this.$utils.getApiUrl()
      let data = {
        coins: this.currentBid,
        user: this.user.id
      }
      let config = {
        headers: { 'Authorization': 'Bearer ' + this.$auth.getToken() }
      }
      axios.post(api + 'auctions/' + this.currentAuction + '/bids', data, config).then((response) => {
        console.log(response.data)
      }).catch(function (error) {
        console.log(error)
      })
    }
  },
  computed: {
    canBid: function () {
      return this.user.coins >= 50
    }
  },
  created () {
    let api = this.$utils.getApiUrl()
    let config = {
      headers: { 'Authorization': 'Bearer ' + this.$auth.getToken() }
    }
    axios.get(api + 'auctions', config).then((response) => {
      this.auctions = response.data
    }).catch(function (error) {
      console.log(error)
    })
    axios.get(api + 'categories', config).then((response) => {
      this.articleCategories = response.data
      this.categoryFilter = this.articleCategories.map(a => a.id)
    }).catch(function (error) {
      console.log(error)
    })

    axios.get(api + 'user', config).then((response) => {
      this.user = response.data
    })
  },
  mounted () {
    window.setInterval(() => {
      this.now = new Date()
    }, 1000)
  }
}
</script>
