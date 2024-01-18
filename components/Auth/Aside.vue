<template>
  <aside class="col-span-1 lg:h-screen">
    <UCard
      :ui="{
        rounded: 'lg:rounded-l-none',
        footer: {
          base: 'flex flex-col gap-4',
          padding: 'mt-auto py-16',
          background:
            'bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg border-none',
        },
      }"
      class="h-full flex flex-col bg-[url('/images/heritage-pageant-6.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <template #header>
        <SiteNav />
      </template>
      <template #footer>
        <h2 class="text-4xl font-bold leading-7">
          Cultural and traditional practices showcase and sharing platform
        </h2>
        <p>
          Join us in our journey to preserve and share our cultural and
          traditional practices with the world.
        </p>
      </template>
    </UCard>
  </aside>
</template>
