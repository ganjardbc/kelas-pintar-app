<template>
  <div class="w-full h-screen flex flex-col justify-center items-center gap-4">
    <div class="flex justify-center py-4">
      <Image :src="defaultLogo" alt="Kelas Pintar Logo" width="80" height="80" class="mx-auto" />
    </div>
    <h1 class="text-5xl font-bold text-center text-primary-100">
      Kelas Pintar
      <span class="font-normal"
        >{{ typedText }}<span class="animate-pulse font-normal text-primary-300">|</span></span
      >
    </h1>
    <p class="text-center text-white text-lg">
      Platform pembelajaran online terbaik untuk semua usia.
    </p>

    <div class="flex justify-center gap-4 pt-4">
      <Button variant="primary" size="lg" class="w-[200px]" as="a" href="/auth">
        Mulai Belajar
      </Button>
      <Button severity="secondary" variant="soft" size="lg" class="w-[200px]">
        Pelajari Lebih Lanjut
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import defaultLogo from '@/assets/logo.svg'

const wordingHeader = ['Berkembang Bersama', 'Belajar Tanpa Batas', 'Wujudkan Impianmu']
const typedText = ref('')
let charIndex = 0
let wordingIndex = 0
let isDeleting = false

function typeAnimation() {
  const currentWord = wordingHeader[wordingIndex]
  if (!isDeleting && charIndex < currentWord.length) {
    typedText.value += currentWord[charIndex]
    charIndex++
    setTimeout(typeAnimation, 80)
  } else if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true
    setTimeout(typeAnimation, 1500)
  } else if (isDeleting && charIndex > 0) {
    typedText.value = currentWord.substring(0, charIndex - 1)
    charIndex--
    setTimeout(typeAnimation, 40)
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    wordingIndex = (wordingIndex + 1) % wordingHeader.length
    setTimeout(typeAnimation, 400)
  }
}

onMounted(() => {
  typeAnimation()
})
</script>

<style></style>
