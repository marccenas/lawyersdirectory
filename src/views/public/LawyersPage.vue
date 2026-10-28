<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import {
  Search,
  Star,
  MapPin,
  ShieldCheck,
  ChevronLeft,
  ArrowRight,
} from 'lucide-vue-next'

const query = ref('')
const selectedSpecialty = ref('')

const lawyers = [
  {
    id: 1,
    name: 'Atty. Sarah Chen',
    specialty: 'Intellectual Property & Tech',
    city: 'Makati City',
    rating: 4.9,
    reviews: 142,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    rate: '₱3,500 / session'
  },
  {
    id: 2,
    name: 'Atty. David Miller',
    specialty: 'Corporate & Business Law',
    city: 'Manila',
    rating: 4.9,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    rate: '₱4,000 / session'
  },
  {
    id: 3,
    name: 'Atty. Priya Sharma',
    specialty: 'Real Estate & Property',
    city: 'Quezon City',
    rating: 5.0,
    reviews: 210,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    rate: '₱3,000 / session'
  },
  {
    id: 4,
    name: 'Atty. Maria Santos',
    specialty: 'Family Law',
    city: 'Manila',
    rating: 4.9,
    reviews: 84,
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400',
    rate: '₱2,500 / session'
  },
  {
    id: 5,
    name: 'Atty. Daniel Reyes',
    specialty: 'Business Law',
    city: 'Makati City',
    rating: 4.8,
    reviews: 76,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    rate: '₱3,500 / session'
  },
  {
    id: 6,
    name: 'Atty. Angela Cruz',
    specialty: 'Property Law',
    city: 'Quezon City',
    rating: 4.9,
    reviews: 115,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    rate: '₱3,200 / session'
  }
]

const filteredLawyers = computed(() => {
  const term = query.value.trim().toLowerCase()

  return lawyers.filter((lawyer) => {
    const matchesSearch = !term || `${lawyer.name} ${lawyer.specialty} ${lawyer.city}`.toLowerCase().includes(term)
    const matchesSpecialty = !selectedSpecialty.value || lawyer.specialty.toLowerCase().includes(selectedSpecialty.value.toLowerCase())
    return matchesSearch && matchesSpecialty
  })
})
</script>

<template>
  <div class="min-h-screen bg-slate-100 text-slate-800 font-sans selection:bg-amber-500 selection:text-white flex flex-col justify-between">
    
    <!-- Top Header -->
    <header class="bg-white border-b border-slate-200 sticky top-0 z-50">
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

        <RouterLink :to="{ name: 'landing' }" class="text-xs sm:text-sm font-semibold text-slate-700 hover:text-amber-700 flex items-center gap-1.5">
          <ChevronLeft class="w-4 h-4" />
          <span>Back to Home</span>
        </RouterLink>
      </div>
    </header>

    <!-- Main Content Area -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full space-y-8">
      
      <!-- Heading & Search Bar Banner -->
      <div class="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <span class="text-xs font-bold uppercase tracking-widest text-amber-600">Verified Legal Directory</span>
        <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">Find Your Legal Advocate</h1>
        <p class="mt-2 text-sm text-slate-500 max-w-2xl leading-relaxed">
          Explore professional lawyer profiles, verify bar credentials, check case win/loss statistics, and book consultations instantly.
        </p>

        <!-- Search Input Form -->
        <div class="mt-6 flex flex-col sm:flex-row gap-3">
          <div class="relative flex-1">
            <Search class="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              v-model="query"
              type="search"
              placeholder="Search by lawyer name, specialty, or city..."
              class="w-full bg-slate-50 border border-slate-200 rounded-xl text-sm pl-11 pr-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <select
            v-model="selectedSpecialty"
            class="bg-slate-50 border border-slate-200 rounded-xl text-sm px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="">All Practice Areas</option>
            <option value="Intellectual Property">Intellectual Property</option>
            <option value="Corporate">Corporate & Business</option>
            <option value="Property">Real Estate & Property</option>
            <option value="Family">Family Law</option>
          </select>
        </div>
      </div>

      <!-- Lawyer Profile Cards Grid -->
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="lawyer in filteredLawyers"
          :key="lawyer.name"
          class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between hover:border-amber-400 hover:shadow-md transition-all group"
        >
          <div>
            <div class="relative h-48 overflow-hidden bg-slate-100">
              <img :src="lawyer.image" :alt="lawyer.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div class="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                <ShieldCheck class="w-3 h-3 text-amber-400" /> Verified
              </div>
            </div>

            <div class="p-5">
              <span class="inline-block text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full mb-2">
                {{ lawyer.specialty }}
              </span>

              <h2 class="text-lg font-bold text-slate-900">{{ lawyer.name }}</h2>
              
              <div class="mt-2 flex items-center justify-between text-xs text-slate-500">
                <span class="flex items-center gap-1"><MapPin class="w-3.5 h-3.5 text-amber-600" /> {{ lawyer.city }}, Philippines</span>
                <span class="font-semibold text-slate-700">{{ lawyer.rate }}</span>
              </div>

              <div class="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div class="flex items-center gap-1 font-bold text-amber-600">
                  <Star class="w-4 h-4 fill-current" />
                  <span>{{ lawyer.rating }}</span>
                  <span class="text-slate-400 font-normal">({{ lawyer.reviews }} reviews)</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="p-5 pt-0 grid grid-cols-2 gap-2">
            <RouterLink
              :to="{ name: 'lawyer-profile', params: { id: lawyer.id } }"
              class="w-full text-center text-xs font-semibold py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
            >
              View Profile
            </RouterLink>
            <RouterLink
              :to="{ name: 'lawyer-profile', params: { id: lawyer.id } }"
              class="w-full text-center text-xs font-semibold py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors flex items-center justify-center gap-1"
            >
              <span>Book Now</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </RouterLink>
          </div>
        </article>
      </div>

      <!-- Empty State -->
      <div v-if="filteredLawyers.length === 0" class="bg-white rounded-2xl border border-slate-200 p-12 text-center">
        <p class="text-base font-bold text-slate-900">No lawyers match your search query.</p>
        <p class="text-xs text-slate-500 mt-1">Try searching with a different specialty or city name.</p>
        <button @click="query = ''; selectedSpecialty = ''" class="mt-4 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-4 py-2 rounded-lg">
          Reset Filters
        </button>
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