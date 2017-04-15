<template>
  <div>
      <div class="row auto large-gutter">
        <!--  Auction card (loop)  -->
        <div class="width-1of3"  v-if="i.closed != 1 && calculateTime(i.enddate,i.id) >= 0" v-for="i in auctions" :key="i.id">
          <div class="card shadow-4 bg-white">
            <div class="card-title"> Auction items: </div>
            <div class="list item-delimiter">
              <q-collapsible v-for="item in i.articles" icon="explore" :label="item.name" :key="item.id">
                <div class="item">
                  <i class="item-primary">info_outline</i>
                  <div class="item-content">
                    {{item.description}}
                  </div>
                </div>
              </q-collapsible>
            </div>
            <div class="card-actions card-no-top-padding">
              <div class="text-lime">
                Ends in:
              </div>
              <div>
                {{msToTime(calculateTime(i.enddate,i.id))}}
              </div>
              <div class="auto"></div>
              <button class="primary clear small"><i class="on-left">attach_money</i> Bid</button>
            </div>

          </div>
        </div>
        <!--  End auction Card  -->
      </div>

    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        articleCategories: [],
        categoryFilter: [],
        auctions: [],
        now: '',
        auctionTimeRemaining: []
      }
    },
    methods: {
      msToTime: function (s) {
        var pad = (n, z = 2) => ('00' + n).slice(-z)
        return pad(s / 3.6e6 | 0) + ' : ' + pad((s % 3.6e6) / 6e4 | 0) + ' : ' + pad((s % 6e4) / 1000 | 0) + ''// + '.' + pad(s % 1000, 3)
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
      auction: function (id) {
        this.$router.push({
          name: 'auction',
          params: {
            id: id
          }
        })
      },
      auctionEnd: function (time) {
        return this.calculateTime(time) < 0
      }
    },
    computed: {
    },
    created () {
      axios.get('http://auctionator.local/api/auctions').then((response) => {
        this.auctions = response.data
      })
        .catch(function (error) {
          console.log(error)
        })
      axios.get('http://auctionator.local/api/categories').then((response) => {
        this.articleCategories = response.data
        this.categoryFilter = this.articleCategories.map(a => a.id)
      })
        .catch(function (error) {
          console.log(error)
        })
    },
    mounted () {
      window.setInterval(() => {
        this.now = new Date()
      }, 1000)
    }
  }
</script>
