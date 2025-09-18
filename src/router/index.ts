import { createRouter, createWebHistory } from 'vue-router'
import type { Router } from 'vue-router'

const modules = import.meta.glob('./**/*.ts', { eager: true })

const entireModules = Object.entries(modules)
  .map((fileModule: any) => {
    return fileModule[1].default
  })
  .flat()

export function setupRouter(): Router {
  return createRouter({
    history: createWebHistory(),
    routes: entireModules,
  })
}
