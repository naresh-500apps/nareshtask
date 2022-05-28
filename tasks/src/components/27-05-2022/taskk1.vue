<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand><b-icon-house-door-fill></b-icon-house-door-fill>VUE</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-card id="my-card">login name:Naresh Yerramsetty</b-card>
    </b-navbar>
      <center><br>  
      <b-button v-b-modal.modal-card id="contact">Addcontact</b-button><br><br>
      <b-modal id="modal-card"  title="AddContact"  hide-footer><button id="save" @click="onsubmit_data()"><b-icon icon="save" /></button>
      <b-form>
      <b-col align="left">Name:</b-col><b-col><b-form-input type="text" v-model="FormData.username" id="username" maxlength="10" required></b-form-input></b-col><br>
      <b-col align="left">Phone:</b-col><b-col><b-form-input type="text" v-model="FormData.number" id="number" maxlength="10" required></b-form-input></b-col><br>
      <b-col align="left">Gender:</b-col><b-col><b-form-select type="text" v-model="FormData.gender" id="gender" :options="identities" text-field="Name" value-field="id" required></b-form-select></b-col><br>
      <b-col align="left">Country:</b-col><b-col><b-form-select type="text" v-model="FormData.country" id="country" :options="countries" text-field="Name" value-field="id" required></b-form-select></b-col><br><br>
      </b-form>
      </b-modal>
      <b-table striped hover :items="formData" :fields="fields" class="w-50" bordered></b-table>
      </center>
  </div>
</template>
<script>
export default {
name:'TaskVue',
data(){
    return{
      FormData:{
      username:"",
      number:"",
      gender:"",
      country:"",
      },
      formData:[
        {
      username:"",
      number:"",
      gender:"",
      country:"",
      }
      ],
      fields:["Name","Phone_No","Gender","Country_Name"],
    countries: [
      { id:null,Name: "Select an country" },
        { id:1,Name: "india" },
        { id:2,Name: "usa" },
        { id:3,Name: "London" },
        ],
        identities: [
      {  id:null,Name: "Select an gender" },
        { id:1,Name: "male" },
        {id:2, Name: "female" },
        { id:3,Name: "trans-gender" }, 
        ],
};
},
methods:{
 onsubmit_data(){
  this.formData.push()({
    Name:this.FormData.username,
    Phone:this.FormData.number,
    Gender:this.FormData.gender,
    Country:this.FormData.country
})
},
}
}
</script>
<style scoped>
#contact{
  position:absolute;
  left: 20px;
}
#my-card{
  position:relative;
  left:1500px;
  background-color: lightblue;
  border-radius: 50px;
  border-width:0px;
}
#save{
   position: relative;
  bottom: 65px;
  width: 30px;
  height: 30px;
  right: -400px;    
}
#samplecard{
  width:400px;
  height:300px;
  border-radius:30%;
}

</style>