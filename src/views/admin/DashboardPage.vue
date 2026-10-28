<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/auth'
import DashboardOverview from '../../components/common/DashboardOverview.vue'
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  LogOut,
  UserCheck,
  Bell,
  Menu,
  X,
  Building2,
  ArrowUpRight,
} from 'lucide-vue-next'

const auth = useAuthStore()
const router = useRouter()
const mobileMenuOpen = ref(false)

function handleLogout() {
  auth.user = null
  router.push({ name: 'landing' })
}

const lawyerApplications = [
  {
    id: 1,
    name: 'Atty. Maria Santos',
    rollNumber: 'Roll No. 78219',
    specialty: 'Corporate & IP Law',
    submitted: 'Today, 9:30 AM',
    status: 'Pending Verification'
  },
  {
    id: 2,
    name: 'Atty. Gabriel Fernandez',
    rollNumber: 'Roll No. 65432',
    specialty: 'Civil Litigation',
    submitted: 'Yesterday',
    status: 'Pending Verification'
  }
]

const flaggedReports = [
  {
    id: 101,
    subject: 'Unfulfilled Consultation Session',
    reporter: 'Client #4082',
    lawyer: 'Atty. J. Smith',
    date: 'Oct 26, 2026'
  },
  {
    id: 102,
    subject: 'Incorrect Roll Number Input',
    reporter: 'Automated Audit',
    lawyer: 'Atty. R. Garcia',
    date: 'Oct 25, 2026'
  }
]
</script>

<template>
  <div class="min-h-screen bg-slate-100 text-slate-800 font-sans selection:bg-amber-500 selection:text-white flex flex-col">
    
    <!-- Top Workspace Header -->
    <header class="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <!-- Logo & Admin Role Badge -->
        <RouterLink :to="{ name: 'landing' }" class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-lg bg-amber-600 flex items-center justify-center font-bold text-white text-xl shadow-md">
            L
          </div>
          <div>
            <span class="text-xl font-bold text-white block leading-none">LexConnect</span>
            <span class="text-[10px] text-amber-400 font-semibold tracking-wider uppercase">Platform Administration</span>
          </div>
        </RouterLink>

        <!-- Desktop Navigation & Auth Actions -->
        <div class="hidden md:flex items-center space-x-6">
          <div class="flex items-center space-x-3">
            <button aria-label="Notifications" class="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors relative">
              <Bell class="w-5 h-5" />
              <span class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-500"></span>
            </button>

            <div class="flex items-center gap-2 pl-2">
              <div class="w-8 h-8 rounded-full bg-amber-600/20 border border-amber-500/40 text-amber-400 flex items-center justify-center font-bold text-xs">
                <ShieldCheck class="w-4 h-4" />
              </div>
              <span class="text-xs font-bold text-slate-200">Admin Control Console</span>
            </div>

            <button
              @click="handleLogout"
              title="Log Out"
              class="p-2 text-xs font-bold text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-lg transition-colors ml-2"
            >
              <LogOut class="w-4 h-4" />
            </button>
          </div>
        </div>

        <!-- Mobile Menu Toggle -->
        <div class="flex md:hidden items-center">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="p-2 rounded-lg text-slate-300 hover:bg-slate-800">
            <component :is="mobileMenuOpen ? X : Menu" class="w-6 h-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu Dropdown -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
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
          title="Administration"
          description="Review platform activity, lawyer applications and operational tasks."
          :metrics="[
            { label: 'Lawyer Applications', value: '12', detail: 'Verification queue' },
            { label: 'Active Users', value: '248', detail: 'Registered platform users' },
            { label: 'Appointments', value: '36', detail: 'Total system bookings' },
            { label: 'Reports', value: '3', detail: 'Items requiring review' },
          ]"
        />
      </section>

      <!-- Operational Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Left Column: Lawyer Verification Applications Queue -->
        <div class="lg:col-span-8 space-y-6">
          <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div class="flex items-center justify-between mb-6">
              <div>
                <h2 class="text-lg font-extrabold text-slate-900">Lawyer Verification Queue</h2>
                <p class="text-xs text-slate-500 mt-0.5">Review and verify bar membership roll numbers for prospective attorneys.</p>
              </div>
              <span class="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                12 Pending
              </span>
            </div>

            <div class="space-y-4">
              <div
                v-for="app in lawyerApplications"
                :key="app.id"
                class="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-amber-400/60 transition-colors"
              >
                <div class="flex items-start gap-3">
                  <div class="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center shrink-0">
                    <UserCheck class="w-5 h-5" />
                  </div>
                  <div>
                    <h3 class="font-bold text-slate-900 text-sm">{{ app.name }}</h3>
                    <p class="text-xs text-slate-500">{{ app.rollNumber }} • {{ app.specialty }}</p>
                    <span class="inline-block mt-2 text-[10px] font-semibold text-slate-400">
                      Submitted {{ app.submitted }}
                    </span>
                  </div>
                </div>

                <div class="flex items-center gap-2 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-200">
                  <button class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1">
                    <CheckCircle2 class="w-3.5 h-3.5" />
                    <span>Approve</span>
                  </button>
                  <button class="bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1">
                    <XCircle class="w-3.5 h-3.5" />
                    <span>Reject</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Flagged Operational Reports -->
        <div class="lg:col-span-4 space-y-6">
          
          <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-extrabold text-slate-900">Flagged Reports</h3>
              <span class="text-[10px] font-bold text-amber-700 uppercase tracking-wider">3 Unresolved</span>
            </div>

            <div class="space-y-3">
              <div
                v-for="rep in flaggedReports"
                :key="rep.id"
                class="p-3.5 rounded-xl border border-slate-200 bg-slate-50"
              >
                <div class="flex items-start gap-2.5">
                  <AlertTriangle class="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 class="font-bold text-xs text-slate-900">{{ rep.subject }}</h4>
                    <p class="text-[11px] text-slate-500 mt-0.5">Lawyer: {{ rep.lawyer }}</p>
                    <p class="text-[10px] text-slate-400 mt-1">Reported by {{ rep.reporter }} • {{ rep.date }}</p>
                  </div>
                </div>

                <div class="mt-3 pt-2 border-t border-slate-200 flex justify-end">
                  <button class="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1">
                    <span>Inspect Issue</span>
                    <ArrowUpRight class="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick System Control Panel -->
          <div class="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-xl">
            <h3 class="text-sm font-bold text-white mb-2">System Controls</h3>
            <p class="text-xs text-slate-400 mb-4 leading-relaxed">
              Manage platform practice categories, fee structures, and remote notarization settings.
            </p>
            <div class="space-y-2">
              <button class="w-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-xs py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2">
                <Building2 class="w-4 h-4 text-amber-400" />
                <span>Practice Areas Management</span>
              </button>
            </div>
          </div>

        </div>

      </div>

    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500 mt-auto">
      <div class="max-w-7xl mx-auto px-4">
        &copy; 2026 LexConnect Admin Console. All rights reserved.
      </div>
    </footer>

  </div>
</template>