<script setup lang="ts">
const route = useRoute();
const authLinks = [
  {
    name: "Sign In",
    to: `/login`,
  },
  {
    name: "Sign Up",
    to: `/register`,
  },
  {
    name: "Forgot Password",
    to: `/forgot-password`,
    hidden: true,
  },
];
</script>
<template>
  <div class="flex flex-col gap-4 lg:grid grid-cols-2">
    <AuthAside />
    <main class="col-span-1">
      <div class="flex flex-col items-center justify-center h-screen">
        <div class="flex flex-col gap-4">
          <ul class="flex gap-2 py-4">
            <li v-for="link in authLinks" :key="link.name">
              <ULink
                :to="link.to"
                :class="{
                  'dark:text-gray-100 text-gray-800 font-semibold':
                    route.path === link.to,
                  'dark:text-gray-500': route.path !== link.to,
                  hidden: link.hidden && route.path !== link.to,
                }"
              >
                {{ link.name }}
              </ULink>
            </li>
          </ul>
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>
