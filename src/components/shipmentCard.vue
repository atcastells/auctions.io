<template>
<div class="card text-secondary bg-white">
<div class="card-title">
  {{title}} ({{shipmentAddresses.length}})
</div>
<div class="card-content ">
  <div class="row">
    <div class="width-1of3">
      <i>local_shipping</i>
    </div>
    <div class="width-2of3">
      <div class="list">
          <q-collapsible v-for="i in shipmentAddresses" key="i.id" icon="local_shipping" :label="i.fullname">
            <label>Country</label>
            <input class="full-width" readonly v-model="i.country" >
            <label>City</label>
            <input class="full-width" readonly v-model="i.city" >
            <label>Code</label>
            <input class="full-width" readonly v-model="i.postcode" >
            <label>Street</label>
            <input class="full-width" readonly v-model="i.street" >
            <div class="item two-lines">
              <i class="item-primary">phone</i>
              <div class="item-content">
                <label>Phone</label>
                <input class="full-width" readonly v-model="i.phone" >
              </div>
            </div>
            <div class="item two-lines">
              <i class="item-primary">info</i>
              <div class="item-content">
                <label>Comment</label>
                <input class="full-width" readonly v-model="i.comment" >
              </div>
            </div>
          </q-collapsible>
      </div>
    </div>
  </div>
  <div v-if="creating" class="row">
    <div class="list full-width">
      <div class="item two-lines">
        <i class="item-primary">edit</i>
        <div class="item-content">
          <label>Description</label>
           <input :class="incorrectField(shipment_address.fullname)" class="full-width" v-model="shipment_address.fullname">
        </div>
      </div>
      <div class="item two-lines">
        <i class="item-primary">edit</i>
        <div class="item-content">
          <label>Country</label>
           <input :class="incorrectField(shipment_address.country)" class="full-width" v-model="shipment_address.country">
        </div>
      </div>
      <div class="item two-lines">
        <i class="item-primary">edit</i>
        <div class="item-content">
          <label>City</label>
           <input :class="incorrectField(shipment_address.city)" class="full-width" v-model="shipment_address.city">
       </div>
     </div>
      <div class="item two-lines">
         <i class="item-primary">edit</i>
         <div class="item-content">
           <label>Postcode</label>
            <input :class="incorrectField(shipment_address.postcode)" class="full-width" v-model="shipment_address.postcode">
          </div>
      </div>
      <div class="item two-lines">
          <i class="item-primary">edit</i>
          <div class="item-content">
            <label>Street</label>
             <input :class="incorrectField(shipment_address.street)" class="full-width" v-model="shipment_address.street">
           </div>
     </div>
      <div class="item two-lines">
         <i class="item-primary">edit</i>
         <div class="item-content">
           <label>Phone</label>
            <input :class="incorrectField(shipment_address.phone)" class="full-width" v-model="shipment_address.phone">
          </div>
      </div>
      <div class="item two-lines">
        <i class="item-primary">edit</i>
        <div class="item-content">
          <label>coment</label>
           <input :class="incorrectField(shipment_address.comment)" class="full-width" v-model="shipment_address.comment">
         </div>
       </div>
   </div>
 </div>
  <div class="card-actions">
    <div class="text-primary">
      <button :disabled="creating" class="secondary" @click="create()">Add Shipment Address</button>
      <button v-if="creating" :disabled="!validForm" class="primary" @click="save()">Save</button>
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
      shipment_address: {
        fullname: '',
        country: '',
        city: '',
        postcode: '',
        street: '',
        phone: '',
        comment: ''
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
      axios.post(api + 'users/' + this.userId + '/shipment_addresses', this.shipment_address, config).then((response) => {
        this.$emit('updateAddresses')
        this.creating = false
      })
    },
    incorrectField: function (value) {
      if (value.length < 3) return 'has-error'
      else {
        return 'valid'
      }
    }
  },
  computed: {
    validForm: function () {
      for (let item in this.shipment_address) {
        item = this.shipment_address[item]
        if (this.incorrectField(item) === 'has-error') {
          return false
        }
      }
      return true
    }
  },
  mounted () {
  },
  props: {
    title: {
      type: String,
      default: 'Shipment Addresses'
    },
    shipmentAddresses: {},
    userId: {}
  }
}
</script>
<style scoped>
  i {
    font-size: 54px;
  }
</style>
