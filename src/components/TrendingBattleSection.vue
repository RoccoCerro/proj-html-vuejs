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
          <div class="col-6">
            <div class="card">
              <div class="card-player">
                <div class="row">
                  <div class="col">
                    <img src="../assets/img/game-img-1.png" alt="">
                  </div>
                  <div class="col"><img src="../assets/img/verus-icon.png" alt=""></div>
                  <div class="col"><img src="../assets/img/game-img-2.png" alt=""></div>
                </div>
              </div>
              <div class="match-date">
                <h4>Call Of Deauty</h4>
                <div>December 25, 2022 4:00 PM</div>
              </div>
              <div class="row channels">
                <div class="col">
                  <img src="../assets/img/youtube-icon.png" alt="">
                  <span>Youtube</span>
                </div>
                <div class="col">
                  <img src="../assets/img/twitch-icon.png" alt="">
                  <span>Twitch</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card">
              <div class="card-player">

              </div>
              <div class="match-date"></div>
              <div class="channels"></div>
            </div>
          </div>
          <div class="col-6">
            <div class="card">
              <div class="card-player">

              </div>
              <div class="match-date"></div>
              <div class="channels"></div>
            </div>
          </div>
          <div class="col-6">
            <div class="card">
              <div class="card-player">

              </div>
              <div class="match-date"></div>
              <div class="channels"></div>
            </div>
          </div>
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
  @use '../styles/partials/styleTrendingBattle.scss'
</style>