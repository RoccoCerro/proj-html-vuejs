<template>
  <header class="page-header">
    <div class="container">
      <div class="row header">
        <div class="col brand">
          <a href=""><img :src="store.getImagePath(store.navBar[0].imgSrc)" alt="brand"></a>
        </div>
        <div class="col">
          <ul class="row connections">
            <li class="col">Home</li>
            <li class="col">Game</li>
            <li class="col">trama</li>
            <li class="col">Pun</li>
          </ul>
        </div>
        <div class="col cart">
          <a href="#">carrello</a>
          <button>LIVE STREAMING</button>
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
      console.log(this.store.navBar[0].imgSrc)
    }

  }
</script>

<style lang="scss" scoped>
  @use '../styles/partials/styleHeader.scss' as *;

</style>