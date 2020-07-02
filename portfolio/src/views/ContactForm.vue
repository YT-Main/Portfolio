<template>
    <div class="py-10">
        <Title Text='Contact Me!' />
        <div class="flex w-full pt-8" >
            <div class="mx-auto">
                <form action="https://formspree.io/xpzyjvbd" method="POST" class="p-2 text-2xl" style="width:45rem">
                    <span class="p-2">Name</span> <br>
                    <input class="p-2 rounded-full border-2 border-blue-500 text-lg" type="text" placeholder="Name" name="name" required><br>

                    <span class="p-2">Email Address </span> <br>
                    <input class="p-2 rounded-full border-2 border-blue-500 text-lg" type="email" placeholder="Email address" name="email" required><br>

                    <span class="p-2">Message</span> <br>
                    <textarea class="p-2 rounded-md border-2 border-blue-500 text-lg" rows="5" cols="60" placeholder="Message" name="message" required></textarea><br>
                    <div class="w-full flex">
                        <button class="p-2 rounded-lg bg-blue-500 mx-auto mt-4 text-white text-xl hover:bg-white hover:text-blue-500 border-2 border-blue-500 transition duration-200 ease-in-out" type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Title from '@/components/Title.vue'
import Pageclip from 'pageclip'
const pageclipAPIKey = 'api_W3KdbIYIUGh7iQfWyOT2VPG1xFjZRzLn'
const pageclip = new Pageclip(pageclipAPIKey)

export default {
    name: "ContactForm",
    components:{
        Title
    },
    data(){
        return{
            name: null,
            email: null,
            message: null,
        }
    },
    methods:{
        send: function(){
            var text = '{data: { name: null, email:null, message:null}}';
            var data = JSON.parse(text);
            data.name = this.name;
            data.email = this.email;
            data.message = this.message

            pageclip.send({data}).then((response) => {
            console.log(response.status, response.data)
            }).then(() => {
            return pageclip.fetch()
            }).then((response) => {
            console.log(response.status, response.data)
            })
        }
    }
}
</script>

<style>
   
</style>