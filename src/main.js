// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
require('./assets/iconfont/material-icons.css')

// 允许调试
Vue.config.devtools = true
Vue.config.debug = true

// Test
// const App = {
//   name: 'Test',
//   render: h => {
//     return (
//       <div id="app">
//         <h1>Basic</h1>
//         <ul>
//           <li><router-link to="/">/</router-link></li>
//           <li><router-link to="/foo">/foo</router-link></li>
//           <li><router-link to="/bar">/bar</router-link></li>
//         </ul>
//         <router-view />
//       </div>
//     )
//   }
// }
// const Home = { template: '<div>home</div>' }
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

// const router = new VueRouter({
//   mode: 'history',
//   base: __dirname,
//   routes: [
//     { path: '/', component: Home },
//     { path: '/foo', component: Foo },
//     { path: '/bar', component: Bar }
//   ]
// })

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

Vue.use( MuseUI )
