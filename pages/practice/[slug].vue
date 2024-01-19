<script setup lang="ts">
const route = useRoute();
const { fetchPractices } = usePeople();

const { data, error } = await useAsyncData("practices", () =>
  fetchPractices({
    slug: route.params.slug as string,
  }),
);

const practices = ref(data.value?.data);

if (error.value) {
  console.error(error.value);
}

console.log(practices);
onMounted(async () => {
  const practices = await fetchPractices({
    slug: route.params.slug as string,
  });
  console.log(practices);
});
</script>
<template>
  <SiteEntityContent :entity="practices?.practices?.data[0]" type="practice" />
</template>
