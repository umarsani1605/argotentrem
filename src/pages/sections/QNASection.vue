<script setup>
</script>
<template>
  <div id="location" class="md:mt-10">
    <div class="mx-auto flex h-fit max-w-[21rem] flex-col sm:max-w-[44rem] lg:max-w-[72rem]">
      <div class="mb-5 flex justify-center">
        <div
          class="flex w-96 items-center py-3 font-serif text-4xl text-brand-50 before:me-4 before:flex-[1_1_0%] before:border-[1px] before:border-t before:border-gray-200 after:ms-4 after:flex-[1_1_0%] after:border-[1px] after:border-t after:border-gray-200">
          QnA
        </div>
      </div>
      <div class="hs-accordion-group flex flex-col gap-4">
        <div
          class="hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-gray-700 dark:bg-brand-900 dark:border-transparent"
          id="hs-active-bordered-heading-one">
          <button
            class="hs-accordion-toggle hs-accordion-active:text-accent inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-accent dark:text-gray-200 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:text-gray-400"
            aria-controls="hs-basic-active-bordered-collapse-one">
            Accordion #1
            <svg class="hs-accordion-active:hidden block w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            <svg class="hs-accordion-active:block hidden w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M5 12h14" />
            </svg>
          </button>
          <div id="hs-basic-active-bordered-collapse-one"
            class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="hs-active-bordered-heading-one">
            <div class="pb-4 px-5">
              <p class="text-gray-800 dark:text-gray-200">
                <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds
                the appropriate classes that we use to style each element. These classes control the overall appearance,
                as well as the showing and hiding via CSS transitions.
              </p>
            </div>
          </div>
        </div>
        <div
          class="hs-accordion hs-accordion-active:border-gray-200 active bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-gray-700 dark:bg-brand-900 dark:border-transparent"
          id="hs-active-bordered-heading-two">
          <button
            class="hs-accordion-toggle hs-accordion-active:text-accent inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-accent dark:text-gray-200 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:text-gray-400"
            aria-controls="hs-basic-active-bordered-collapse-two">
            Accordion #2
            <svg class="hs-accordion-active:hidden block w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            <svg class="hs-accordion-active:block hidden w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M5 12h14" />
            </svg>
          </button>
          <div id="hs-basic-active-bordered-collapse-two"
            class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="hs-active-bordered-heading-two">
            <div class="pb-4 px-5">
              <p class="text-gray-800 dark:text-gray-200">
                <em>This is the second item's accordion body.</em> It is hidden by default, until the collapse plugin adds
                the appropriate classes that we use to style each element. These classes control the overall appearance,
                as well as the showing and hiding via CSS transitions.
              </p>
            </div>
          </div>
        </div>

        <div
          class="hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-gray-700 dark:bg-brand-900 dark:border-transparent"
          id="hs-active-bordered-heading-three">
          <button
            class="hs-accordion-toggle hs-accordion-active:text-accent inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-accent dark:text-gray-200 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:text-gray-400"
            aria-controls="hs-basic-active-bordered-collapse-three">
            Accordion #3
            <svg class="hs-accordion-active:hidden block w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            <svg class="hs-accordion-active:block hidden w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M5 12h14" />
            </svg>
          </button>
          <div id="hs-basic-active-bordered-collapse-three"
            class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="hs-active-bordered-heading-three">
            <div class="pb-4 px-5">
              <p class="text-gray-800 dark:text-gray-200">
                <em>This is the first item's accordion body.</em> It is hidden by default, until the collapse plugin adds
                the appropriate classes that we use to style each element. These classes control the overall appearance,
                as well as the showing and hiding via CSS transitions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>