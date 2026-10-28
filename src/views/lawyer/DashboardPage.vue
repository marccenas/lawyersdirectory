<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/auth'
import DashboardOverview from '../../components/common/DashboardOverview.vue'
import {
  FileCheck,
  CheckCircle2,
  Clock,
  MessageSquare,
  Video,
  LogOut,
  User,
  Bell,
  Menu,
  X,
  ShieldCheck,
} from 'lucide-vue-next'

const auth = useAuthStore()
const router = useRouter()
const mobileMenuOpen = ref(false)

function handleLogout() {
  auth.user = null
  router.push({ name: 'landing' })
}

const upcomingAppointments = [
  {
    id: 1,
    client: 'Maria Santos',
    matter: 'IP Registration & Licensing',
    time: 'Today, 3:30 PM',
    type: 'Video Consultation',
    status: 'Confirmed'
  },
  {
    id: 2,
    client: 'Juan Dela Cruz',
    matter: 'Corporate Contract Review',
    time: 'Tomorrow, 10:00 AM',
    type: 'In-Person Meeting',
    status: 'Confirmed'
  }
]

const pendingRequests = [
  {
    id: 201,
    client: 'Elena Rostova',
    service: 'Remote Document Notarization',
    submitted: '1 hour ago'
  },
  {
    id: 202,
    client: 'Apex Global Corp.',
    service: 'Initial Legal Consultation',
    submitted: '3 hours ago'
  }
]
</script>

<template>
  <div class="min-h-screen bg-slate-100 text-slate-800 font-sans selection:bg-amber-500 selection:text-white flex flex-col">
    
    <!-- Top Workspace Header -->
    <header class="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <!-- Logo & Role Badge -->
        <RouterLink :to="{ name: 'landing' }" class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-lg bg-amber-600 flex items-center justify-center font-bold text-white text-xl shadow-md">
            L
          </div>
          <div>
            <span class="text-xl font-bold text-white block leading-none">LexConnect</span>
            <span class="text-[10px] text-amber-400 font-semibold tracking-wider uppercase">Attorney Workspace</span>
          </div>
        </RouterLink>

        <!-- Desktop Quick Nav & Auth -->
        <div class="hidden md:flex items-center space-x-6">
          <div class="flex items-center space-x-3">
            <button aria-label="Notifications" class="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors relative">
              <Bell class="w-5 h-5" />
              <span class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-500"></span>
            </button>

            <div class="flex items-center gap-2 pl-2">
              <div class="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                <User class="w-4 h-4" />
              </div>
              <div>
                <span class="text-xs font-bold text-slate-200 block leading-tight">Atty. Practice Account</span>
                <span class="text-[10px] text-slate-400 flex items-center gap-1">
                  <ShieldCheck class="w-3 h-3 text-amber-400" /> Verified Advocate
                </span>
              </div>
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

        <!-- Mobile Menu Button -->
        <div class="flex md:hidden items-center">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="p-2 rounded-lg text-slate-300 hover:bg-slate-800">
            <component :is="mobileMenuOpen ? X : Menu" class="w-6 h-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
        <button @click="handleLogout" class="w-full text-left text-xs font-bold text-red-400 py-2">
          Log Out
        </button>
      </div>
    </header>

    <!-- Main Content Grid -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full space-y-8">
      
      <!-- Reusable Dashboard Component Section -->
      <section class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <DashboardOverview
          title="Lawyer Workspace"
          description="Manage your practice profile, appointments and client service activity."
          :metrics="[
            { label: 'Appointments', value: '8', detail: 'Upcoming consultations' },
            { label: 'Client Requests', value: '5', detail: 'Pending review' },
            { label: 'Documents', value: '12', detail: 'Active notarizations' },
            { label: 'Profile Views', value: '146', detail: 'This month' },
          ]"
        />
      </section>

      <!-- Practice Management Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Left Column: Upcoming Consultations -->
        <div class="lg:col-span-8 space-y-6">
          <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div class="flex items-center justify-between mb-6">
              <div>
                <h2 class="text-lg font-extrabold text-slate-900">Today & Upcoming Consultations</h2>
                <p class="text-xs text-slate-500 mt-0.5">Manage your client appointments and virtual video links.</p>
              </div>
              <span class="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                8 Scheduled
              </span>
            </div>

            <div class="space-y-4">
              <div
                v-for="apt in upcomingAppointments"
                :key="apt.id"
                class="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-amber-400/60 transition-colors"
              >
                <div class="flex items-start gap-3">
                  <div class="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center shrink-0">
                    <Video class="w-5 h-5" />
                  </div>
                  <div>
                    <h3 class="font-bold text-slate-900 text-sm">{{ apt.client }}</h3>
                    <p class="text-xs text-slate-500">{{ apt.matter }} • {{ apt.type }}</p>
                    <div class="flex items-center gap-2 mt-2 text-xs text-slate-700 font-medium">
                      <Clock class="w-3.5 h-3.5 text-amber-600" />
                      <span>{{ apt.time }}</span>
                    </div>
                  </div>
                </div>

                <div class="flex items-center gap-2 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-200">
                  <button class="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5">
                    <Video class="w-3.5 h-3.5 text-amber-400" />
                    <span>Launch Room</span>
                  </button>
                  <button class="p-2 border border-slate-200 rounded-lg hover:bg-slate-100 text-slate-600">
                    <MessageSquare class="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Pending Client Requests -->
        <div class="lg:col-span-4 space-y-6">
          
          <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-extrabold text-slate-900">Pending Client Requests</h3>
              <span class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">5 Pending</span>
            </div>

            <div class="space-y-3">
              <div
                v-for="req in pendingRequests"
                :key="req.id"
                class="p-3.5 rounded-xl border border-slate-200 bg-slate-50"
              >
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-bold text-xs text-slate-900">{{ req.client }}</h4>
                    <p class="text-[11px] text-slate-500 mt-0.5">{{ req.service }}</p>
                  </div>
                  <span class="text-[10px] text-slate-400">{{ req.submitted }}</span>
                </div>

                <div class="flex items-center gap-2 mt-3 pt-2 border-t border-slate-200">
                  <button class="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-bold text-[11px] py-1.5 rounded-lg transition-colors flex items-center justify-center gap-1">
                    <CheckCircle2 class="w-3.5 h-3.5" />
                    <span>Accept</span>
                  </button>
                  <button class="px-2.5 py-1.5 border border-slate-200 hover:bg-slate-100 text-slate-600 font-bold text-[11px] rounded-lg transition-colors">
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Action Banner -->
          <div class="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-xl">
            <h3 class="text-sm font-bold text-white mb-2">Remote Notarization Tools</h3>
            <p class="text-xs text-slate-400 mb-4 leading-relaxed">
              Verify legal documents, apply digital stamps, and issue e-notary certificates.
            </p>
            <button class="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5">
              <FileCheck class="w-4 h-4" />
              <span>Open Notary Portal</span>
            </button>
          </div>

        </div>

      </div>

    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500 mt-auto">
      <div class="max-w-7xl mx-auto px-4">
        &copy; 2026 LexConnect. All rights reserved.
      </div>
    </footer>

  </div>
</template>