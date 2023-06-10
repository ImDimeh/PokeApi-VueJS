
import { createStore } from 'vuex'
export default createStore({
  // variables globales
  state: {
    type_list: [],
  },
  // acceder au var de states
  getters: {},
  mutations: {
    updatedTypeList(data) {
      this.state.type_list = data
      
      
    },
  },
   
  actions: {},
  modules: {}
})
