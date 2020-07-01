<template>
  <div class="home m-0">
    <div class="h-12 bg-blue-500" id="menu">
      <nav class="float-right items-center h-12 flex list-none lg:pr-16">
        <li class="py-3 px-4 hover:bg-white hover:text-blue-500 text-white transition duration-300 ease-in-out" @click="scroll('projects')">Projects</li>
        <li class="py-3 px-4 hover:bg-white hover:text-blue-500 text-white transition duration-300 ease-in-out" @click="scroll('about')">About</li>
        <li class="py-3 px-4 hover:bg-white hover:text-blue-500 text-white transition duration-300 ease-in-out">Contact Me</li>
      </nav>
    </div>
    <Intro id="intro" />
    <div class="flex w-full">
      <div class="mx-auto w-12 h-12 flex cursor-pointer" id="jumping-arrow"  @click="scroll('about')">
        <svg width="30" height="17" class="mx-auto my-auto" viewBox="0 0 30 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5858 16.4142C14.3668 17.1953 15.6332 17.1953 16.4142 16.4142L29.1421 3.68629C29.9232 2.90524 29.9232 1.63891 29.1421 0.857864C28.3611 0.0768156 27.0948 0.0768156 26.3137 0.857864L15 12.1716L3.68629 0.857864C2.90524 0.0768156 1.63891 0.0768156 0.857864 0.857864C0.0768156 1.63891 0.0768156 2.90524 0.857864 3.68629L13.5858 16.4142ZM13 14V15H17V14H13Z" fill="#4299E1"/>
        </svg>
      </div>
    </div>
    <About id="about" />
    <Projects id="projects"/>
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
  },
  methods:{
    animate: function(elem, style, unit, from, to, time, prop) {
        if (!elem) {
            return;
        }
        var start = new Date().getTime(),
            timer = setInterval(function () {
                var step = Math.min(1, (new Date().getTime() - start) / time);
                if (prop) {
                    elem[style] = (from + step * (to - from))+unit;
                } else {
                    elem.style[style] = (from + step * (to - from))+unit;
                }
                if (step === 1) {
                    clearInterval(timer);
                }
            }, 25);
        if (prop) {
            elem[style] = from+unit;
        } else {
            elem.style[style] = from+unit;
        }
    },
    scroll:function(to) {
        var target = document.getElementById(to);
        this.animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target.offsetTop, 300, true);
    }
  }
}
</script>
<style scoped>
#jumping-arrow{
  animation: jump 1.2s infinite;
  margin-top: 32vh
}
@keyframes jump {
    0% { transform: translate(0%, -50%)}
    50% { transform: translate(0%, -150%);}
    100% { transform: translate(0%, -50%);}
}

@media screen and (max-width: 1024px){
  #jumping-arrow{
    margin-top: 15vh;
  }
}
</style>