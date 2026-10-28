<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import {
  ShieldCheck,
  Star,
  MapPin,
  Briefcase,
  GraduationCap,
  Scale,
  CheckCircle2,
  XCircle,
  CalendarCheck,
  ChevronLeft,
  Share2,
  Building2,
  Video
} from 'lucide-vue-next'

const route = useRoute()
const lawyerId = route.params.id

// Selected consultation type
const activeTab = ref<'overview' | 'cases' | 'experience' | 'reviews'>('overview')
const selectedConsultation = ref<'video' | 'office'>('video')
const selectedDate = ref('2026-11-02')
const selectedTime = ref('10:00 AM')

// Sample Attorney Profile Data
const lawyer = {
  id: lawyerId || '1',
  name: 'Atty. Sarah Chen, LL.M.',
  title: 'Senior Partner • Intellectual Property & Corporate Litigation',
  firm: 'Chen, Tan & Associates Law Offices',
  location: 'Makati City, Metro Manila',
  rollNumber: 'Roll of Attorneys No. 68421',
  rating: 4.9,
  reviewCount: 142,
  experienceYears: 14,
  hourlyRate: '₱3,500',
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
  bio: 'Atty. Sarah Chen specializes in complex corporate disputes, trademark litigation, and technology compliance across the Asia-Pacific region. Recognized for exceptional legal strategy, transparent counsel, and high case resolution efficiency.',
  
  // Case Statistics (Success & Loss metrics)
  stats: {
    totalCases: 184,
    wonCases: 162,
    lostCases: 14,
    settledCases: 8,
    winRate: '88%'
  },

  // Case Track Record
  caseHistory: [
    {
      id: 1,
      title: 'TechCorp vs. CloudNet Solutions',
      category: 'Intellectual Property / Patent Dispute',
      outcome: 'Won',
      year: '2025',
      summary: 'Secured full injunctive relief and ₱12M in damages for software copyright infringement.'
    },
    {
      id: 2,
      title: 'In re Estate of De La Rosa',
      category: 'Property & Estate Litigation',
      outcome: 'Settled',
      year: '2024',
      summary: 'Successfully negotiated an out-of-court family settlement dividing real estate assets equitably.'
    },
    {
      id: 3,
      title: 'Apex Financial vs. Retail Group',
      category: 'Corporate Breach of Contract',
      outcome: 'Won',
      year: '2023',
      summary: 'Defended retail client against wrongful termination of commercial distribution agreement.'
    },
    {
      id: 4,
      title: 'Vanguard Logistics Maritime Claim',
      category: 'Admiralty & Commercial Law',
      outcome: 'Lost',
      year: '2022',
      summary: 'Represented cargo carrier in liability defense; court ruled in favor of cargo owner regarding freight delays.'
    }
  ],

  // Career Background & Education
  workHistory: [
    {
      role: 'Senior Managing Partner',
      entity: 'Chen, Tan & Associates',
      period: '2018 - Present',
      desc: 'Head of Intellectual Property and Technology Law Division.'
    },
    {
      role: 'Associate Attorney',
      entity: 'Sycip Salazar Hernandez & Gatmaitan',
      period: '2012 - 2018',
      desc: 'Handled corporate governance, merger filings, and commercial arbitration.'
    }
  ],
  
  education: [
    { degree: 'Master of Laws (LL.M. in IP)', institution: 'National University of Singapore', year: '2016' },
    { degree: 'Juris Doctor (J.D.)', institution: 'Ateneo de Manila Law School', year: '2012' }
  ],

  // Verified Client Reviews
  reviews: [
    {
      id: 1,
      author: 'Marcus Vance',
      role: 'CEO, TechVentures Inc.',
      rating: 5,
      date: 'October 2026',
      text: 'Atty. Chen handled our trademark dispute with incredible professionalism. Her realistic assessment of case strengths and weaknesses was refreshing.'
    },
    {
      id: 2,
      author: 'Atty. Roberto Cruz',
      role: 'Corporate Counsel',
      rating: 5,
      date: 'August 2026',
      text: 'Extremely sharp trial strategist. Clear communication, transparent fees, and prompt updates throughout our arbitration.'
    }
  ]
}
</script>

