<template>
    <div>
        <Title class="mt-8" :Text='info.text' />

        <div class="w-screen flex">
            <div v-if="info.Media.type === 'NA'" class="bg-gray-300 mx-auto mt-8 lg:flex text-xl hover:text-6xl hidden" style="height: 25rem; width: 45rem;">
                <span class="my-auto mx-auto "> Media Demo Comming Soon </span>
            </div>
        </div>
        <div class="w-screen flex">
            <router-link v-if="info.link.link === '/'" to="/" class="p-2 lg:p-4 rounded-lg bg-blue-500 mx-auto mt-4 text-white text-xl hover:bg-white hover:text-blue-500 border-2 border-blue-500 transition duration-200 ease-in-out">
                {{info.link.text}}
            </router-link>
            <a v-if="info.link.link != '/'" :href="info.link.link" class="p-2 lg:p-4 mt-4 rounded-lg mx-auto bg-blue-500 text-white text-xl hover:bg-blue-700 transition duration-200 ease-in-out">
                {{info.link.text}}
            </a>
        </div>
        <div class="w-screen flex mt-8">
            <div class="block xl:flex mx-auto">
                <div class="px-16 text-2xl">
                    <span style="font-family:'Lobster" class="text-3xl text-blue-500"> {{info.text}} </span>{{info.description}}
                </div>
                <div class="px-16 text-2xl" >
                    <span style="font-family:'Lobster" class="text-3xl text-blue-500"> {{info.text}} </span>{{info.description}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Title from '@/components/Title.vue'
import axios from "axios"

export default {
    components: {
        Title
    },  
    data(){
        return{
            info: null
        }
    },
    name:'ProjectView',
    props: ['id'],
    created(){
        var current;

        switch(this.id){
            case 'lectio':
                current = 0;
                break;
            case 'prepri':
                current = 1;
                break;
            case 'site':
                current = 2;
                break;
        }

        axios.get("/projects.json").then(response => (this.info = response.data.projects[current]));

    }
}
</script>