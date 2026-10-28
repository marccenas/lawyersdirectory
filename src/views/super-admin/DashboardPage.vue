<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/auth'
import DashboardOverview from '../../components/common/DashboardOverview.vue'
import {
  ShieldAlert,
  ShieldCheck,
  Activity,
  KeyRound,
  LogOut,
  Bell,
  Menu,
  X,
  Server,
  ArrowUpRight,
  AlertOctagon,
  UserCheck
} from 'lucide-vue-next'

const auth = useAuthStore()
const router = useRouter()
const mobileMenuOpen = ref(false)

function handleLogout() {
  auth.user = null
  router.push({ name: 'landing' })
}

const adminAccounts = [
  {
    id: 1,
    name: 'Eleanor Vance',
    email: 'eleanor.admin@lexconnect.ph',
    role: 'Admin Lead',
    lastActive: '10 mins ago',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Atty. Mark Torres',
    email: 'mark.admin@lexconnect.ph',
    role: 'Compliance Admin',
    lastActive: '2 hours ago',
    status: 'Active'
  }
]

const securityEvents = [
  {
    id: 301,
    event: 'Privileged Role Delegation',
    user: 'Super Admin',
    timestamp: 'Today, 08:45 AM',
    severity: 'Medium'
  },
  {
    id: 302,
    event: 'Multiple Failed Root Login Attempts',
    user: 'IP: 112.198.xxx.xxx',
    timestamp: 'Yesterday, 11:20 PM',
    severity: 'High'
  }
]
</script>

