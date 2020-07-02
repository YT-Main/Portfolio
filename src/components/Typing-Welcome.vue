<template>
  <div>
    <div class="flex w-full">
        <div class="lg:flex mx-auto text-5xl">
            <div class="pr-3">I'm a </div>
            <div class="flex">
              <p class="typing"></p>
              <div class="typing-coursor">|</div>
            </div>
            <div style="font-family:'Lobster" class="text-blue-500 pl-3">Web Developer</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TypingWelcome",
  components: {
  },
  mounted(){
    console.clear();

    const texts = ['passionate ', 'resourceful ', 'fast learning '];
    let index = 0;
    let count = 0;
    let currentText = '';
    let letter = '';

    (function type(){
    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0,++index);
    
    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type,225);
    }());
  }
};
</script>

<style scoped>
.typing-coursor{
    animation: coursor 0.4s infinite
}
@keyframes coursor{
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
</style>