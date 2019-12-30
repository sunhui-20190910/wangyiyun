// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import MintUI from 'mint-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import fastclick from 'fastclick'
import pinyin from 'js-pinyin/index'
import 'mint-ui/lib/style.css'
import 'styles/border.css'
import 'styles/reset.css'
import 'styles/iconfont/iconfont.css'
import App from './App'


Vue.use(MintUI);
Vue.use(VueAwesomeSwiper,);
fastclick.attach(document.body);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
