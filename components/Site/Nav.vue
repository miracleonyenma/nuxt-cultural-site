<script setup lang="ts">
const links = [
  {
    label: "Artifacts",
    // icon: "i-heroicons-home",
    to: "/artifacts",
  },
  {
    label: "Practices",
    // icon: "i-heroicons-home",
    to: "/practices",
  },
  {
    label: "Sign In",
    // icon: "i-heroicons-home",
    to: "/login",
  },
  {
    label: "Register",
    // icon: "i-heroicons-home",
    to: "/register",
  },
];

const isOpen = ref(false);
</script>
<template>
  <div>
    <UButton icon="i-heroicons-bars-3" @click="isOpen = true" />

    <USlideover v-model="isOpen">
      <UCard
        class="flex flex-col flex-1"
        :ui="{
          body: { base: 'flex-1' },
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3
              class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Navigation
            </h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isOpen = false"
            />
          </div>
        </template>
        <div class="flex-col flex gap-4">
          <SiteSearchField class="w-full" />
          <!-- <UDivider /> -->
          <UVerticalNavigation :links="links" />
        </div>
      </UCard>
    </USlideover>
  </div>
</template>
