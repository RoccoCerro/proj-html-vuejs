<template>
  <section class="hero">
    <div class="hero-content">
      <div class="container">
        <div class="row">
          <div class="col-5 text-hero">
            <h3>Game With Live Streaming</h3>
            <h1>Future Of Esports</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
            <!-- Group button -->
            <div class="row group-button">
              <div class="col button">
                <button>EXPLORE GAMES >></button>
              </div>
              <div class="col play-button">
                <button><img src="../assets/img/play-icon.png" alt=""></button>
              </div>
            </div>
          </div>
          <div class="col-7 img-hero">
            <img src="../assets/img/index-banner-illus.png" alt="">
          </div>
        </div>
  
        <!-- Img Hero in position absolute -->
        <div class="img-hero-absolute">
          <img src="../assets/img/game-controler.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  @use '../styles/partials/styleHero.scss';
  @use '../styles/partials/utilities.scss';

</style>