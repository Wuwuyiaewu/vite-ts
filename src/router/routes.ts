import type { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        alias:'/login',
        name: 'Login',
        component:() => import('../views/LoginView.vue')
    },
    {
        path: '/crc',
        name: 'CRC',
        component: () => import('../views/CRCView.vue')
    },
    {
        path: '/bloom',
        name: 'Bloom',
        component: () => import('../views/BloomView.vue')
    }
];
export default routes;
