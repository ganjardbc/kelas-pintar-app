<template>
  <div class="flex flex-col gap-4 p-4 bg-white rounded-lg">
    <h2 class="font-semibold">Title</h2>
    <InputText type="text" v-model="formData.title" placeholder="Enter title" />
    <Textarea v-model="formData.description" rows="5" cols="30" placeholder="Enter description" />

    <div>
      <b>Reactive</b>
      Title: {{ formData.title }} <br />
      Description: {{ formData.description }}
    </div>

    <Button label="Show Form Data" @click="showFormData" />

    <div>
      <b>By Click</b>
      Title: {{ formDataTarget.title }} <br />
      Description: {{ formDataTarget.description }}
    </div>
  </div>

  <!-- <div class="w-full grid grid-cols-3 gap-4 p-4">
    <div
      v-for="value in 3"
      :key="value"
      class="relative w-full h-[300px] bg-white border border-gray-200 rounded-xl flex justify-center items-center"
    >
      <span class="text-gray-900 bg-orange-500"> Playground Index </span>
    </div>
  </div> -->
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const formData = ref({
  title: '',
  description: '',
})

const formDataTarget = ref({
  title: '',
  description: '',
})

const showFormData = () => {
  console.log('Form Data:', formData.value)
  formDataTarget.value = { ...formData.value }
}
</script>

<style scoped></style>
