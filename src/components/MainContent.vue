<template>
  <main>
    <HeroSection />
    <BattleFieldSection />
    <TrendingBattleSection />
    <FutioSection />
    <LiveStreamingSection />
    <NewsletterSection />
  </main>
</template>

<script>
  import HeroSection from './HeroSection.vue';
  import BattleFieldSection from './BattleFieldSection.vue';
  import TrendingBattleSection from './TrendingBattleSection.vue';
  import FutioSection from './FutioSection.vue';
  import LiveStreamingSection from './LiveStreamingSection.vue';
  import NewsletterSection from './NewsletterSection.vue';

  export default {
    components: {
      HeroSection,
      BattleFieldSection,
      TrendingBattleSection,
      FutioSection,
      LiveStreamingSection,
      NewsletterSection
    }
  }
</script>

<style lang="scss" scoped>
  
</style>