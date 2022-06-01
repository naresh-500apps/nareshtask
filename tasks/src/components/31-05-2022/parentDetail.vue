<template>
  <div>
    <b-navbar id="color">
      <b-navbar-brand
        ><h2 style="color: white"><b-button v-b-toggle.sidebar_fill><b-icon-list /></b-button></h2
      ><b-sidebar id="sidebar_fill" title="Logistic"><b-button><b-icon-house-fill/> Home</b-button><br/><br/><b-button><b-icon-ui-checks-grid/> Product</b-button></b-sidebar></b-navbar-brand>
      <h2 id="card" style="color: white; font-size: 20px">
        <b>Root <b-button v-b-toggle.collapse_box variant="success"><b-icon-chevron-down /></b-button></b>
      </h2> </b-navbar
    ><br /><b-collapse id="collapse_box">
    <b-form>
      <b-row
        ><b-col cols="2"
          ><b-form-input
            type="text"
            maxlength="10"
            placeholder="Enter product"
            required
          ></b-form-input
        ></b-col>
        <b-col cols="2"
          ><b-form-input
            type="text"
            maxlength="10"
            placeholder="Enter sku"
            required
          ></b-form-input
        ></b-col>
        <b-col cols="2"
          ><b-form-input
            type="text"
            maxlength="10"
            placeholder="Enter type"
            required
          ></b-form-input
        ></b-col>
        <b-button type="search" @click="search()" variant="outline-primary"
          >search</b-button
        ></b-row
      >
    </b-form>
   <br />
    <center>
      <br /><br />
      <childDetail
        :Columns="['Id', 'Product', 'Sku', 'Type', 'Quality', 'Operation']"
        :formFields="{}"
      >
        <!--  form input fields in this slot-->
        <template v-slot:input-fields="{ formdata }">
          <br />
          <b>Product:</b>
          <b-form-input
            id="input-2"
            v-model="formdata.Product"
            :options="Product_options"
            type="text"
            value-field="id"
            text-field="name"
            required
            placeholder="Enter product"
          >
          </b-form-input
          ><br />
          <b> Sku:</b>
          <b-form-input
            id="input-3"
            v-model="formdata.Sku"
            :options="Sku_options"
            type="text"
            value-field="id"
            text-field="name"
            required
          >
          </b-form-input
          ><br />
          <b> Type:</b>
          <b-form-input
            v-model="formdata.Type"
            id="input-4"
            type="text"
            :options="Type_options"
            value-field="id"
            text-field="name"
            required
          >
          </b-form-input
          ><br />
          <b>Quality:</b>
          <b-form-input
            v-model="formdata.Quality"
            id="input-5"
            type="number"
            required
          >
          </b-form-input>
          <br /><br />
        </template>
      </childDetail>
    </center>
    </b-collapse>
  </div>
</template>


<script>
import childDetail from "./childDetail.vue";
export default {
  name: "Add_Product",
  components: { childDetail },
};
</script>
<style scoped>
#color {
  background-color: rgb(218, 196, 28);
}
#card {
  position: relative;
  right: 5px;
}
</style>