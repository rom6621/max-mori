import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'
import router from './router'
// import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyC6CU0xZ65WDXZdVYBtd7bdcUnCYNHY_GY",
  authDomain: "maxmori-60d97.firebaseapp.com",
  databaseURL: "https://maxmori-60d97-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "maxmori-60d97",
  storageBucket: "maxmori-60d97.appspot.com",
  messagingSenderId: "935112409711",
  appId: "1:935112409711:web:fa95829915899c1847039a",
  measurementId: "G-HL88630VC4"
};

firebase.initializeApp(firebaseConfig)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
