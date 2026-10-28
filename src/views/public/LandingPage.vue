<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import {
  Search,
  ShieldCheck,
  CalendarCheck,
  FileCheck,
  MessageSquare,
  Star,
  ChevronLeft,
  ChevronRight,
  Lock,
  Building2,
  CheckCircle2,
  Menu,
  X
} from 'lucide-vue-next'

const router = useRouter()
const mobileMenuOpen = ref(false)
const searchQuery = ref('')
const selectedArea = ref('')
const selectedCity = ref('')
const selectedState = ref('')

function executeSearch() {
  router.push({
    name: 'lawyers',
    query: {
      q: searchQuery.value || undefined,
      area: selectedArea.value || undefined,
      city: selectedCity.value || undefined,
      state: selectedState.value || undefined
    }
  })
}

const whyFeatures = [
  {
    icon: ShieldCheck,
    title: 'Verified Profiles & Ratings',
    description: 'Verified attorney credentials backed by authentic client review scores.'
  },
  {
    icon: CalendarCheck,
    title: 'Instant Online Booking',
    description: 'Flexible scheduling with instant video or office calendar integration.'
  },
  {
    icon: FileCheck,
    title: 'Remote Online Notarization',
    description: 'Fast, secure legal document signing and online notarization.'
  },
  {
    icon: MessageSquare,
    title: 'Client Interaction',
    description: 'Direct messaging, secure document sharing, and consultation tools.'
  }
]

const lawyers = [
  {
    id: 1,
    name: 'Atty. Sarah Chen',
    title: 'Intellectual Property & Tech',
    rating: '4.9',
    reviews: 120,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 2,
    name: 'Atty. David Miller',
    title: 'Corporate & Business Law',
    rating: '4.9',
    reviews: 120,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 3,
    name: 'Atty. Priya Sharma',
    title: 'Real Estate & Property',
    rating: '5.0',
    reviews: 120,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
  }
]

const testimonials = [
  {
    id: 1,
    name: 'Anna Sharma',
    role: 'Client',
    text: 'Found a trusted advocate for my business contract dispute within an hour. The online booking made scheduling immediate.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 2,
    name: 'Katherine N.',
    role: 'Corporate Client',
    text: 'The remote online notarization saved us days of travel. Quick, legally binding, and completely seamless.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 3,
    name: 'Priya S.',
    role: 'Client',
    text: 'Highly recommended directory. Transparent rating system helped me select the right family lawyer confidently.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150'
  }
]
</script>

