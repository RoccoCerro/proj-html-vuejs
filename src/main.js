import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faYoutube, faTwitch, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebook, faInstagram, faTwitch, faYoutube)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')