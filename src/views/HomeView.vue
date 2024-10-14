<script setup>
import HeroSection from '@/components/HeroSection.vue';
import { useDrawerStore } from '@/stores/drawer';
import { onMounted } from 'vue';

const drawerStore = useDrawerStore();

onMounted(()=>{
  drawerStore.setDrawerState(false);
  console.log("Home View mounted");
});

</script>

<template>
  <v-main>
    <HeroSection/>
  </v-main>
</template>
