<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import {
  ShieldCheck,
  User,
  Briefcase,
  Mail,
  Lock,
  ArrowRight,
  CheckCircle2,
  Building2,
  Award
} from 'lucide-vue-next'

const router = useRouter()

// Role selection state
const selectedRole = ref<'client' | 'lawyer'>('client')

// Form input state
const fullName = ref('')
const email = ref('')
const password = ref('')
const rollNumber = ref('')
const specialty = ref('')
const acceptTerms = ref(false)

function handleRegister() {
  if (selectedRole.value === 'lawyer') {
    router.push({ name: 'lawyer-dashboard' })
  } else {
    router.push({ name: 'client-dashboard' })
  }
}
</script>

<template>
  <div class="min-h-screen bg-slate-100 text-slate-800 font-sans selection:bg-amber-500 selection:text-white flex flex-col justify-between">
    
    <!-- Top Header -->
    <header class="bg-white border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <RouterLink :to="{ name: 'landing' }" class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-lg bg-amber-600 flex items-center justify-center font-bold text-white text-xl shadow-md">
            L
          </div>
          <div>
            <span class="text-xl font-bold text-slate-900 block leading-none">LexConnect</span>
            <span class="text-[11px] text-slate-500 tracking-wide">Lawyers Directory</span>
          </div>
        </RouterLink>

        <div class="text-xs sm:text-sm font-semibold text-slate-600">
          Already have an account?
          <RouterLink :to="{ name: 'login' }" class="text-amber-700 hover:text-amber-800 font-bold ml-1">
            Log In
          </RouterLink>
        </div>
      </div>
    </header>

    <!-- Main Content Container -->
    <main class="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 flex-1 flex items-center justify-center">
      <div class="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        <!-- Left Side: Value Proposition Banner -->
        <div class="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800 shadow-xl relative overflow-hidden">
          <div class="relative z-10">
            <span class="text-xs font-bold uppercase tracking-widest text-amber-400">Join LexConnect</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-white mt-2 leading-tight">
              Access Trusted Legal Services Nationwide
            </h2>
            <p class="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Connect directly with verified attorneys, schedule online consultations, and access remote e-notarization tools.
            </p>

            <div class="mt-8 space-y-4 text-xs font-medium text-slate-300">
              <div class="flex items-center gap-3">
                <div class="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <ShieldCheck class="w-4 h-4" />
                </div>
                <span>Verified Attorney Profiles</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 class="w-4 h-4" />
                </div>
                <span>Seamless Calendar Booking</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <Award class="w-4 h-4" />
                </div>
                <span>Remote Online Notarization</span>
              </div>
            </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-800 text-[11px] text-slate-400 relative z-10 flex items-center gap-2">
            <Building2 class="w-4 h-4 text-amber-400 shrink-0" />
            <span>Serving individual clients, corporate firms, and bar members.</span>
          </div>
        </div>

        <!-- Right Side: Registration Form -->
        <div class="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
          <div>
            <h1 class="text-xl sm:text-2xl font-extrabold text-slate-900">Create your account</h1>
            <p class="text-xs text-slate-500 mt-1">Select your account type to get started.</p>

            <!-- Role Selector Toggle -->
            <div class="grid grid-cols-2 gap-3 mt-6">
              <button
                type="button"
                @click="selectedRole = 'client'"
                :class="[
                  'flex items-center justify-center gap-2 p-3 rounded-xl border text-xs sm:text-sm font-bold transition-all',
                  selectedRole === 'client'
                    ? 'border-amber-600 bg-amber-50 text-amber-800 shadow-sm'
                    : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                ]"
              >
                <User class="w-4 h-4" />
                <span>I am a Client</span>
              </button>

              <button
                type="button"
                @click="selectedRole = 'lawyer'"
                :class="[
                  'flex items-center justify-center gap-2 p-3 rounded-xl border text-xs sm:text-sm font-bold transition-all',
                  selectedRole === 'lawyer'
                    ? 'border-amber-600 bg-amber-50 text-amber-800 shadow-sm'
                    : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                ]"
              >
                <Briefcase class="w-4 h-4" />
                <span>I am a Lawyer</span>
              </button>
            </div>

            <!-- Registration Form Inputs -->
            <form @submit.prevent="handleRegister" class="mt-6 space-y-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                <div class="relative">
                  <User class="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    v-model="fullName"
                    type="text"
                    required
                    placeholder="e.g. Maria Santos"
                    class="w-full bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm pl-9 pr-3 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                <div class="relative">
                  <Mail class="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    v-model="email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    class="w-full bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm pl-9 pr-3 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Password</label>
                <div class="relative">
                  <Lock class="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    v-model="password"
                    type="password"
                    required
                    placeholder="••••••••"
                    class="w-full bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm pl-9 pr-3 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <!-- Lawyer Fields -->
              <div v-if="selectedRole === 'lawyer'" class="space-y-4 pt-2 border-t border-slate-100">
                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">Roll of Attorneys No.</label>
                  <input
                    v-model="rollNumber"
                    type="text"
                    required
                    placeholder="e.g. 12345"
                    class="w-full bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm px-3 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">Primary Practice Area</label>
                  <select
                    v-model="specialty"
                    required
                    class="w-full bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm px-3 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="" disabled>Select primary practice area</option>
                    <option value="corporate">Corporate & Business Law</option>
                    <option value="family">Family Law</option>
                    <option value="civil">Civil Litigation</option>
                    <option value="realestate">Real Estate & Property Law</option>
                    <option value="criminal">Criminal Defense</option>
                  </select>
                </div>
              </div>

              <div class="flex items-start gap-2 pt-2">
                <input
                  v-model="acceptTerms"
                  id="terms"
                  type="checkbox"
                  required
                  class="mt-0.5 rounded border-slate-300 text-amber-600 focus:ring-amber-500"
                />
                <label for="terms" class="text-xs text-slate-500 leading-tight">
                  I agree to the <a href="#" class="text-amber-700 underline">Terms of Service</a> and <a href="#" class="text-amber-700 underline">Privacy Policy</a>.
                </label>
              </div>

              <button
                type="submit"
                class="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm py-3 rounded-lg shadow-sm flex items-center justify-center gap-2 transition-colors mt-4"
              >
                <span>Complete Registration</span>
                <ArrowRight class="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
      <div class="max-w-7xl mx-auto px-4">
        &copy; 2026 LexConnect. All rights reserved.
      </div>
    </footer>

  </div>
</template>