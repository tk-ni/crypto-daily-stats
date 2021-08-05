import { createRouter, createWebHistory } from "vue-router";

import Home from '@/components/home/Home.component.vue';
import CryptoPage from '@/components/crypto/CryptoPage.component.vue';
import NotFound404 from '@/components/404/NotFound404.component.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path:'/crypto/:id',
        component: CryptoPage
    },
    //404
    {
        path: '/:catchAll(.*)',
        component: NotFound404
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;