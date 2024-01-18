<template>
  <header
    class="site-header sticky left-0 top-0 z-20 w-full bg-gray-50 p-4 dark:bg-gray-800"
  >
    <div class="wrapper mx-auto flex max-w-6xl items-center justify-between">
      <NuxtLink to="/" class="site-header__logo"> Cultural Site </NuxtLink>

      <SiteSearchField />

      <SiteNav />
    </div>
  </header>
</template>
