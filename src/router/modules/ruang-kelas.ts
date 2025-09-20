const PREFIX_URL_PATH = '/ruang-kelas'
const PREFIX_URL_NAME = 'ruang-kelas'

export default [
  {
    path: PREFIX_URL_PATH,
    name: PREFIX_URL_NAME,
    component: () => import('@/views/ruang-kelas/index.vue'),
    meta: {
      title: 'Ruang Kelas',
      layout: 'default',
    },
  },
]
