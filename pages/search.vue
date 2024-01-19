<script setup lang="ts">
const route = useRoute();
const query = route.query;
console.log(query);
</script>
<template>
  <main>
    <section class="site-section">
      <div class="wrapper">
        <header class="site-section__header">
          <h2 class="text-4xl font-bold">Search</h2>
        </header>
      </div>
    </section>
  </main>
</template>
