<template>
    <div>
        <Titile :Text='{ProjectName}' />
    </div>
</template>

<script>
import Title from '@/components/Title.vue'
export default {
    name:'ProjectView',
    props:{
        ProjectName:'',
        videoProof: false,
        CopyText:'',
        Vue: false,
        Flutter: false,
        Tailwind: false,

    }
}
</script>