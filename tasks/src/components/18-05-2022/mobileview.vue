<template>
  <div>
  <center>
      <h1><b style="color:blue;">LOGINFORM</b></h1>
  <b-card style="width:18rem;height:400px;background-color:skyblue;">
<b-navbar variant="success">
    <b-navbar-nav>
        <b-button v-b-toggle.sidebar-left class="btn btn-success">Menu</b-button>
        <b-sidebar id="sidebar-left" title="HomeMenu" left shadow>
            <b-dropdown-menu text="Home" right>
                <b-dropdown-item @click="Sign_Up()">SignUp</b-dropdown-item>
                <b-dropdown-item @click="Get_Data()">GetData</b-dropdown-item>
                <b-dropdown-item @click="Remove_Data()">RemoveData</b-dropdown-item>
            </b-dropdown-menu>
        </b-sidebar>
    </b-navbar-nav>
</b-navbar><br><br>
  <b-form @click="Sign_Up()" >
     <b-col align="left"><b>USERNAME:</b></b-col><b-col><b-form-input type="text" maxlength="6" required v-model="form.username" placeholder="Enter UserName" id="username">UserName</b-form-input></b-col><br><br>
      <b-col align="left"><b>PASSWORD:</b></b-col><b-col><b-form-input  type="password" maxlength="8" required v-model="form.password" placeholder="Enter PassWord" id="password">PASSWORD</b-form-input></b-col><br>
      <router-link to ="/signn"><b-button variant="primary" type ="Sign_Up">SignUp</b-button></router-link>&nbsp;
         <b-button variant="info" type ="Reset">Reset</b-button>
  </b-form>
  </b-card> 
  </center>
  </div>
</template>

<script>
export default {
name:'MobilepageData',
data(){
    return{
      form:{
          username:"",
          password:"",
      }
    }
},
methods:{
    Sign_Up(){
          localStorage.setItem("username",this.form.username);
          localStorage.setItem("password",this.form.password);
          sessionStorage.setItem("username",this.form.username);
          sessionStorage.setItem("password",this.form.password);  
    },
    Get_Data(){
          localStorage.getItem("username");
          localStorage.getItem("password");
          sessionStorage.getItem("username");
          sessionStorage.getItem("password");  
    },
    Remove_Data(){
          localStorage.removeItem("username");
          localStorage.removeItem("password");
          sessionStorage.removeItem("username");
          sessionStorage.removeItem("password");  
    }
}
}
</script>
