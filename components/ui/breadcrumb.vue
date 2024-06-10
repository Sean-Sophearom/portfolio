<template>
  <div class="flex items-center gap-2 capitalize">
    <template v-for="{ path, url, isLast } in routes">
      <NuxtLink
        :to="url"
        :class="`relative font-semibold group ${isLast ? 'pointer-events-none' : ''}`"
        :aria-current="isLast ? 'page' : undefined"
      >
        {{ path }}
        <div
          class="group-hover:scale-x-100 top-full left-0 absolute bg-primary-900 rounded-full w-full h-[2px] origin-left transition-all duration-300 scale-x-0"
        />
      </NuxtLink>
      <Icon v-if="!isLast" name="material-symbols-light:arrow-forward-ios-rounded" aria-hidden="true" />
    </template>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const { path } = route;

const routes = computed(() => {
  const splitPath = path.split("/");
  return splitPath.map((path, idx) => {
    if (idx === 0) {
      return {
        path: "home",
        url: "/",
        isLast: false,
      };
    }

    const isLast = idx === splitPath.length - 1;
    const url = splitPath.slice(0, idx + 1).join("/");
    return { path, url, isLast };
  });
});
</script>
