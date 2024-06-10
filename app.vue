<template>
  <NuxtLoadingIndicator />
  <NuxtPage />
</template>

<script lang="ts" setup>
useHead({
  htmlAttrs: {
    lang: "en",
  },
  titleTemplate(title) {
    return title ? `${title} | Sean Sophearom` : "Sean Sophearom";
  },
});
</script>
