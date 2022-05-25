<template>
  <div>
      <Emitchild @action="fun1" ></Emitchild>
      <p>{{ name }} </p>
  </div>
</template>

<script>
import Emitchild from './Emitchild.vue'
export default {
    name:"EmitParent",
    components:{
        Emitchild
    },
    data(){
        return{
           name:"your name is:"
        }
    },
    methods:{
        fun1(change){
            this.name = change.name;
        },
    }

}
</script>

<style>

</style>