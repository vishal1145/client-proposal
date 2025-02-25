<template>
  <router-view v-if="$route.name === 'RecentProjects'" />
  <div v-else class="bg-[#0B0F16] min-h-screen">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <AdditionalSkills />
    <Awards />
    <Projects />
    <Contact />
    <ChatWidget />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import AdditionalSkills from './components/AdditionalSkills.vue'
import Awards from './components/Awards.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import ChatWidget from './components/ChatWidget.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    About,
    Skills,
    AdditionalSkills,
    Awards,
    Projects,
    Contact,
    ChatWidget
  }
}
</script>

<style>
#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
