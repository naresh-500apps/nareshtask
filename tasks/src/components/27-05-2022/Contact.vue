<template>
  <div>
    <center>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand
        ><b-icon-house-door-fill></b-icon-house-door-fill>VUE</b-navbar-brand> 
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-card id="my-card">login name:Naresh Yerramsetty</b-card>
    </b-navbar>
    <b-button v-b-modal.modal-card id="contact">Addcontact</b-button
      ><br /><br />
      <b-modal id="modal-card" title="AddContact"  hide-footer
        >
        
        <b-form @submit="onsubmit_data">
          <!-- <button id="save">
          <b-icon-save />
        </button> -->

         Name<b-form-input
              type="text"
              v-model="formData.username"
              id="username"
              maxlength="10"
              required
            ></b-form-input>
          <br />
         Phone:<b-form-input
              type="text"
              v-model="formData.number"
              id="number"
              maxlength="10"
              required
            ></b-form-input><br />
          Gender:<b-form-select
              type="text"
              v-model="formData.gender"
              id="gender"
              :options="identities"
              text-field="Name"
              value-field="Name"
              required
            ></b-form-select><br />
          Country:<b-form-select
              type="text"
              v-model="formData.country"
              id="country"
              :options="countries"
              text-field="Name"
              value-field="Name"
              required
            ></b-form-select>
             <b-button type="submit" ><b-icon-pencil-fill/></b-button>
          <br /><br />
         </b-form>
      </b-modal>
    <br/><br/>
     <!-- <b-table
        striped
        hover
        :items="form_data"
        :fields="fields"
        class="w-50"
        bordered
      ></b-table><br><br> -->

      </center>
            <addContact :result="result"></addContact>
  </div>
</template>
<script>
import addContact from './addContact.vue'
export default {
name:'ContactData',
components:{addContact},
//mixins:[addContact],
data(){
    return{
     formData: {
        username:"",
        number:"",
        gender:"",
        country:""
     },
      result: [
        // {
        //   username: "",
        //   number: "",
        //   gender: "",
        //   country: "",
        // },
      ],
      // fields: ["Name", "Phone_No", "Gender", "Country_Name"],
      countries: [
        { id: null, Name: "Select an country" },
        { id: 1, Name: "india" },
        { id: 2, Name: "usa" },
        { id: 3, Name: "London" },
      ],
      identities: [
        { id: null, Name: "Select an gender" },
        { id: 1, Name: "male" },
        { id: 2, Name: "female" },
        { id: 3, Name: "trans-gender" },
      ],
    };
  },
methods:{
  onsubmit_data(){
    //  var value = {
    //     username: "",
    //     number: "",
    //     gender: "",
    //     country:"",
    // };
    // var result = JSON.stringify(value);
    // document.getElementById("details").innerHTML = result;
    // result++
   this.result.push(
    this.formData
   )
   console.log(this.formData)
    },
  //   remove_data(){
  //  this.form_data.pop({
  //       Name: this.formData.username,
  //       Phone_No: this.formData.number,
  //       Gender: this.formData.gender,
  //       Country_Name: this.formData.country,
  //     });
  //   }
    }
}
</script>

<style>
#mycard{
  position: absolute;
  left:1000px;
}
</style>