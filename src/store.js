import { reactive } from 'vue'

export const store = reactive({
	navBar:[
    {
      id: 0,
      name: 'logo',
      imgSrc: './assets/img/logo.png',
    },
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
  ]
})