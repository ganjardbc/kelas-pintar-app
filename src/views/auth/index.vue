<template>
  <UiCard class="w-[400px]">
    <form class="flex flex-col gap-6" @submit.prevent="handleSubmit">
      <div class="flex justify-center py-4">
        <Image :src="defaultLogo" alt="Kelas Pintar Logo" width="80" height="80" class="mx-auto" />
      </div>

      <UiFormGroup label="Username" variant="vertical">
        <InputText v-model="username" type="username" required />
      </UiFormGroup>

      <UiFormGroup label="Password" variant="vertical">
        <InputText v-model="password" type="password" required />
      </UiFormGroup>

      <Button type="submit" variant="primary" label="Login" class="w-full" />
    </form>

    <template #footer>
      <p class="text-sm text-gray-500 text-center">© 2024 Your Company</p>
    </template>
  </UiCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue/usetoast'

import defaultLogo from '@/assets/logo.svg'

import UiCard from '@/components/UiCard.vue'
import UiFormGroup from '@/components/UiFormGroup.vue'

const toast = useToast()
const router = useRouter()

const username = ref('')
const password = ref('')

function handleSubmit() {
  const dummyUser = {
    username: 'admin',
    password: 'admin',
  }

  if (username.value === dummyUser.username && password.value === dummyUser.password) {
    // Simulate a login process
    toast.add({
      severity: 'success',
      summary: 'Login Successful',
      detail: `Welcome, ${username.value}!`,
      life: 3000,
    })

    router.push({ name: 'dashboard' })
  } else {
    toast.add({
      severity: 'error',
      summary: 'Login Failed',
      detail: 'Invalid username or password.',
      life: 3000,
    })
  }
}
</script>
