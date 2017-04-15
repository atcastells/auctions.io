<template>
  <div>
    {{auctionObj}}
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        auctionObj: ''
      }
    },
    created () {
      var id = this.$route.params['id']
      axios.get('http://auctionator.local/api/auctions/' + id + '/articles').then((response) => {
        this.auctionObj = response.data
      })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
</script>

<style>
</style>
