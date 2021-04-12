import Vue from 'vue'
import App from './App.vue'
import './plugins/registerServiceWorker'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import i18n from './plugins/i18n'
import firebase from './plugins/firebase'
import './registerServiceWorker'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false

Vue.use(VueMeta)

store.commit('database/add', firebase.firestore())

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
