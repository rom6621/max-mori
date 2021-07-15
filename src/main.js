import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'
import router from './router'
import firebaseConfig from './firebaseConfig.json'
// import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

firebase.initializeApp(firebaseConfig)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
