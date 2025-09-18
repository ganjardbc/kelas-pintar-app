const PREFIX_URL_PATH = '/dashboard'
const PREFIX_URL_NAME = 'dashboard'

export default [
  {
    path: PREFIX_URL_PATH,
    name: PREFIX_URL_NAME,
    component: () => import('@/views/dashboard/index.vue'),
    meta: {
      title: 'Dashboard',
      layout: 'default',
    },
  },
]
