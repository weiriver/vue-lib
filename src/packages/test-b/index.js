import Vue from 'vue'
import TestB from './src/main.vue'

const Component = Vue.extend(TestB)
TestB.install = function(Vue) {
    Vue.component(TestB.name, TestB)
    Vue.prototype.$RTestB = function() {
        const instance = new Component()
        instance.$mount()
        return instance
    }
}

export default TestB
