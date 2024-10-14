<!-- <template>
  <div class="hero-container">
    <video class="hero-video" src="@/assets/video-1.mp4" autoplay loop muted></video>
    <v-container class="hero-content" fill-height>
      <v-row align="center" justify="center">
        <v-col cols="12" class="text-center">
          <h1>Water Trees</h1>
          <p><i>Raising The Standard</i></p>
          <div class="hero-buttons">
            <v-btn outlined large class="mr-4">
              GET STARTED
            </v-btn>
            <v-btn color="primary" large @click="handleTestimonials">
              WATCH TESTIMONIALS
              <v-icon right>mdi-play-circle-outline</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  methods: {
    handleTestimonials() {
      console.log('hey');
    },
  },
};
</script>

<style scoped>
.hero-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1; /* Video is behind the content */
}

.hero-content {
  position: relative;
  z-index: 2; /* Content is above the video */
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.hero-buttons {
  margin-top: 20px;
}

h1 {
  font-size: 4rem;
  font-weight: bold;
}

p {
  font-size: 1.5rem;
  font-style: italic;
}
</style> -->


<template>
  <div class="hero-container">
    <video class="hero-video" src="@/assets/video-1.mp4" autoplay loop muted></video>
    <v-container class="hero-content" fill-height>
      <v-row align="center" justify="center" class="hero-center">
        <v-col cols="12" class="text-center">
          <h1>Water Trees</h1>
          <p><i>Raising The Standard</i></p>
          <div class="hero-buttons">
            <v-btn outlined large class="mr-4">
              GET STARTED
            </v-btn>
            <v-btn color="primary" large @click="handleTestimonials">
              WATCH TESTIMONIALS
              <v-icon right>mdi-play-circle-outline</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';


const router = useRouter();
const handleTestimonials = () => {
      console.log('hey');
      router.push("/about-us")
};
</script>

<style scoped>
.hero-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -20px;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1; /* Video in background */
}

.hero-content {
  position: relative;
  z-index: 2; /* Bring content in front of the video */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.hero-buttons {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px; /* Add space between the buttons */
}

h1 {
  color: aliceblue;
  font-size: 9rem;
  font-weight: bold;
}

p {
  font-size: 1.5rem;
  font-style: italic;
}
.v-btn {
  min-height: 60px; /* Ensure buttons are consistent size */
}
</style>
