<template>
<div class="card text-secondary bg-white">
<div class="card-title">
  {{title}} ({{paymentMethods.length}})
</div>
<div class="card-content ">
  <div class="row">
    <div class="width-1of3">
      <i>credit_card</i>
    </div>
    <div class="width-2of3">
      <div class="list" v-for="i in paymentMethods" key="i.id">

      </div>
    </div>
  </div>
  <div v-if="creating" class="row">
    <div class="list full-width">
      <div class="item two-lines">
        <i class="item-primary">edit</i>
        <div class="item-content">
          <label>Payment Type</label>
          <q-select
          class="full-width"
          type="list"
          :class="incorrectPaymentType"
          v-model="paymentMethod.payment_type"
          :options="paymentTypes"
          ></q-select>
        </div>
      </div>
      <div class="item two-lines">
        <i class="item-primary">edit</i>
        <div class="item-content">
          <label>Description</label>
           <input :class="incorrectDescription" class="full-width" v-model="paymentMethod.description">
        </div>
      </div>
    </div>
  </div>
  <div class="card-actions">
    <div class="text-primary">
      <button :disabled="creating" class="secondary" @click="create()">Add Payment Method</button>
      <button v-if="creating" :disabled="!validForm" class="secondary" @click="save()">Save</button>
    </div>
  </div>
</div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      creating: false,
      paymentMethod: {
        description: '',
        payment_type: ''
      },
      paymentTypes: []
    }
  },
  methods: {
    create: function () {
      this.creating = true
    },
    save: function () {
      let api = this.$utils.getApiUrl()
      let config = {
        headers: { 'Authorization': 'Bearer ' + this.$auth.getToken() }
      }
      axios.post(api + 'users/' + this.userId + '/payment_methods', this.paymentMethod, config).then((response) => {
        this.$emit('Post paymentMethod')
        this.creating = false
      })
    }
  },
  computed: {
    validForm: function () {
      return (this.paymentMethod.description.length > 3) && (this.paymentMethod.payment_type !== '')
    },
    incorrectDescription: function () {
      if (this.paymentMethod.description.length < 3) {
        return 'has-error'
      }
    },
    incorrectPaymentType: function () {
      if (this.paymentMethod.payment_type === '') {
        return 'has-error'
      }
    }
  },
  mounted () {
    let api = this.$utils.getApiUrl()
    let config = {
      headers: { 'Authorization': 'Bearer ' + this.$auth.getToken() }
    }
    axios.get(api + 'payment_types', config).then((response) => {
      for (let item in response.data) {
        item = response.data[item]
        let obj = {}
        obj.label = item.name
        obj.value = item.id
        this.paymentTypes.push(obj)
      }
    })
  },
  props: {
    title: {
      type: String,
      default: 'Payment Methods'
    },
    paymentMethods: {},
    userId: {}
  }
}
</script>
<style scoped>
  i {
    font-size: 54px;
  }
</style>
