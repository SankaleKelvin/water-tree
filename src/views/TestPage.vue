<template>
    <v-main>
      <v-row justify="center">
        <v-col cols="5">
          <v-form>
            <v-card class="p-4" color="cyan">
              <v-card-title>
                <h2>Enter Tree Names</h2>
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col cols="12" md="4">
                    <v-text-field v-model="localName" label="Local name" required></v-text-field>
                  </v-col>
  
                  <v-col cols="12" md="4">
                    <v-text-field v-model="scientificName" label="Scientific name" required></v-text-field>
                  </v-col>
  
                  <v-col cols="12" md="4">
                    <v-text-field v-model="treeName" label="Tree name" required></v-text-field>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-row justify="center">
                  <v-col cols="6" class="text-center bg-info">
                    <h1>{{ treeName }}</h1>
                  </v-col>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-form>
        </v-col>
      </v-row>
    </v-main>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const localName = ref('')
  const scientificName = ref('')
  
  //Computed being implemented to join both first and last name.
  const treeName = computed(() => `${localName.value}_${scientificName.value}`)
  </script>