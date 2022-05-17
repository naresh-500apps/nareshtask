<template>
  <div>
      <input type="text">
      <button @click="fun()">click me</button>
      {{res}}
  </div>
</template>

<script>
export default {
    name:'RooT',
    data(){
        return{
            res:'',
        }
    },
    methods:{
        fun(){
            if (this.res === '')
            {
                console.log("it is a string")
            }
            else{
                console.log("it is not a string")
            }
        }
    }

}
</script>
