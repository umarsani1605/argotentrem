<script setup>
const images = [
  '../../src/assets/images/gallery/1.jpg',
  '../../src/assets/images/gallery/2.jpg',
  '../../src/assets/images/gallery/3.jpg',
  '../../src/assets/images/gallery/4.jpg',
  '../../src/assets/images/gallery/5.jpg',
  '../../src/assets/images/gallery/6.jpg',
  '../../src/assets/images/gallery/7.jpg',
  '../../src/assets/images/gallery/8.jpg',
  '../../src/assets/images/gallery/9.jpg',
  '../../src/assets/images/gallery/10.jpg',
  '../../src/assets/images/gallery/11.jpg',
  '../../src/assets/images/gallery/12.jpg',
]
</script>
<template>
  <div id="gallery" class="py-10 lg:py-20">
    <div class="mx-auto flex h-fit max-w-[21rem] flex-col sm:max-w-[44rem] lg:max-w-[72rem]">
      <div class="mb-5 flex justify-center">
        <div
          class="flex w-96 items-center py-3 font-serif text-4xl text-brand-50 before:me-4 before:flex-[1_1_0%] before:border-[1px] before:border-t before:border-gray-200 after:ms-4 after:flex-[1_1_0%] after:border-[1px] after:border-t after:border-gray-200">
          Galeri
        </div>
      </div>
      <div class="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4">
        <div v-for="image in images" :key="image">
          <img class="w-full h-40 object-cover" :src="image" alt="">
        </div>
      </div>
    </div>
  </div>
</template>