<script setup lang="ts">
import { CalendarDays, FileText, MessageSquare, Users } from 'lucide-vue-next'

defineProps<{
  title: string
  description: string
  metrics: { label: string; value: string; detail: string }[]
}>()

const icons = [CalendarDays, MessageSquare, FileText, Users]
</script>

<template>
  <section>
    <p class="text-sm font-medium text-brand-700">LexConnect workspace</p>

    <h1 class="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
      {{ title }}
    </h1>

    <p class="mt-2 max-w-2xl text-sm leading-6 text-muted sm:text-base">
      {{ description }}
    </p>

    <div class="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <article
        v-for="(metric, index) in metrics"
        :key="metric.label"
        class="rounded-xl border border-border bg-white p-5"
      >
        <div class="flex items-center justify-between gap-3">
          <p class="text-sm text-muted">{{ metric.label }}</p>
          <component :is="icons[index % icons.length]" class="h-5 w-5 text-brand-700" />
        </div>

        <p class="mt-4 text-3xl font-bold">{{ metric.value }}</p>
        <p class="mt-2 text-xs leading-5 text-muted">{{ metric.detail }}</p>
      </article>
    </div>

    <section class="mt-8 rounded-xl border border-border bg-white p-5 sm:p-6">
      <h2 class="font-semibold">Recent activity</h2>
      <p class="mt-2 text-sm leading-6 text-muted">
        This area will display role-specific appointments, notifications,
        tasks and recent activity when the corresponding screens are implemented.
      </p>
    </section>
  </section>
</template>