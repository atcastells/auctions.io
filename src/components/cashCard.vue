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
            <i class="item-primary">credit_card</i>
            <div class="item-content">
              <label>Payment Methods</label>
              <q-select
              class="full-width"
              type="list"
              v-model="transaction.payment_method_id"
              :options="payment_methods_select"
              ></q-select>
             </div>
           </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data: function () {
    return {
      transaction: {
        payment_method_id: ''
      },
      payment_methods_select: []
    }
  },
  methods: {
    paymentMethodsList: function (input) {
      for (let p in input) {
        p = input[p]
        let pMethod = {}
        pMethod.label = p.description
        pMethod.value = p.id
        this.payment_methods_select.push(pMethod)
      }
    }
  },
  mounted () {
    this.paymentMethodsList(this.paymentMethods)
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
    paymentMethods: {}
  }
}
</script>
<style scoped>
  i {
    font-size: 54px;
  }
</style>
