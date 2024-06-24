import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";

// authentication middleware
const isAuthenticated = () => {
    return localStorage.getItem('token')? true : false;
}

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            requiresAuth: true
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// protected routes. 
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isAuthenticated()) {
            next({
                path: '/login',
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router