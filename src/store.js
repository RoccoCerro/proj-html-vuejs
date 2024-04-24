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

  meetings: [
    {
      playerSrc1: 'game-img-1.png',
      playerSrc2: 'game-img-2.png',
      game: 'Call Of Deauty',
      date: 'December 25, 2022 4:00 PM'
    },
    {
      playerSrc1: 'game-img-3.png',
      playerSrc2: 'game-img-4.png',
      game: 'Leggendary Battles',
      date: 'December 25, 2022 4:00 PM'
    },
    {
      playerSrc1: 'game-img-5.png',
      playerSrc2: 'game-img-6.png',
      game: 'Nay Corral Gundown',
      date: 'December 25, 2022 4:00 PM'
    },
    {
      playerSrc1: 'game-img-7.png',
      playerSrc2: 'game-img-8.png',
      game: 'League Of Legends',
      date: 'December 25, 2022 4:00 PM'
    }
  ],

  getImagePath: function (img) {
    return new URL(`./assets/img/${img}`, import.meta.url).href
  }

})