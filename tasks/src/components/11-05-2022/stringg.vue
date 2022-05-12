<template>
  <div>
      <button @click="f1()">click</button>
      It is a {{res}}
      <button @click="f()">click1</button>
      It is a {{res1}}
  </div>
</template>

<script>
export default {
    name:"QN1",
    data(){
        return{
            s1:"naresh",
            s2:46544554,
            res:"",
            res1:""
        }
    },
    methods:{
        f1(){
            this.res=typeof this.s1
        },
        f(){
            this.res1=typeof this.s2
        }
    }


}
</script>

<style>

</style>
