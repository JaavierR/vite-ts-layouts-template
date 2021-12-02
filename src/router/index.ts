import { createRouter, createWebHistory, Router } from 'vue-router'

import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'

const routes = setupLayouts(generatedRoutes)

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
