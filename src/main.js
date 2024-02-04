import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Vue3Lottie } from 'vue3-lottie'
import "preline/preline";
import PrimeVue from 'primevue/config';
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

AOS.init()

// app.use(router)
app.use(PrimeVue)
app.use(Vue3Lottie)
app.mount('#app')