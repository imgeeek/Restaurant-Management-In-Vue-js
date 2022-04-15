<template>
    <div>
              <header-component/>
              <h1>Hello {{name}} welcome</h1>
    </div>
</template>
<script>
import HeaderComponent from './HeaderComponent.vue';
export default {
  components: { HeaderComponent },
    name:"HomeComponent",
    data(){
      return {
        name:''
      }
    },
    // using the mounted lifecycle, if $user doesnt have the mounted value from the user, we redirect to other page. that means if one isnt logged in, he cant access the whole webpage
      mounted(){
      let user=localStorage.getItem("user-info");
      this.name=JSON.parse(user).password;
     
      if(!user){
            this.$router.push({
                 name:'signup' 
                //  make sure this name is as same name as u defined in the router one
             })
      }else{
 console.log(this.name);
      }
  }
}
</script>
<style scoped>
</style>