<script setup lang="ts">
import { usePeople } from "~/composables/api";

const { fetchPeoples } = usePeople();
const { data, error } = await useAsyncData("people", () => fetchPeoples({}));
const peoples = ref(data.value?.data.peoples);
// const people = [
//   {
//     name: "Omuma",
//     description: "The omuma people",
//     coverImage: "/images/heritage-pageant-3.jpg",
//   },
// ];

if (error.value) {
  console.error(error.value);
}

console.log(data.value?.data.peoples);

onMounted(async () => {
  const people = await fetchPeoples({});
  console.log(people);
});
</script>
<template>
  <main>
    <section
      class="site-section relative bg-[url('/images/heritage-pageant-4.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div
        class="absolute bottom-0 left-0 h-full w-full bg-gradient-to-br from-slate-200 via-slate-200/90 to-slate-200/40 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-900/40"
      ></div>
      <div class="wrapper relative flex h-[36rem] items-center justify-center">
        <header class="relative flex flex-col gap-2">
          <h1 class="text-6xl font-bold">
            Cultural and Traditional Practices Heritage
          </h1>
          <p class="text-xl lg:text-2xl">
            Join us in our journey to preserve and share our cultural and
            traditional practices with the world.
          </p>
        </header>
        <!-- <SiteCarousel class="absolute top-0 left-0 w-full h-full" /> -->
      </div>
    </section>
    <section class="site-section">
      <div class="wrapper flex flex-col gap-12">
        <header class="site-section__header">
          <h2 class="text-4xl font-bold">Explore People</h2>
        </header>
        <div>
          <ul v-if="peoples" class="flex flex-col gap-4">
            <li
              v-for="people in peoples.data"
              :key="people.id"
              class="flex flex-col gap-4"
            >
              <PeopleCard :people="people" />
            </li>
          </ul>
          <div v-else>
            <p>No people found</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
