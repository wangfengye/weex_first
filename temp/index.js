import router from '../src/router/router.js'
//import store from './store'
import { sync } from 'vuex-router-sync'

//sync(router)
var App = require('..\\src\\index.vue')
App.el = '#root'
App.router =router
new Vue(App)
