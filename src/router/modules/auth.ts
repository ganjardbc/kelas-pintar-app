const PREFIX_URL_PATH = '/auth'
const PREFIX_URL_NAME = 'auth'

export default [
  {
    path: PREFIX_URL_PATH,
    name: PREFIX_URL_NAME,
    component: () => import('@/views/auth/index.vue'),
    meta: {
      title: 'Auth',
      layout: 'auth',
    },
  },
]
