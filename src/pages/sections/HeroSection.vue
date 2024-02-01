<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import ScrollAnimation from '../../assets/animation/scroll.json'
</script>

<template>
  <div id="first" class="h-screen">
    <div class="h-full max-w-[72rem] mx-auto px-4 flex flex-col justify-end pt-64 pb-12">
      <div class="space-y-8">
        <div
          class="w-48 py-3 font-serif text-lg flex items-center text-accent before:flex-[1_1_0%] before:border-t before:border-accent before:border-[1px] before:me-4">
          Argotentrem
        </div>
        <h1 class="block font-serif font-medium text-brand-50 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Mudah Dijangkau, <br>
          Sulit Dilupakan.
        </h1>
        <p class="text-lg text-brand-50">
          Terletak di kaki Gunung Lawu, Argotentrem adalah tempat yang sempurna bagi para
          pencinta alam, keluarga, dan grup untuk mengeksplorasi keindahan alam sambil merasakan kedamaian.</p>
        <a class="inline-flex bg-accent text-brand-950 text-sm font-bold rounded-xl py-3 px-5" href="#">
          Booking Sekarang
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-5 ml-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>

        </a>
      </div>
      <div class="h-20 mt-24">
        <Vue3Lottie :animationData="ScrollAnimation" :height="50" :width="100" />
      </div>
    </div>
    <div class="flex flex-col justify-end h-screen relative top-[-100vh] -z-20 bg-hero bg-cover ">
      <div class="h-1/2 bg-gradient-to-bl from-brand-950/30 w-full">
      </div>
      <div class="h-1/2 bg-gradient-to-t from-brand-950 w-full">
      </div>
    </div>

  </div>
</template>