import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login/Login';
import Register from '@/components/Login/Register';
import Dashboard from '@/components/Dashboard';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('usertoken');

  if (!loggedIn) {
    switch (to.path) {
      case '/login':
      case '/register':
        next();
        break;
      default:
        next('/login');
        break;
    }
  } else {
    next();
  }
});

export default router;
