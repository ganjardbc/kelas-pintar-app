import './assets/main.css'

// Vue
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// Router
import { setupRouter } from './router'
const router = setupRouter()
app.use(router)

// Pinia
import { createPinia } from 'pinia'
app.use(createPinia())

// PrimeVue and Theme
import PrimeVue from 'primevue/config'
import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

const customPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: 'var(--primary-50)',
      100: 'var(--primary-100)',
      200: 'var(--primary-200)',
      300: 'var(--primary-300)',
      400: 'var(--primary-400)',
      500: 'var(--primary-500)',
      600: 'var(--primary-600)',
      700: 'var(--primary-700)',
      800: 'var(--primary-800)',
      900: 'var(--primary-900)',
    },
  },
})

app.use(PrimeVue, {
  theme: {
    preset: customPreset,
    options: {
      darkModeSelector: '.my-app-dark',
    },
  },
})

// PrimeVue Services
import ToastService from 'primevue/toastservice'
app.use(ToastService)

import ConfirmationService from 'primevue/confirmationservice'
app.use(ConfirmationService)

// Mount
app.mount('#app')
