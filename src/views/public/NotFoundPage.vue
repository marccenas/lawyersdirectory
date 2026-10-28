<script setup lang="ts">
import { RouterLink } from 'vue-router'
import {
  FileQuestion,
  Home,
  Search,
  ArrowRight,
  ShieldCheck
} from 'lucide-vue-next'
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

        <RouterLink :to="{ name: 'landing' }" class="text-xs sm:text-sm font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1.5">
          <Home class="w-4 h-4" />
          <span>Back to Home</span>
        </RouterLink>
      </div>
    </header>

    <!-- Main 404 Hero Container -->
    <main class="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 flex-1 flex items-center justify-center">
      <div class="max-w-2xl w-full text-center bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm relative overflow-hidden">
        
        <!-- Decorative Background Glow -->
        <div class="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

        <!-- Icon Badge -->
        <div class="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center mx-auto mb-6 shadow-sm">
          <FileQuestion class="w-8 h-8" />
        </div>

        <!-- 404 Header Text -->
        <span class="text-xs font-extrabold uppercase tracking-widest text-amber-600">Error 404</span>
        <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
          Page Not Found
        </h1>
        <p class="mt-3 text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
          The legal route or page you are looking for doesn't exist, has been removed, or was moved to a new destination.
        </p>

        <!-- Main Action Buttons -->
        <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <RouterLink
            :to="{ name: 'landing' }"
            class="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-sm flex items-center justify-center gap-2 transition-colors"
          >
            <Home class="w-4 h-4" />
            <span>Return to Landing Page</span>
          </RouterLink>

          <RouterLink
            :to="{ name: 'lawyers' }"
            class="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-sm flex items-center justify-center gap-2 transition-colors"
          >
            <Search class="w-4 h-4" />
            <span>Search Attorney Directory</span>
          </RouterLink>
        </div>

        <!-- Helpful Directory Quick Links -->
        <div class="mt-10 pt-8 border-t border-slate-100">
          <p class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Or explore these common areas</p>
          <div class="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-700">
            <RouterLink :to="{ name: 'lawyers' }" class="hover:text-amber-700 flex items-center gap-1">
              Find Lawyers <ArrowRight class="w-3 h-3 text-amber-600" />
            </RouterLink>
            <span class="text-slate-300">•</span>
            <RouterLink :to="{ name: 'register' }" class="hover:text-amber-700 flex items-center gap-1">
              Join as a Lawyer <ArrowRight class="w-3 h-3 text-amber-600" />
            </RouterLink>
            <span class="text-slate-300">•</span>
            <RouterLink :to="{ name: 'register' }" class="hover:text-amber-700 flex items-center gap-1">
              Sign In <ArrowRight class="w-3 h-3 text-amber-600" />
            </RouterLink>
          </div>
        </div>

      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
      <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>&copy; 2026 LexConnect. All rights reserved.</p>
        <span class="flex items-center gap-1 text-slate-400">
          <ShieldCheck class="w-3.5 h-3.5 text-amber-600" /> Verified Legal Network
        </span>
      </div>
    </footer>

  </div>
</template>