<template>
  <div class="relative p-6 bg-white rounded-xl shadow-md flex flex-col gap-6">
    <div v-if="$slots.header" class="w-full pb-6 border-b border-gray-200">
      <slot name="header" />
    </div>

    <slot />

    <div v-if="$slots.footer" class="w-full pt-6 border-t border-gray-200">
      <slot name="footer" />
    </div>
  </div>
</template>
