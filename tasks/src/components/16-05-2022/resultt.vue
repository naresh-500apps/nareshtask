<template>
  <div>
    <b-card-group>
    <b-card no-body style="max-width: 100rem;" class="card h-100 border-primary col-6 mx-auto"> 
    <h1 class="float-left">STUDENT DETAILS</h1><br><br>  
    <b-form @submit="Submit()">
    <b-row
      ><b-col cols="2"
        ><b>Students:</b
        ><b-form-select
          v-model="StudentData.StudentId"
          :options="Students"
          value-field="id"
          text-field="Name"
          required
          id="Students" 
        ></b-form-select></b-col><br /><br />
         <b-col cols="2"
        ><b>DateSchedule:</b
        ><b-form-datepicker
          type="text" required
          v-model="StudentData.DateSchedule"
          id="DateSchedule"
        ></b-form-datepicker></b-col></b-row
    ><br />
    <b-row
      ><b-col cols="2"
        ><b>Subject:</b
        ><b-form-select
          v-model="StudentData.Subject"
          :options="Subjects"
          value-field="id"
          text-field="Name"
          required
          id="Subject"
        ></b-form-select></b-col><br /><br />
        <b-col cols="2"
        ><b>Marks:</b
        ><b-form-input
          type="number"
          min="0"
          max="100"
          required
          v-model="StudentData.Marks"
          id="Marks"
        ></b-form-input></b-col></b-row
    ><br /><br />
    <b-row
      ><b-col cols="2" text-align: center>
        <b>Remarks:</b><br /><textarea
          type="text" required
          placeholder="enter remarks"
          v-model="StudentData.Remarks"
          id="Remarks"
        ></textarea></b-col></b-row
    ><br /><br />
    <b-row><b-col cols="1">
    <b-button type="submit" variant="primary" class="float-left"
      >Submit</b-button
    ></b-col>
    <b-col cols="1"><b-button variant="info" @click="Table_Data()" class="float-left"
      >Tabledata</b-button
    ></b-col>
    <b-col cols="1"><b-button variant="danger" @click="Remove_Data()" class="float-left"
      >Removedata</b-button></b-col></b-row>
     <p>{{ res }}</p>
    <b-table striped hover :items="studentData"></b-table> 
    </b-form>
    </b-card>
    </b-card-group>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "StudentData",
  data() {
    return {
      StudentData: {
        StudentId: "",
        DateSchedule: "",
        Subject: "",
        Marks: "",
        Remarks: "",
      },
      studentData: [
        {
          StudentId: "",
          DateSchedule: "",
          Subject: "",
          Marks: "",
          Remarks: "",
        },
      ],
      res: "",
      Students: [],
      Selected: null,
      Subjects: [
        { id: null, Name: "Select an Subject" },
        { id: 1, Name: "English" },
        { id: 2, Name: "Mathematics" },
        { id: 3, Name: "Electronics" },
      ],
    };
  },
  async mounted() {
    await this.get_Data();
  },
  methods: {
    async get_Data() {
      let response = await axios.get(
        "https://api.sampleapis.com/baseball/battingAvgsSingleSeason"
      );
      this.Students = await response.data;
    },
    Submit() 
       {
      this.res = JSON.stringify(this.StudentData)
    },  
    Table_Data() {
      this.studentData.push({
        StudentId: this.StudentData.StudentId,
        DateSchedule: this.StudentData.DateSchedule,
        Subject: this.StudentData.Subject,
        Marks: this.StudentData.Marks,
        Remarks: this.StudentData.Remarks,
      });
    },
      Remove_Data() {
      this.studentData.pop({
        StudentId: this.StudentData.StudentId,
        DateSchedule: this.StudentData.DateSchedule,
        Subject: this.StudentData.Subject,
        Marks: this.StudentData.Marks,
        Remarks: this.StudentData.Remarks,
      });
      }     
  }
  }
</script>
