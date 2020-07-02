<template>
  <div>
    <Heading />
    <TypingWelcome />
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

