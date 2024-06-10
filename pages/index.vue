<template>
  <div class="relative flex justify-center items-end h-56 md:h-72 lg:h-80">
    <div
      class="-z-10 absolute inset-0 bg-cover bg-no-repeat bg-center blur-sm grayscale"
      :style="`background-image: url('${IMAGES.homePageBanner}')`"
    />

    <div class="translate-y-1/2">
      <NuxtImg
        class="shadow-gray-300 shadow-lg rounded-full w-44 md:w-44 lg:w-52 font-medium aspect-square"
        :src="IMAGES.profilePic"
        alt="Profile Picture"
      />
    </div>
  </div>
  <UiContainer class="mt-28">
    <h2 class="font-semibold text-3xl text-center">Sean Sophearom</h2>
    <h3 class="mt-3 text-center text-slate-600 text-xl">Fullstack Engineer</h3>

    <div class="flex justify-center items-center gap-7 mt-4">
      <template v-for="{ icon, link } in SOCIAL_LINKS">
        <NuxtLink target="_blank" :to="link" class="hover:scale-125 duration-100">
          <Icon :name="icon" class="w-6 h-6" />
        </NuxtLink>
      </template>
    </div>

    <HomepageSection>
      <h4 class="font-semibold text-xl underline underline-offset-5 select-none decoration-8 decoration-primary-200">About me</h4>
      <div class="gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div class="flex flex-col lg:justify-center gap-6 p-4 font-medium md:text-lg">
          <p>
            Hi, I'm Rom, a Fullstack Engineer with a deep passion for software and technology. With 4 years of experience in the industry,
            including 1 year of professional working experience, I have developed a strong foundation in software development, specializing
            in web technologies.
          </p>
          <p>
            As someone who enjoys recreational art and music in my free time, I have grown to appreciate the beauty and efficiency of simple
            design and clean code. I am always looking for opportunities to learn and grow, and I am excited to see where my journey in tech
            will take me.
          </p>
        </div>
        <div class="relative flex mx-auto w-full max-w-lg md:max-w-max">
          <NuxtImg alt="hobby" class="rounded-2xl object-cover" :src="IMAGES.artGallery" />
        </div>
      </div>
    </HomepageSection>

    <HomepageSection>
      <h4 class="font-semibold text-xl underline underline-offset-5 select-none decoration-8 decoration-primary-200">Experience</h4>
      <div class="md:items-center lg:items-start gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-8">
        <div class="mx-auto rounded-2xl w-full max-w-lg lg:max-h-[500px] overflow-hidden">
          <NuxtImg alt="Canadia Tower" class="md:block hidden object-cover" :src="IMAGES.canadiaTowerPortrait" loading="lazy" />
          <NuxtImg alt="Canadia Tower" class="md:hidden object-cover" :src="IMAGES.canadiaTowerLandscape" loading="lazy" />
        </div>
        <div class="flex flex-col gap-6 lg:col-span-2 p-4">
          <div>
            <h6 class="flex sm:flex-row lg:flex-row flex-col md:flex-col font-medium text-gray-900 text-lg md:text-base lg:text-lg">
              Business and Data Analyst Officer
              <NuxtLink class="md:pl-2 text-sky-400 hover:text-sky-500" to="https://www.canadiabank.com.kh/" target="_blank">
                @ Canadia Bank
              </NuxtLink>
            </h6>
            <ul class="space-y-2 mt-4 pl-4 md:pl-8 lg:pl-8 text-base lg:text-lg list-disc list-outside">
              <li>
                Built and maintained various robust web applications for internal use in order to streamline the process of different
                departments within the organization
              </li>
              <li>
                Utilized cutting-edge web technologies including Next.js, TailwindCSS, Typescript, Node.js, Express.js and PostgreSQL to
                develop web applications
              </li>
              <li>Migration of legacy systems to modern web applications to improve efficiency and ease of use for employees</li>
              <li>Responded to ad-hoc requests for data analysis and report generation from management</li>
            </ul>
          </div>
        </div>
      </div>
    </HomepageSection>

    <HomepageSection>
      <h4 class="font-semibold text-xl underline underline-offset-5 select-none decoration-8 decoration-primary-200">Achievement</h4>
      <div class="gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-4 md:mt-0">
        <div class="flex flex-col lg:justify-center gap-2 p-4">
          <h6 class="font-semibold text-lg lg:text-xl">
            First Place Winner of
            <NuxtLink class="text-sky-400 hover:text-sky-500" to="https://paragoniu.edu.kh/portfolio/cs-cup-junior-2022/" target="_blank">
              Cambodia CS CUP Junior 2022
            </NuxtLink>
          </h6>
          <p class="md:text-lg /lg:text-xl">
            In this competition, hosted by
            <NuxtLink to="https://paragoniu.edu.kh/" class="underline decoration-sky-400 hover:decoration-sky-300" target="_blank"
              >Paragon International University</NuxtLink
            >, I was able to showcase my skills in problem-solving, and critical thinking by competing against other students in a series of
            coding challenges involving the use of algorithms and data structures.
          </p>
        </div>
        <div class="flex -order-1 md:order-1 mx-auto w-full max-w-lg md:max-w-max lg:max-h-[350px]">
          <NuxtImg alt="hobby" class="rounded-2xl object-cover" :src="IMAGES.cambodiaCSCupCover" />
        </div>
      </div>
    </HomepageSection>

    <!-- <HomepageSection> -->
      <h4 class="mt-8 font-semibold text-xl underline underline-offset-5 select-none decoration-8 decoration-primary-200">Projects</h4>

      <div class="gap-4 grid lg:grid-cols-2 mt-6">
        <HomepageProjectCard v-for="project in PROJECTS" :key="project.title" v-bind="project" />
      </div>
    <!-- </HomepageSection> -->
  </UiContainer>
</template>
