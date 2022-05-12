<template>
    <div>
        <button @click="fun()">clickme</button>
        <p>{{ str1 }}</p>
        <p>{{ str2 }}</p>
        <p>{{ result }}</p>
    </div>
</template>

<script>

export default{
    name:'SAme',
    data(){
        return{
           str1:"",
           str2:"",
           result:"",
        }
    },
    methods:{
        fun(){
         this.str1 = "file",
         this.str2 = "life",
         this.result = this.str1.length === this.str2.length && this.str1.split("").sort().join() === this.str2.split("").sort().join();
         console.log(this.result);
        }
    }
}
</script>
