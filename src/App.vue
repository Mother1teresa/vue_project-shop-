<template>
  <div class="app">
    
    <AppHeader />

    <component :is="currentView" />

    
    <AppFooter />
  </div>
</template>

<script >




</script>

<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

  import { ref, computed } from "vue";
  import main from './components/pages/main.vue';
  import blog from './components/pages/blog.vue';
  import billing from './components/pages/billing.vue';
  import about from "./components/pages/about.vue";
  import page from "./components/pages/page.vue";

  const routes = {
    '/components/pages/main': main,
    '/components/pages/blog': blog,
    '/components/pages/billing': billing,
    '/components/pages/about' :about,
    '/components/pages/page' :page,
  };

  const currentPath = ref(window.location.hash);

  window.addEventListener("hashchange", () => {
    currentPath.value = window.location.hash;
  });

  const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || '/components/pages/main'];
  });
</script>

<style scoped></style>
