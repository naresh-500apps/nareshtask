<template>
  <div>
    <button @click="func()">click</button>&nbsp;
    <button @click="func1()">click me</button>
    {{msg}}
    {{msg2}}
    {{msg1}}
    {{msg3}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
        msg:" ",
        msg2:"",
        msg1:"",
        msg3:" "
    }
  },
  methods: {
      func(){
      this.msg = 'Two';

     this.$nextTick(() => {
          this.msg = 'hello good evening';
        });
      },
      func1(){
      this.msg = 'Two';

     setTimeout(() => {
       this.msg2 = 'how are you!'  
     },1000);
},
  },
  mounted(){
       
       this.msg1="twoooooohijji"
       setTimeout(() => {
          this.msg2="thiiii"
       }, 6000);
      this.msg2="twoooooo"
       setTimeout(() => {
          this.msg2="twoee"
       }, 5000);
      
    //  this.msg = 'Two';

    //   this.$nextTick(() => {
    //       this.msg = 'how are you';
    //   });
}
  
}
</script>