<template>
  <div class="min-h-screen bg-slate-100 text-slate-800 font-sans selection:bg-amber-500 selection:text-white">
    
    <!-- Top Header / Responsive Navbar -->
    <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <!-- Logo -->
        <RouterLink :to="{ name: 'landing' }" class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-lg bg-amber-600 flex items-center justify-center font-bold text-white text-xl shadow-md">
            L
          </div>
          <div>
            <span class="text-xl font-bold text-slate-900 block leading-none">LexConnect</span>
            <span class="text-[11px] text-slate-500 tracking-wide">Lawyers Directory</span>
          </div>
        </RouterLink>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-semibold text-slate-700">
          <RouterLink :to="{ name: 'lawyers' }" class="hover:text-amber-600 transition-colors">Find a Lawyer</RouterLink>
          <a href="#notary" class="hover:text-amber-600 transition-colors">Online Notary</a>
          <a href="#why-us" class="hover:text-amber-600 transition-colors">Why LexConnect</a>
          <RouterLink :to="{ name: 'lawyers' }" class="hover:text-amber-600 transition-colors">Directory</RouterLink>
        </nav>

        <!-- Desktop Actions -->
        <div class="hidden sm:flex items-center space-x-3">
          <RouterLink :to="{ name: 'register' }" class="text-sm font-semibold text-slate-700 hover:text-slate-900 px-3 py-2">
            Log In
          </RouterLink>
          <RouterLink :to="{ name: 'register' }" class="text-sm font-semibold bg-amber-600 hover:bg-amber-700 text-white px-4 py-2.5 rounded-lg shadow-sm transition-all">
            Join as a Lawyer
          </RouterLink>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex md:hidden items-center">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none">
            <component :is="mobileMenuOpen ? X : Menu" class="w-6 h-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Navigation Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
        <RouterLink :to="{ name: 'lawyers' }" @click="mobileMenuOpen = false" class="block text-sm font-semibold text-slate-700 py-2 border-b border-slate-100">Find a Lawyer</RouterLink>
        <a href="#notary" @click="mobileMenuOpen = false" class="block text-sm font-semibold text-slate-700 py-2 border-b border-slate-100">Online Notary</a>
        <a href="#why-us" @click="mobileMenuOpen = false" class="block text-sm font-semibold text-slate-700 py-2 border-b border-slate-100">Why LexConnect</a>
        <div class="pt-2 flex flex-col gap-2">
          <RouterLink :to="{ name: 'register' }" @click="mobileMenuOpen = false" class="text-center text-sm font-semibold text-slate-700 py-2.5 rounded-lg border border-slate-200">Log In</RouterLink>
          <RouterLink :to="{ name: 'register' }" @click="mobileMenuOpen = false" class="text-center text-sm font-semibold bg-amber-600 text-white py-2.5 rounded-lg shadow-sm">Join as a Lawyer</RouterLink>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="bg-slate-900 text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        <!-- Hero Text & Search Widget -->
        <div class="lg:col-span-7">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
            Connecting You to Trustworthy Legal Counsel
          </h1>
          <p class="mt-4 text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Find top lawyers for every need, from corporate law to family disputes. Book appointments, get legal documents notarized online, and build lasting relationships.
          </p>

          <!-- Responsive Search Widget -->
          <form @submit.prevent="executeSearch" class="mt-8 bg-white text-slate-900 p-4 sm:p-5 rounded-2xl shadow-xl">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-600 mb-1">Area of Law</label>
                <select v-model="selectedArea" class="w-full bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm p-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500">
                  <option value="">All Specialties</option>
                  <option value="business">Business & Corporate</option>
                  <option value="family">Family Law</option>
                  <option value="criminal">Criminal Defense</option>
                  <option value="property">Property & Real Estate</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-600 mb-1">City</label>
                <select v-model="selectedCity" class="w-full bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm p-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500">
                  <option value="">Select City</option>
                  <option value="manila">Manila</option>
                  <option value="cebu">Cebu</option>
                  <option value="davao">Davao</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-600 mb-1">State / Region</label>
                <div class="flex gap-2">
                  <select v-model="selectedState" class="w-full bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm p-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500">
                    <option value="">All Regions</option>
                    <option value="ncr">NCR</option>
                    <option value="region7">Region VII</option>
                    <option value="region11">Region XI</option>
                  </select>
                  
                  <button type="submit" class="bg-amber-600 hover:bg-amber-700 text-white font-bold px-4 py-2.5 rounded-lg flex items-center justify-center transition-colors shrink-0">
                    <Search class="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            <div class="mt-3 pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-[11px] sm:text-xs text-slate-500">
              <span class="font-bold text-slate-700">Featured Specialties:</span>
              <span>Family Law, Business Disputes, Intellectual Property</span>
            </div>
          </form>
        </div>

        <!-- Hero Image Banner -->
        <div class="lg:col-span-5 relative">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800" 
              alt="Legal team meeting"
              class="w-full h-64 sm:h-80 lg:h-[420px] object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            
            <div class="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur-md text-white p-3 rounded-xl border border-white/10 flex items-center gap-3 shadow-lg">
              <div class="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center">
                <ShieldCheck class="w-6 h-6 text-white" />
              </div>
              <div>
                <p class="text-xs font-bold">Verified Experts</p>
                <p class="text-[10px] text-slate-300">Nationwide Directory</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Why LexConnect? & Meet Our Lawyers Section -->
    <section id="why-us" class="py-12 sm:py-16 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-12">
        
        <!-- Why LexConnect Column -->
        <div class="lg:col-span-5">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">Why LexConnect?</h2>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
            <div v-for="item in whyFeatures" :key="item.title" class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <div class="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-3">
                <component :is="item.icon" class="w-5 h-5" />
              </div>
              <h3 class="font-bold text-slate-900 text-sm mb-1">{{ item.title }}</h3>
              <p class="text-xs text-slate-500 leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
        </div>

        <!-- Meet Our Lawyers Column -->
        <div class="lg:col-span-7">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">Meet Our Lawyers</h2>
            <div class="flex gap-2">
              <button aria-label="Previous lawyers" class="w-8 h-8 rounded-full border border-slate-300 bg-white text-slate-600 hover:bg-slate-100 flex items-center justify-center">
                <ChevronLeft class="w-4 h-4" />
              </button>
              <button aria-label="Next lawyers" class="w-8 h-8 rounded-full border border-slate-300 bg-white text-slate-600 hover:bg-slate-100 flex items-center justify-center">
                <ChevronRight class="w-4 h-4" />
              </button>
            </div>
          </div>

          <!-- Meet Our Lawyers Grid Section -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div v-for="lawyer in lawyers" :key="lawyer.id" class="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between">
              <div>
                <img :src="lawyer.image" :alt="lawyer.name" class="w-full h-48 sm:h-40 object-cover" />
                <div class="p-4">
                  <h3 class="font-bold text-slate-900 text-sm truncate">{{ lawyer.name }}</h3>
                  <p class="text-xs text-slate-500 mt-0.5 line-clamp-1">{{ lawyer.title }}</p>
                  
                  <div class="flex items-center gap-1 mt-2 text-xs font-bold text-amber-600">
                    <Star class="w-3.5 h-3.5 fill-current" />
                    <span>{{ lawyer.rating }}</span>
                    <span class="text-slate-400 font-normal">({{ lawyer.reviews }})</span>
                  </div>
                </div>
              </div>

              <!-- Correctly bound dynamic profile and booking links for all lawyers -->
              <div class="p-4 pt-0 space-y-2">
                <RouterLink 
                  :to="{ name: 'lawyer-profile', params: { id: lawyer.id } }" 
                  class="block w-full text-center text-xs font-semibold py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  View Profile
                </RouterLink>
                <RouterLink 
                  :to="{ name: 'lawyer-profile', params: { id: lawyer.id } }" 
                  class="block w-full text-center text-xs font-semibold py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                >
                  Book Now
                </RouterLink>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>

    <!-- Highly Recommended Carousel Row -->
    <section class="py-10 sm:py-12 bg-white border-t border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900">Highly Recommended Advocates</h2>
          <div class="flex gap-2">
            <button aria-label="Previous recommended advocates" class="w-8 h-8 rounded-full border border-slate-300 bg-white text-slate-600 hover:bg-slate-100 flex items-center justify-center">
              <ChevronLeft class="w-4 h-4" />
            </button>
            <button aria-label="Next recommended advocates" class="w-8 h-8 rounded-full border border-slate-300 bg-white text-slate-600 hover:bg-slate-100 flex items-center justify-center">
              <ChevronRight class="w-4 h-4" />
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div v-for="lawyer in lawyers" :key="'rec-' + lawyer.id" class="flex gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50 items-center">
            <img :src="lawyer.image" :alt="lawyer.name" class="w-20 h-20 rounded-lg object-cover shrink-0" />
            <div class="min-w-0">
              <h3 class="font-bold text-slate-900 text-sm truncate">{{ lawyer.name }}</h3>
              <p class="text-xs text-slate-500 truncate">{{ lawyer.title }}</p>
              <div class="flex items-center gap-1 mt-1 text-xs font-bold text-amber-600">
                <Star class="w-3 h-3 fill-current" />
                <span>{{ lawyer.rating }}</span>
              </div>
              <RouterLink :to="{ name: 'lawyer-profile', params: { id: lawyer.id } }" class="inline-block mt-2 text-xs font-bold text-amber-700 hover:underline">
                Book Consultation &rarr;
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Secure Online Notarization Section -->
    <section id="notary" class="py-12 sm:py-16 bg-slate-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <span class="text-xs font-bold uppercase tracking-widest text-amber-400">Digital Document Signing</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-white mt-2">Secure Online Notarization</h2>
          <p class="mt-4 text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl">
            Notarize documents remotely from your home or office. Encrypted end-to-end, legally binding, efficient, and recognized under Philippine e-Notarization rules.
          </p>
          <div class="mt-6 flex flex-wrap gap-4 text-xs font-medium text-slate-300">
            <span class="flex items-center gap-1.5"><Lock class="w-4 h-4 text-amber-400" /> Bank-grade Encryption</span>
            <span class="flex items-center gap-1.5"><CheckCircle2 class="w-4 h-4 text-amber-400" /> Validated Signatures</span>
          </div>
        </div>

        <div class="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div class="space-y-3 w-full sm:w-auto">
            <div class="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <FileCheck class="w-7 h-7" />
            </div>
            <h3 class="font-bold text-white text-lg">Ready to notarize?</h3>
            <p class="text-xs text-slate-400">Upload your PDF document to initiate remote session.</p>
            <RouterLink :to="{ name: 'lawyers' }" class="inline-block w-full sm:w-auto text-center bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-5 py-2.5 rounded-lg">
              Start Remote Notarization
            </RouterLink>
          </div>
          <div class="hidden sm:flex w-24 h-24 rounded-full bg-slate-700/50 items-center justify-center border border-slate-600 shrink-0">
            <Lock class="w-10 h-10 text-amber-400" />
          </div>
        </div>
      </div>
    </section>

    <!-- Client Testimonials -->
    <section class="py-12 sm:py-16 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 text-center mb-10">Client Testimonials</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="item in testimonials" :key="item.id" class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <p class="text-xs text-slate-600 leading-relaxed italic">"{{ item.text }}"</p>
            <div class="flex items-center gap-3 mt-6">
              <img :src="item.avatar" :alt="item.name" class="w-10 h-10 rounded-full object-cover" />
              <div>
                <p class="font-bold text-slate-900 text-xs">{{ item.name }}</p>
                <p class="text-[10px] text-slate-400">{{ item.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trusted Partners Banner -->
    <section class="py-8 sm:py-10 bg-white border-t border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Trusted and Secure Legal Partner</p>
        <div class="flex flex-wrap items-center justify-center gap-6 sm:gap-16 opacity-60 text-slate-700 text-xs font-bold">
          <span class="flex items-center gap-2"><Building2 class="w-4 h-4" /> Corporate Law Firm Partners</span>
          <span class="flex items-center gap-2"><ShieldCheck class="w-4 h-4" /> Verified Bar Members</span>
          <span class="flex items-center gap-2"><Lock class="w-4 h-4" /> SSL Encrypted Platform</span>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-slate-900 text-white py-12 sm:py-14 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-xl sm:text-3xl font-extrabold">Ready to find your legal advocate?</h2>
        <div class="mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <RouterLink :to="{ name: 'register' }" class="bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white text-xs font-bold px-6 py-3 rounded-lg">
            Client Sign Up
          </RouterLink>
          <RouterLink :to="{ name: 'register' }" class="bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold px-6 py-3 rounded-lg">
            Lawyer Sign Up
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-slate-950 text-slate-400 text-xs py-10 sm:py-12 border-t border-slate-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h4 class="font-bold text-white text-sm mb-3">LexConnect</h4>
          <p class="leading-relaxed text-slate-500">Connecting individuals and organizations with verified legal counsel across the Philippines.</p>
        </div>
        <div>
          <h4 class="font-bold text-white text-sm mb-3">Quick Links</h4>
          <ul class="space-y-2">
            <li><RouterLink :to="{ name: 'lawyers' }" class="hover:text-white">Find a Lawyer</RouterLink></li>
            <li><a href="#notary" class="hover:text-white">Online Notary</a></li>
            <li><a href="#why-us" class="hover:text-white">Why LexConnect</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-white text-sm mb-3">Practice Areas</h4>
          <ul class="space-y-2">
            <li><RouterLink :to="{ name: 'lawyers' }" class="hover:text-white">Business Law</RouterLink></li>
            <li><RouterLink :to="{ name: 'lawyers' }" class="hover:text-white">Family Law</RouterLink></li>
            <li><RouterLink :to="{ name: 'lawyers' }" class="hover:text-white">Real Estate</RouterLink></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-white text-sm mb-3">Support</h4>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-white">Help Center</a></li>
            <li><a href="#" class="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" class="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <p>&copy; 2026 LexConnect. All rights reserved.</p>
        <p class="text-slate-600">Designed for modern legal discovery and remote notarization.</p>
      </div>
    </footer>

  </div>
</template>