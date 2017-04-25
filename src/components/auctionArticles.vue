<template>
<div class="list">
  <div class="item text-center" v-for="article in articles">
    {{article.name}}
  </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      articles: ''
    }
  },
  methods: {
    getArticles: function () {
      let id = this.id
      let api = this.$utils.getApiUrl()
      let config = {
        headers: { 'Authorization': 'Bearer ' + this.$auth.getToken() }
      }
      axios.get(api + 'auctions/' + id + '/articles', config).then((response) => {
        this.articles = response.data
        console.log(response.data)
      })
    }
  },
  mounted () {
    this.getArticles()
  },
  props: {
    id: {}
  }
}
</script>
