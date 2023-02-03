import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import vSelect from 'vue-select'
// import { MultiSelectPlugin } from '@syncfusion/ej2-vue-dropdowns';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import User_Store from './components/store/User_Store'
import Chat_List from './components/store/Chat_List.js'
import ChatStore from './components/store/ChatStore.js'
import Message from './components/store/Message'
import GroupStore from './components/store/GroupStore'
import GroupMember from './components/store/GroupMember'
import Search from './components/store/Search'
import ContactStore from './components/store/ContactStore'
import Login_component from '/Users/brundha/Documents/vue/chat/project1/src/components/Login_component.vue'
import Group_chat_list from '/Users/brundha/Documents/vue/chat/project1/src/components/Group_chat_list.vue'
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.component('v-select', vSelect)

// Vue.use(MultiSelectPlugin)
library.add(faTwitter)
Vue.component('font-awesome-icon',FontAwesomeIcon)

const store= new Vuex.Store({
  modules:
  {
    User_Store,Chat_List,ChatStore,Message,GroupStore,GroupMember,Search,ContactStore
  }
})

let routes = [
  {
      path:'/',
      name : 'Login_component',
      component :Login_component
  },
  {
    path:'/ChatList',
    name : 'Group_chat_list',
    component :Group_chat_list
},
  

]

const router=new VueRouter(
{
mode: "history",
routes

}
)

new Vue({
  store,router,
  render: h => h(App),
}).$mount('#app')