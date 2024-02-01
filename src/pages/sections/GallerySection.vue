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
  <div id="third" class="py-20">
    <div class="h-full max-w-[72rem] mx-auto px-4 flex flex-col py-4">
      <div class="flex justify-center mb-5">
        <div
          class="w-96 py-3 font-serif text-4xl flex items-center text-brand-50 before:flex-[1_1_0%] before:border-t before:border-gray-200 before:border-[1px] before:me-4 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:border-[1px] after:ms-4">
          Gallery
        </div>
      </div>
      <div class="grid grid-cols-4 gap-4">
        <div v-for="image in images" :key="image">
          <img class="w-full h-40 object-cover" :src="image" alt="">
        </div>
      </div>
    </div>
  </div>
</template>