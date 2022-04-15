<template>
    <div class="nav">
            <div>
                        <h1>header</h1>
            </div>
        <div class="logo" id="logo">
        <a href="/home">Home</a>
        <a href="">Add Restaurant</a>
        <a href="">Update Restaurant</a>
        <a v-on:click="logOut" href="#">Logout Restaurant</a>
        </div>
    </div>
</template>
<script>
export default {
    name:"HeaderComponent",
    methods:{
        logOut(){
           localStorage.clear();
           this.$router.push({
               name:'login'
           });
        }
    }
}
</script>
<style scoped>

.nav{
    margin:0;
    padding:0 1em;
    display: flex;
    justify-content: space-between;
    align-items:center;
    width:100%;
    background: #111;
}
.logo{
    
    margin-right:14em;
    display: flex;
    justify-content: center;
    align-items: center;
}
a{
    white-space: nowrap;
    text-decoration: none;
    margin-right:3em;
    color:white;
}


</style>