// src/stores/auth.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export type AppRole = 'admin' | 'client' | 'lawyer' | 'super-admin'

export const useAuthStore = defineStore('auth', () => {
  const role = ref<AppRole>('client')
  const user = ref(null)

  const dashboardRoute = computed(() => {
    switch (role.value) {
      case 'admin':
        return { name: 'admin-dashboard' }
      case 'client':
        return { name: 'client-dashboard' }
      case 'lawyer':
        return { name: 'lawyer-dashboard' }
      case 'super-admin':
        return { name: 'super-admin-dashboard' }
      default:
        return { name: 'landing' }
    }
  })

  function login(email: string, pass: string) {
    if (email && pass) {
      user.value = { email } as any
      return true
    }
    return false
  }

  function enterDemoRole(newRole: AppRole) {
    role.value = newRole
  }

  return {
    role,
    user,
    dashboardRoute,
    login,
    enterDemoRole,
  }
})