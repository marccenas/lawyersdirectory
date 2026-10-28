<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/auth'
import DashboardOverview from '../../components/common/DashboardOverview.vue'
import {
  Calendar,
  MessageSquare,
  FileText,
  Bookmark,
  Plus,
  ShieldCheck,
  Clock,
  ArrowUpRight,
  Search,
  LogOut,
  User,
  Bell,
  Menu,
  X
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
    id: 101,
    lawyer: 'Atty. Sarah Chen',
    specialty: 'Intellectual Property',
    date: 'Tomorrow, 2:00 PM',
    type: 'Video Consultation',
    status: 'Confirmed'
  },
  {
    id: 102,
    lawyer: 'Atty. David Miller',
    specialty: 'Corporate Law',
    date: 'Nov 3, 2026 - 10:00 AM',
    type: 'In-Person Meeting',
    status: 'Pending Approval'
  }
]

const recentActivity = [
  { id: 1, title: 'Document Notarization Approved', time: '2 hours ago', icon: FileText },
  { id: 2, title: 'New message from Atty. Sarah Chen', time: 'Yesterday', icon: MessageSquare },
  { id: 3, title: 'Appointment booked with Atty. David Miller', time: '3 days ago', icon: Calendar }
]
</script>

<template>
  <div class="min-h-screen bg-slate-100 text-slate-800 font-sans selection:bg-amber-500 selection:text-white flex flex-col">
    
    <!-- Top Dashboard Header -->
    <header class="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <!-- Brand Logo -->
        <RouterLink :to="{ name: 'landing' }" class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-lg bg-amber-600 flex items-center justify-center font-bold text-white text-xl shadow-md">
            L
          </div>
          <div>
            <span class="text-xl font-bold text-white block leading-none">LexConnect</span>
            <span class="text-[10px] text-amber-400 font-semibold tracking-wider uppercase">Client Portal</span>
          </div>
        </RouterLink>

        <!-- Desktop Quick Nav & Auth -->
        <div class="hidden md:flex items-center space-x-6">
          <RouterLink :to="{ name: 'lawyers' }" class="text-xs font-bold text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1.5">
            <Search class="w-4 h-4" />
            <span>Find Lawyers</span>
          </RouterLink>

          <div class="h-5 w-px bg-slate-800"></div>

          <div class="flex items-center space-x-3">
            <button aria-label="Notifications" class="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors relative">
              <Bell class="w-5 h-5" />
              <span class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-500"></span>
            </button>

            <div class="flex items-center gap-2 pl-2">
              <div class="w-8 h-8 rounded-full bg-amber-600/20 border border-amber-500/40 text-amber-400 flex items-center justify-center font-bold text-xs">
                <User class="w-4 h-4" />
              </div>
              <span class="text-xs font-semibold text-slate-200">Client Workspace</span>
            </div>

            <button
              @click="handleLogout"
              title="Log Out"
              class="p-2 text-xs font-bold text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1"
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

      <!-- Mobile Dropdown -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
        <RouterLink :to="{ name: 'lawyers' }" @click="mobileMenuOpen = false" class="block text-xs font-bold text-slate-300 py-2 border-b border-slate-800">
          Find Lawyers & Services
        </RouterLink>
        <button @click="handleLogout" class="w-full text-left text-xs font-bold text-red-400 py-2">
          Log Out
        </button>
      </div>
    </header>

    <!-- Main Workspace Area -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full space-y-8">
      
      <!-- Reusable Dashboard Component Section -->
      <section class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <DashboardOverview
          title="Your Legal Services Dashboard"
          description="Manage your upcoming consultations, client conversations, and legal notarization requests."
          :metrics="[
            { label: 'Appointments', value: '2', detail: 'Upcoming bookings' },
            { label: 'Messages', value: '3', detail: 'Unread client messages' },
            { label: 'Documents', value: '4', detail: 'Shared & notarized files' },
            { label: 'Saved Lawyers', value: '5', detail: 'Bookmarked advocates' },
          ]"
        />
      </section>

      <!-- Main Action & Information Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Left Column: Upcoming Consultations -->
        <div class="lg:col-span-8 space-y-6">
          <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div class="flex items-center justify-between mb-6">
              <div>
                <h2 class="text-lg font-extrabold text-slate-900">Upcoming Consultations</h2>
                <p class="text-xs text-slate-500 mt-0.5">Scheduled appointments with verified attorneys.</p>
              </div>
              <RouterLink
                :to="{ name: 'lawyers' }"
                class="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800"
              >
                <Plus class="w-4 h-4" />
                <span>Book New</span>
              </RouterLink>
            </div>

            <div class="space-y-4">
              <div
                v-for="apt in upcomingAppointments"
                :key="apt.id"
                class="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-amber-400/60 transition-colors"
              >
                <div class="flex items-start gap-3">
                  <div class="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center shrink-0">
                    <Calendar class="w-5 h-5" />
                  </div>
                  <div>
                    <h3 class="font-bold text-slate-900 text-sm">{{ apt.lawyer }}</h3>
                    <p class="text-xs text-slate-500">{{ apt.specialty }} • {{ apt.type }}</p>
                    <div class="flex items-center gap-2 mt-2 text-xs text-slate-700 font-medium">
                      <Clock class="w-3.5 h-3.5 text-amber-600" />
                      <span>{{ apt.date }}</span>
                    </div>
                  </div>
                </div>

                <div class="flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-200">
                  <span
                    :class="[
                      'text-[10px] font-bold px-2.5 py-1 rounded-full border uppercase tracking-wider',
                      apt.status === 'Confirmed'
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : 'bg-amber-50 text-amber-700 border-amber-200'
                    ]"
                  >
                    {{ apt.status }}
                  </span>
                  <button class="text-xs font-bold text-slate-700 hover:text-slate-900 mt-2 flex items-center gap-1">
                    <span>View Session</span>
                    <ArrowUpRight class="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Quick Actions & Recent Activity -->
        <div class="lg:col-span-4 space-y-6">
          
          <!-- Quick Service Shortcuts -->
          <div class="bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800">
            <h3 class="text-sm font-bold text-white mb-4">Quick Client Services</h3>
            
            <div class="space-y-3">
              <RouterLink
                :to="{ name: 'lawyers' }"
                class="w-full flex items-center justify-between p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 border border-slate-700 transition-colors"
              >
                <span class="flex items-center gap-2.5">
                  <Search class="w-4 h-4 text-amber-400" />
                  Search Attorney Directory
                </span>
                <ArrowUpRight class="w-4 h-4 text-slate-400" />
              </RouterLink>

              <RouterLink
                :to="{ name: 'lawyers' }"
                class="w-full flex items-center justify-between p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 border border-slate-700 transition-colors"
              >
                <span class="flex items-center gap-2.5">
                  <FileText class="w-4 h-4 text-amber-400" />
                  Remote Online Notarization
                </span>
                <ArrowUpRight class="w-4 h-4 text-slate-400" />
              </RouterLink>
            </div>
          </div>

          <!-- Activity Feed -->
          <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 class="text-sm font-extrabold text-slate-900 mb-4">Recent Updates</h3>
            
            <div class="space-y-4">
              <div v-for="act in recentActivity" :key="act.id" class="flex items-start gap-3 text-xs">
                <div class="w-7 h-7 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 mt-0.5">
                  <component :is="act.icon" class="w-3.5 h-3.5 text-slate-700" />
                </div>
                <div>
                  <p class="font-bold text-slate-800 leading-snug">{{ act.title }}</p>
                  <p class="text-[10px] text-slate-400 mt-0.5">{{ act.time }}</p>
                </div>
              </div>
            </div>
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