<script setup>
// import { ref } from 'vue';

// const scrolled = ref(false)

// window.scroll(scrollFunction())
// // window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("nav").backgroundColor = "#101702";
//   } else {
//     document.getElementById("nav").className.backgroundColor = "#ffffff";
//   }
// }
</script>
<template>
  <header class="fixed z-10 w-full bg-brand-950 py-2 text-sm sm:flex-nowrap sm:justify-start md:py-3">
    <nav class="mx-auto w-full max-w-[21rem] sm:max-w-[44rem] lg:max-w-[72rem] sm:flex sm:items-center sm:justify-between"
      aria-label="Global">
      <div class="flex items-center justify-between">
        <a href="#" class="inline-flex items-center gap-x-2 font-serif text-lg font-semibold dark:text-white">
          <img class="w-10" src="/logo-color.png" alt="Logo" />
          Argotentrem
        </a>
        <div class="sm:hidden">
          <button type="button"
            class="hs-collapse-toggle inline-flex items-center justify-center gap-x-2 rounded-lg bg-white p-2 text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-transparent dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            data-hs-collapse="#navbar-image-and-text-2" aria-controls="navbar-image-and-text-2"
            aria-label="Toggle navigation">
            <svg class="h-4 w-4 flex-shrink-0 hs-collapse-open:hidden" xmlns="http://www.w3.org/2000/svg" width="32"
              height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg class="hidden h-4 w-4 flex-shrink-0 hs-collapse-open:block" xmlns="http://www.w3.org/2000/svg" width="32"
              height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      </div>
      <div id="navbar-image-and-text-2"
        class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block">
        <div class="mt-5 flex flex-col gap-5 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:ps-5">
          <a class="active text-sm leading-6 text-gray-700 hover:text-white hover:transition-all focus:text-brand-800 focus:outline-none dark:text-white dark:hover:text-brand-500 dark:focus:text-brand-500"
            href="#home">
            Beranda
          </a>
          <a class="text-sm leading-6 text-gray-700 hover:text-white hover:transition-all focus:text-brand-800 focus:outline-none dark:text-white dark:hover:text-brand-500 dark:focus:text-brand-500"
            href="#facility">
            Fasilitas
          </a>
          <a href="#gallery"
            class="text-sm leading-6 text-gray-700 hover:text-white hover:transition-all focus:text-brand-800 focus:outline-none dark:text-white dark:hover:text-brand-500 dark:focus:text-brand-500">Galeri</a>
          <a href="#location"
            class="text-sm leading-6 text-gray-700 hover:text-white hover:transition-all focus:text-brand-800 focus:outline-none dark:text-white dark:hover:text-brand-500 dark:focus:text-brand-500">Lokasi</a>
          <a href="#pricing"
            class="text-sm leading-6 text-gray-700 hover:text-white hover:transition-all focus:text-brand-800 focus:outline-none dark:text-white dark:hover:text-brand-500 dark:focus:text-brand-500">Harga
            Paket</a>
          <a href="#review"
            class="text-sm leading-6 text-gray-700 hover:text-white hover:transition-all focus:text-brand-800 focus:outline-none dark:text-white dark:hover:text-brand-500 dark:focus:text-brand-500">Review</a>
        </div>
      </div>
    </nav>
  </header>
</template>
