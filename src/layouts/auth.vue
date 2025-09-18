<template>
  <div class="auth-layout">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style>
@reference "tailwindcss";

.auth-layout {
  @apply w-full h-screen flex flex-col justify-center items-center bg-gray-100;
}
</style>
