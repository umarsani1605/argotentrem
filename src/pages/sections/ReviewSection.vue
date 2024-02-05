<script setup>
import Glide from '@glidejs/glide'
import { onMounted } from 'vue'

const glideConfig = {
  type: 'carousel',
  startAt: 0,
  gap: 32,
  breakpoints: {
    2048: {
      perView: 2,
      gap: 32,
    },
    1536: {
      perView: 2,
      gap: 32,
    },
    1280: {
      perView: 2,
      gap: 32,
    },
    768: {
      perView: 1,
      gap: 32,
    },
    640: {
      perView: 1,
      gap: 16,
    }
  }
}

const reviews = [
  {
    name: 'John Doe',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  },
  {
    name: 'John Doe',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  },
  {
    name: 'John Doe',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  },
  {
    name: 'John Doe',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  },
  {
    name: 'John Doe',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  },
  {
    name: 'John Doe',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  },
]

onMounted(() => {
  new Glide('.glide', glideConfig).mount()
})

</script>

<template>
  <div id="review" class="md:top-10 bg-test">
    <div class="mx-auto flex h-fit max-w-[21rem] flex-col sm:max-w-[44rem] lg:max-w-[72rem] py-10">
      <div data-aos="fade-up" data-aos-duration="600" data-aos-offset="300" class="mb-5 flex justify-center">
        <div
          class="flex w-96 items-center py-3 font-serif text-4xl text-accent before:me-4 before:flex-[1_1_0%] before:border-[1px] before:border-t before:border-gray-200 after:ms-4 after:flex-[1_1_0%] after:border-[1px] after:border-t after:border-gray-200">
          Review
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-offset="300" class="flex h-60 lg:h-full md:h-80">
        <div class="glide md:px-20 justify-center items-centers content-center">
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
              <li class="glide__slide m-0" v-for="review in reviews" :key="review">
                <div
                  class="relative flex flex-col text-center bg-brand-900/60 border-brand-800 border-2 px-4 py-6 md:px-6 md:py-8 space-y-5 h-full items-center justify-center rounded-3xl duration-300 ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="27" viewBox="0 0 31 27" fill="none">
                    <path
                      d="M30.2921 15.6588V26.7529H19.2549V18.4466C19.2549 14.8434 19.5962 11.6384 20.2789 8.8317C20.9616 5.98707 22.0995 3.29414 23.6925 0.75293H30.6334C28.8508 3.33207 27.5043 5.87328 26.594 8.37656C25.7217 10.8419 25.2855 13.2693 25.2855 15.6588H30.2921ZM11.4606 15.6588V26.7529H0.366455V18.4466C0.366455 14.7675 0.707816 11.5436 1.39053 8.77481C2.11117 5.9681 3.28694 3.29414 4.91787 0.75293H11.8019C10.0193 3.33207 8.67279 5.87328 7.76251 8.37656C6.85222 10.8798 6.39708 13.3073 6.39708 15.6588H11.4606Z"
                      fill="white" />
                  </svg>
                  <span class="text-gray-200 text-sm md:text-md">
                    {{ review.review }}
                  </span>
                  <span class="font-bold text-accent">
                    {{ review.name }}
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div class="glide__arrows flex justify-center mt-12 md:mt-8 gap-2" data-glide-el="controls">
            <button
              class="glide__arrow glide__arrow--left md:absolute md:top-[50%] md:z-10 md:opacity-100 -translate-y-[100%] md:left-4"
              data-glide-dir="<">
              <div
                class="h-9 w-9 bg-brand-900/60 border-brand-800 border-2 rounded-full flex justify-center items-center my-auto hover:bg-brand-900 duration-300 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path fill-rule="evenodd"
                    d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                    clip-rule="evenodd" />
                </svg>
              </div>
            </button>
            <button
              class="glide__arrow glide__arrow--right md:absolute md:top-[50%] md:z-10 md:opacity-100 -translate-y-[100%] md:right-4"
              data-glide-dir=">">
              <div
                class="h-9 w-9 bg-brand-900/60 border-brand-800 border-2 rounded-full flex justify-center items-center my-auto hover:bg-brand-900 duration-300 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path fill-rule="evenodd"
                    d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clip-rule="evenodd" />
                </svg>
              </div>
            </button>
          </div>
          <div class="glide__bullets" data-glide-el="controls[nav]">
            <button class="glide__bullet" data-glide-dir="=0"></button>
            <button class="glide__bullet" data-glide-dir="=1"></button>
            <button class="glide__bullet" data-glide-dir="=2"></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import '@glidejs/glide/dist/css/glide.core.min.css';
</style>