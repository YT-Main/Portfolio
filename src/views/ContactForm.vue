<template>
    <div class="py-10">
        <Title Text='Contact Me!' />
        <div class="flex w-full pt-8" >
            <div class="mx-auto">
                <form action="https://formspree.io/xpzyjvbd" method="POST" class="p-2 text-2xl formW">
                    <span class="p-2">Name</span> <br>
                    <input class="p-2 rounded-lg border-2 border-blue-500 text-lg" type="text" placeholder="Name" name="name" required><br>

                    <span class="p-2">Email Address </span> <br>
                    <input class="p-2 rounded-lg border-2 border-blue-500 text-lg" type="email" placeholder="Email address" name="email" required><br>

                    <span class="p-2">Message</span> <br>
                    <textarea class="p-2 rounded-md border-2 border-blue-500 text-lg formW" rows="5"  placeholder="Message" name="message" required></textarea><br>
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

export default {
    name: "ContactForm",
    components:{
        Title
    }
}
</script>
<style scoped>
.formW{
    width: 35rem
}

@media (max-width: 1000px){
    .formW{
        width: 20rem
    }
}
</style>