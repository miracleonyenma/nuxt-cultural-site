// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available server-side

    public: {
      siteUrl: process.env.SITE_URL || "http://localhost:3000",
      apiUrl: process.env.API_URL || "http://localhost:1337",
      graphqlUrl:
        process.env.GRAPHQL_API_URL || "http://localhost:1337/graphql",
      apiReadToken: process.env.API_READ_TOKEN || "",
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/ui", "@nuxt/image"],
});
