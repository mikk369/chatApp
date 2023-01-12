import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/signup',
    name: 'SignUp',
    // route level code-splitting
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/SignUpView.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/chatapp',
    name: 'ChatApp',
    component: () => import('../components/ChatApp.vue'),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!localStorage.getItem('pocketbase_auth')) {
      next({
        path: '/',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
