<template>
  <div>
    <h2>ruang-kelas Page</h2>
    <div>
      <i class="pi pi-comments"></i>
      Store Message: {{ message }}
    </div>
  </div>
</template>

<script setup lang="ts">
// ...existing code...
import { useRuangKelasStore } from '@/stores/ruang-kelas'
import { storeToRefs } from 'pinia'

const store = useRuangKelasStore()
const { message } = storeToRefs(store)
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
