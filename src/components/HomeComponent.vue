<template>
    <div>
        <h1>Hello!Welcome to Home Page</h1>
    </div>
</template>
<script>
export default {
    name:"HomeComponent",
    // using the mounted lifecycle, if $user doesnt have the mounted value from the user, we redirect to other page. that means if one isnt logged in, he cant access the whole webpage
      mounted(){
      let user=localStorage.getItem("user-info");
      if(!user){
            this.$router.push({
                 name:'signup' 
                //  make sure this name is as same name as u defined in the router one
             })
      }
  }
}
</script>
<style>
    
</style>