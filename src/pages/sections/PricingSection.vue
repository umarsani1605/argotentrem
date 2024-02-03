<script setup>
const pricing = [
  {
    id: 0,
    name: 'Paket 1',
    price: '35.000',
    description: 'Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    benefit: [
      'Ut enim ',
      'Ad minim',
      'Quis nostrud',
      'Ullamco',
      'Laboris',
      'Aliquip',
      'Commodo',
      'Consequat'
    ]
  },
  {
    id: 1,
    name: 'Paket 2',
    price: '75.000',
    description: 'Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    benefit: [
      'Ut enim ',
      'Ad minim',
      'Quis nostrud',
      'Ullamco',
      'Laboris',
      'Aliquip',
      'Commodo',
      'Consequat'
    ]
  },
  {
    id: 2,
    name: 'Paket 3',
    price: '150.000',
    description: 'Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    benefit: [
      'Ut enim ',
      'Ad minim',
      'Quis nostrud',
      'Ullamco',
      'Laboris',
      'Aliquip',
      'Commodo',
      'Consequat'
    ]
  },
]
</script>
<template>
  <div id="pricing" class="mx-auto flex h-fit max-w-[21rem] flex-col sm:max-w-[44rem] lg:max-w-[72rem] py-10">
    <div class="mb-5 flex justify-center">
      <div
        class="flex w-96 items-center py-3 font-serif text-4xl text-brand-50 before:me-4 before:flex-[1_1_0%] before:border-[1px] before:border-t before:border-gray-200 after:ms-4 after:flex-[1_1_0%] after:border-[1px] after:border-t after:border-gray-200">
        Harga Paket
      </div>
    </div>
    <div class="mt-6 lg:mt-12 grid grid-cols-1 md:grid-cols-3 md:gap-3 lg:grid-cols-3 gap-10 lg:gap-6 lg:items-center">
      <div
        class="flex flex-col gap-4 border-brand-800 border-2 bg-brand-900/40 text-center rounded-xl p-8 md:gap-2 md:px-5"
        v-for="item in pricing" :key="item.id">
        <h4 class="font-medium text-lg text-gray-800 dark:text-gray-200">{{ item.name }}</h4>
        <div class="mt-2 font-bold text-5xl md:mt-0 md:text-4xl text-gray-800 dark:text-gray-200">
          <span class="font-medium text-4xl md:text-3xl -me-2">Rp</span>
          {{ item.price }}
        </div>
        <p class="text-sm ">{{ item.description }}</p>

        <ul class="mt-4 ml-4 space-y-2.5 text-sm">
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
    </div>
  </div>
</template>