<template>
  <header class="fixed sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4">
    <nav class="max-w-[72rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
      <div class="flex items-center justify-between">
        <a href="#" class="inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white">
          <img class="w-10 h-auto" src="/logo-color.png" alt="Logo">
          Argotentrem
        </a>
        <div class="sm:hidden">
          <button type="button"
            class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            data-hs-collapse="#navbar-image-and-text-2" aria-controls="navbar-image-and-text-2"
            aria-label="Toggle navigation">
            <svg class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg class="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      </div>
      <div id="navbar-image-and-text-2"
        class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
        <div class="
              flex flex-col
              gap-5
              mt-5
              sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5
            ">
          <a class="
                text-sm text-gray-700
                leading-6
                hover:text-white
                focus:outline-none focus:text-blue-600
                dark:text-white dark:hover:text-gray-500 dark:focus:text-blue-500
                active
              " href="#first">
            Beranda
          </a>
          <a class="
                text-sm text-gray-700
                leading-6
                hover:text-white
                focus:outline-none focus:text-blue-600
                dark:text-white dark:hover:text-gray-500 dark:focus:text-blue-500
              " href="#second">
            Fasilitas
          </a>
          <a href="#third" class="text-sm text-gray-700
                leading-6
                hover:text-white
                focus:outline-none focus:text-blue-600
                dark:text-white dark:hover:text-gray-500 dark:focus:text-blue-500">Galeri</a>
          <a href="#fourth" class="text-sm text-gray-700
                leading-6
                hover:text-white
                focus:outline-none focus:text-blue-600
                dark:text-white dark:hover:text-gray-500 dark:focus:text-blue-500">Lokasi</a>
          <a href="#fifth" class="text-sm text-gray-700
                leading-6
                hover:text-white
                focus:outline-none focus:text-blue-600
                dark:text-white dark:hover:text-gray-500 dark:focus:text-blue-500">Review</a>
        </div>
      </div>
    </nav>
  </header>
</template>