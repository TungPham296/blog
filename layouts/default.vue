<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>
<script setup>
import AppHeader from "~/components/web/layouts/AppHeader.vue";
import AppFooter from "~/components/web/layouts/AppFooter.vue";
</script>
