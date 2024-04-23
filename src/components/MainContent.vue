<template>
  <main>
    <HeroSection />
    <BattleFieldSection />
  </main>
</template>

<script>
  import HeroSection from './HeroSection.vue'
  import BattleFieldSection from './BattleFieldSection.vue';

  export default {
    components: {
      HeroSection,
      BattleFieldSection
    }
  }
</script>

<style lang="scss" scoped>
  
</style>