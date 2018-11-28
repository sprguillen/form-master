// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// Modules with absolute imports
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Icon from 'vue-awesome/components/Icon';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Components with relative imports
import App from './App';
import router from './router';
import './scss/main.scss';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.component('icon', Icon);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
