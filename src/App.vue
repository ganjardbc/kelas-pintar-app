<template>
  <UiToast />
  <UiConfirmDialog />

  <component :is="generateLayout">
    <RouterView />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import UiToast from '@/components/UiToast.vue'
import UiConfirmDialog from '@/components/UiConfirmDialog.vue'

import AuthLayout from '@/layouts/auth.vue'
import LandingLayout from '@/layouts/landing.vue'
import EmptyLayout from '@/layouts/empty.vue'
import DefaultLayout from '@/layouts/default.vue'

const route = useRoute()

const metaStyle = computed(() => {
  return route.meta.layout || ''
})

const generateLayout = computed(() => {
  switch (metaStyle.value) {
    case 'default':
      return DefaultLayout
    case 'auth':
      return AuthLayout
    case 'landing':
      return LandingLayout
    default:
      return EmptyLayout
  }
})
</script>

<style>
@reference '@/assets/main.css';
</style>
