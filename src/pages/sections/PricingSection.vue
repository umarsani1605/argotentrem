<script setup>
import SelectButton from '@/components/SelectButton.vue';
const pricing = [
  {
    id: 0,
    name: 'Paket Dasar',
    price: '150.000',
    description: 'Paket camping dasar, semua alat-alat bawa sendiri.',
    benefit: [
      'Kavling 5x8 m²',
      'Musholla',
      'Listrik',
      'Air bersih',
      'Toilet',
      'Compliment: Teh dan kopi tradisional',
    ]
  },
  {
    id: 1,
    name: 'Paket Lengkap',
    price: '300.000',
    description: 'Semua fasilitas Paket Dasar, dengan tambahan:',
    benefit: [
      'Tenda (Kapasitas 4-5 orang)',
      'Alat makan dan minum',
      'Alat tidur',
      'Alat masak',
      'Meja dan kursi portabel',
      'Roll listrik',
      'Lampu tenda',
      'Porter'
    ]
  },
]
</script>
<template>
  <div data-aos="fade-up" data-aos-duration="600" id="pricing" class="pt-10 md:pt-20 md:pb-16 bg-[#1b2911]">
    <div class="mx-auto flex h-fit max-w-[20rem] flex-col sm:max-w-[44rem] lg:max-w-[72rem]">
      <div class="mb-5 flex justify-center" data-aos="fade-up">
        <div
          class="flex w-96 items-center py-3 font-serif text-4xl text-accent before:me-4 before:flex-[1_1_0%] before:border-[1px] before:border-t before:border-gray-200 after:ms-4 after:flex-[1_1_0%] after:border-[1px] after:border-t after:border-gray-200">
          Harga Paket
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="600"
        class="mt-6 lg:mt-12 grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:grid-cols-2 gap-10 lg:gap-10 lg:items-center">
        <div
          class="h-fit md:h-[40rem] md:relative md:transition md:ease-in-out md:duration-300 md:hover:scale-x-[1.04] md:hover:scale-y-[1.04] flex flex-col justify-between gap-4 border-brand-800 border-2 bg-brand-900/40 text-center rounded-xl p-6 md:p-12"
          v-for="item in pricing" :key="item.id">
          <div class="flex flex-col gap-3">
            <h4 class="font-medium text-lg text-gray-200">{{ item.name }}</h4>
            <div class="mt-2 font-bold text-4xl md:mt-0 md:text-4xl text-gray-200">
              Rp
              {{ item.price }}
              <span class="font-medium text-xl md:text-xl -me-2">/malam</span>
            </div>
            <p class="text-sm md:text-lg">{{ item.description }}</p>
            <ul class="mt-4 mb-8 ml-8 space-y-2.5 text-sm text-left md:text-lg">
              <li class="flex space-x-2" v-for="benefit in item.benefit" :key="benefit">
                <svg class="flex-shrink-0 mt-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span class="text-white">
                  {{ benefit }}
                </span>
              </li>
            </ul>
          </div>
          <SelectButton />
        </div>
      </div>
    </div>
  </div>
</template>