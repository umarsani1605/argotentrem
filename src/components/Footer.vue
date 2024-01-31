<script setup>
const socialMedia = [
  '../src/assets/images/social-media/facebook.png',
  '../src/assets/images/social-media/instagram.png',
  '../src/assets/images/social-media/twitter.png',
  '../src/assets/images/social-media/whatsapp.png',
]
</script>

<template>
  <div class="h-[60px] bg-brand-900/25">
    <div class="h-full max-w-[72rem] mx-auto px-4 flex justify-between py-4">
      <div class="flex justify-center mb-5">
        Copyright © 2024 - ArgoTentrem
      </div>
      <div class="flex flex-row">
        <div class="flex justify-end w-10" v-for="item in socialMedia" :key="item">
          <img class="h-5" :src="item" alt="item">
        </div>
      </div>
    </div>
  </div>
</template>