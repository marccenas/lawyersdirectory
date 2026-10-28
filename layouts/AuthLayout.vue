<template>
  <main class="flex min-h-screen items-center justify-center bg-page px-4 py-10">
    <div class="w-full max-w-md">
      <RouterLink to="/" class="mb-8 flex items-center justify-center gap-2 text-xl font-bold text-brand-950">
        <span class="text-brand-500">⚖</span>
        LexConnect
      </RouterLink>

      <div class="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
        <RouterView />
      </div>

      <p class="mt-6 text-center text-xs text-muted">
        LexConnect · Philippine legal services directory
      </p>
    </div>
  </main>
</template>