import Vuex from 'vuex'
// 1.安装插件   Vue2用法
// Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
    // 保存状态的位置 使用 $store.state 调用
    state: {},
    // 
    mutations: {},
    // 处理异步操作 使用 $store.dispatch 调用
    actions: {
        // context 上下文 相当于store，可以调用内部属性  传参payload
        // aUpdateInfo(context, payload) {
        //     setTimeout(() => {
        //         context.commit('increment')
        //     }, 1000);
        // }
        
    },
    // 类似于计算属性 使用 $store.getters 调用
    getters: {},
    // 划分模块，针对不同模块做数据保存
    modules: {}
})

// 3.导出store对象
export default store