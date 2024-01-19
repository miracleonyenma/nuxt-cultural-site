<script setup lang="ts">
const route = useRoute();
const { fetchPeople } = useAPI();

const { data, error } = await useAsyncData("people", () =>
  fetchPeople({
    slug: "omuma",
  }),
);

const people = ref(data.value?.data.peoples.data[0]);

if (error.value) {
  console.error(error.value);
}

console.log(people);
// onMounted(async () => {
//   const people = await fetchPeople({
//     slug: "omuma"
//   });
//   console.log(people);
// });
</script>
<template>
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
</template>
