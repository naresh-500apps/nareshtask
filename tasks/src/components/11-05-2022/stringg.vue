<template>
  <div>
      <button @click="f1()">click</button>
       {{res}}
      <button @click="f()">click1</button>
       {{res1}}
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
            document.write(this.res)
        },
        f(){
            this.res1=typeof this.s2
            document.write(this.res1)
        }
    }


}
</script>

<style>

</style>
