import HomeComponent from './components/HomeComponent.vue';
import SignUp from './components/SignUp.vue';
import LoginComponent from './components/LoginComponent.vue'
import {createRouter,createWebHistory} from 'vue-router';
const routes=[
    {
        name:"home",
        path:"/",
        component:HomeComponent
    },
    {
        name:"signup",
        path:"/signup",
        component:SignUp
    },
    {
        name:"login",
        path:"/login",
        component:LoginComponent
    }
];
const router=createRouter({
    //makes the proper url
    history:createWebHistory(), 
    routes
});
export default router;