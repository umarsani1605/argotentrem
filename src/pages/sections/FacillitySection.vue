<script setup>
const facilities = [
  {
    id: 1,
    name: 'Lahan Camping',
    icon: '@/assets/icons/mountain.svg'
  },
  {
    id: 2,
    name: 'Sewa Tenda',
    icon: '@/assets/icons/tent.svg'
  },
  {
    id: 3,
    name: 'Aula',
    icon: '@/assets/icons/bonfire.svg'
  },
  {
    id: 4,
    name: 'Ruang Meeting',
    icon: '@/assets/icons/trees.svg'
  },
  {
    id: 5,
    name: 'Musholla',
    icon: '@/assets/icons/leaves.svg'
  },
  {
    id: 6,
    name: 'Listrik',
    icon: '@/assets/icons/light.svg'
  },
  {
    id: 7,
    name: 'Toilet',
    icon: '@/assets/icons/signpost.svg'
  },
  {
    id: 8,
    name: 'Parkir Luas',
    icon: '@/assets/icons/car.svg'
  },
]
</script>

<template>
  <div id="facility" class="pt-20 pb-32 bg-[#203014]">
    <div class="mx-auto flex h-fit max-w-[21rem] flex-col sm:max-w-[44rem] lg:max-w-[72rem]">
      <div data-aos="fade-up" data-aos-duration="600" data-aos-offset="300" class="mb-8 flex justify-center">
        <div
          class="flex w-96 items-center py-3 font-serif text-4xl text-accent before:me-4 before:flex-[1_1_0%] before:border-[1px] before:border-t before:border-gray-200 after:ms-4 after:flex-[1_1_0%] after:border-[1px] after:border-t after:border-gray-200">
          Fasilitas
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-offset="300"
        class="flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-x-2 md:gap-y-12 lg:flex lg:flex-row lg:gap-12 pt-6 lg:pt-12">
        <div class="flex flex-col items-center" v-for="item in facilities" :key="item.id">
          <img class="h-36 fill-white" :src="item.icon" alt="" />
          <div class="pt-6 lg:p-4 text-center md:p-5">
            <h3 class="font-serif text-2xl font-bold text-gray-800 dark:text-white">
              {{ item.name }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
