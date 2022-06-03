<template>
  <div>
    <b-navbar id="color">
      <b-navbar-brand
        ><h2 style="color: white">
          <b-button v-b-toggle.sidebar_fill><b-icon-list /></b-button>
        </h2>
        <b-sidebar id="sidebar_fill" title="Logistic"
          ><b-button @click="home_vue()"><b-icon-house-fill /> Home</b-button
          ><br /><br /><b-button @click="product_vue()"
            ><b-icon-ui-checks-grid /> Product</b-button
          ></b-sidebar
        ></b-navbar-brand
      >
      <h2 id="card" style="color: white; font-size: 20px">
        <b
          >Root
          <b-button v-b-toggle.collapse_box variant="success"
            ><b-icon-chevron-down /></b-button
        ></b>
      </h2>
    </b-navbar><br/>
  </div>
</template>
<script>
export default {
  name: "SideVue",
  data() {
    return {};
  },
  methods: {
    home_vue() {
      this.$router.push("/homeDetail");
    },
    product_vue() {
      this.$router.push("/parentDetail");
    },
  },
};
</script>

<style>
#color {
  background-color: rgb(218, 196, 28);
}
#card {
  position: relative;
  left: 1680px;
}
</style>
