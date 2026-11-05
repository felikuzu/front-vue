import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { title: 'Beranda' },
    },
    {
      path: '/tentang',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { title: 'Tentang' },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
      meta: { title: 'Halaman Tidak Ditemukan' },
    },
  ],
})

router.afterEach((to) => {
  const appName = import.meta.env.VITE_APP_NAME || 'Vue Starter'
  document.title = `${to.meta.title || 'Website'} — ${appName}`
})

export default router
