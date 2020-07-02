<template>
    <div class="py-10">
        <Title Text='Projects' />
        <div class="flex">
            <div class="mx-auto lg:flex mt-16">
                <div v-for="route in info" :key="route">
                    <router-link :to="'/projects/'+ route.val">
                        <div class="flex">
                            <div id="project" class="h-32 border-2 lg:mx-8 rounded-lg parent mx-auto lg:mt-0 mt-8" style="width: 20rem;">
                                <div class="child w-full h-full flex" :style="'background-image:' + 'url(img/' + route.val + '.svg);' ">
                                    <span class="my-auto mx-auto text-3xl text-white hidden hover:block relative">{{route.name}}</span>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
     </div> 
</template>
<script>
import Title from '@/components/Title.vue'
export default {
    name: 'Projects',
    components: {
        Title
    },
    data() {
        return{
            lectioToggle: false,
            info:
            [
                {
                    val: "lectio",
                    name: "Lectio"
                },
                {
                    val: "prepri",
                    name: "Prepri"
                },
                {
                    val: "site",
                    name: "My Portfolio"
                },
            ]
        }
    }
}
</script>
<style scoped>
.parent {
    overflow: hidden;
    position: relative;
    display: inline-block;
    cursor: pointer;
}

@media (max-width: 1000px){
    #project{
        width: 20rem;
        text-align:center;
    }
}
.child {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}
.parent:hover .child, .parent:focus .child {
    -ms-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
}

.parent:hover .child:before, .parent:focus .child:before {
    display: block;
}

.parent:hover span, .parent:focus span {
    display: block;
}

.child:before {
    content: "";
    display: none;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(52, 73, 94, 0.75);;
}

</style>