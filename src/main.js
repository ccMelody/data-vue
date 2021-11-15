import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import Avue from '@smallwei/avue'
import '@smallwei/avue/lib/index.css'
import axios from './axios'
import 'element-ui/lib/theme-chalk/index.css';
import { url } from '@/config'
import './styles/common.scss'
Vue.config.productionTip = false

window.axios = axios;
Vue.use(Avue, {
  size: 'mini'
});
Vue.prototype.url = url;
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
