<template>
    <div>
        <button @click="fun()">clickme</button>
        <p> {{ array }}</p>
    </div>
</template>
<script>
export default{
    name:'RAil',
    data(){
        return{
            array:[1,3,5,7,9,11,13],
        }
    },
    methods:{
        fun(){
            this.array.pop();   
        }
    }
}
</script>
