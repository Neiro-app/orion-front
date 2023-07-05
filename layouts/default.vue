<template>
  <div class="site">
    <AppHeader />
    <main class="main">
      <div class="container">
        <NuxtPage />
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.4s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
  }
</style>
