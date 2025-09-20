<template>
  <div>
    <h1 class="text-4xl">Edit Playground : {{ paramsId }}</h1>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const paramsId = computed(() => route.params.id)
</script>
