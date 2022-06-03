<template>
  <div>
    <b-form>
      <b-form-group>
        <b-row
          ><b-col cols="2"
            ><b-form-input
              type="text"
              maxlength="10"
              placeholder="enterProduct"
              id="filter-input"
              v-model="filter"
              required
            ></b-form-input
          ></b-col>
          <b-col cols="2"
            ><b-form-input
              type="text"
              maxlength="10"
              placeholder="enterSku"
              id="filter-input"
              v-model="filter"
              required
            ></b-form-input
          ></b-col>
          <b-col cols="2"
            ><b-form-input
              type="text"
              maxlength="10"
              placeholder="enterType"
              id="filter-input"
              v-model="filter"
              required
            ></b-form-input></b-col
          ><b-button  @click="filter = ''" variant="primary"
            >search</b-button
          ></b-row
        >
      </b-form-group>
    </b-form>
    <b-icon icon="person" id="person_detail" scale="1.5"></b-icon>
    <b-icon icon="envelope" id="envelope_detail" scale="1.5"></b-icon>
    <b-icon
      icon="cursor"
      id="cursor_detail"
      variant="dark"
      scale="1.5"
    ></b-icon>
    <div class="text-left">
      <b-button @click="add_product()" variant="outline-primary" id="add_fill"
        ><b>Add <b-icon-plus-circle-fill /></b></b-button
      >&nbsp;
      <b-button
        @click="export_product()"
        variant="outline-primary"
        id="import_fill"
        ><b>Export<b-icon-arrow-up-short /></b></b-button
      >&nbsp;
      <b-button
        @click="import_product()"
        variant="outline-primary"
        id="export_fill"
        ><b
          >Import<u><b-icon-arrow-down-short /></u></b></b-button
      >&nbsp;<br /><br />
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        style="position: relative; left: 60px"
      ></b-pagination>
    </div>
    <br /><br />
    <input type="file" ref="doc" @change="readFile()" id="read_data" />
    <p id="data">{{ content }}</p>
    <br />
    <b-table
      class="css-serial"
      style="width: 1200px; left: -280px; position: relative"
      striped
      hover
      bordered
      :items="tableData"
      :fields="columns"
      :filter="filter"
      :per-page="perPage"
      :current-page="currentPage"
    >
      <template #cell(operation)="data">
        <b-button @click="edit_box(data.item)" variant="success"
          >edit <b-icon-pencil-square /></b-button
        >&nbsp;
        <b-button
          v-b-modal.modal_detail
          @click="remove_box(data.item)"
          variant="danger"
          >delete <b-icon-trash-fill
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
      title="delete_items"
      header-bg-variant="primary"
      @ok="delete_box"
    >
      <b-card style="width: 29rem; height: 100px; background-color: lightgreen">
        Do you want to delete item?
      </b-card>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "product_details",
  props: ["columns", "formFields"],
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      editedItem: this.formFields,
      modalShow: false,
      editedIndex: -1,
      tableData: [],
      delete_data: null,
      filter: null,
      content: null,
      file: null,
    };
  },
  computed: {
    Title() {
      return this.editedIndex === -1 ? "add_items" : "edit_items";
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
    edit_box(item) {
      this.modalShow = true;
      this.editedIndex = this.tableData.indexOf(item);
      this.editedItem = Object.assign({}, item);
    },
    delete_box() {
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
    readFile() {
      this.file = this.$refs.doc.files[0];
      const reader = new FileReader();
      if (this.file.name.includes(".txt")) {
        reader.onload = (res) => {
          this.content = res.target.result;
        };
        reader.onerror = (err) => console.log(err);
        reader.readAsText(this.file);
      } else {
        this.content = "check the console for file output";
        reader.onload = (res) => {
          console.log(res.target.result);
          document.getElementById("data").innerHTML = res.target.result;
        };
        reader.onerror = (err) => console.log(err);
        reader.readAsText(this.file);
      }
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
  top: -45px;
  left: -652px;
}
#envelope_detail {
  position: relative;
  top: -45px;
  left: -360px;
}
#cursor_detail {
  position: relative;
  top: -45px;
  left: -50px;
}
#add_fill {
  position: relative;
  left: 60px;
}
#import_fill {
  position: relative;
  left: 165px;
}
#export_fill {
  position: relative;
  left: -45px;
}
#read_data {
  position: relative;
  left: -730px;
}
.css-serial {
  counter-reset: Product_details; /* Set the serial number counter to 0 */
}
.css-serial tr td:first-child:before {
  counter-increment: Product_details; /* Increment the serial number counter */
  content: counter(Product_details); /* Display the counter */
}
</style>
