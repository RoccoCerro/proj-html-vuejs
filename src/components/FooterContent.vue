<template>
  <footer class="page-footer debug">
    <div class="container">
      <div class="row">
        <div class="col-3">
          <div class="brand">
            <img :src="store.getImagePath(store.brandSrc)" alt="">
          </div>
          <p>{{ store.social.p }}</p>
          <ul class="row">
            <li v-for="icon in store.social.icons">
              <font-awesome-icon :icon="['fab', icon]" class="fab fa" />
            </li>
          </ul>
        </div>
        <div v-for="list in store.listOfLinks" class="col-2">
          <h3>{{ list.name }}</h3>
          <ul>
            <li v-for="link in list.links">
              {{link}}
            </li>
          </ul>
        </div>
        <div class="col-2">

          <h3> {{ store.contact.name }} </h3>
          <ul>
            <li>
              <div>
                {{ store.contact.address.name }}
              </div>
              <div>
                {{ store.contact.address.street }}
              </div>
            </li>
            <li>
              <div>
                {{ store.contact.telephoneNumber.name }}
              </div>
              <div>
                {{ store.contact.telephoneNumber.number }}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import {store} from '../store.js'
  export default {
    data(){
      return {
        store
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use '../styles/partials/styleFooter.scss'
</style>