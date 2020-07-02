<template>
    <div>
        <div class="text-blue-500 flex text-4xl lg:text-5xl" style="font-family:'Lobster">
            <span class="mx-auto">{{Text}}</span>
        </div>
        <div class="flex">
         <div class="h-2 bg-blue-500 mx-auto rounded-full" style="width:30vw"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Title',
    props: ['Text', 'mobile']
}
</script>