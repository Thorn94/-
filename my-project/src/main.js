import Vue from 'vue'
import App from './App'
// Vue.use(iView);
// import mint from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(mint);
import {post,fetch,patch,put} from './http'
//定义全局变量
Vue.prototype.$post=post;  //vue.prototype(this) ,$vm
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue(App)
app.$mount()
