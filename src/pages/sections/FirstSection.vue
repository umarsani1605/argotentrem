<script setup>
import CampSVG from '@/assets/camp.svg?component'
import CampGrassSVG from '@/assets/camp-grass.svg?component'
</script>
<template>
  <div id="sections" class="-mb-[1px] bg-brand-950 pt-10">
    <div
      class="mx-auto -mb-48 flex max-w-[20rem] flex-col-reverse gap-10 sm:max-w-[44rem] md:-mb-48 md:mt-24 md:flex-row-reverse lg:-mb-32 lg:mt-24 lg:max-w-[72rem] lg:flex-row lg:gap-32">
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="50"
        class="space-y-8 md:mt-16 md:basis-4/5 lg:mt-20 lg:basis-4/5 lg:pl-20">
        <h2 class="block font-serif text-3xl font-medium text-accent sm:text-5xl md:text-6xl lg:text-6xl">
          Camping
        </h2>
        <p class="text-brand-50 lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
        <div
          class="relative -top-72 left-48 text-[9rem] font-bold text-white/10 md:-top-[23.25rem] md:left-44 lg:-left-20 lg:-top-96">
          01
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="600" class="content-center">
        <img class="aspect-square" src="@/assets/images/hero/1.png" alt="" />
      </div>
    </div>
    <div
      class="mx-auto -mb-48 flex max-w-[21rem] flex-col gap-10 sm:max-w-[44rem] md:-mb-48 md:mt-24 md:flex-row-reverse lg:-mb-32 lg:mt-24 lg:max-w-[72rem] lg:flex-row lg:gap-32">
      <div data-aos="fade-up" data-aos-duration="600" class="content-center">
        <img class="aspect-square lg:aspect-square" src="@/assets/images/hero/2.png" alt="" />
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="50"
        class="space-y-8 md:mt-16 md:basis-4/5 lg:mt-20 lg:basis-4/5 lg:pl-20">
        <h2 class="block font-serif text-3xl font-medium text-accent sm:text-5xl md:text-6xl lg:text-6xl">
          Healing
        </h2>
        <p class="text-brand-50 lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
        <div
          class="relative -top-72 left-48 text-[9rem] font-bold text-white/10 md:-top-[23.25rem] md:left-44 lg:-left-20 lg:-top-96">
          02
        </div>
      </div>
    </div>
    <div
      class="mx-auto -m-48 flex max-w-[21rem] flex-col-reverse gap-10 sm:max-w-[44rem] md:-mb-52 md:mt-24 md:flex-row-reverse lg:-mb-32 lg:mt-24 lg:max-w-[72rem] lg:flex-row lg:gap-32">
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="50"
        class="space-y-8 md:mt-16 md:basis-4/5 lg:mt-20 lg:basis-4/5 lg:pl-20">
        <h2 class="block font-serif text-3xl font-medium text-accent sm:text-5xl md:text-6xl lg:text-6xl">
          Meeting
        </h2>
        <p class="text-brand-50 lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
        <div
          class="relative -top-72 left-48 text-[9rem] font-bold text-white/10 md:-top-[23.25rem] md:left-44 lg:-left-20 lg:-top-96">
          03
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="600" class="content-center">
        <img class="aspect-square" src="@/assets/images/hero/3.png" alt="" />
      </div>
    </div>
    <div data-aos="fade-up" data-aos-duration="600"
      class="hidden md:block -mt-56 bg-gradient-to-t from-brand-900/20 fill-[#203014] md:-mt-72 md:w-full">
      <CampSVG />
    </div>
    <div class="hidden md:block relative fill-[#1b2911] md:-mb-14 md:-mt-24">
      <CampGrassSVG />
    </div>
  </div>
</template>
