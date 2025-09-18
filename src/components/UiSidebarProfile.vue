<template>
  <div
    class="relative p-4 rounded-lg bg-gray-50 hover:bg-gray-100 flex gap-4 items-center"
  >
    <Avatar
      :label="personalInfo?.namaPegawai.charAt(0)"
      size="large"
      shape="circle"
    />
    <div class="flex-1 flex flex-col gap-1">
      <div class="text-sm text-gray-900">
        {{ personalInfo?.namaPegawai || '-' }}
      </div>
      <div class="text-xs text-gray-400">
        {{ personalInfo?.namaBagian || '-' }}
      </div>
    </div>
    <Button
      severity="secondary"
      variant="outlined"
      icon="pi pi-power-off"
      size="medium"
      rounded
      @click="handleLogout"
    />
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useRouter } from 'vue-router';
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

import { removeAuth } from '@/helpers/auth.ts';
import { confirmConfig, toastConfig } from "@/helpers/toast.ts";

import { getPersonalInformation } from '@/helpers/auth.ts';

import { PREFIX_ROUTE_PATH as PRP_AUTH } from '@/modules/auth/services/constants.ts';

const router = useRouter();
const confirm = useConfirm();
const toast = useToast();

const personalInfo = computed(() => getPersonalInformation());

const handleLogout = () => {
  confirm.require({
    ...confirmConfig({
      // message: 'Semua data akan disimpan.',
      header: 'Logout dari Akun ini?',
      rejectLabel: 'Batal',
      acceptLabel: 'Ok, Lanjutkan',
      type: 'warn',
    }),
    accept: () => {
      removeAuth();

      toast.add(toastConfig({
        type: 'success',
        title: 'Logout Succesfully',
      }));

      router.push(PRP_AUTH);
    },
  });
}
</script>