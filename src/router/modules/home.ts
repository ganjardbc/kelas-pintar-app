const PREFIX_URL_PATH = '/'
const PREFIX_URL_NAME = 'home'

export default [
  {
    path: PREFIX_URL_PATH,
    name: PREFIX_URL_NAME,
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: 'Home',
      layout: 'landing',
    },
  },
]
