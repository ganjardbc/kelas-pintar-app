<template>
  <div class="w-full h-full flex flex-col gap-4 p-4 rounded-lg bg-gray-50 overflow-y-auto">
    <div class="w-full flex flex-col gap-1.5">
      <router-link
        v-for="item in sidebars"
        :key="item?.label"
        :to="item?.route"
      >
        <div
          class="group flex items-center gap-2 rounded-lg px-4 py-3 cursor-pointer transition-all hover:bg-gray-100 hover:text-gray-900"
          :class="{
            'bg-transparent': !isActive(item?.route),
            'text-gray-500': !isActive(item?.route),
            'bg-primary-500 hover:bg-primary-600': isActive(item?.route),
            'text-white hover:text-white': isActive(item?.route),
          }"
        >
          <i class="w-[24px]" :class="item?.icon"></i>
          <span class="text-sm">{{ item?.label }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import { getPermissions, getFeatures } from '@/helpers/auth.ts';

import { PREFIX_ROUTE_PATH as PRP_LANDING } from '@/modules/landing/services/constants.ts';
import { PREFIX_ROUTE_PATH as PRP_BAGIAN } from '@/modules/bagian/services/constants.ts';
import { PREFIX_ROUTE_PATH as PRP_PROGRAM } from '@/modules/program/services/constants.ts';
import { PREFIX_ROUTE_PATH as PRP_ANGGARAN } from '@/modules/anggaran/services/constants.ts';
import { PREFIX_ROUTE_PATH as PRP_RENCANA_ANGGARAN } from '@/modules/rencana-anggaran/services/constants.ts';
import { PREFIX_ROUTE_PATH as PRP_PENGAJUAN_ANGGARAN } from '@/modules/pengajuan-anggaran/services/constants.ts';
import { PREFIX_ROUTE_PATH as PRP_NOTA_DINAS } from '@/modules/nota-dinas/services/constants.ts';
import { PREFIX_ROUTE_PATH as PRP_REPORTS } from '@/modules/laporan/services/constants';

const sidebars = computed(() => [
  {
    icon: 'pi pi-home',
    label: 'Dashboard',
    route: PRP_LANDING,
  },
  {
    icon: 'pi pi-database',
    label: 'Divisi/Bagian',
    route: PRP_BAGIAN,
  },
  {
    icon: 'pi pi-database',
    label: 'Program',
    route: PRP_PROGRAM,
  },
  {
    icon: 'pi pi-users',
    label: 'Anggaran',
    route: PRP_ANGGARAN,
  },
  {
    icon: 'pi pi-users',
    label: 'Rencana Anggaran',
    route: PRP_RENCANA_ANGGARAN,
  },
  {
    icon: 'pi pi-users',
    label: 'Pengajuan Anggaran',
    route: PRP_PENGAJUAN_ANGGARAN,
  },
  {
    icon: 'pi pi-users',
    label: 'Nota Dinas',
    route: PRP_NOTA_DINAS,
  },
  {
    icon: 'pi pi-file',
    label: 'Laporan',
    route: PRP_REPORTS,
  },
]);

const route = useRoute();

const isActive = (path: any) => {
  const routePath = path.split('/')[1];
  const routeName = route.path.split('/')[1];

  return routePath === routeName;
};

const permissions = computed(() => getPermissions());
const features = computed(() => getFeatures());

console.log('permissions', permissions.value ? JSON.parse(permissions.value) : {});
console.log('features', features.value ? JSON.parse(features.value) : []);
</script>