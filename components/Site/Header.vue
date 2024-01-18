<template>
  <header
    class="site-header fixed z-20 top-0 left-0 w-full bg-gray-50 dark:bg-gray-800 p-4"
  >
    <div class="wrapper flex items-center justify-between">
      <NuxtLink to="/" class="site-header__logo"> Cultural Site </NuxtLink>

      <SiteSearchField />

      <SiteNav />
    </div>
  </header>
</template>
