import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../components/Home.vue')
    },
    {
        path: '/companies',
        name: 'companies',
        component: () => import('../components/CompaniesList.vue')
    },
    {
        path: '/company/:alias',
        name: 'company',
        component: () => import('../components/Company.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../components/About.vue')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;