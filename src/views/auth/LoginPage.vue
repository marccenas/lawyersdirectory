<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/auth'
import type { AppRole } from '../../stores/auth'
import {
  Mail,
  Lock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Award,
  Building2,
  AlertCircle
} from 'lucide-vue-next'

const auth = useAuthStore()
const route = useRoute()
const router = useRouter()

const email = ref('client@lexconnect.test')
const password = ref('Demo123!')
const error = ref('')

function submit() {
  error.value = ''

  if (!auth.login(email.value, password.value)) {
    error.value = 'Invalid demo credentials. Please try again.'
    return
  }

  const redirect = route.query.redirect

  if (typeof redirect === 'string' && redirect.startsWith('/')) {
    void router.replace(redirect)
  } else {
    void router.replace(auth.dashboardRoute)
  }
}

function demo(role: AppRole) {
  void auth.enterDemoRole(role)
  void router.replace(auth.dashboardRoute)
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
          New to LexConnect?
          <RouterLink :to="{ name: 'register' }" class="text-amber-700 hover:text-amber-800 font-bold ml-1">
            Create an account
          </RouterLink>
        </div>
      </div>
    </header>

    <!-- Main Content Container -->
    <main class="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 flex-1 flex items-center justify-center">
      <div class="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        <!-- Left Side: Value Proposition Banner (Hidden on Small Mobile, Visible on Tablet/Desktop) -->
        <div class="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800 shadow-xl relative overflow-hidden">
          <div class="relative z-10">
            <span class="text-xs font-bold uppercase tracking-widest text-amber-400">Welcome Back</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-white mt-2 leading-tight">
              Manage Your Legal Workspace
            </h2>
            <p class="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Sign in to access your appointments, secure client messages, document storage, and online notarization sessions.
            </p>

            <div class="mt-8 space-y-4 text-xs font-medium text-slate-300">
              <div class="flex items-center gap-3">
                <div class="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <ShieldCheck class="w-4 h-4" />
                </div>
                <span>End-to-End Encrypted Communications</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 class="w-4 h-4" />
                </div>
                <span>Instant Consultation Management</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <Award class="w-4 h-4" />
                </div>
                <span>Legally Binding Digital Signatures</span>
              </div>
            </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-800 text-[11px] text-slate-400 relative z-10 flex items-center gap-2">
            <Building2 class="w-4 h-4 text-amber-400 shrink-0" />
            <span>Connecting clients and attorneys across the Philippines.</span>
          </div>
        </div>

        <!-- Right Side: Login Form -->
        <div class="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
          <div>
            <h1 class="text-xl sm:text-2xl font-extrabold text-slate-900">Sign in to your account</h1>
            <p class="text-xs text-slate-500 mt-1">Enter your credentials to access your LexConnect portal.</p>

            <!-- Login Form -->
            <form @submit.prevent="submit" class="mt-6 space-y-4">
              <!-- Email Address Input -->
              <div>
                <label for="email" class="block text-xs font-bold text-slate-700 mb-1">Email address</label>
                <div class="relative">
                  <Mail class="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    id="email"
                    v-model.trim="email"
                    type="email"
                    autocomplete="username"
                    required
                    placeholder="you@example.com"
                    class="w-full bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm pl-9 pr-3 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <!-- Password Input -->
              <div>
                <div class="flex items-center justify-between mb-1">
                  <label for="password" class="block text-xs font-bold text-slate-700">Password</label>
                  <RouterLink :to="{ name: 'forgot-password' }" class="text-xs font-semibold text-amber-700 hover:text-amber-800">
                    Forgot password?
                  </RouterLink>
                </div>
                <div class="relative">
                  <Lock class="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    id="password"
                    v-model="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    placeholder="Enter your password"
                    class="w-full bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm pl-9 pr-3 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <!-- Error Alert -->
              <div
                v-if="error"
                role="alert"
                class="rounded-lg bg-red-50 border border-red-200 p-3 text-xs text-red-700 flex items-center gap-2"
              >
                <AlertCircle class="w-4 h-4 shrink-0" />
                <span>{{ error }}</span>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                class="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm py-3 rounded-lg shadow-sm flex items-center justify-center gap-2 transition-colors mt-2"
              >
                <span>Log in</span>
                <ArrowRight class="w-4 h-4" />
              </button>
            </form>

            <!-- Divider -->
            <div class="relative my-6">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-slate-200"></div>
              </div>
              <div class="relative flex justify-center text-[10px] uppercase tracking-wider">
                <span class="bg-white px-3 text-slate-400 font-bold">Quick Demo Access</span>
              </div>
            </div>

            <!-- Demo Account Switcher Grid -->
            <div class="space-y-2">
              <div class="grid grid-cols-2 gap-2">
                <button
                  v-for="item in [
                    { label: 'Client', role: 'client' },
                    { label: 'Lawyer', role: 'lawyer' },
                    { label: 'Admin', role: 'admin' },
                    { label: 'Super Admin', role: 'super-admin' },
                  ] as { label: string; role: AppRole }[]"
                  :key="item.role"
                  type="button"
                  class="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-amber-50 hover:border-amber-400 hover:text-amber-800 transition-all text-center"
                  @click="demo(item.role)"
                >
                  {{ item.label }} Demo
                </button>
              </div>
            </div>
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