<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import ScrollAnimation from '../../assets/animation/scroll.json'
</script>

<template>
  <div class="bg-hero bg-cover h-screen">
    <div class="bg-gradient-to-t from-brand-950 w-full h-full">
      <div class="h-full max-w-[72rem] mx-auto px-4 flex flex-col justify-center py-24 space-y-8">
        <div>
          <div
            class="w-48 py-3 font-serif text-lg flex items-center text-accent before:flex-[1_1_0%] before:border-t before:border-accent before:border-[1px] before:me-4">
            Argotentrem
          </div>
        </div>
        <!-- Title -->
        <div class="">
          <h1 class="block font-serif font-medium text-brand-50 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Mudah Dijangkau, <br>
            Sulit Dilupakan.
          </h1>
        </div>
        <!-- Paragraph -->
        <div class="max-w-3xl">
          <p class="text-lg text-brand-50">
            Terletak di kaki Gunung Lawu, Argotentrem adalah tempat yang sempurna bagi para
            pencinta alam, keluarga, dan grup untuk mengeksplorasi keindahan alam sambil merasakan kedamaian.</p>
        </div>

        <!-- Buttons -->
        <div>
          <a class="inline-flex bg-accent text-brand-950 text-sm font-bold rounded-full py-3 px-6" href="#">
            Booking Sekarang
          </a>
        </div>
        <!-- End Buttons -->
        <div class="flex items-start w-20">
          <Vue3Lottie class="" :animationData="ScrollAnimation" :height="50" :width="50" />
        </div>
      </div>
    </div>
  </div>
  <!-- End Hero -->
</template>