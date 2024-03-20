<script setup>
const facilities = [
  {
    id: 1,
    name: 'Lahan Camping',
    icon: '@/assets/icons/mountain.svg',
  },
  {
    id: 2,
    name: 'Sewa Tenda',
    icon: '@/assets/icons/tent.svg',
  },
  {
    id: 3,
    name: 'Aula',
    icon: '@/assets/icons/bonfire.svg',
  },
  {
    id: 4,
    name: 'Ruang Meeting',
    icon: '@/assets/icons/signpost.svg',
  },
  {
    id: 5,
    name: 'Musholla',
    icon: '@/assets/icons/leaves.svg',
  },
  {
    id: 6,
    name: 'Listrik',
    icon: '@/assets/icons/light.svg',
  },
  {
    id: 7,
    name: 'Toilet',
    icon: '@/assets/icons/signpost.svg',
  },
  {
    id: 8,
    name: 'Parkir Luas',
    icon: '@/assets/icons/car.svg',
  },
]
</script>

<template>
  <div id="facility" class="bg-[#1b2911] pt-10 md:pt-20">
    <div class="mx-auto flex h-fit max-w-[20rem] flex-col sm:max-w-[44rem] lg:max-w-[72rem]">
      <div data-aos="fade-up" data-aos-duration="600" class="mb-8 flex justify-center">
        <div
          class="flex w-96 items-center py-3 font-serif text-4xl text-accent before:me-4 before:flex-[1_1_0%] before:border-[1px] before:border-t before:border-gray-200 after:ms-4 after:flex-[1_1_0%] after:border-[1px] after:border-t after:border-gray-200">
          Fasilitas
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="800"
        class="grid grid-cols-4 gap-y-8 md:grid md:grid-cols-2 md:gap-x-2 md:gap-y-12 lg:grid lg:grid-cols-4 lg:gap-x-4 lg:gap-y-10 lg:pt-12">
        <div class="flex flex-col items-center">
          <img class="h-12 md:h-28 fill-white" src="@/assets/icons/mountain.svg?url" alt="" />
          <div class="pt-2 md:pt-6 text-center md:p-5 lg:p-8">
            <h3 class="font-sans text-md md:text-2xl text-white">
              Lahan camping
            </h3>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <img class="h-12 md:h-28 fill-white" src="@/assets/icons/tent.svg?url" alt="" />
          <div class="pt-2 md:pt-6 text-center md:p-5 lg:p-8">
            <h3 class="font-sans text-md md:text-2xl text-white">
              Penyewaan alat campimg
            </h3>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <img class="h-12 md:h-28 fill-white" src="@/assets/icons/bonfire.svg?url" alt="" />
          <div class="pt-2 md:pt-6 text-center md:p-5 lg:p-8">
            <h3 class="font-sans text-md md:text-2xl text-white">
              Aula
            </h3>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <img class="h-12 md:h-28 fill-white" src="@/assets/icons/signpost.svg?url" alt="" />
          <div class="pt-2 md:pt-6 text-center md:p-5 lg:p-8">
            <h3 class="font-sans text-md md:text-2xl text-white">
              Ruang meeting
            </h3>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <img class="h-12 md:h-28 fill-white" src="@/assets/icons/leaves.svg?url" alt="" />
          <div class="pt-2 md:pt-6 text-center md:p-5 lg:p-8">
            <h3 class="font-sans text-md md:text-2xl text-white">
              Musholla
            </h3>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <img class="h-12 md:h-28 fill-white" src="@/assets/icons/light.svg?url" alt="" />
          <div class="pt-2 md:pt-6 text-center md:p-5 lg:p-8">
            <h3 class="font-sans text-md md:text-2xl text-white">
              Listrik
            </h3>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <img class="h-12 md:h-28 fill-white" src="@/assets/icons/signpost.svg?url" alt="" />
          <div class="pt-2 md:pt-6 text-center md:p-5 lg:p-8">
            <h3 class="font-sans text-md md:text-2xl text-white">
              Toilet
            </h3>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <img class="h-12 md:h-28 fill-white" src="@/assets/icons/car.svg?url" alt="" />
          <div class="pt-2 md:pt-6 text-center md:p-5 lg:p-8">
            <h3 class="font-sans text-md md:text-2xl text-white">
              Parkir luas
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
