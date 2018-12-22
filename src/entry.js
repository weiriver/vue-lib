
//文件从 build/bin/build-entry.js生成
import RAlert from './packages/alert/index.js' 
import RDialog from './packages/dialog/index.js' 
import RTable from './packages/table/index.js' 
import RTest from './packages/test/index.js' 
import RTestB from './packages/test-b/index.js' 


const components = [RAlert,RDialog,RTable,RTest,RTestB]

const install = function(Vue) {
    components.forEach(component => {
        component.install(Vue)
    })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install
}

