<script setup lang="ts">
const route = useRoute();
const { fetchArtifacts } = usePeople();

const { data, error } = await useAsyncData("artifacts", () =>
  fetchArtifacts({
    slug: route.params.slug as string,
  }),
);

const artifacts = ref(data.value?.data.artifactss.data[0]);

if (error.value) {
  console.error(error.value);
}

console.log(artifacts);
onMounted(async () => {
  const artifacts = await fetchArtifacts({
    slug: route.params.slug as string,
  });
  console.log(artifacts);
});
</script>
<template>
  {{ artifacts }}
</template>
