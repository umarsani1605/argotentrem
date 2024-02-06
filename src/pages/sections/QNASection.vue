<script setup>
const qna = [
  // {
  //   id: 1,
  //   question: 'Harga tiketnya berapa?',
  //   answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  // },
  // {
  //   id: 2,
  //   question: 'Fasilitasnya apa saja?',
  //   answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  // },
  {
    id: 3,
    question: 'Bisa sewa alat camping di tempat?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  },
  {
    id: 4,
    question: 'Apakah mobil bisa masuk?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  },
  {
    id: 5,
    question: 'Jarak ke tempat camping berapa?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  },
  {
    id: 6,
    question: 'Ada porter atau enggak?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  },
]
</script>
<template>
  <div id="qna" class="pt-10 pb-12 md:pb-32 bg-[#1b2911]">
    <div data-aos="fade-up" data-aos-duration="600"
      class="mx-auto flex h-fit max-w-[20rem] flex-col sm:max-w-[44rem] lg:max-w-[72rem]">
      <div class="mb-5 flex justify-center">
        <div
          class="flex w-96 items-center py-3 font-serif text-4xl text-accent before:me-4 before:flex-[1_1_0%] before:border-[1px] before:border-t before:border-gray-200 after:ms-4 after:flex-[1_1_0%] after:border-[1px] after:border-t after:border-gray-200">
          QnA
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="600" class="hs-accordion-group flex flex-col gap-4">
        <div v-for="item in qna" :key="item.id"
          class="hs-accordion hs-accordion-active:border-brand-800 bg-brand-900/60 border-brand-800 border-2 rounded-xl"
          id="hs-active-bordered-heading-one">
          <button
            class="hs-accordion-toggle inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start py-4 px-5 disabled:opacity-50 disabled:pointer-events-none hs-accordion-active:text-accent text-gray-200 hover:text-gray-200"
            aria-controls="hs-basic-active-bordered-collapse-one">
            {{ item.question }}
            <img class="hs-accordion-active:block hidden w-5" src="@/assets/icons/collapse-arrow.png"
              alt="collapse-arrow">
            <img class="hs-accordion-active:hidden block w-5" src="@/assets/icons/expand-arrow.png" alt="expand-arrow">
          </button>
          <div id="hs-basic-active-bordered-collapse-one"
            class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="hs-active-bordered-heading-one">
            <div class="pb-4 px-5">
              <p class="text-gray-200">
                {{ item.answer }}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>