<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import {
  Mail,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  Building2,
  KeyRound
} from 'lucide-vue-next'

const email = ref('')
const isSubmitted = ref(false)
const isLoading = ref(false)

function handleResetPassword() {
  if (!email.value) return
  isLoading.value = true
  
  // Simulate API request delay
  setTimeout(() => {
    isLoading.value = false
    isSubmitted.value = true
  }, 600)
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
          Remember your password?
          <RouterLink :to="{ name: 'register' }" class="text-amber-700 hover:text-amber-800 font-bold ml-1">
            Log In
          </RouterLink>
        </div>
      </div>
    </header>

    <!-- Main Content Container -->
    <main class="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 flex-1 flex items-center justify-center">
      <div class="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        <!-- Left Side: Value Banner -->
        <div class="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800 shadow-xl relative overflow-hidden">
          <div class="relative z-10">
            <span class="text-xs font-bold uppercase tracking-widest text-amber-400">Account Recovery</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-white mt-2 leading-tight">
              Secure & Instant Access Restore
            </h2>
            <p class="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Rest assured, your account details and consultation records remain encrypted and safely stored.
            </p>

            <div class="mt-8 space-y-4 text-xs font-medium text-slate-300">
              <div class="flex items-center gap-3">
                <div class="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <ShieldCheck class="w-4 h-4" />
                </div>
                <span>Encrypted Verification Links</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <KeyRound class="w-4 h-4" />
                </div>
                <span>256-Bit SSL Protected Auth</span>
              </div>
            </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-800 text-[11px] text-slate-400 relative z-10 flex items-center gap-2">
            <Building2 class="w-4 h-4 text-amber-400 shrink-0" />
            <span>Serving individual clients, corporate firms, and bar members.</span>
          </div>
        </div>

        <!-- Right Side: Form / Success Notification -->
        <div class="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
          
          <!-- State 1: Reset Form -->
          <div v-if="!isSubmitted">
            <h1 class="text-xl sm:text-2xl font-extrabold text-slate-900">Forgot your password?</h1>
            <p class="text-xs text-slate-500 mt-1">
              Enter the email address registered with your LexConnect account and we'll send you reset instructions.
            </p>

            <form @submit.prevent="handleResetPassword" class="mt-6 space-y-4">
              <div>
                <label for="reset-email" class="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                <div class="relative">
                  <Mail class="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    id="reset-email"
                    v-model.trim="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    class="w-full bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm pl-9 pr-3 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                :disabled="isLoading"
                class="w-full bg-amber-600 hover:bg-amber-700 disabled:opacity-70 text-white font-bold text-xs sm:text-sm py-3 rounded-lg shadow-sm flex items-center justify-center gap-2 transition-colors mt-2"
              >
                <span>{{ isLoading ? 'Sending Instructions...' : 'Send Reset Link' }}</span>
                <ArrowRight v-if="!isLoading" class="w-4 h-4" />
              </button>
            </form>

            <div class="mt-6 pt-6 border-t border-slate-100 flex items-center justify-center">
              <RouterLink :to="{ name: 'register' }" class="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900">
                <ArrowLeft class="w-4 h-4" />
                <span>Back to Login</span>
              </RouterLink>
            </div>
          </div>

          <!-- State 2: Confirmation Notice -->
          <div v-else class="text-center py-4">
            <div class="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4 border border-amber-200">
              <CheckCircle2 class="w-6 h-6" />
            </div>

            <h2 class="text-xl font-bold text-slate-900">Check your inbox</h2>
            <p class="text-xs text-slate-500 mt-2 max-w-sm mx-auto leading-relaxed">
              We have dispatched a password reset link to <strong class="text-slate-800">{{ email }}</strong>. Please follow the link provided in the message.
            </p>

            <div class="mt-8 space-y-3">
              <RouterLink :to="{ name: 'register' }" class="block w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm py-3 rounded-lg shadow-sm transition-colors">
                Return to Login
              </RouterLink>

              <button
                type="button"
                @click="isSubmitted = false"
                class="text-xs font-bold text-amber-700 hover:underline"
              >
                Didn't receive an email? Try again
              </button>
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