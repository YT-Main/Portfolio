<template>
  <div class="home m-0">
    <div class="h-12 bg-blue-500" id="menu">
      <nav class="float-right items-center h-12 flex list-none lg:pr-16">
        <li class="py-3 px-4 hover:bg-white hover:text-blue-500 text-white transition duration-300 ease-in-out">Projects</li>
        <li class="py-3 px-4 hover:bg-white hover:text-blue-500 text-white transition duration-300 ease-in-out">About</li>
        <li class="py-3 px-4 hover:bg-white hover:text-blue-500 text-white transition duration-300 ease-in-out">Contact Me</li>
      </nav>
    </div>
    <Intro />
    <About />
    <Projects />
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from '@/views/Intro.vue'
import About from '@/views/About.vue'
import Projects from '@/views/Projects.vue'

export default {
  name: 'Home',
  components: {
    Intro,
    About,
    Projects
  }
}
</script>
