import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

import NotFound from '@/views/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    redirect: 'login',
    component: DashboardLayout,
    children: [
  
      {
        path: '/DataObat',
        name: 'DataObat',
        component: () => import(/* webpackChunkName: "demo" */ '../views/DataObat.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/UserProfile.vue')
      },
    
      {
        path: '/tables',
        name: 'tables',
        component: () => import(/* webpackChunkName: "demo" */ '../views/RegularTables.vue')
      },
      {
        path: '/tambahobat',
        name: 'tambahobat',
        component: () => import(/* webpackChunkName: "demo" */ '../views/TambahObat.vue')
      },
      {
        path: '/editobat/:id_obat',
        name: 'editobat',
        component: () => import(/* webpackChunkName: "demo" */ '../views/EditObat.vue')
      },
      {
        path: '/tambahadmin',
        name: 'tambahadmin',
        component: () => import(/* webpackChunkName: "demo" */ '../views/TambahAdmin.vue')
      },
      {
        path: '/editadmin/:id_admin',
        name: 'editadmin',
        component: () => import(/* webpackChunkName: "demo" */ '../views/EditAdmin.vue')
      },
    ]
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Register.vue')
      },
      { path: '*', component: NotFound }
    ]
  }
];

export default routes;
