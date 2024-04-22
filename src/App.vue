<template>
  <HeaderContent />
  <MainContent />
</template>

<script>
  import HeaderContent from './components/HeaderContent.vue';
  import MainContent from './components/MainContent.vue';

  export default {
    components:{ 
      HeaderContent,
      MainContent
    }
  }
</script>

<style lang="scss">
  @use './styles/general.scss'

</style>
