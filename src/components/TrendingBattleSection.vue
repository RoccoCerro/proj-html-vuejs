<template>
  <section class="trending-battle">
    <div class="container">
      <!-- Text  -->
      <div class="text-trending-battle">
        <h3>Trending Battle</h3>
        <h1>Keep Eyes & Manage <br> Upcoming Battle</h1>
        <p>liberolivero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. <br> Cas ultricies ligula sed magna dictum porta.</p>
      </div>
      <!-- Row Card -->
      <div class="match">
        <div class="row">
          <div v-for="match in store.meetings" class="col-6">
            <CardTrendingBattle :match="match"/>
          </div>
        </div>
      </div>
      <!-- Button -->
      <div class="button-match">
        <div class="button">
          <button>VIEW ALL MATCH >></button>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  import CardTrendingBattle from './CardTrendingBattle.vue';
  import {store} from '../store.js';

  export default {
    data(){
      return {
        store
      }
    },

    components:{
      CardTrendingBattle
    }
  }
</script>

<style lang="scss" scoped>
  @use '../styles/partials/styleTrendingBattle.scss';
  @use '../styles/partials/utilities.scss';
</style>