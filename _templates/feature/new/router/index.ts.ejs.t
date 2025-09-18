---
to: "src/router/modules/<%=h.changeCase.param(name)%>.ts"
---
const PREFIX_URL_PATH = '/<%= h.changeCase.param(name) %>'
const PREFIX_URL_NAME = '<%= h.changeCase.param(name) %>'

export default [
  {
    path: PREFIX_URL_PATH,
    name: PREFIX_URL_NAME,
    component: () => import('@/views/<%=h.changeCase.param(name)%>/index.vue'),
    meta: {
      title: '<%=h.changeCase.title(name)%>',
      layout: 'default',
    },
  },
]
