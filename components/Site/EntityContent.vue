<script setup lang="ts">
import { StrapiBlocks } from "vue-strapi-blocks-renderer";

defineProps<{
  entity?: Practice;
  type: "practice" | "artifact";
}>();
</script>
<template>
  <main v-if="entity">
    <section class="site-section">
      <div class="wrapper">
        <header class="site-section__header flex flex-col gap-2">
          <figure class="img-cont h-full w-full">
            <NuxtImg
              :src="entity?.attributes.cover.data.attributes.url"
              class="!h-full rounded-2xl object-cover object-center"
            />
          </figure>
          <div class="flex flex-col">
            <h2 class="text-4xl font-bold">{{ entity?.attributes.name }}</h2>
            <p class="text-xl">{{ entity?.attributes.description }}</p>
          </div>
        </header>
      </div>
    </section>
    <section class="site-section">
      <div class="wrapper">
        <StrapiBlocks
          v-if="entity?.attributes.body"
          :content="entity?.attributes.body"
        />

        <p v-else class="text-xl">No content found.</p>
      </div>
    </section>
  </main>
  <section v-else class="site-section">
    <div class="wrapper">
      <header class="site-section__header">
        <h2 class="text-4xl font-bold">
          Oops! We couldn't find that {{ type }}.
        </h2>
      </header>
    </div>
  </section>
</template>
