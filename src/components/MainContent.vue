<template>
  <main>
    <HeroSection />
    <BattleFieldSection />
    <TrendingBattleSection />
    <FutioSection />
  </main>
</template>

<script>
  import HeroSection from './HeroSection.vue';
  import BattleFieldSection from './BattleFieldSection.vue';
  import TrendingBattleSection from './TrendingBattleSection.vue';
  import FutioSection from './FutioSection.vue';

  export default {
    components: {
      HeroSection,
      BattleFieldSection,
      TrendingBattleSection,
      FutioSection
    }
  }
</script>

<style lang="scss" scoped>
  
</style>