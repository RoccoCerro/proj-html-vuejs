<template>
  <HeaderContent />
  <MainContent />
  <FooterContent />
</template>

<script>
  import HeaderContent from './components/HeaderContent.vue';
  import MainContent from './components/MainContent.vue';
  import FooterContent from './components/FooterContent.vue';

  export default {
    components:{ 
      HeaderContent,
      MainContent,
      FooterContent
    }
  }
</script>

<style lang="scss">
  @use './styles/general.scss'

</style>
