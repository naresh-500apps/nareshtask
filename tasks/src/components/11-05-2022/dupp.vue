<template>
    <div>
        <button @click="fun()">clickme</button>
        <p> {{ array }}</p>
    </div>
</template>
<script>

export default{
    name:'MIce',
    data(){
        return{
            array:[],
        }
    },
    methods:{
        fun(){
            let array = [1,3,5,3,2,5,9];
            console.log(new Set(array));
        },
    }
}
</script>
