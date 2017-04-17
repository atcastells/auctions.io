<template>
  <q-transition name="slide">
  <div class="card text-secondary" :class="background">
    <div class="card-content ">
      <div class="row">
        <div class="width-1of3">
          <i>{{iconName}}</i>
        </div>
        <div class="width-2of3">
          <div class="list">
            <div class="item two-lines">
              <i v-show="!readOnly" class="item-primary">edit</i>
              <div class="item-content">
                <input class="full-width" :readonly = "readOnly" :value="name">
              </div>
            </div>
            <div class="item two-lines">
              <i v-show="!readOnly" class="item-primary">edit</i>
              <div class="item-content">
                 <input class="full-width" :readonly = "readOnly" :value="email">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <div class="text-primary">
            <button class="secondary" @click="edit()">Edit Profile</button>
            <button class="primary" @click="updateUser()">Submit</button>
        </div>
      </div>
    </div>
  </div>
  </q-transition>
</template>

<script type="text/javascript">
  import { Toast } from 'quasar'
  export default {
    props: ['name', 'email', 'coins', 'iconName', 'background', 'apiRoute'],
    data: function () {
      return {
        readOnly: true
      }
    },
    methods: {
      edit: function () {
        if (this.readOnly === true) {
          this.readOnly = false
          Toast.create('Now you can edit the profile')
        }
      },
      updateUser: function () {
        this.readOnly = true
      }
    }
  }
</script>
<style scoped>
  i {
    font-size: 54px;
  }
</style>
