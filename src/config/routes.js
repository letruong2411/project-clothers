import React from 'react'

const routes = [
    {
        path: '/',
        component: React.lazy(() => import(`./../components/Home/Home`)),
        exact: true
    },
    {
        path: '/about',
        component: React.lazy(() => import(`../components/About/About`)),
        exact: true
    },
    {
        path: '/contact',
        component: React.lazy(() => import(`../components/Contact/Contact`)),
        exact: true
    },
    {
        path: '/blog',
        component: React.lazy(() => import(`../components/Features/Features`)),
        exact: true
    },
    {
        path: '/men',
        component: React.lazy(() => import(`../components/Men/Men`)),
        exact: true
    },
    {
        path: '/shop',
        component: React.lazy(() => import(`../components/Shop/Shop`)),
        exact: true
    },
    {
        path: '/shortcode',
        component: React.lazy(() => import(`../components/Shortcode/Shortcode`)),
        exact: true
    },
    {
        path: '/women',
        component: React.lazy(() => import(`../components/Women/Women`)),
        exact: true
    },
    {
        path: '/login',
        component: React.lazy(() => import(`../components/Login/Loginpage`)),
        exact: true
    },
    {
        path: '/register',
        component: React.lazy(() => import(`../components/Login/Register`)),
        exact: true
    },
    {
        path: '/detail/:id',
        component: React.lazy(() => import(`../components/Details/Detail`)),
        exact: true
    },
    {
        path: '/cart',
        component: React.lazy(() => import(`../components/Cart/Cart`)),
        exact: true
    },
    {
        path: '/checkout',
        component: React.lazy(() => import(`../components/CheckOut/CheckOut`)),
        exact: true
    },
    {
        path: '/admin',
        component: React.lazy(() => import(`../components/Admin/AdminPage`)),
        exact: true
    },
    {
        path: '/admin/users',
        component: React.lazy(() => import(`../components/Admin/UserAdmin`)),
        exact: true
    },
    {
        path: '/admin/products',
        component: React.lazy(() => import(`../components/Admin/ProductsAdmin`)),
        exact: true
    },
    {
        path: '/admin/orders',
        component: React.lazy(() => import(`../components/Admin/Orders`)),
        exact: true
    },
    {
        path: '/admin/users/edit/:id',
        component: React.lazy(() => import(`../components/Admin/AdminEditUser`)),
        exact: true
    },
    {
        path: '/admin/products/edit/:id',
        component: React.lazy(() => import(`../components/Admin/AdminEditProduct`)),
        exact: true
    },
    {
        path: '/admin/products/add',
        component: React.lazy(() => import(`../components/Admin/AdminAddProduct`)),
        exact: true
    },
    {
        path: '/admin/orders/edit/:id',
        component: React.lazy(() => import(`../components/Admin/AdminEditOrder`)),
        exact: true
    }

]

export default routes