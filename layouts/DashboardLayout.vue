<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import {
  CalendarDays,
  FileText,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  Scale,
  Settings,
  ShieldCheck,
  Users,
  X,
} from 'lucide-vue-next'
import { useAuthStore } from '../stores/auth'

const auth = useAuthStore()
const route = useRoute()
const mobileOpen = ref(false)

const navigation = computed(() => {
  const role = auth.roles[0]

  if (role === 'client') {
    return [
      { label: 'Overview', to: '/client/dashboard', icon: LayoutDashboard },
      { label: 'Appointments', to: '/client/appointments', icon: CalendarDays },
      { label: 'Messages', to: '/client/messages', icon: MessageSquare },
      { label: 'Documents', to: '/client/documents', icon: FileText },
    ]
  }

  if (role === 'lawyer') {
    return [
      { label: 'Overview', to: '/lawyer/dashboard', icon: LayoutDashboard },
      { label: 'Appointments', to: '/lawyer/appointments', icon: CalendarDays },
      { label: 'Clients', to: '/lawyer/clients', icon: Users },
      { label: 'Documents', to: '/lawyer/documents', icon: FileText },
    ]
  }

  return [
    { label: 'Overview', to: `/${role === 'super_admin' ? 'super-admin' : 'admin'}/dashboard`, icon: LayoutDashboard },
    { label: 'Lawyers', to: '/admin/lawyers', icon: Scale },
    { label: 'Verification', to: '/admin/lawyer-verifications', icon: ShieldCheck },
    { label: 'Users', to: '/admin/users', icon: Users },
    ...(role === 'super_admin'
      ? [{ label: 'Settings', to: '/admin/system-settings', icon: Settings }]
      : []),
  ]
})
</script>

<template>
  <div class="min-h-screen bg-page">
    <header class="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-white px-4 sm:px-6">
      <div class="flex items-center gap-3">
        <button
          type="button"
          class="rounded-lg p-2 lg:hidden"
          aria-label="Toggle dashboard navigation"
          :aria-expanded="mobileOpen"
          @click="mobileOpen = !mobileOpen"
        >
          <X v-if="mobileOpen" class="h-5 w-5" />
          <Menu v-else class="h-5 w-5" />
        </button>

        <RouterLink to="/" class="flex items-center gap-2 font-bold text-brand-950">
          <Scale class="h-6 w-6 text-brand-500" />
          LexConnect
        </RouterLink>
      </div>

      <div class="flex items-center gap-3">
        <span class="hidden text-sm text-muted sm:inline">
          {{ auth.user?.name }}
        </span>
        <button
          type="button"
          class="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm"
          @click="auth.logout()"
        >
          <LogOut class="h-4 w-4" />
          <span class="hidden sm:inline">Log out</span>
        </button>
      </div>
    </header>

    <div class="relative flex min-h-[calc(100vh-4rem)]">
      <button
        v-if="mobileOpen"
        type="button"
        aria-label="Close navigation"
        class="fixed inset-16 z-30 bg-black/30 lg:hidden"
        @click="mobileOpen = false"
      />

      <aside
        :class="[
          'fixed bottom-0 left-0 top-16 z-40 w-64 border-r border-border bg-white p-4 transition-transform lg:static lg:translate-x-0',
          mobileOpen ? 'translate-x-0' : '-translate-x-full',
        ]"
      >
        <p class="px-3 py-3 text-xs font-semibold uppercase tracking-wider text-muted">
          Workspace
        </p>

        <nav class="space-y-1">
          <RouterLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            class="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition"
            :class="route.path === item.to
              ? 'bg-slate-100 text-brand-950'
              : 'text-slate-600 hover:bg-page hover:text-brand-950'"
            @click="mobileOpen = false"
          >
            <component :is="item.icon" class="h-5 w-5 shrink-0" />
            {{ item.label }}
          </RouterLink>
        </nav>
      </aside>

      <main class="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
        <div class="mx-auto max-w-7xl">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>