<template>
  <div class="min-h-screen bg-slate-100 text-slate-800 font-sans selection:bg-amber-500 selection:text-white flex flex-col">
    
    <!-- Header Navbar -->
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

        <RouterLink :to="{ name: 'lawyers' }" class="text-xs sm:text-sm font-bold text-slate-700 hover:text-amber-700 flex items-center gap-1.5">
          <ChevronLeft class="w-4 h-4" />
          <span>Back to Lawyers Directory</span>
        </RouterLink>
      </div>
    </header>

    <!-- Main Profile Container -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full space-y-8">
      
      <!-- Top Profile Banner Card -->
      <section class="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm relative overflow-hidden">
        <div class="flex flex-col lg:flex-row gap-8 items-start justify-between">
          
          <!-- Lawyer Avatar & Core Info -->
          <div class="flex flex-col sm:flex-row gap-6 items-start">
            <img
              :src="lawyer.image"
              :alt="lawyer.name"
              class="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border-2 border-amber-500/30 shadow-md shrink-0"
            />

            <div>
              <div class="flex flex-wrap items-center gap-2">
                <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900">{{ lawyer.name }}</h1>
                <span class="bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <ShieldCheck class="w-3.5 h-3.5 text-amber-600" />
                  Verified Bar Member
                </span>
              </div>

              <p class="text-xs sm:text-sm font-semibold text-slate-600 mt-1">{{ lawyer.title }}</p>
              
              <div class="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span class="flex items-center gap-1.5"><Building2 class="w-4 h-4 text-amber-600" /> {{ lawyer.firm }}</span>
                <span class="flex items-center gap-1.5"><MapPin class="w-4 h-4 text-amber-600" /> {{ lawyer.location }}</span>
                <span class="text-slate-400">• {{ lawyer.rollNumber }}</span>
              </div>

              <!-- Rating & Experience Pills -->
              <div class="mt-4 flex flex-wrap items-center gap-3">
                <div class="flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-800 px-3 py-1 rounded-lg text-xs font-bold">
                  <Star class="w-4 h-4 fill-current text-amber-500" />
                  <span>{{ lawyer.rating }}</span>
                  <span class="text-slate-500 font-normal">({{ lawyer.reviewCount }} client reviews)</span>
                </div>

                <div class="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-xs font-semibold">
                  {{ lawyer.experienceYears }} Years Practice Experience
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Rate Badge & Share Action -->
          <div class="w-full lg:w-auto flex lg:flex-col justify-between items-end border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-100">
            <div class="text-right">
              <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Initial Consultation</span>
              <span class="text-2xl font-extrabold text-slate-900">{{ lawyer.hourlyRate }}</span>
              <span class="text-xs text-slate-500"> / 45-min session</span>
            </div>

            <button class="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 flex items-center gap-1 text-xs font-bold transition-colors">
              <Share2 class="w-4 h-4" />
              <span>Share Profile</span>
            </button>
          </div>

        </div>
      </section>

      <!-- Main Dual Column Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Left Column: Details & Case Performance -->
        <div class="lg:col-span-8 space-y-6">
          
          <!-- Navigation Tabs -->
          <div class="flex border-b border-slate-200 gap-6 text-xs sm:text-sm font-bold text-slate-600">
            <button
              @click="activeTab = 'overview'"
              :class="['pb-3 border-b-2 transition-colors', activeTab === 'overview' ? 'border-amber-600 text-amber-800' : 'border-transparent hover:text-slate-900']"
            >
              Overview & Bio
            </button>
            <button
              @click="activeTab = 'cases'"
              :class="['pb-3 border-b-2 transition-colors', activeTab === 'cases' ? 'border-amber-600 text-amber-800' : 'border-transparent hover:text-slate-900']"
            >
              Case Record & Stats
            </button>
            <button
              @click="activeTab = 'experience'"
              :class="['pb-3 border-b-2 transition-colors', activeTab === 'experience' ? 'border-amber-600 text-amber-800' : 'border-transparent hover:text-slate-900']"
            >
              Background & Education
            </button>
            <button
              @click="activeTab = 'reviews'"
              :class="['pb-3 border-b-2 transition-colors', activeTab === 'reviews' ? 'border-amber-600 text-amber-800' : 'border-transparent hover:text-slate-900']"
            >
              Reviews ({{ lawyer.reviewCount }})
            </button>
          </div>

          <!-- Tab 1: Overview & Biography -->
          <div v-if="activeTab === 'overview'" class="bg-white rounded-2xl border border-slate-200 p-6 space-y-6 shadow-sm">
            <div>
              <h2 class="text-base font-bold text-slate-900 mb-2">About Atty. Sarah Chen</h2>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">{{ lawyer.bio }}</p>
            </div>

            <!-- Case Performance Summary Metrics -->
            <div class="pt-4 border-t border-slate-100">
              <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Case Performance Snapshot</h3>
              
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <span class="text-2xl font-extrabold text-slate-900 block">{{ lawyer.stats.totalCases }}</span>
                  <span class="text-[11px] font-semibold text-slate-500">Total Cases Handled</span>
                </div>
                <div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                  <span class="text-2xl font-extrabold text-emerald-700 block">{{ lawyer.stats.wonCases }}</span>
                  <span class="text-[11px] font-semibold text-emerald-800">Cases Won</span>
                </div>
                <div class="p-4 rounded-xl bg-red-50 border border-red-200 text-center">
                  <span class="text-2xl font-extrabold text-red-700 block">{{ lawyer.stats.lostCases }}</span>
                  <span class="text-[11px] font-semibold text-red-800">Cases Lost</span>
                </div>
                <div class="p-4 rounded-xl bg-amber-50 border border-amber-200 text-center">
                  <span class="text-2xl font-extrabold text-amber-800 block">{{ lawyer.stats.winRate }}</span>
                  <span class="text-[11px] font-semibold text-amber-900">Success Ratio</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Tab 2: Case Performance & Track Record -->
          <div v-if="activeTab === 'cases'" class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
            <div>
              <h2 class="text-base font-bold text-slate-900">Transparent Case Outcomes</h2>
              <p class="text-xs text-slate-500 mt-0.5">A matter-by-matter breakdown of historical victories, settlements, and losses.</p>
            </div>

            <div class="space-y-4">
              <div
                v-for="item in lawyer.caseHistory"
                :key="item.id"
                class="p-4 rounded-xl border border-slate-200 bg-slate-50/60"
              >
                <div class="flex items-center justify-between gap-2">
                  <h3 class="font-bold text-slate-900 text-sm">{{ item.title }}</h3>
                  
                  <span
                    :class="[
                      'text-[10px] font-bold px-2.5 py-0.5 rounded-full border uppercase tracking-wider flex items-center gap-1',
                      item.outcome === 'Won' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                      item.outcome === 'Lost' ? 'bg-red-50 text-red-700 border-red-200' : 'bg-amber-50 text-amber-800 border-amber-200'
                    ]"
                  >
                    <component :is="item.outcome === 'Won' ? CheckCircle2 : item.outcome === 'Lost' ? XCircle : Scale" class="w-3 h-3" />
                    {{ item.outcome }}
                  </span>
                </div>

                <p class="text-xs font-semibold text-amber-700 mt-1">{{ item.category }} • {{ item.year }}</p>
                <p class="text-xs text-slate-600 mt-2 leading-relaxed">{{ item.summary }}</p>
              </div>
            </div>
          </div>

          <!-- Tab 3: Work Background & Education -->
          <div v-if="activeTab === 'experience'" class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
            <div>
              <h2 class="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Briefcase class="w-5 h-5 text-amber-600" /> Career Experience
              </h2>
              <div class="space-y-4 pl-2 border-l-2 border-slate-200">
                <div v-for="(exp, idx) in lawyer.workHistory" :key="idx" class="relative pl-4">
                  <div class="w-2.5 h-2.5 rounded-full bg-amber-600 absolute -left-[21px] top-1.5 border-2 border-white"></div>
                  <h3 class="font-bold text-slate-900 text-sm">{{ exp.role }}</h3>
                  <p class="text-xs text-amber-700 font-semibold">{{ exp.entity }} • {{ exp.period }}</p>
                  <p class="text-xs text-slate-500 mt-1">{{ exp.desc }}</p>
                </div>
              </div>
            </div>

            <div class="pt-6 border-t border-slate-100">
              <h2 class="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <GraduationCap class="w-5 h-5 text-amber-600" /> Education & Credentials
              </h2>
              <div class="space-y-3">
                <div v-for="(edu, idx) in lawyer.education" :key="idx" class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 class="font-bold text-slate-900 text-xs">{{ edu.degree }}</h3>
                  <p class="text-xs text-slate-500">{{ edu.institution }} ({{ edu.year }})</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Tab 4: Client Reviews -->
          <div v-if="activeTab === 'reviews'" class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h2 class="text-base font-bold text-slate-900">Verified Client Feedback</h2>
            
            <div class="space-y-4">
              <div v-for="rev in lawyer.reviews" :key="rev.id" class="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="font-bold text-slate-900 text-xs">{{ rev.author }}</h3>
                    <p class="text-[10px] text-slate-400">{{ rev.role }}</p>
                  </div>
                  <div class="flex items-center gap-1 text-amber-500">
                    <Star v-for="i in rev.rating" :key="i" class="w-3.5 h-3.5 fill-current" />
                  </div>
                </div>
                <p class="text-xs text-slate-600 mt-3 italic">"{{ rev.text }}"</p>
                <span class="block text-[10px] text-slate-400 mt-2">{{ rev.date }}</span>
              </div>
            </div>
          </div>

        </div>

        <!-- Right Column: Consultation Booking Card -->
        <div class="lg:col-span-4 space-y-6">
          
          <div class="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-xl sticky top-24">
            <h2 class="text-lg font-extrabold text-white mb-1">Book Consultation</h2>
            <p class="text-xs text-slate-400 mb-6">Schedule a verified session directly with Atty. Sarah Chen.</p>

            <!-- Mode Selector -->
            <div class="grid grid-cols-2 gap-2 mb-6">
              <button
                type="button"
                @click="selectedConsultation = 'video'"
                :class="[
                  'p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all',
                  selectedConsultation === 'video'
                    ? 'border-amber-500 bg-amber-500/20 text-amber-400'
                    : 'border-slate-800 bg-slate-800 text-slate-400 hover:bg-slate-700'
                ]"
              >
                <Video class="w-4 h-4" />
                <span>Video Session</span>
              </button>

              <button
                type="button"
                @click="selectedConsultation = 'office'"
                :class="[
                  'p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all',
                  selectedConsultation === 'office'
                    ? 'border-amber-500 bg-amber-500/20 text-amber-400'
                    : 'border-slate-800 bg-slate-800 text-slate-400 hover:bg-slate-700'
                ]"
              >
                <Building2 class="w-4 h-4" />
                <span>In-Office Visit</span>
              </button>
            </div>

            <!-- Date & Time Selector Inputs -->
            <div class="space-y-4">
              <div>
                <label class="block text-xs font-bold text-slate-300 mb-1">Select Date</label>
                <input
                  v-model="selectedDate"
                  type="date"
                  class="w-full bg-slate-950 border border-slate-800 rounded-xl text-xs p-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-300 mb-1">Select Time Slot</label>
                <select
                  v-model="selectedTime"
                  class="w-full bg-slate-950 border border-slate-800 rounded-xl text-xs p-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="10:00 AM">10:00 AM - 10:45 AM</option>
                  <option value="02:00 PM">02:00 PM - 02:45 PM</option>
                  <option value="04:30 PM">04:30 PM - 05:15 PM</option>
                </select>
              </div>
            </div>

            <!-- Summary Price -->
            <div class="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center text-xs">
              <span class="text-slate-400">Total Consultation Fee</span>
              <span class="text-base font-extrabold text-amber-400">{{ lawyer.hourlyRate }}</span>
            </div>

            <!-- CTA Button -->
            <RouterLink
              :to="{ name: 'client-dashboard' }"
              class="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-colors mt-6"
            >
              <CalendarCheck class="w-4 h-4" />
              <span>Confirm & Book Appointment</span>
            </RouterLink>

            <p class="mt-3 text-[10px] text-center text-slate-500">
              Encrypted connection • Instant video room access issued upon confirmation
            </p>
          </div>

        </div>

      </div>

    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500 mt-auto">
      <div class="max-w-7xl mx-auto px-4">
        &copy; 2026 LexConnect Directory. All rights reserved.
      </div>
    </footer>

  </div>
</template>