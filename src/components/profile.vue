<template>
  <q-layout>
    <div slot="header" class="toolbar bg-white text-secondary">
      <button @click="close()">
          <i>keyboard_arrow_left</i>
        </button>
      <q-toolbar-title :padding="1">
        {{user.name}}'s profile
      </q-toolbar-title>
    </div>

    <div class="layout-view  bg-teal">
      <div class="layout-padding large-gutter">
        <div class="row flex wrap gutter">
          <div class="width-1of2 ">
            <info-card title= "User info" :name="user.name" :email="user.email" :coins="user.coins" iconName="info_outline" background="bg-white"></info-card>
          </div>
          <div class="width-1of2 ">
            <payment-card v-on:updateMethods="getPaymentMethods(user.id)" :paymentMethods = "paymentMethods" :userId = "this.user.id" >
            </payment-card>
          </div>
          <div class="width-1of2 ">
            <cash-card
            @updateCoins="updateUser"
            :coins="user.coins"
            :paymentMethods = "paymentMethods"
            :id = "user.id"
            ></cash-card>
          </div>
          <div class="width-1of2 ">
            <shipment-card v-on:updateAddresses="getShipmentAddresses(user.id)" :shipmentAddresses = "shipmentAddresses" :userId="user.id" ></shipment-card>
          </div>
          <div class="width-1of1 ">
            <finished-auctions
            :wonAuctions="wonAuctions"
            ></finished-auctions>
          </div>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
import infoCard from './infoCard.vue'
import paymentCard from './paymentCard.vue'
import shipmentCard from './shipmentCard.vue'
import cashCard from './cashCard.vue'
import finishedAuctions from './finishedAuctions'
import axios from 'axios'
export default {
  components: {
    infoCard,
    paymentCard,
    shipmentCard,
    cashCard,
    finishedAuctions
  },
  props: {
    user: {}
  },
  mounted () {

  },
  created () {
    this.getPaymentMethods(this.user.id)
    this.getShipmentAddresses(this.user.id)
    this.getWonAuctions(this.user.id)
  },
  methods: {
    updateUser: function () {
      this.$emit('updateUser')
    },
    close: function () {
      this.$emit('closeProfile')
    },
    getPaymentMethods: function (id) {
      let api = this.$utils.getApiUrl()
      let config = {
        headers: { 'Authorization': 'Bearer ' + this.$auth.getToken() }
      }
      axios.get(api + 'users/' + id + '/payment_methods', config).then((response) => {
        this.paymentMethods = response.data
      })
    },
    getShipmentAddresses: function (id) {
      let api = this.$utils.getApiUrl()
      let config = {
        headers: { 'Authorization': 'Bearer ' + this.$auth.getToken() }
      }
      axios.get(api + 'users/' + id + '/shipment_addresses', config).then((response) => {
        this.shipmentAddresses = response.data
      })
    },
    getWonAuctions: function (id) {
      let api = this.$utils.getApiUrl()
      let config = {
        headers: { 'Authorization': 'Bearer ' + this.$auth.getToken() }
      }
      axios.get(api + 'users/' + id + '/winnings', config).then((response) => {
        this.wonAuctions = response.data
      })
    }
  },
  data () {
    return {
      paymentMethods: '',
      shipmentAddresses: '',
      wonAuctions: ''
    }
  },
  computed: {
    isAuth () {
      return this.$auth.isAuthenticated()
    }
  }
}
</script>
