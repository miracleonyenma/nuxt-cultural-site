<script setup lang="ts">
const { entity, peopleSlug } = defineProps<{
  entity: {
    id: string;
    attributes: PracticeAttributes;
  };
  type: "practice" | "artifact";
}>();
</script>
<template>
  <UCard
    :ui="{
      rounded: 'rounded-3xl',
    }"
  >
    <div class="flex gap-4">
      <figure class="img-cont !w-52 h-52">
        <NuxtImg
          :src="entity.attributes.cover.data.attributes.url"
          class="!h-full !w-full rounded-2xl object-cover object-center"
        />
      </figure>
      <div class="flex flex-col gap-2">
        <h3 class="text-2xl font-bold">
          {{ entity.attributes.name }}
        </h3>
        <p class="text-xl">
          {{ entity.attributes.description }}
        </p>
        <div class="mt-auto">
          <UButton
            :to="`/${type}/${entity.attributes.slug}`"
            variant="soft"
            size="xl"
          >
            Explore
            <template #trailing>
              <UIcon name="i-heroicons-arrow-right" />
            </template>
          </UButton>
        </div>
      </div>
    </div>
  </UCard>
</template>
