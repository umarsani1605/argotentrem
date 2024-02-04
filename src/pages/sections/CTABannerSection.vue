<script setup>
import BookButton from '@/components/BookButton.vue'
</script>
<template>
  <div class="mt-10 md:mt-10 lg:mt-0 h-[160px] bg-brand-900/75 bg-cta lg:h-[225px]">
    <div data-aos="fade-up" data-aos-duration="800"
      class="mx-auto flex h-full max-w-[21rem] flex-col gap-4 py-5 sm:max-w-[44rem] md:max-w-[44rem] md:flex-row md:items-center md:justify-between lg:max-w-[72rem] lg:flex-row lg:items-center lg:justify-between">
      <div class="font-serif text-2xl md:max-w-[24rem] md:text-3xl lg:max-w-[32rem] lg:text-4xl">
        Nikmati perkemahan yang indah dan nyaman.
      </div>
      <div class="flex h-fit justify-start md:justify-end lg:justify-end">
        <BookButton />
      </div>
    </div>
  </div>
</template>