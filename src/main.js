import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

// createApp(App).use(Quasar, quasarUserOptions).use(router).mount('#app')
createApp(App).use(ElementPlus).mount('#app')
