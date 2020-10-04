import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import Page_Demo2 from './page/Page_Demo2.vue'

Vue.use(ElementUI)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
	render:h => h(Page_Demo2),
}).$mount('#demo')
// demo是index.html的页面