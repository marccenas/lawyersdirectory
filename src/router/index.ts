import { createRouter, createWebHistory } from 'vue-router'

// Public Views
import LandingPage from '../views/public/LandingPage.vue'
import LawyersPage from '../views/public/LawyersPage.vue'
import LawyerProfilePage from '../views/public/LawyerProfilePage.vue'
import RegisterPage from '../views/public/RegisterPage.vue'
import ForgotPasswordPage from '../views/public/ForgotPasswordPage.vue'
import NotFoundPage from '../views/public/NotFoundPage.vue'
import LoginPage from '../views/auth/LoginPage.vue'

// Role Dashboards
import AdminDashboard from '../views/admin/DashboardPage.vue'
import ClientDashboard from '../views/client/DashboardPage.vue'
import LawyerDashboard from '../views/lawyer/DashboardPage.vue'
import SuperAdminDashboard from '../views/super-admin/DashboardPage.vue'

const routes = [
  // Public Routes
  { path: '/', name: 'landing', component: LandingPage },
  { path: '/login', name: 'login', component: LoginPage },
  { path: '/lawyers', name: 'lawyers', component: LawyersPage },
  { path: '/lawyer/:id', name: 'lawyer-profile', component: LawyerProfilePage },
  { path: '/register', name: 'register', component: RegisterPage },
  { path: '/forgot-password', name: 'forgot-password', component: ForgotPasswordPage },

  // Role-Specific Dashboards
  { path: '/admin/dashboard', name: 'admin-dashboard', component: AdminDashboard },
  { path: '/client/dashboard', name: 'client-dashboard', component: ClientDashboard },
  { path: '/lawyer/dashboard', name: 'lawyer-dashboard', component: LawyerDashboard },
  { path: '/super-admin/dashboard', name: 'super-admin-dashboard', component: SuperAdminDashboard },

  // 404 / Catch-all Route
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router