<template>
  <div class="min-h-screen bg-slate-100 text-slate-800 font-sans selection:bg-amber-500 selection:text-white flex flex-col">
    
    <!-- Top Super Admin Header -->
    <header class="bg-slate-950 text-white border-b border-slate-800 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <!-- Logo & Super Admin Role Badge -->
        <RouterLink :to="{ name: 'landing' }" class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center font-bold text-slate-950 text-xl shadow-md">
            L
          </div>
          <div>
            <span class="text-xl font-bold text-white block leading-none">LexConnect</span>
            <span class="text-[10px] text-amber-400 font-semibold tracking-wider uppercase flex items-center gap-1 mt-0.5">
              <ShieldAlert class="w-3 h-3" /> Platform Control Center
            </span>
          </div>
        </RouterLink>

        <!-- Desktop Navigation & Auth Actions -->
        <div class="hidden md:flex items-center space-x-6">
          <div class="flex items-center space-x-3">
            <button aria-label="Security alerts" class="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors relative">
              <Bell class="w-5 h-5" />
              <span class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            </button>

            <div class="flex items-center gap-2 pl-2">
              <div class="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-400 flex items-center justify-center font-bold text-xs">
                <KeyRound class="w-4 h-4" />
              </div>
              <span class="text-xs font-bold text-slate-200">Super Admin Workspace</span>
            </div>

            <button
              @click="handleLogout"
              title="Log Out"
              class="p-2 text-xs font-bold text-slate-400 hover:text-red-400 hover:bg-slate-900 rounded-lg transition-colors ml-2"
            >
              <LogOut class="w-4 h-4" />
            </button>
          </div>
        </div>

        <!-- Mobile Menu Toggle -->
        <div class="flex md:hidden items-center">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="p-2 rounded-lg text-slate-300 hover:bg-slate-900">
            <component :is="mobileMenuOpen ? X : Menu" class="w-6 h-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu Dropdown -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
        <button @click="handleLogout" class="w-full text-left text-xs font-bold text-red-400 py-2">
          Log Out
        </button>
      </div>
    </header>

    <!-- Main Workspace Layout -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full space-y-8">
      
      <!-- Reusable Dashboard Component Section -->
      <section class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <DashboardOverview
          title="Platform Control Center"
          description="Review platform health, access controls and administrative operations."
          :metrics="[
            { label: 'Administrators', value: '3', detail: 'Privileged accounts' },
            { label: 'Security Events', value: '7', detail: 'Events for audit' },
            { label: 'Platform Users', value: '248', detail: 'Active accounts' },
            { label: 'System Alerts', value: '2', detail: 'Operational alerts' },
          ]"
        />
      </section>

      <!-- Super Admin Control Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Left Column: Privileged Administrator Accounts -->
        <div class="lg:col-span-8 space-y-6">
          <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div class="flex items-center justify-between mb-6">
              <div>
                <h2 class="text-lg font-extrabold text-slate-900">Privileged Administrator Accounts</h2>
                <p class="text-xs text-slate-500 mt-0.5">Manage administrative roles, access controls, and active sessions.</p>
              </div>
              <button class="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-3.5 py-2 rounded-lg shadow-sm transition-colors flex items-center gap-1.5">
                <UserCheck class="w-3.5 h-3.5" />
                <span>Grant Admin Access</span>
              </button>
            </div>

            <div class="space-y-4">
              <div
                v-for="admin in adminAccounts"
                :key="admin.id"
                class="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-amber-400/60 transition-colors"
              >
                <div class="flex items-start gap-3">
                  <div class="w-10 h-10 rounded-lg bg-slate-900 text-amber-400 border border-slate-800 flex items-center justify-center shrink-0">
                    <ShieldCheck class="w-5 h-5" />
                  </div>
                  <div>
                    <div class="flex items-center gap-2">
                      <h3 class="font-bold text-slate-900 text-sm">{{ admin.name }}</h3>
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                        {{ admin.role }}
                      </span>
                    </div>
                    <p class="text-xs text-slate-500 mt-0.5">{{ admin.email }}</p>
                    <span class="inline-block mt-1 text-[10px] font-semibold text-slate-400">
                      Last active {{ admin.lastActive }}
                    </span>
                  </div>
                </div>

                <div class="flex items-center gap-2 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-200">
                  <button class="text-xs font-bold text-slate-700 hover:text-slate-900 border border-slate-200 bg-white px-3 py-1.5 rounded-lg">
                    Modify Permissions
                  </button>
                  <button class="text-xs font-bold text-red-600 hover:text-red-700 border border-red-200 bg-red-50 px-3 py-1.5 rounded-lg">
                    Revoke
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Audit Logs & System Health -->
        <div class="lg:col-span-4 space-y-6">
          
          <!-- Recent Security Audit Events -->
          <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-extrabold text-slate-900">Security Audit Events</h3>
              <span class="text-[10px] font-bold text-amber-700 uppercase tracking-wider">7 Logged</span>
            </div>

            <div class="space-y-3">
              <div
                v-for="event in securityEvents"
                :key="event.id"
                class="p-3.5 rounded-xl border border-slate-200 bg-slate-50"
              >
                <div class="flex items-start gap-2.5">
                  <AlertOctagon
                    :class="[
                      'w-4 h-4 shrink-0 mt-0.5',
                      event.severity === 'High' ? 'text-red-600' : 'text-amber-600'
                    ]"
                  />
                  <div>
                    <h4 class="font-bold text-xs text-slate-900">{{ event.event }}</h4>
                    <p class="text-[11px] text-slate-500 mt-0.5">Actor: {{ event.user }}</p>
                    <p class="text-[10px] text-slate-400 mt-1">{{ event.timestamp }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Platform System Health Status -->
          <div class="bg-slate-950 text-white rounded-2xl p-6 border border-slate-800 shadow-xl">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-sm font-bold text-white flex items-center gap-2">
                <Server class="w-4 h-4 text-amber-400" /> System Health
              </h3>
              <span class="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Optimal
              </span>
            </div>

            <p class="text-xs text-slate-400 mb-4 leading-relaxed">
              Database latency, e-notarization cryptographic module, and API gateway routing are fully operational.
            </p>

            <button class="w-full bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-bold text-xs py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5">
              <Activity class="w-4 h-4 text-amber-400" />
              <span>Full System Metrics</span>
              <ArrowUpRight class="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>

        </div>

      </div>

    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500 mt-auto">
      <div class="max-w-7xl mx-auto px-4">
        &copy; 2026 LexConnect Control Center. All rights reserved.
      </div>
    </footer>

  </div>
</template>