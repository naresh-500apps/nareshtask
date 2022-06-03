<template>
  <div>
    <sidebarDetail></sidebarDetail>
    <b-collapse id="collapse_box">
      <br />
      <center>
        <br /><br />
        <childDetail
          :columns="['Id', 'Product', 'Sku', 'Type', 'Quality', 'Operation']"
          :formFields="{}"
        >
          <!--  form input fields in this slot-->
          <template v-slot:input-fields="{ formdata }">
            <br />
            <b>Product:</b>
            <b-form-input
              id="inputProduct"
              v-model="formdata.Product"
              :options="product_options"
              type="text"
              value-field="id"
              text-field="name"
              required
              placeholder="enter_product"
            >
            </b-form-input
            ><br />
            <b> Sku:</b>
            <b-form-input
              id="inputSku"
              v-model="formdata.Sku"
              :options="sku_options"
              type="text"
              value-field="id"
              text-field="name"
              placeholder="enter_sku"
              required
            >
            </b-form-input
            ><br />
            <b> Type:</b>
            <b-form-input
              v-model="formdata.Type"
              id="inputType"
              type="text"
              :options="type_options"
              value-field="id"
              text-field="name"
              placeholder="enter_type"
              required
            >
            </b-form-input
            ><br />
            <b>Quality:</b>
            <b-form-input
              v-model="formdata.Quality"
              id="inputQuality"
              type="number"
              placeholder="enter_quality"
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
import sidebarDetail from "../03-06-2022/sidebarDetail.vue";
export default {
  name: "Add_Product",
  components: { childDetail, sidebarDetail },
};
</script>
