/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
import Vue from 'vue';
import iView from 'iview';
import App from './App.vue';
import router from './router';
import store from './store';
import { createProvider } from './vue-apollo';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false;
Vue.use(iView);
new Vue({
  apolloProvider: createProvider(),
  router,
  store,
  render: h => h(App)
}).$mount('#app');
