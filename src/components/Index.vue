<template>
  <q-layout class="bg-grey-14">
    <div slot="header" class="toolbar">
      <div class="toolbar-content">
      <button class="hide-on-drawer-visible" @click="$refs.drawer.toggle()">
        <i>menu</i>
      </button>
      <q-toolbar-title :padding="1">
        {{title}}
      </q-toolbar-title>
      </div>
      <button v-if="isAuth" @click="$refs.userModal.open()">
       Welcome {{email}} <i>account_circle</i>
      </button>
    </div>

    <q-tabs v-if="isAuth" slot="navigation">
      <q-tab icon="home" route="/home" exact replace></q-tab>
    </q-tabs>

    <!--<q-drawer ref="drawer">-->
      <!--<div class="toolbar">-->
        <!--<q-toolbar-title>-->
          <!--Drawer Title-->
        <!--</q-toolbar-title>-->
      <!--</div>-->

      <!--<div class="list no-border platform-delimiter">-->
        <!--<q-drawer-link icon="mail" :to="{path: '/', exact: true}">-->
          <!--Link-->
        <!--</q-drawer-link>-->
      <!--</div>-->
    <!--</q-drawer>-->
    <q-modal v-if="isAuth" ref="userModal" class="maximized" :content-css="{padding: '10px 40px 5px 40px', minWidth: '50vw'}">

      <q-layout>
        <div slot="header" class="toolbar bg-white text-secondary">
          <button @click="$refs.userModal.close()">
            <i>keyboard_arrow_left</i>
          </button>
          <q-toolbar-title :padding="1">
            {{userName}}'s profile
          </q-toolbar-title>
        </div>

        <div class="layout-view  bg-teal">
          <div class="layout-padding large-gutter">
            <div class="flex wrap gutter">
              <div class="width-1of2 ">
                <info-card
                :name = "userName"
                :email = "email"
                :coins = "coins"
                iconName = "info_outline"
                background = "bg-white"
                ></info-card>
              </div>
            </div>

            <div class="text-primary">
              <button class="red" @click="disconnect">Log out</button>
            </div>
          </div>
        </div>
      </q-layout>

    </q-modal>


    <div class="layout-padding  fit">
    <router-view class="layout-view"></router-view>
    </div>

    <q-fab
      class="absolute-bottom-right"
      @click="alert()"
      classNames="primary"
      active-icon="down"
      direction="up"
      style="right: 18px; bottom: 18px;"
    >
      <q-small-fab class="purple" @click.native="disconnect()" icon="exit_to_app"></q-small-fab>
    </q-fab>

    <div slot="footer" class="toolbar"></div>
  </q-layout>
</template>

<script>
  import axios from 'axios'
  import { Toast } from 'quasar'
  import infoCard from './infoCard.vue'
  export default {
    components: {
      infoCard
    },
    data () {
      return {
        userName: '',
        email: '',
        coins: 100,
        password: '',
        avatarUrl: ''
      }
    },
    methods: {
      disconnect: function () {
        this.$auth.destroyToken()
        location.reload()
      },
      setAuthenticatedUser () {
        let config = {
          headers: {'Authorization': 'Bearer ' + this.$auth.getToken()}
        }

        axios.get('https://auctionserver.ml/api/user', config).then((response) => {
          this.$auth.setAuthenticatedUser(response.body)
          this.userName = response.data.name
//          this.coins = response.data.coins
          this.email = response.data.email
          this.avatarUrl = response.data.avatarurl
        })
      },
      notify (msg) {
        Toast.create(msg)
      }
    },
    props: {
      title: {
        type: String,
        default: 'Auctions.io'
      }
    },
    computed: {
      isAuth () {
        return this.$auth.isAuthenticated()
      }
    },
    created () {
      if (this.isAuth) {
        this.setAuthenticatedUser()
        if (this.$route.path === '/') {
          location.reload()
          console.log('asd')
        }
      }
    }
  }
</script>
