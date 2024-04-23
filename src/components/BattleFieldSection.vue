<template>
  <section class="battle-field">
    <div class="container">
      <div class="row content">
        <!-- col text section battle field -->
        <div class="col-6 text-battle-field">
          <h3>The Ultimate Competitive Gaming Platfrom</h3>
          <h1>Make Your Mark On The Battle Field</h1>
          <p>livero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cas ultricies ligula sed magna dictum porta.</p>
          <!-- lista card  -->
          <ul class="row column">
            <li class="col">
              <div class="row content-card">
                <div class="col icon-card">
                  <img src="../assets/img/features-icon-1.png" alt="">
                </div>
                <div class="col text-card">
                  <h2>Live straming</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam at quibusdam dignissimos illo eligendi. </p>
                </div>
              </div>
            </li>
            <li class="col">
              <div class="row content-card">
                <div class="col icon-card">
                  <img src="../assets/img/features-icon-2.png" alt="">
                </div>
                <div class="col text-card">
                  <h2>Great Tournament</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam at quibusdam dignissimos illo eligendi. </p>
                </div>
              </div>
            </li>
            <li class="col">
              <div class="row content-card">
                <div class="col icon-card">
                  <img src="../assets/img/features-icon-3.png" alt="">
                </div>
                <div class="col text-card">
                  <h2>Gaming News</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam at quibusdam dignissimos illo eligendi. </p>
                </div>
              </div>
            </li>
          </ul>
          <div class="col button">
            <button>PLAY NOW >></button>
          </div>
        </div>
        <!-- col Image section battle field  -->
        <div class="col-6 img-battle-field">
          <img src="../assets/img/features-illus.png" alt="">
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
  @use '../styles/partials/styleBattleField.scss';
  @use '../styles/partials/utilities.scss';
</style>