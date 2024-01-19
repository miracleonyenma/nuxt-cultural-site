<script setup lang="ts">
const route = useRoute();
const { fetchArtifacts } = useAPI();

const { data, error } = await useAsyncData("artifacts", () =>
  fetchArtifacts({
    slug: route.params.slug as string,
  }),
);

const artifacts = ref(data.value?.data);

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
  <SiteEntityContent :entity="artifacts?.artifacts?.data[0]" type="artifact" />
</template>
