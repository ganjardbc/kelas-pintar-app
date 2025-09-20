const PREFIX_URL_PATH = '/playground'
const PREFIX_URL_NAME = 'playground'

export default [
  {
    path: PREFIX_URL_PATH,
    name: PREFIX_URL_NAME,
    component: () => import('@/views/playground/index.vue'),
    meta: {
      title: 'Home',
      layout: 'landing',
    },
  },
  {
    path: `${PREFIX_URL_PATH}/:id/:slug`,
    name: `${PREFIX_URL_NAME}-detail`,
    component: () => import('@/views/playground/detail.vue'),
    meta: {
      title: 'Playground Detail',
      layout: 'landing',
    },
  },
  {
    path: `${PREFIX_URL_PATH}/edit/:id`,
    name: `${PREFIX_URL_NAME}-edit`,
    component: () => import('@/views/playground/edit.vue'),
    meta: {
      title: 'Edit Playground',
      layout: 'landing',
    },
  },
]
