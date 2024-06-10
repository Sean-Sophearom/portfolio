<template>
  <component class="mx-auto px-6 sm:px-8 md:px-12 2xl:px-0 py-4 max-w-screen-xl container" :is="as">
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>

withDefaults(
  defineProps<{
    as?: string;
  }>(),
  {
    as: "div",
  }
);
</script>
