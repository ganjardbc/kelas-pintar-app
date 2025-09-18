<template>
  <div class="landing-layout">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style>
@reference '@/assets/main.css';

.landing-layout {
  @apply w-full h-screen flex flex-col justify-center items-center bg-gradient-primary;
}
</style>
