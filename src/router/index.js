import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
import App from '../App'
import Detail from '../components/detail'
export default new VueRouter({
    routes:[
    { path:"/" , component: App},
    { path:"/song:id" , component: Detail}
    ]
})