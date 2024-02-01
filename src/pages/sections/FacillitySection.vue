<script setup>
const facilityIcons = [
  '../../src/assets/icons/mountain.svg',
  '../../src/assets/icons/signpost.svg',
  '../../src/assets/icons/suitcase.svg',
  '../../src/assets/icons/tent.svg',
]
</script>

<template>
  <div id="second" class="pb-20">
    <div class="h-full max-w-[72rem] mx-auto px-4 flex flex-col justify-center mt-4">
      <div class="flex justify-center mb-5">
        <div
          class="w-96 py-3 font-serif text-4xl flex items-center text-brand-50 before:flex-[1_1_0%] before:border-t before:border-gray-200 before:border-[1px] before:me-4 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:border-[1px] after:ms-4">
          Fasilitas
        </div>
      </div>
      <div class="flex pt-12 gap-5">
        <div class="flex flex-col items-center">
          <img :src="facilityIcons[0]" alt="">
          <div class="text-center p-4 md:p-8">
            <h3 class="font-serif text-2xl font-bold text-gray-800 dark:text-white">
              Fasilitas 1
            </h3>
            <p class="mt-3 text-gray-500 dark:text-gray-400">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <img :src="facilityIcons[1]" alt="">
          <div class="text-center p-4 md:p-8">
            <h3 class="font-serif text-2xl font-bold text-gray-800 dark:text-white">
              Fasilitas 2
            </h3>
            <p class="mt-3 text-gray-500 dark:text-gray-400">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <img :src="facilityIcons[2]" alt="">
          <div class="text-center p-4 md:p-8">
            <h3 class="font-serif text-2xl font-bold text-gray-800 dark:text-white">
              Fasilitas 3
            </h3>
            <p class="mt-3 text-gray-500 dark:text-gray-400">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <img :src="facilityIcons[3]" alt="">
          <div class="text-center p-4 md:p-8">
            <h3 class="font-serif text-2xl font-bold text-gray-800 dark:text-white">
              Fasilitas 4
            </h3>
            <p class="mt-3 text-gray-500 dark:text-gray-400">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>