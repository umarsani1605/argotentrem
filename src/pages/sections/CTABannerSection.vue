<script setup>
import BookButton from "@/components/BookButton.vue";
</script>
<template>
  <div class="h-[160px] lg:h-[250px] mt-10 bg-cta bg-brand-900">
    <div
      class="max-w-[21rem] sm:max-w-[44rem] lg:max-w-[72rem] mx-auto flex py-5 flex-col lg:flex-row gap-4 lg:justify-between lg:items-center h-full">
      <div class="font-serif text-2xl lg:max-w-[32rem] lg:text-4xl">Nikmati perkemahan yang indah dan nyaman.</div>
      <div class="h-fit flex justify-start lg:justify-end">
        <BookButton />
      </div>
    </div>
  </div>
</template>

<!-- <script setup>
</script>
<template>
  <div class="h-[250px] mt-10 bg-cta bg-brand-900/50">
    <div class="h-full max-w-[72rem] mx-auto px-4 grid grid-cols-2 gap-20 py-4 items-center">
      <div class="max-w-[32rem] font-serif text-4xl">Nikmati perkemahan yang indah dan nyaman.</div>
      <div>
        <div class="flex justify-end">
          <a class="inline-flex bg-accent text-brand-950 text-sm font-bold rounded-full py-3 px-6" href="#">
            Booking Sekarang
          </a>
        </div>
      </div>
    </div>
  </div>
</template> -->