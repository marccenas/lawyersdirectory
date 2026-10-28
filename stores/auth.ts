<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Menu, Scale, X } from 'lucide-vue-next'

const menuOpen = ref(false)
</script>

<template>
  <div class="min-h-screen bg-white text-ink">
    <header class="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur">
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <RouterLink to="/" class="flex items-center gap-2 font-bold text-brand-950">
          <Scale class="h-7 w-7 text-brand-500" />
          <span class="text-xl">LexConnect</span>
        </RouterLink>

        <nav class="hidden items-center gap-7 md:flex">
          <RouterLink to="/lawyers" class="text-sm hover:text-brand-700">
            Find a Lawyer
          </RouterLink>
          <a href="/#how-it-works" class="text-sm hover:text-brand-700">
            How It Works
          </a>
          <a href="/#services" class="text-sm hover:text-brand-700">
            Legal Services
          </a>
        </nav>

        <div class="hidden items-center gap-3 md:flex">
          <RouterLink to="/login" class="px-3 py-2 text-sm font-medium">
            Log in
          </RouterLink>
          <RouterLink
            to="/register"
            class="rounded-lg bg-brand-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-900"
          >
            Get Started
          </RouterLink>
        </div>

        <button
          class="rounded-lg p-2 md:hidden"
          type="button"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="menuOpen"
          @click="menuOpen = !menuOpen"
        >
          <X v-if="menuOpen" class="h-6 w-6" />
          <Menu v-else class="h-6 w-6" />
        </button>
      </div>

      <nav v-if="menuOpen" class="space-y-1 border-t border-border px-4 py-3 md:hidden">
        <RouterLink class="block rounded-lg px-3 py-3" to="/lawyers" @click="menuOpen = false">
          Find a Lawyer
        </RouterLink>
        <RouterLink class="block rounded-lg px-3 py-3" to="/login" @click="menuOpen = false">
          Log in
        </RouterLink>
        <RouterLink class="block rounded-lg bg-brand-950 px-3 py-3 text-white" to="/register" @click="menuOpen = false">
          Create an account
        </RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>

    <footer class="border-t border-border bg-page">
      <div class="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-muted sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>© {{ new Date().getFullYear() }} LexConnect</p>
        <p>Connecting people with legal professionals in the Philippines.</p>
      </div>
    </footer>
  </div>
</template>