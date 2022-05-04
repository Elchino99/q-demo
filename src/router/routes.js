
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'ex1', component: () => import('pages/ExerciceUnPage.vue') },
      { path: 'ex2', component: () => import('pages/ExerciceDeuxPage.vue') },
      { path: 'ex3', component: () => import('pages/ExerciceTroisPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
