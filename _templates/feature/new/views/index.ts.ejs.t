---
to: "src/views/<%=h.changeCase.param(name)%>/index.vue"
---
<template>
  <div>
    <h2><%= name %> Page</h2>
    <div>
      <i class="pi pi-comments"></i>
      Store Message: {{ message }}
    </div>
  </div>
</template>

<script setup lang="ts">
// ...existing code...
import { use<%=h.changeCase.pascal(name)%>Store } from '@/stores/<%=h.changeCase.param(name)%>'
import { storeToRefs } from 'pinia'

const store = use<%=h.changeCase.pascal(name)%>Store()
const { message } = storeToRefs(store)
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
