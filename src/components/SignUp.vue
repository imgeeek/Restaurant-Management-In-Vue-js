<template>
    <div>
         <img class="logo" alt="Restaurant logo" src="../assets/logo.png">
        <h3>Sign Up</h3>
        <div class="register">
            <!-- Use v-model to bind the inputs -->
<input type="text" placeholder="Enter Name..." v-model="name">
<input type="email" placeholder="Enter Email..." v-model="email">
<input type="password" placeholder="Enter Password..." v-model="password">
<input type="password" placeholder="Confirm Password..." v-model="cpassword">
<button type="button" v-on:click="signUp">Sign Up</button>
<p>
    <router-link to="/login">Login</router-link>
</p>
        </div>
    </div>
</template>
<script>

import axios from 'axios'

export default {
    name:"SignUp",
    data(){
        return{
            name:"",
            email:"",
            password:"",
            confirm_password:""
        }
    },
  methods:{
     async signUp(){
        //  Here i am using axios package to write the data in the json folder . make sure to run json-server before working this out
          let result=await axios.post("http://localhost:3000/users",{
              email:this.email,
              name:this.name,
              password:this.password
          });
          console.warn(result);
          if(result.status==201){
            //   save data in the local storage takes key and value. user info is the key and result.data is value (checked from console.log)
             localStorage.setItem("user-info",JSON.stringify(result.data));
             this.$router.push({
                 name:'home' 
                //  make sure this name is as same name as u defined in the router one
             })
          }
         
      }
  },
  mounted(){
      let user=localStorage.getItem("user-info");
      if(user){
            this.$router.push({
                 name:'home' 
                //  make sure this name is as same name as u defined in the router one
             })
      }
  }
}
</script>
<style>
    .logo{
        width:100px;
    }
    .register{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding:2em;
        background: rgba(255,255,255,0.19);
        box-shadow: 0 4px 30px rgba(0,0,0,0.1);
        backdrop-filter: blur(13px);
        width:25vw;
    }
        .register input{
            outline:none;
            border:none;
            border-bottom:2px solid black;
            padding:1em;
            width:100%;
            font-family: 'Nunito', sans-serif;
            text-transform: capitalize;
        }
        .register button{
            margin-top:1em;
            outline:none;
            border:none;
            background-color:brown;
            width:100%;
           padding:0.5em;
            color:white;
            font-size:1.2em;
            cursor: pointer;
            transition:0.1s ease-in;
            font-family: 'Ubuntu', sans-serif;
            font-weight:bold;
        }
        .register button:hover{
transform: scale(1.2);
        }
    
</style>