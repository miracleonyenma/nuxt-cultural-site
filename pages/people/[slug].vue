<script setup lang="ts">
const route = useRoute();
const { fetchPeople } = useAPI();

const { data, error } = await useAsyncData("people", () =>
  fetchPeople({
    slug: route.params.slug as string,
  }),
);

const people = ref(data.value?.data.peoples.data[0]);

if (error.value) {
  console.error(error.value);
}

console.log(people);
// onMounted(async () => {
//   const people = await fetchPeople({
//     slug: route.params.slug as string,
//   });
//   console.log(people);
// });
</script>
<template>
  <main>
    <template v-if="people">
      <section class="site-section">
        <div class="wrapper relative overflow-hidden rounded-2xl">
          <header
            class="site-section__header relative z-10 bg-gradient-to-r from-slate-200 via-slate-200/90 to-slate-200/40 p-12 py-24 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-900/40"
          >
            <h2 class="text-4xl font-bold">{{ people?.attributes.name }}</h2>
            <p class="text-xl">
              {{ people?.attributes.description }}
            </p>
          </header>
          <figure class="img-cont !absolute left-0 top-0 h-full w-full">
            <NuxtImg
              :src="people?.attributes.cover.data.attributes.url"
              class="!h-full object-cover object-center"
            />
          </figure>
        </div>
      </section>
      <section class="site-section">
        <div class="wrapper flex flex-col gap-12">
          <header class="site-section__header">
            <h2 class="text-4xl font-bold">Explore practices</h2>
          </header>
          <div class="flex flex-col gap-4">
            <ul v-if="people" class="flex flex-col gap-4">
              <li
                v-if="people.attributes.practices"
                v-for="practice in people.attributes.practices.data"
                :key="practice.id"
                class="flex flex-col gap-4"
              >
                <PracticeCard :entity="practice" type="practice" />
              </li>
            </ul>
            <div v-else>
              <p>No practices found</p>
            </div>
          </div>
        </div>
      </section>
      <section class="site-section">
        <div class="wrapper flex flex-col gap-12">
          <header class="site-section__header">
            <h2 class="text-4xl font-bold">Explore Artifacts</h2>
          </header>
          <div class="flex flex-col gap-4">
            <ul v-if="people" class="flex flex-col gap-4">
              <li
                v-if="people.attributes.artifacts"
                v-for="artifact in people.attributes.artifacts.data"
                :key="artifact.id"
                class="flex flex-col gap-4"
              >
                <PracticeCard :entity="artifact" type="artifact" />
              </li>
            </ul>
            <div v-else>
              <p>No artifacts found</p>
            </div>
          </div>
        </div>
      </section>
    </template>
    <template v-else>
      <section class="site-section py-40">
        <div class="wrapper">
          <header class="site-section__header">
            <h2 class="text-4xl font-bold">
              Oops! We couldn't find that page.
            </h2>
          </header>
        </div>
      </section>
    </template>
  </main>
</template>
