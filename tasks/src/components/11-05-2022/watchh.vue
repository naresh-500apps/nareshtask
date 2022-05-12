<template>
    <div>
        <h1> WATCH STRING AND NUMBERS</h1>
       string1: <input type="text" v-model="string1"><br/><br/>
       <h3>the string output is:</h3>  
       string2: <input type="text" v-model="string2"> <br><br> 
       string3: <input type="text" v-model="string3">
       <h3>the string output is:</h3> 
        string4: <input type="text" v-model="string4"><br><br>
       
       enter any value : <input type="text" v-model="value1"><br>        
       <h3>the result of value * 2 is: {{ result }} </h3><br><br>
       <!-- <button @click="res()">clickme</button> -->

       
    </div>
</template>

<script>

export default{
    name:'RUle',
    data(){
        return{
            string1:"",
            string2:"",
            value1: '',
            result: 0, 
            string3:"",
            string4:"",  
        }
    },
    watch:{
           string1:function(val){
           this.string1 = val;
           this.string2= this.string1.toUpperCase();
        },
         string3:function(res){
         this.string3 = res;
         this.string4 = this.string3.toLowerCase();
    }, 

        value1:function(val){
            this.value1 = val;
            this.result = 2 * val;
        },
         result:function(val){
            this.result =  val;
   },
//   methods:{
//       res:function(){
//           this.result = this.value1 * 2;
//       }
  },
}

</script>
