
//文件从 build/bin/build-route.js生成
import Vue from 'vue'
import Router from 'vue-router'
const navConfig = require('./nav.config.json')
import RMain from '../components/main.vue' 
import RAlert from '../doc/alert.md' 
import RDialog from '../doc/dialog.md' 
import RTable from '../doc/table.md' 
import RTest from '../doc/test.md' 
import RTestB from '../doc/test-b.md' 


Vue.use(Router)

const modules = [RMain,RAlert,RDialog,RTable,RTest,RTestB]
const routes = []

Object.keys(navConfig).map((value, index) => {
    let obj = {}
    obj.path = '/' + value,
    obj.component = modules[index]
    routes.push(obj)
})

export default new Router({
    mode: 'hash',
    routes
})

