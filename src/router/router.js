import App from '../index.vue'

import Router from 'vue-router'
import imageList from '../pages/imageList.vue'
import help from '../pages/help.vue'
import home from '../pages/home.vue'
Vue.use(Router)


export default new Router(
    {
        mode:'abstract',
        routes:[
            {path:'/imageList',component:imageList}, 
            {path:'/help',component:help},
            {path:'/home',component:home},
            {path:'/',redirect:'/home'}
        ]
    }
)