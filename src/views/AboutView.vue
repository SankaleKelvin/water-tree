<template>
  <v-main>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  </v-main>
</template>
<script setup>
import { useDrawerStore } from '@/stores/drawer'
import { onMounted } from 'vue'

const drawerStore = useDrawerStore();

onMounted(() => {
  drawerStore.setDrawerState(true);
  console.log("About View mounted");
});
</script>
