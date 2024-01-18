<script setup lang="ts">
const { people } = defineProps<{
  people: PeopleData;
}>();
</script>
<template>
  <UCard
    class="overflow-hidden"
    :ui="{
      body: {
        padding: 'p-0 sm:p-0',
      },
    }"
  >
    <div class="relative">
      <figure class="img-cont !absolute left-0 top-0 h-full w-full">
        <NuxtImg
          :src="people.attributes.cover.data.attributes.url"
          class="!h-full object-cover object-center"
        />
      </figure>

      <header
        class="relative bg-gradient-to-r from-slate-200 via-slate-200/90 to-slate-200/40 p-4 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-900/40"
      >
        <div class="flex w-96 flex-col gap-2">
          <h3 class="text-4xl font-bold">
            {{ people.attributes.name }}
          </h3>
          <p class="text-xl">{{ people.attributes.description }}</p>
          <UButton :to="people.attributes.slug" variant="soft" size="xl">
            Explore
            <template #trailing>
              <UIcon name="i-heroicons-arrow-right" />
            </template>
          </UButton>
        </div>
      </header>
    </div>
  </UCard>
</template>
