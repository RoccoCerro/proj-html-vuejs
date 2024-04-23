<template>
  <main>
    <HeroSection />
    <BattleFieldSection />
    <TrendingBattleSection />
  </main>
</template>

<script>
  import HeroSection from './HeroSection.vue';
  import BattleFieldSection from './BattleFieldSection.vue';
  import TrendingBattleSection from './TrendingBattleSection.vue';

  export default {
    components: {
      HeroSection,
      BattleFieldSection,
      TrendingBattleSection
    }
  }
</script>

<style lang="scss" scoped>
  
</style>