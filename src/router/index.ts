// import { createRouter, createWebHistory } from 'vue-router'
// import Home from "../pages/Home.vue";

// import { type IStaticMethods } from "preline/preline";
// declare global {
//   interface Window {
//     HSStaticMethods: IStaticMethods;
//   }
// }

// const routes = [
//   { path: '/', component: Home },
// ]

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// router.afterEach((to, from, failure) => {
//   if (!failure) {
//     setTimeout(() => {
//       window.HSStaticMethods.autoInit();
//     }, 100)
//   }
// });

// export default router;