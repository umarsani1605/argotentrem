<script setup>
const images = [
  '@/assets/images/gallery/1.jpg',
  '@/assets/images/gallery/2.jpg',
  '@/assets/images/gallery/3.jpg',
  '@/assets/images/gallery/4.jpg',
  '@/assets/images/gallery/5.jpg',
  '@/assets/images/gallery/6.jpg',
  '@/assets/images/gallery/7.jpg',
  '@/assets/images/gallery/8.jpg',
  '@/assets/images/gallery/9.jpg',
  '@/assets/images/gallery/10.jpg',
  '@/assets/images/gallery/11.jpg',
  '@/assets/images/gallery/12.jpg',
]
</script>
<template>
  <div id="gallery" class="pt-10 pb-12 md:pt-20 md:pb-16 bg-[#1b2911]">
    <div class="mx-auto flex h-fit max-w-[20rem] flex-col sm:max-w-[44rem] lg:max-w-[72rem]">
      <div data-aos="fade-up" data-aos-duration="600" class="mb-5 flex justify-center">
        <div
          class="flex w-96 items-center py-3 font-serif text-4xl text-accent before:me-4 before:flex-[1_1_0%] before:border-[1px] before:border-t before:border-gray-200 after:ms-4 after:flex-[1_1_0%] after:border-[1px] after:border-t after:border-gray-200">
          Galeri
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="600"
        class="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-3">
        <img class="w-full h-40 object-cover" src="@/assets/images/gallery/1.jpg" alt="">
        <img class="w-full h-40 object-cover" src="@/assets/images/gallery/2.jpg" alt="">
        <img class="w-full h-40 object-cover" src="@/assets/images/gallery/3.jpg" alt="">
        <img class="w-full h-40 object-cover" src="@/assets/images/gallery/4.jpg" alt="">
        <img class="w-full h-40 object-cover" src="@/assets/images/gallery/5.jpg" alt="">
        <img class="w-full h-40 object-cover" src="@/assets/images/gallery/6.jpg" alt="">
        <img class="w-full h-40 object-cover" src="@/assets/images/gallery/7.jpg" alt="">
        <img class="w-full h-40 object-cover" src="@/assets/images/gallery/8.jpg" alt="">
        <img class="w-full h-40 object-cover" src="@/assets/images/gallery/9.jpg" alt="">
        <img class="w-full h-40 object-cover" src="@/assets/images/gallery/10.jpg" alt="">
        <img class="w-full h-40 object-cover" src="@/assets/images/gallery/11.jpg" alt="">
        <img class="w-full h-40 object-cover" src="@/assets/images/gallery/12.jpg" alt="">
      </div>
    </div>
  </div>
</template>