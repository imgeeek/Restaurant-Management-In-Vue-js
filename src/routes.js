import HomeComponent from './components/HomeComponent.vue';
import SignUp from './components/SignUp.vue';
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
    }
];
const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router;