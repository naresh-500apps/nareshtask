<template>
  <div>
    <b-icon icon="person" id="person_detail" scale="1.5"></b-icon>
    <b-icon icon="envelope" id="envelope_detail" scale="1.5"></b-icon>
    <b-icon icon="cursor" id="cursor_detail" variant="dark" scale="1.5"></b-icon>
    <div class="text-left">
      <b-button @click="add_product()" variant="outline-primary" id="add_fill"
        ><b>Add <b-icon-plus-circle-fill /></b></b-button
      >&nbsp;
      <b-button @click="export_product()" variant="outline-primary" id="import_fill"
        ><b>Export<b-icon-arrow-up-short /></b></b-button
      >&nbsp;
      <b-button @click="import_product()" variant="outline-primary" id="export_fill"
        ><b
          >Import<u><b-icon-arrow-down-short /></u></b></b-button
      >&nbsp;<br /><br />
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        style="position:relative;left:60px;"
      ></b-pagination>
    </div>
    <br /><br />
    <b-table
      class="css-serial"
      style="width:1200px;left:-280px;position:relative;"
      striped
      hover
      bordered
      :items="tableData"
      :fields="Columns"
      :per-page="perPage"
      :current-page="currentPage"
    >
      <template #cell(operation)="data">
        <b-button @click="Edit_box(data.item)" variant="success"
          >Edit <b-icon-pencil-square /></b-button
        >&nbsp;
        <b-button v-b-modal.modal_detail @click="remove_box(data.item)" variant="danger"
          >Delete <b-icon-trash-fill
        /></b-button>
      </template>
    </b-table>
    <b-modal
      v-model="modalShow"
      :title="Title"
      header-bg-variant="primary"
      body-bg-variant="success"
      hide-footer
    >
      <b-card style="width: 29rem; height: 500px; background-color: lightgreen">
        <b-form @submit="save">
          <slot :formdata="editedItem" name="input-fields"> </slot>
          <b-button
            id="submit_detail"
            type="submit"
            v-b-tooltip.hover.left
            title="Save"
            variant="success"
            ><b-icon-save /></b-button
          >&nbsp;
        </b-form>
      </b-card>
    </b-modal>
    <b-modal
      id="modal_detail"
      ref="deleteConfirmation"
      title="DeleteDetails"
      header-bg-variant="primary"
      @ok="Delete_box"
    >
      <b-card style="width: 29rem; height: 100px; background-color: lightgreen">
        Do you want to delete data?
      </b-card>
    </b-modal>
  </div>
</template>


<script>
export default {
  name: "Product_details",
  props: ["Columns", "formFields"],
  data() {
    return {
      perPage: 4,
      currentPage: 1,
      editedItem: this.formFields,
      modalShow: false,
      editedIndex: -1,
      tableData: [],
      delete_data: null,
    };
  },
  computed: {
    Title() {
      return this.editedIndex === -1 ? "Add Productt" : "Edit Details";
    },
    rows() {
      return this.tableData.length;
    },
  },


  methods: {
    add_product() {
      this.modalShow = true;
      this.editedItem = Object.assign({}, this.formFields);
      this.editedIndex = -1;
    },
    Edit_box(item) {
      this.modalShow = true;
      this.editedIndex = this.tableData.indexOf(item);
      this.editedItem = Object.assign({}, item);
    },
    Delete_box() {
      console.log("this.item", this.delete_data);
      const index = this.tableData.indexOf(this.delete_data);
      this.tableData.splice(index, 1);
    },
    close() {
      this.modalShow = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.formFields);
        this.editedIndex = -1;
      }, 1000);
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.tableData[this.editedIndex], this.editedItem);
      } else {
        this.tableData.push(this.editedItem);
      }
      this.close();
    },
    remove_box(data) {
      this.delete_data = data;
      this.$refs.deleteConfirmation.show();
    },
  },
};
</script>
<style>
#submit_detail {
  position: relative;
  bottom: 480px;
  width: 40px;
  height: 35px;
  right: -380px;
}
#person_detail {
  position: relative;
  top: -100px;
  left: -652px;
}
#envelope_detail {
  position: relative;
  top: -100px;
  left: -360px;
}
#cursor_detail {
  position: relative;
  top: -100px;
  left: -50px;
}
#add_fill{
 position: relative;
 left:60px;
}
#import_fill{
 position: relative;
 left:60px;
}
#export_fill{
 position: relative;
 left:60px;
}
.css-serial {
  counter-reset: Product_details; /* Set the serial number counter to 0 */
}
.css-serial tr td:first-child:before {
  counter-increment: Product_details; /* Increment the serial number counter */
  content: counter(Product_details); /* Display the counter */
}
</style>