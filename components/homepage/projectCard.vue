<template>
  <NuxtLink :to="`/project?title=${props.title}`" class="border-2 border-primary-300 p-4 border-dashed md:border-dashed rounded-lg overflow-hidden">
    <NuxtImg :src="props.cover" :alt="props.title" class="shadow-md rounded-lg" />
    <div class="flex justify-between items-center mt-6 px-2 pb-2">
      <h4 class="flex items-center gap-2 font-medium text-lg md:text-xl">
        {{ props.title }}<Icon :name="props.technologies[0].icon" class="w-6 h-6" />
      </h4>

      <button class="bg-secondary-500 hover:bg-secondary-500/80 px-4 py-2 rounded-lg font-medium text-white">View Detail</button>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import type { Project } from "~/utils/types";

const props = defineProps<Project>();
</script>
