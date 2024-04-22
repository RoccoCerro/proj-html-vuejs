<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col">
          logo
        </div>
        <div class="col">
          <ul>
            <li>Home</li>
            <li>Game</li>
            <li>Pin</li>
            <li>Pun</li>
          </ul>
        </div>
        <div class="col">
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
    }
  }
</script>

<style lang="scss" scoped>

</style>