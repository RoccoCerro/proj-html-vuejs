<template>
  <header class="page-header">
    <div class="container">
      <div class="row">
        <div class="col brand">
          <a href="#"><img :src="store.getImagePath(store.brandSrc)" alt="brand"></a>
        </div>
        <div class="col connections">
          <ul class="row">
            <li class="col" v-for="link in store.navBar"><a href="">{{ link.name }}</a></li>
          </ul>
        </div>
        <div class="col cart">
          <div class="row">
            <div class="col">
              <img :src="store.getImagePath(store.iconCartSrc)" alt="Cart">
            </div>
            <div class="col button">
              <button>{{store.buttonHeader.name}}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import {store} from '../store.js'

  export default {
    data(){
      return{
        store
      }
    },

    methods: {
      
    },

    created(){
      console.log("store" , this.store)
      console.log(this.store.iconCartSrc)
    }

  }
</script>

<style lang="scss" scoped>
  @use '../styles/partials/styleHeader.scss' as *;
  @use '../styles/partials/utilities.scss';

</style>