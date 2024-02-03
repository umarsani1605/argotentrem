<script setup>
const facilityIcons = [
  '../../src/assets/icons/mountain.svg',
  '../../src/assets/icons/signpost.svg',
  '../../src/assets/icons/suitcase.svg',
  '../../src/assets/icons/tent.svg',
]
</script>

<template>
  <div id="facility">
    <div class="mx-auto flex h-fit max-w-[21rem] flex-col sm:max-w-[44rem] lg:max-w-[72rem]">
      <div class="mb-8 flex justify-center">
        <div
          class="flex w-96 items-center py-3 font-serif text-4xl text-brand-50 before:me-4 before:flex-[1_1_0%] before:border-[1px] before:border-t before:border-gray-200 after:ms-4 after:flex-[1_1_0%] after:border-[1px] after:border-t after:border-gray-200">
          Fasilitas
        </div>
      </div>
      <div class="flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-x-2 md:gap-y-12 lg:flex-row lg:gap-12 pt-6 lg:pt-12">
        <div class="flex flex-col items-center">
          <img class="h-36" :src="facilityIcons[0]" alt="" />
          <div class="pt-6 lg:p-4 text-center md:p-5">
            <h3 class="font-serif text-2xl font-bold text-gray-800 dark:text-white">
              Fasilitas 1
            </h3>
            <p class="mt-3 text-gray-500 dark:text-brand-50">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <img class="h-36" :src="facilityIcons[1]" alt="" />
          <div class="pt-6 lg:p-4 text-center md:p-5">
            <h3 class="font-serif text-2xl font-bold text-gray-800 dark:text-white">
              Fasilitas 2
            </h3>
            <p class="mt-3 text-gray-500 dark:text-brand-50">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <img class="h-36" :src="facilityIcons[2]" alt="" />
          <div class="pt-6 lg:p-4 text-center md:p-5">
            <h3 class="font-serif text-2xl font-bold text-gray-800 dark:text-white">
              Fasilitas 3
            </h3>
            <p class="mt-3 text-gray-500 dark:text-brand-50">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <img class="h-36" :src="facilityIcons[3]" alt="" />
          <div class="pt-6 lg:p-4 text-center md:p-5">
            <h3 class="font-serif text-2xl font-bold text-gray-800 dark:text-white">
              Fasilitas 4
            </h3>
            <p class="mt-3 text-gray-500 dark:text-brand-50">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
