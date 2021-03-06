// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import store from './vuex'
import Vuex from 'vuex'
import App from './App'
import routes from './router'
import axios from 'axios'
import ImgLazyLoad from 'vue-lazyload'
import MuseUi from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css'
import Toast from './components/Toast.js'
import './components/Toast.css'
import '@/assets/css/PcClass.css'

Vue.use(Toast)
Vue.use(Router)
Vue.use(MuseUi)

Vue.config.productionTip = false

window.axios = axios;
Vue.use(ImgLazyLoad, {
    loading: 'http://ovadapy3v.bkt.clouddn.com/loading.gif',
})
axios.defaults.baseURL = ' http://www.easy-mock.com/mock/59e1f212f88b6c37983459bf/goodroommate';
axios.defaults.autofaceURL = ' http://www.easy-mock.com/mock/59e1f212f88b6c37983459bf/goodroommate';

const router = new Router({
    mode: 'history',
    routes,
})


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    template: '<App/>',
    components: { App }
})