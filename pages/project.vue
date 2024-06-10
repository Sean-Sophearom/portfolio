<template>
  <UiContainer>
    <UiBreadcrumb />

    <div class="border-primary-200 mt-2 border-b" />

    <div class="flex bg-gray-100/80 mt-4 rounded-lg overflow-hidden">
      <NuxtImg :src="project.cover" :alt="project.title" class="border-primary-200 mx-auto border rounded-lg max-h-[420px]" />
    </div>

    <section class="flex flex-col gap-3 py-4">
      <h1 class="font-semibold md:font-medium text-lg sm:text-xl md:text-2xl">{{ project.title }}</h1>
      <p class="sm:text-lg">{{ project.description }}</p>

      <div v-if="project.link" class="flex gap-2">
        <h2 class="font-semibold">Live Preview:</h2>
        <NuxtLink target="_blank" :to="project.link" class="text-blue-500 hover:text-blue-600 underline">{{ project.link }}</NuxtLink>
      </div>

      <div class="flex items-center gap-2">
        <h2 class="font-semibold">Source Code:</h2>
        <NuxtLink target="_blank" :to="project.src" class="flex items-center gap-1">
          <Icon name="mdi:github" class="w-6 h-6" />
          <span>GitHub</span>
        </NuxtLink>
      </div>

      <div class="flex flex-wrap items-center gap-4">
        <h2 class="font-semibold">Technologies:</h2>
        <div class="flex flex-wrap items-center gap-6">
          <div v-for="tech in project.technologies" class="flex items-center gap-1">
            <img v-if="tech.isImage" :src="tech.icon" class="w-6 h-6" />
            <Icon v-else :name="tech.icon" class="w-6 h-6" />
            <span>{{ tech.name }}</span>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap items-center gap-4">
        <h2 class="font-semibold">Screenshots:</h2>
        <div class="place-items-center gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <NuxtImg v-for="screenshot in project.screenshots" :key="screenshot" :src="screenshot" class="border-2 border-primary-200 p-1 border-dashed rounded-lg" />
        </div>
      </div>
    </section>
  </UiContainer>
</template>

<script lang="ts" setup>
const route = useRoute();
const { title } = route.query;

const project = PROJECTS.find((proj) => proj.title === title) as Project;

if (!project) {
  await navigateTo("/");
}
</script>
