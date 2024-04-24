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

  footer: [
    {
      name: 'Social',
      p: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam at quibusdam dignissimos illo eligendi.',
      icon1: '',
      icon2: '',
      icon3: '',
      icon4: '',
    },
    {
      name: 'Quick Links',
      link1: 'Games',
      link2: 'Latest Tournament',
      link3: 'Shop',
      link4: 'Blog',
      link5: 'Contact',
    },
    {
      name: 'Help',
      link1: 'Faqs',
      link2: 'Terms & Conditions',
      link3: 'Privacy',
    },
    {
      name: 'Follow Us',
      link1: 'Facebook',
      link2: 'Twitter',
      link3: 'Instagram',
      link4: 'Youtube',
      link5: 'Github',
    },
    {
      name: 'Contact',
      address: {
        
        name: 'Location: ',
        street: '4 Mayfield, Buckden, PE19 5SZ'
      },
      telephoneNumber: {
        name: 'Phone: ',
        number: '(302)555-0107'
      }
    }
  ],

  getImagePath: function (img) {
    return new URL(`./assets/img/${img}`, import.meta.url).href
  }

})