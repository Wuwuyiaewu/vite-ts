import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        alias: '/login',
        name: 'Login',
        component: () => import('../views/LoginView.vue'),
        children: [
            {
                path: '', // This is the default child route for '/login'
                name: 'Login',
                component: () => import('../components/example/PrimeLoginComponent.vue'),
            },
        ],
    },
    {
        path: '/crc',
        name: 'CRC',
        component: () => import('../views/MainView.vue'),
        children: [
            {
                path: '', // This is the default child route for '/crc'
                name: 'CRCDefault',
                component: () => import('../components/example/MockApi.vue'), // You can name it as you prefer
            },
            {
                path: 'neo4j', // Assuming you want '/crc/neo4j' to load Neo4jDDD component
                name: 'Neo4j',
                component: () => import('../components/example/Neo4jDDD.vue'),
            },
        ],
    },
    {
        path: '/bloom',
        name: 'Bloom',
        component: () => import('../views/BloomView.vue'),
    },
];

export default routes;