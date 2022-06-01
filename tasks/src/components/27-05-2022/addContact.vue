<template>
  <div>
    <div v-if="result.length">
      <b-card
        id="data"
        class="w-25"
        header="Saved Details"
        header-bg-variant="success"
        header-text-variant="light"
        v-for="data in result"
        :key="data">
      <label><b>Name:</b> {{data.username}}</label><br>
      <label><b>Age:</b> {{data.number}}</label><br>
      <label><b>Gender:</b>{{data.gender}}</label><br>
      <label><b>Date of Birth:</b>{{data.country}}</label>   
        <b-button
          v-b-tooltip.hover.left
          title="Edit"
          type="click"
          id="edit"
          variant="success"
          @click="onEdit"
          ><b-icon icon="pencil-square" scale="1.5"></b-icon
        ></b-button>
        <b-button
          v-b-tooltip.hover.right
          title="Delete"
          id="delete"
          variant="success"
          @click="onDelete"
          ><b-icon icon="trash-fill" scale="1.5"></b-icon
        ></b-button>
      </b-card>
    </div>
  </div>
</template>



<script>
export default {
  name: "DataCard",
  props: {
     formData: {
        username:String,
        number:Number,
        gender:String,
        country:String
     },
    result:Array
  },
  components: {},
  data() {
    return {
      results: this.result
    };
  },
  methods: {
    onEdit() {
      this.$emit("edit");
    },
    onDelete() {
      this.$emit("delete");
    },
  },
};
</script>



<style>
#data {
  position: relative;
  left: 25px;
}
#edit {
  position: relative;
  top: -160px;
  left: 45px;
}
#delete {
  position: relative;
  top: -160px;
  left: 48px;
}
#contact{
  position: absolute;
  left:30px;
  bottom:750px;
}
#card{
  position: relative;
  left:1500px;
  bottom:0px;
}
#card_icon{
position: absolute;
left:400px;
top:-50px;  
}

</style>