<script setup lang="ts">
const { siteUrl } = useRuntimeConfig();

useHead({
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100;0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900;0,9..40,1000;1,9..40,100;1,9..40,200;1,9..40,300;1,9..40,400;1,9..40,500;1,9..40,600;1,9..40,700;1,9..40,800;1,9..40,900;1,9..40,1000&display=swap",
    },
  ],
});
useSeoMeta({
  title: "Cultural Showcase Website",
  description: "Cultural and Traditional practices showcase website",
  ogDescription: "Cultural and Traditional practices showcase website",
  ogTitle: "Cultural Showcase Website",
  ogImage: "/images/heritage-pageant-2.jpg",
  ogUrl: siteUrl,
  ogSiteName: "Cultural Showcase Website",
  ogType: "website",
  ogLocale: "en_US",
  twitterCard: "summary_large_image",
  twitterSite: "@cultural-showcase",
  twitterCreator: "@cultural-showcase",
  twitterTitle: "Cultural Showcase Website",
  twitterDescription: "Cultural and Traditional practices showcase website",
  twitterImage: "/images/heritage-pageant-2.jpg",
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
