<script setup>
import { onMounted } from 'vue'

// const clickHandler = (e) => {
//   console.log('Clicked!');
// }

// onMounted(() => {

// })
</script>
<template>
  <header class="fixed z-20 w-full bg-brand-950 py-2 text-sm sm:flex-nowrap sm:justify-start md:py-3">
    <nav class="mx-auto w-full max-w-[21rem] sm:flex sm:max-w-[44rem] sm:items-center sm:justify-between lg:max-w-[72rem]"
      aria-label="Global">
      <div class="flex items-center justify-between">
        <a href="#" class="inline-flex items-center gap-x-2 font-serif text-lg font-semibold text-white">
          <img class="w-10" src="/logo-color.png" alt="Logo" />
          Argotentrem
        </a>
        <div class="sm:hidden">
          <button type="button"
            class="hs-collapse-toggle inline-flex items-center justify-center gap-x-2 rounded-lg p-2 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 border-gray-700 bg-transparent text-white hover:bg-white/10 focus:outline-none focus:ring-1 focus:ring-gray-600"
            data-hs-collapse="#navbar-image-and-text-2" aria-controls="navbar-image-and-text-2"
            aria-label="Toggle navigation">
            <svg class="h-5 w-5 flex-shrink-0 hs-collapse-open:hidden" xmlns="http://www.w3.org/2000/svg" width="32"
              height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg class="hidden h-5 w-5 flex-shrink-0 hs-collapse-open:block" xmlns="http://www.w3.org/2000/svg" width="32"
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
        <div class="mb-3 mt-5 flex flex-col gap-4 sm:mb-0 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:ps-5">
          <a class="active text-md leading-6 text-white hover:text-brand-500 hover:transition-all focus:text-brand-500 focus:outline-none"
            href="#home">
            Beranda
          </a>
          <a class="text-md leading-6 text-white hover:text-brand-500 hover:transition-all focus:outline-none dark:focus:text-brand-500"
            href="#facility">
            Fasilitas
          </a>
          <a href="#gallery"
            class="text-md leading-6 text-white hover:text-brand-500 hover:transition-all focus:outline-none dark:focus:text-brand-500">Galeri</a>
          <a href="#location"
            class="text-md leading-6 text-white hover:text-brand-500 hover:transition-all focus:outline-none dark:focus:text-brand-500">Lokasi</a>
          <a href="#pricing"
            class="text-md leading-6 text-white hover:text-brand-500 hover:transition-all focus:outline-none dark:focus:text-brand-500">Harga
            Paket</a>
          <a href="#review"
            class="text-md leading-6 text-white hover:text-brand-500 hover:transition-all focus:outline-none dark:focus:text-brand-500">Review</a>
        </div>
      </div>
    </nav>
  </header>
</template>