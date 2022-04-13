<template>
    <div>
         <img class="logo" alt="Restaurant logo" src="../assets/logo.png">
        <h3>Login Page</h3>
                <div class="register">
            <!-- Use v-model to bind the inputs -->

<input type="email" placeholder="Enter Email..." v-model="email">
<input type="password" placeholder="Enter Password..." v-model="password">
<button type="button" v-on:click="logIn">Log In</button>
<p>
    <router-link to="/login">Login</router-link>
</p>
        </div>
    </div>
</template>
<script>

import axios from 'axios'
export default {
    name:"LoginComponent",
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
       async logIn(){
            let check=await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`,{
                
            });
            console.log(check);
            if(check.status==200){
                localStorage.setItem("user-info",JSON.stringify(check.data));
                this.$router.push({
                    name:'home'
                })
            }
        }
    },
    mounted(){
        let user=localStorage.getItem("user-info");
        if(user){
            this.$router.push({
                name:'home'
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