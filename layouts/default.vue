<script>
const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }
  return null;
};

onMounted(() => {
  const user = getUserFromLocalStorage();
  if (user) {
    setUser(user);
  }
});
</script>
<template>
  <div>
    <SiteHeader />
    <slot />
  </div>
</template>
