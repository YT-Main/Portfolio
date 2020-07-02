<template>
    <div class="py-10">
        <Title Text='About' />
        <div class="flex pt-16">
            <div class="mx-auto xl:flex">
                <div id="left" class="lg:text-3xl text-2xl text-justify mx-auto lg:px-16" >
                    I'm <span style="font-family:'Lobster" class=" text-blue-500 ">Yash Trivedi</span>, I am developer and student in Oakville, Ontario. I sarted coding 5 years ago with Python and then found my love for web development. I pride myself on my ability to learn quickly and adapt to the needs of whatever project I am working on. Let's get in touch and talk about your needs. 
                </div>
                <div class="flex lg:relative lg:px-16 mt-8 lg:mt-0">
                    <img class="sm:mx-auto lg:mr-0 rounded-lg" src="/img/download.png"  style="width:20rem; height:20rem;"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Title from '@/components/Title.vue'
export default {
    name: 'About',
    components: {
        Title
    }
}
</script>

<style scoped>
#left{
    width: 50rem
}
@media (max-width: 1000px){
    #left{
        width: 20rem;
        text-align:center;
    }
}
</style>