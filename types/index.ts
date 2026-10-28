import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router'

import PublicLayout from '../layouts/PublicLayout.vue'
import AuthLayout from '../layouts/AuthLayout.vue'
import DashboardLayout from '../layouts/DashboardLayout.vue'

import LandingPage from '../views/public/LandingPage.vue'
import LawyersPage from '../views/public/LawyersPage.vue'
import LawyerProfilePage from '../views/public/LawyerProfilePage.vue'

import LoginPage from '../views/auth/LoginPage.vue'
import RegisterPage from '../views/auth/RegisterPage.vue'
import ForgotPasswordPage from '../views/auth/ForgotPasswordPage.vue'

import ClientDashboard from '../views/client/DashboardPage.vue'
import LawyerDashboard from '../views/lawyer/DashboardPage.vue'
import AdminDashboard from '../views/admin/DashboardPage.vue'
import SuperAdminDashboard from '../views/super-admin/DashboardPage.vue'

import { useAuthStore } from '../stores/auth'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: PublicLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: LandingPage,
      },
      {
        path: 'lawyers',
        name: 'lawyers.index',
        component: LawyersPage,
      },
      {
        path: 'lawyers/:slug',
        name: 'lawyers.show',
        component: LawyerProfilePage,
      },
    ],
  },
  {
    path: '/',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        name: 'login',
        component: LoginPage,
        meta: { guestOnly: true },
      },
      {
        path: 'register',
        name: 'register',
        component: RegisterPage,
        meta: { guestOnly: true },
      },
      {
        path: 'forgot-password',
        name: 'forgot-password',
        component: ForgotPasswordPage,
        meta: { guestOnly: true },
      },
    ],
  },
  {
    path: '/client',
    component: DashboardLayout,
    meta: { requiresAuth: true, roles: ['client'] },
    children: [
      {
        path: 'dashboard',
        name: 'client.dashboard',
        component: ClientDashboard,
      },
    ],
  },
  {
    path: '/lawyer',
    component: DashboardLayout,
    meta: { requiresAuth: true, roles: ['lawyer'] },
    children: [
      {
        path: 'dashboard',
        name: 'lawyer.dashboard',
        component: LawyerDashboard,
      },
    ],
  },
  {
    path: '/admin',
    component: DashboardLayout,
    meta: { requiresAuth: true, roles: ['admin'] },
    children: [
      {
        path: 'dashboard',
        name: 'admin.dashboard',
        component: AdminDashboard,
      },
    ],
  },
  {
    path: '/super-admin',
    component: DashboardLayout,
    meta: {
      requiresAuth: true,
      roles: ['super_admin'],
    },
    children: [
      {
        path: 'dashboard',
        name: 'super-admin.dashboard',
        component: SuperAdminDashboard,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.beforeEach((to) => {
  const auth = useAuthStore()

  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return {
      name: 'login',
      query: { redirect: to.fullPath },
    }
  }

  if (to.meta.guestOnly && auth.isAuthenticated) {
    return { name: auth.dashboardRoute }
  }

  const requiredRoles = to.meta.roles as string[] | undefined

  if (
    requiredRoles &&
    !requiredRoles.some((role) => auth.roles.includes(role))
  ) {
    return auth.isAuthenticated
      ? { name: auth.dashboardRoute }
      : { name: 'login' }
  }

  return true
})

export default router