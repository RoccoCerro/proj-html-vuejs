<template>
    <div class="card">
      <div class="card-player">
        <div class="row">
        <div class="col">
          <img :src="store.getImagePath(match.playerSrc1)" alt="">
        </div>
        <div class="col"><img src="../assets/img/verus-icon.png" alt=""></div>
        <div class="col"><img :src="store.getImagePath(match.playerSrc2)" alt=""></div>
      </div>
      </div>
      <div class="match-date">
        <h3>{{match.game}}</h3>
        <div>{{match.date}}</div>
      </div>
      <div class="channels">
        <div class="row">
          <img class="col" src="../assets/img/youtube-icon.png" alt="">
          <div class="col">Youtube</div>
          <img class="col" src="../assets/img/twitch-icon.png" alt="">
          <div class="col">Twitch</div>
        </div>
      </div>
    </div>
</template>

<script>
  import {store} from '../store.js';

  export default {
    data(){
      return {
        store
      }
    },

    props:{
      match: Object
    }
  }
</script>

<style lang="scss" scoped>
  @use '../styles/partials/styleCardTrendingBattle.scss'
</style>