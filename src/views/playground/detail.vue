<template>
  <div>
    <h1 class="text-4xl">Playground Detail : {{ paramsId }} : {{ paramsSlug }}</h1>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const paramsId = computed(() => route.params.id)
const paramsSlug = computed(() => route.params.slug)
console.log('Params ID:', paramsId.value)
console.log('Params Slug:', paramsSlug.value)
</script>

<style scoped></style>
