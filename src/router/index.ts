import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path:'/',
        redirect:'/personPage'
    },
    {
        path: '/personPage',
        name: 'PersonPage',
        component: () => import('../views/PersonPage.vue')
    },
    {
        path: '/mainPage',
        name: 'MainPage',
        component: () => import('../views/MainPage.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router