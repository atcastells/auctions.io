<template>
  <div class="card text-secondary bg-white">
  <div class="card-title">
    Finished Auctions
  </div>
  <div class="card-content ">
    <div class="row" v-for="auction in wonAuctions">
      <div class="auto text-center">
        <div class="card bg-secondary text-white">
        <big> Auction ID # {{auction.id}} </big>
        <div class="row">
          <div class="auto">
            <small> Products </small>
            <div class="list">
              {{auction}}
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  </div>
</div>

</template>
<script>
// import axios from 'axios'
export default {
  data () {
    return {}
  },
  props: {
    wonAuctions: {}
  },
  mounted () {
  },
  methods: {}
}
</script>
<style scoped>
  i {
    font-size: 54px;
  }
</style>
