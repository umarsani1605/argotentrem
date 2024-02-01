<script setup>
import NavigationBar from '../components/NavigationBar.vue';
import HeroSection from './sections/HeroSection.vue';
import FacillitySectionVue from './sections/FacillitySection.vue';
import GallerySection from './sections/GallerySection.vue';
import LocationSectionsVue from './sections/LocationSections.vue';
import ReviewSectionVue from './sections/ReviewSection.vue';
import CTABannerSectionVue from './sections/CTABannerSection.vue';
import FooterVue from '@/components/Footer.vue';
import FirstSection from './sections/FirstSection.vue';
import PricingSection from '@/pages/sections/PricingSection.vue';
</script>

<template>
  <div>
    <HeroSection />
    <FirstSection />
    <FacillitySectionVue />
    <GallerySection />
    <LocationSectionsVue />
    <PricingSection />
    <ReviewSectionVue />
    <CTABannerSectionVue />
    <FooterVue />
  </div>
</template>