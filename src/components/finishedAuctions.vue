<template>
  <div class="card text-secondary bg-white">
  <div class="card-title">
    Won Auctions
  </div>
  <div class="card-content ">
    <div class="row" v-for="auction in wonAuctions">
      <div class="auto text-center">
        <div class="card bg-secondary text-white">
        <big> Auction ID # {{auction.id}} </big>
        <div class="row">
          <div class="auto">
            <small> Info </small>
            <div class="list">
              <div class="row">
                    <div class="width-1of3">
                      Start date: {{auction.startdate}}
                    </div>
                    <div class="width-1of3">
                      <auction-articles :id="auction.id" ></auction-articles>
                    </div>
                    <div class="width-1of3">
                      End date: {{auction.enddate}}
                    </div>
              </div>
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
import auctionArticles from './auctionArticles.vue'
export default {
  components: {
    auctionArticles
  },
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
