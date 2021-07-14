import Vue from 'vue'
import Router from 'vue-router'
import Index from './view/Index'
import Room from './view/Room'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/room/:id',
            name: 'room',
            component: Room
        }
    ]
})