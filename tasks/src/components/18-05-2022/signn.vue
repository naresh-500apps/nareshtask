<template>
  <div>
<center>
<b-card header="AddData" style="width:50rem;display:block;">
    <b-navbar-nav>
        <b-button v-b-toggle.sidebar-left style="width:5rem;" class="btn btn-success">Menu</b-button>&nbsp;&nbsp;
        <b-button @click="Edit_Data()">AddData</b-button>
        <b-sidebar id="sidebar-left" title="HomeMenu" left shadow>
            <b-dropdown-menu text="Home" right>
                <b-dropdown-item @click="Edit_Data()">EditData</b-dropdown-item>
                <b-dropdown-item @click="Delete_Data()">DeleteData</b-dropdown-item>
                <b-dropdown-item @click="History_Data()">HistoryData</b-dropdown-item>
            </b-dropdown-menu><br>
             <router-link to ="/mobileview"><b-button @click="Log_Out()"><b-icon icon="power"></b-icon>LogOut</b-button></router-link>
        </b-sidebar>
    </b-navbar-nav>
 </b-card>
    <br><br>
      </center>
  </div>
</template>

<script>
export default {
    name:'GroceryItem',
    data(){
        return{

        }
    },
methods:{

}
}
</script>