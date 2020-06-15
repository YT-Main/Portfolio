<template>
  <div>
    <Heading />
    <TypingWelcome />
    <div class="flex w-full">
      <svg class="mx-auto" id="jumping-arrow" width="30" height="17" viewBox="0 0 30 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5858 16.4142C14.3668 17.1953 15.6332 17.1953 16.4142 16.4142L29.1421 3.68629C29.9232 2.90524 29.9232 1.63891 29.1421 0.857864C28.3611 0.0768156 27.0948 0.0768156 26.3137 0.857864L15 12.1716L3.68629 0.857864C2.90524 0.0768156 1.63891 0.0768156 0.857864 0.857864C0.0768156 1.63891 0.0768156 2.90524 0.857864 3.68629L13.5858 16.4142ZM13 14V15H17V14H13Z" fill="#4299E1"/>
      </svg>
    </div>
  </div>
</template>

<script>
import Heading from '@/components/Heading.vue'
import TypingWelcome from '@/components/Typing-Welcome.vue'
export default {
  name: "Intro",
  components: {
    Heading,
    TypingWelcome 
  }
};
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

