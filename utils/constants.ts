import type { Project } from "./types";

export const IMAGES = {
  artGallery:
    "https://firebasestorage.googleapis.com/v0/b/picbucket.appspot.com/o/45FD4AB6-6B90-4932-9C5D-604449E76822_1717144365874.jpeg?alt=media&token=ae101acf-546a-4f90-9989-3d22109b3c56",
  homePageBanner:
    "https://firebasestorage.googleapis.com/v0/b/picbucket.appspot.com/o/2F8CD0ED-02FD-401A-BF68-491ACF58D045_1717138997075.jpeg?alt=media&token=092762be-8d13-4916-a550-6b85f8beb283",
  profilePic:
    "https://firebasestorage.googleapis.com/v0/b/picbucket.appspot.com/o/IMG_1887_1717146950857.jpeg?alt=media&token=bf72da33-3970-4a8e-85f4-a769d8c94644",
  profilePic2:
    "https://firebasestorage.googleapis.com/v0/b/picbucket.appspot.com/o/21731752_1898699960452719_1188579969643984158_osq_1717147070968.jpg?alt=media&token=7d90f662-e9fa-45fd-aae2-d144064d83f1",
  canadiaTowerPortrait:
    "https://firebasestorage.googleapis.com/v0/b/picbucket.appspot.com/o/img2.jpg?alt=media&token=499a1e73-6e24-4143-ad79-e1335cddd4dd",
  canadiaTowerLandscape:
    "https://firebasestorage.googleapis.com/v0/b/picbucket.appspot.com/o/canadia-tower-phnom-penh-(1)_1717635230581.jpg?alt=media&token=b4937d54-04b1-4a18-9519-89408a0fc63b",
  cambodiaCSCupCover:
    "https://firebasestorage.googleapis.com/v0/b/picbucket.appspot.com/o/DSC09498_1717635253275.jpg?alt=media&token=e12f1a6d-3324-4894-ab30-1518322259dc",
  pygameLogo:
    "https://firebasestorage.googleapis.com/v0/b/picbucket.appspot.com/o/170405943-e75458ec-6cb4-462e-91ba-43c861a3d6cf_1717695247764.png?alt=media&token=0a7422f4-ec87-497f-a9a7-222592a1e361",
  picbucket: {
    homePage:
      "https://firebasestorage.googleapis.com/v0/b/picbucket.appspot.com/o/Screenshot%202024-06-06%20074322_1717634656405.png?alt=media&token=4393bc2c-2ae1-4246-8fa5-0637ae63db18",
    signinPage:
      "https://firebasestorage.googleapis.com/v0/b/picbucket.appspot.com/o/Screenshot%202024-06-06%20074830_1717634948666.png?alt=media&token=66e3621e-956c-4994-9307-024c0026f016",
    uploadPage:
      "https://firebasestorage.googleapis.com/v0/b/picbucket.appspot.com/o/Screenshot%202024-06-06%20075020_1717635047636.png?alt=media&token=fe806e43-0c5c-4912-b1e5-4957156bc1ef",
    profilePage:
      "https://firebasestorage.googleapis.com/v0/b/picbucket.appspot.com/o/Screenshot%202024-06-06%20075039_1717635066980.png?alt=media&token=9fc4d724-bc23-4656-aaa7-769119134b44",
  },
  monsterHunter: {
    homeScreen:
      "https://firebasestorage.googleapis.com/v0/b/picbucket.appspot.com/o/Screenshot%202024-03-24%20222417_1717659455043.png?alt=media&token=faa1ec4b-6869-44d4-a6e0-5803e25776a5",
    gameScreen:
      "https://firebasestorage.googleapis.com/v0/b/picbucket.appspot.com/o/Screenshot%202024-03-24%20222942_1717659510890.png?alt=media&token=d73f5bc4-43bc-4379-b168-86d1762df3d2",
    upgradeScreen:
      "https://firebasestorage.googleapis.com/v0/b/picbucket.appspot.com/o/Screenshot%202024-03-24%20222754_1717659486404.png?alt=media&token=e4440a36-4c56-407f-8195-a234e5636c0c",
  },
};

const TECHNOLOGIES = {
  nuxtJs: {
    name: "Nuxt.js",
    icon: "logos:nuxt-icon",
  },
  vue3: {
    name: "Vue3",
    icon: "logos:vue",
  },
  typescript: {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  firebase: {
    name: "Firebase",
    icon: "logos:firebase",
  },
  tailwindCss: {
    name: "Tailwind CSS",
    icon: "logos:tailwindcss-icon",
  },
  python: {
    name: "Python",
    icon: "logos:python",
  },
  mongodb: {
    name: "MongoDB",
    icon: "logos:mongodb-icon",
  },
  authJs: {
    name: "Auth0",
    icon: "logos:auth0-icon",
  },
  zod: {
    name: "Zod",
    icon: "logos:zod",
  },
  pinia: {
    name: "Pinia",
    icon: "logos:pinia",
  },
  pygame: {
    name: "Pygame",
    icon: IMAGES.pygameLogo,
    isImage: true,
  },
};

export const PROJECTS: Project[] = [
  {
    title: "Picbucket",
    description:
      "Picbucket is a full-stack photo hosting platform where users can upload their photos and get an embed link to share with others or use on their own websites.",
    cover: IMAGES.picbucket.homePage,
    screenshots: [...Object.values(IMAGES.picbucket)],
    src: "https://github.com/Sean-Sophearom/picbucket",
    link: "https://picbucket.vercel.app",
    technologies: [
      TECHNOLOGIES.nuxtJs,
      TECHNOLOGIES.vue3,
      TECHNOLOGIES.pinia,
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.firebase,
      TECHNOLOGIES.mongodb,
      TECHNOLOGIES.tailwindCss,
      TECHNOLOGIES.authJs,
      TECHNOLOGIES.zod
    ],
  },
  {
    title: "Monster Hunter",
    description:
      "Monster Hunter is a simple game built as an assignment for my University class. In this game, you play as a hunter who hunts monsters to earn gems and experience point and upgrade your equipment.",
    cover: IMAGES.monsterHunter.homeScreen,
    screenshots: [...Object.values(IMAGES.monsterHunter)],
    src: "https://github.com/Sean-Sophearom/Python-Monster-Hunter",
    link: "",
    technologies: [TECHNOLOGIES.python, TECHNOLOGIES.pygame],
  },
];

export const SOCIAL_LINKS = [
  {
    icon: "ph:github-logo",
    link: "https://github.com/Sean-Sophearom",
  },
  {
    icon: "ph:linkedin-logo",
    link: "https://www.linkedin.com/in/sean-sophearom/",
  },
  {
    icon: "ph:envelope-open",
    link: "mailto:sean.sophearom77@gmail.com",
  },
];
