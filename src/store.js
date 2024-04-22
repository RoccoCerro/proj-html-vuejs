import { reactive } from 'vue'

export const store = reactive({
  brandSrc: 'logo.png',
  iconCartSrc: 'cart-icon.png',
  buttonHeader: {
    name: "LIVE STREAMING"
  },

	navBar:[
    {
      id: 1,
      name: 'Home',
    },
    {
      id: 2,
      name: 'Games'
    },
    {
      id: 3,
      name: 'Shop'
    },
    {
      id: 4,
      name: 'Pages'
    },
    {
      id: 5,
      name: 'Blog'
    },
    {
      id: 6,
      name: 'Contact'
    },
  ],

  getImagePath: function (img) {
    return new URL(`./assets/img/${img}`, import.meta.url).href
  }

})