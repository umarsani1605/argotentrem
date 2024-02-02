<script setup>
const socialMedia = [
  '../src/assets/images/social-media/facebook.png',
  '../src/assets/images/social-media/instagram.png',
  '../src/assets/images/social-media/twitter.png',
  '../src/assets/images/social-media/whatsapp.png',
]
</script>

<template>
  <div class="h-[60px] bg-brand-900/50">
    <div class="h-full max-w-[21rem] sm:max-w-[44rem] lg:max-w-[72rem] mx-auto flex justify-between py-4">
      <div class="flex text-md justify-center mb-5">
        Copyright © 2024 - ArgoTentrem
      </div>
      <div class="hidden md:flex md:flex-row">
        <div class="flex justify-end w-10" v-for="item in socialMedia" :key="item">
          <img class="h-5" :src="item" alt="item">
        </div>
      </div>
    </div>
  </div>
</template>