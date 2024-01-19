<script setup lang="ts">
const route = useRoute();
const { fetchPeople } = usePeople();

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
