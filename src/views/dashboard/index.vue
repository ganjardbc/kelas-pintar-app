<template>
  <div class="w-full flex flex-col gap-4">
    <div class="text-3xl font-semibold text-gray-900">Dashboard</div>
    <div class="w-full grid grid-cols-1 xl:grid-cols-3 gap-4">
      <UiCard class="col-span-1 xl:col-span-2 flex flex-col gap-4 !border-none bg-gradient-primary">
        <div class="flex items-center justify-between">
          <div class="flex-1 flex flex-col">
            <div class="text-md text-gray-200 font-medium">
              {{ listOfAnggaran.title }}
              <span class="text-sm text-gray-100 font-normal mb-1">
                - ({{ listOfAnggaran.date }})
              </span>
            </div>
            <div class="text-2xl text-white font-semibold">
              {{ listOfAnggaran.value }}
            </div>
          </div>
          <UiWrapIcon
            :icon="listOfAnggaran.icon"
            size="48px"
            bgColor="bg-blue-600"
            iconColor="text-gray-100"
          />
        </div>

        <UiPercentage
          :percentage="listOfAnggaran.percentage"
          :current="listOfAnggaran.currentCash"
          :total="listOfAnggaran.totalCash"
          class-percentage="!text-gray-100"
          class-current-total="!text-gray-100"
          class-wrapper-slider="bg-gray-300"
          class-content-slider="bg-blue-700"
        />
      </UiCard>

      <div class="col-span-1 flex gap-4">
        <UiCard
          v-for="(value, i) in listOfInOutAnggaran"
          :key="i"
          class="w-full flex flex-col justify-between gap-4"
        >
          <div class="flex justify-end">
            <UiWrapIcon
              :icon="value.icon"
              size="48px"
              :bg-color="value.bgColorIcon"
              :icon-color="value.colorIcon"
            />
          </div>

          <div class="flex flex-col">
            <div class="text-sm text-gray-500">
              {{ value.title }}
            </div>
            <div class="text-md text-gray-900 font-semibold">
              {{ value.value }}
            </div>
          </div>
        </UiCard>
      </div>
    </div>

    <div class="w-full grid grid-cols-1 xl:grid-cols-3 gap-4">
      <UiCard v-for="(value, i) in listOfAnalytics" :key="i" class="flex flex-col gap-4">
        <div class="flex items-center justify-between">
          <div class="flex-1 flex flex-col">
            <div class="text-sm font-semibold text-gray-900">{{ value.title }}</div>
            <div class="text-md text-gray-500">{{ value.value }}</div>
          </div>
          <UiWrapIcon
            :icon="value.icon"
            size="48px"
            bgColor="bg-gray-100"
            iconColor="text-gray-900"
          />
        </div>

        <UiPercentage
          :percentage="value.percentage"
          :current="value.currentCash"
          :total="value.totalCash"
        />
      </UiCard>
    </div>

    <UiCard>
      <template #header>
        <div class="text-md font-semibold text-gray-900">Statistic Chart</div>
      </template>
      <Chart type="bar" :data="chartData" :options="chartOptions" />
    </UiCard>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import UiPercentage from '@/components/UiPercentage.vue'
import UiCard from '@/components/UiCard.vue'
import UiWrapIcon from '@/components/UiWrapIcon.vue'

const listOfAnggaran = ref({
  title: 'Tahun Ajar',
  value: '500/1000 Materi Tercapai',
  date: '2025/2026',
  icon: 'pi pi-chart-line',
  currentCash: 500,
  totalCash: 1000,
  percentage: 50,
})

const listOfInOutAnggaran = ref([
  {
    title: 'Masuk',
    value: '1500 Siswa',
    icon: 'pi pi-arrow-up',
    colorIcon: 'text-green-500',
    bgColorIcon: 'bg-green-100',
  },
  {
    title: 'Absen',
    value: '330 Siswa',
    icon: 'pi pi-arrow-down',
    colorIcon: 'text-red-500',
    bgColorIcon: 'bg-red-100',
  },
])

const listOfAnalytics = ref([
  {
    title: 'Kelas 10',
    value: '500/1000 Materi Tercapai',
    icon: 'pi pi-book',
    currentCash: 1000,
    totalCash: 1000,
    percentage: 100,
  },
  {
    title: 'Kelas 11',
    value: '500/1000 Materi Tercapai',
    icon: 'pi pi-book',
    currentCash: 500,
    totalCash: 1000,
    percentage: 50,
  },
  {
    title: 'Kelas 12',
    value: '500/1000 Materi Tercapai',
    icon: 'pi pi-book',
    currentCash: 500,
    totalCash: 1000,
    percentage: 5,
  },
])

onMounted(() => {
  chartData.value = setChartData()
  chartOptions.value = setChartOptions()
})

const chartData = ref()
const chartOptions = ref()

const setChartData = () => {
  return {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Materi Tercapai',
        data: [540, 325, 702, 620],
        backgroundColor: [
          'rgba(249, 115, 22, 0.2)',
          'rgba(6, 182, 212, 0.2)',
          'rgb(107, 114, 128, 0.2)',
          'rgba(139, 92, 246 0.2)',
        ],
        borderColor: [
          'rgb(249, 115, 22)',
          'rgb(6, 182, 212)',
          'rgb(107, 114, 128)',
          'rgb(139, 92, 246)',
        ],
        borderWidth: 1,
      },
    ],
  }
}
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement)
  const textColor = documentStyle.getPropertyValue('--p-text-color')
  const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color')
  const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color')

  return {
    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
    },
  }
}
</script>
