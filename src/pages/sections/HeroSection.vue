<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import ScrollAnimation from '../../assets/animation/scroll.json'
import BookButton from '@/components/BookButton.vue';
</script>

<template>
  <div id="home" class="h-screen ">
    <div
      class="mx-auto flex h-full pb-8 max-w-[21rem] md:max-w-[44rem] lg:max-w-[72rem] lg:pb-4 flex-col justify-end 2xl:pb-12">
      <div class="md:w-3/4 lg:w-3/4">
        <div
          class="flex w-48 lg:w-52 items-center pb-3 font-serif text-lg lg:text-xl text-accent before:me-4 before:flex-[1_1_0%] before:border-[1px] before:border-t before:border-accent">
          Argotentrem
        </div>
        <h1 class="font-serif text-3xl font-medium text-brand-50 md:text-5xl lg:text-6xl 2xl:text-7xl lg:leading-snug">
          Mudah Dijangkau, <br />
          Sulit Dilupakan.
        </h1>
        <p class="text-md lg:text-lg text-brand-50 py-5 lg:py-8">
          Terletak di kaki Gunung Lawu, Argotentrem adalah tempat yang sempurna
          bagi para pencinta alam, keluarga, dan grup untuk mengeksplorasi
          keindahan alam sambil merasakan kedamaian.
        </p>
        <BookButton />
      </div>
      <div class="md:mt-16 lg:mt-12 2xl:mt-24 h-20 hidden md:block lg:block">
        <Vue3Lottie :animationData="ScrollAnimation" :height="50" :width="100" />
      </div>
    </div>
    <div class="relative top-[-100vh] -z-20 flex h-screen flex-col justify-end bg-hero bg-cover">
      <div class="h-2/3 w-full bg-gradient-to-bl from-brand-950/30"></div>
      <div class="h-1/3 w-full bg-gradient-to-t from-brand-950"></div>
    </div>
  </div>
</template>
