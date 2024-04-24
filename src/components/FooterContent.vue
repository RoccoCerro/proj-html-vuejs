<template>
  <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col-3">
          <!-- Img logo -->
          <div class="brand">
            <img :src="store.getImagePath(store.brandSrc)" alt="">
          </div>
          <p>{{ store.social.p }}</p>
          <!-- Icon brand of fontwsome  -->
          <ul class="row icons">
            <li class="col" v-for="icon in store.social.icons">
              <font-awesome-icon :icon="['fab', icon]" class="fab fa icon" />
            </li>
          </ul>
        </div>
        <!-- Quick links, help and follow -->
        <div v-for="list in store.listOfLinks" class="col-2 quick-links">
          <h3>{{ list.name }}</h3>
          <ul>
            <li v-for="link in list.links">
              {{link}}
            </li>
          </ul>
        </div>
        <!-- Contact -->
        <div class="col-2 contact">
          <h3> {{ store.contact.name }} </h3>
          <ul>
            <li>
              <div class="address-name">
                {{ store.contact.address.name }}
              </div>
              <div class="address-street">
                {{ store.contact.address.street }}
              </div>
            </li>
            <li>
              <div class="phone-name">
                {{ store.contact.telephoneNumber.name }}
              </div>
              <div class="phone-number">
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