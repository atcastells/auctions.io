<template>
  <div class="card text-secondary bg-white">
  <div class="card-title">
    {{title}}: ({{coins}} Coins)
  </div>
  <div class="card-content ">
    <div class="row">
      <div class="width-1of3">
        <i>monetization_on</i>
      </div>
      <div class="width-2of3">
        <div class="list">
          <div class="item two-lines">
            <i class="item-primary"></i>
            <div class="item-content">
              <label>Payment Type</label>
              <q-select
              class="full-width"
              type="list"
              v-model="transaction.payment_method_id"
              :options="payment_methods_select"
              ></q-select>
            </div>
          </div>
           <div class="item two-lines">
             <i class="item-primary"></i>
             <div class="item-content">
               <label>Quantity</label>
               <q-numeric
                  v-model="transaction.quantity"
                  :min="1"
                ></q-numeric>
              </div>
            </div>
        </div>
      </div>
    </div>
    <div class="card-actions">
      <div class="text-primary">
        <button :disabled="validform" class="secondary" @click="$refs.confirmModal.open()">Add</button>
      </div>
    </div>
  </div>
  <q-modal
  :content-css="{minWidth: '40vw', minHeight: '20vh'}"
  ref="confirmModal">
    <q-layout>
      <div slot="header" class="toolbar bg-teal">
      <button @click="pay()">Pay</button>
      <q-toolbar-title :padding="1" class="text-center">
        Confirm Payment
      </q-toolbar-title>
      <button @click="$refs.confirmModal.close()">Close</button>
      </div>
      <div class="layout-view">
      <div class="layout-padding">
        <div class="text-center">
          Please confirm your payment of <span class="label bg-primary text-white">{{transaction.quantity}} €</span> with the button on the top of the modal.
        </div>
      </div>
    </div>
    </q-layout>
  </q-modal>
</div>
</template>
<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      transaction: {
        payment_method_id: '',
        quantity: 1
      },
      payment_methods_select: []
    }
  },
  methods: {
    pay: function () {
      let id = this.id
      let api = this.$utils.getApiUrl()
      let config = {
        headers: { 'Authorization': 'Bearer ' + this.$auth.getToken() }
      }
      let data = {
        payment_method: this.transaction.payment_method_id,
        amount: this.transaction.quantity
      }
      axios.post(api + 'users/' + id + '/transactions', data, config).then((response) => {
        this.$emit('updateCoins')
        this.$refs.confirmModal.close()
      })
    }
  },
  mounted () {
    let id = this.id
    let api = this.$utils.getApiUrl()
    let config = {
      headers: { 'Authorization': 'Bearer ' + this.$auth.getToken() }
    }
    axios.get(api + 'users/' + id + '/payment_methods', config).then((response) => {
      for (let item in response.data) {
        item = response.data[item]
        let obj = {}
        obj.label = item.description
        obj.value = item.id
        this.payment_methods_select.push(obj)
      }
    })
  },
  props: {
    title: {
      type: String,
      default: 'Add coins'
    },
    coins: {
      type: Number,
      default: 0
    },
    id: {}
  },
  computed: {
    validform: function () {
      return this.transaction.payment_method_id === ''
    }
  }
}
</script>
<style scoped>
  i {
    font-size: 54px;
  }
</style>
