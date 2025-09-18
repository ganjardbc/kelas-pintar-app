<template>
  <div
    class="default-layout"
    :class="{
      'default-layout--collapsed': isMenuCollapsed,
    }"
  >
    <div class="default-layout__left">
      <div class="default-layout__sidebar">
        <div class="default-layout__sidebar-header">
          <Image :src="defaultLogo" alt="Kelas Pintar Logo" width="40" height="40" />
          <Button
            :icon="isMenuCollapsed ? 'pi pi-align-justify' : 'pi pi-align-right'"
            severity="secondary"
            variant="soft"
            size="large"
            aria-label="Logout"
            rounded
            @click="isMenuCollapsed = !isMenuCollapsed"
          />
        </div>

        <nav class="default-layout__sidebar-body">
          <div class="default-layout__sidebar-body__header">
            <div class="text-sm text-gray-500 font-bold">Menu</div>
          </div>

          <RouterLink
            v-for="(menu, index) in listOfMenus"
            :key="index"
            :to="menu.path"
            class="default-layout__sidebar-menu"
            active-class="default-layout__sidebar-menu--active"
          >
            <div class="default-layout__sidebar-menu__icon">
              <i :class="menu.icon"></i>
            </div>

            <span class="default-layout__sidebar-menu__label">
              {{ menu.name }}
            </span>

            <Badge
              v-if="menu.counter > 0"
              severity="danger"
              :value="isMenuCollapsed ? '' : menu.counter"
              class="absolute text-sm"
              :class="{
                'top-3 right-2': !isMenuCollapsed,
                'top-1 right-1': isMenuCollapsed,
              }"
            />
          </RouterLink>
        </nav>

        <div class="default-layout__sidebar-footer">
          <Avatar
            label="A"
            size="medium"
            shape="circle"
            class="default-layout__sidebar-footer__avatar"
          />
          <div class="default-layout__sidebar-footer__info">
            <div class="text-sm font-semibold text-gray-900">Admin</div>
          </div>
          <Button
            severity="secondary"
            variant="soft"
            icon="pi pi-ellipsis-h"
            size="medium"
            rounded
            class="default-layout__sidebar-footer__more"
            aria-label="More Options"
            @click="openMenu"
          />
        </div>

        <Popover ref="op" :dismissable="true" :showCloseIcon="false" appendTo="body">
          <div class="p-2 flex flex-col gap-4 w-[270px] rounded-2xl">
            <div class="flex flex-col gap-1">
              <div class="text-md font-bold">Menu Profil</div>
              <div class="text-xs text-gray-500">
                Atur preferensi, ubah informasi akun, dan lainnya.
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <Button
                label="Settings"
                icon="pi pi-cog"
                severity="secondary"
                variant="soft"
                size="medium"
                fluid
                class="!justify-start !text-sm"
              />
              <Button
                label="Logout"
                icon="pi pi-power-off"
                severity="secondary"
                variant="soft"
                size="medium"
                fluid
                class="!justify-start !text-sm"
              />
            </div>
          </div>
        </Popover>
      </div>
    </div>

    <div class="default-layout__right">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import defaultLogo from '@/assets/logo.svg'

const isMenuCollapsed = ref(false)

const listOfMenus = [
  { icon: 'pi pi-fw pi-home', name: 'Dashboard', path: '/dashboard', counter: 0 },
  { icon: 'pi pi-fw pi-building', name: 'Ruang Kelas', path: '/ruang-kelas', counter: 0 },
  { icon: 'pi pi-fw pi-book', name: 'Mata Pelajaran', path: '/mata-pelajaran', counter: 0 },
  { icon: 'pi pi-fw pi-pencil', name: 'Ujian & Quis', path: '/ujian-quis', counter: 2 },
  { icon: 'pi pi-fw pi-users', name: 'Guru', path: '/guru', counter: 0 },
  { icon: 'pi pi-fw pi-users', name: 'Siswa', path: '/siswa', counter: 0 },
  { icon: 'pi pi-fw pi-calendar', name: 'Jadwal', path: '/jadwal', counter: 1 },
  { icon: 'pi pi-fw pi-calendar', name: 'Absensi', path: '/absensi', counter: 0 },
  { icon: 'pi pi-fw pi-chart-line', name: 'Nilai & Evaluasi', path: '/nilai-evaluasi', counter: 4 },
  { icon: 'pi pi-fw pi-file', name: 'Laporan', path: '/laporan', counter: 0 },
]
const op = ref()
const openMenu = (event: any) => {
  op.value.toggle(event)
}
</script>

<style>
@reference '@/assets/main.css';

.default-layout {
  @apply bg-gray-100 w-full min-h-screen grid grid-cols-[360px__1fr] transition-all duration-300 ease-in-out;
}

.default-layout * {
  @apply transition-all duration-300 ease-in-out;
}

.default-layout__left {
  @apply py-4 pl-4 max-h-screen;
}

.default-layout__right {
  @apply py-4 px-8 max-h-screen overflow-y-auto;
}

.default-layout__sidebar {
  @apply sticky top-0 p-6 flex flex-col gap-4 h-full rounded-xl shadow-xl bg-primary-100;
}

.default-layout__sidebar-header {
  @apply flex justify-between items-center py-4 h-[48px];
}

.default-layout__sidebar-body {
  @apply flex-1 bg-white space-y-1 px-4 pb-4 rounded-xl w-full h-full overflow-y-auto;
}

.default-layout__sidebar-body__header {
  @apply sticky top-0 z-10 pt-3 pb-2 w-full bg-white;
}

.default-layout__sidebar-footer {
  @apply relative p-3 rounded-xl bg-white flex gap-3 items-center flex-nowrap overflow-hidden;
}

.default-layout__sidebar-footer__info {
  @apply flex-1 flex flex-col gap-0.5;
}

.default-layout__sidebar-footer__avatar {
  @apply min-w-[40px] min-h-[40px];
}

.default-layout__sidebar-menu {
  @apply relative flex-1 flex items-center justify-start gap-2 p-4 max-h-[48px] text-gray-500 hover:bg-gray-200 rounded-lg;
}

.default-layout__sidebar-menu__icon {
  @apply w-[26px];
}

.default-layout__sidebar-menu__label {
  @apply flex-1 text-sm overflow-hidden text-ellipsis whitespace-nowrap;
}

.default-layout__sidebar-menu--active {
  @apply !font-bold !text-gray-900 bg-gray-200;
}

/* LAYOUT COLLAPSED */
.default-layout--collapsed {
  @apply grid grid-cols-[145px__1fr];
}

.default-layout--collapsed .default-layout__left {
  @apply w-[145px];
}

.default-layout--collapsed .default-layout__right {
  @apply w-full;
}

.default-layout--collapsed .default-layout__sidebar-header {
  @apply justify-center;
}

.default-layout--collapsed .default-layout__sidebar-header .p-image {
  @apply hidden;
}

.default-layout--collapsed .default-layout__sidebar-body {
  @apply pt-4;
}

.default-layout--collapsed .default-layout__sidebar-body__header {
  @apply hidden;
}

.default-layout--collapsed .default-layout__sidebar-menu__icon {
  @apply flex justify-center w-full;
}

.default-layout--collapsed .default-layout__sidebar-menu__label {
  @apply hidden;
}

.default-layout--collapsed .default-layout__sidebar-footer {
  @apply justify-center;
}

.default-layout--collapsed .default-layout__sidebar-footer__info,
.default-layout--collapsed .default-layout__sidebar-footer__avatar {
  @apply hidden;
}
</style>
