import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const savedSections = localStorage.getItem('board-sections')

const store = new Vuex.Store({
  state: {
    sections: savedSections ? JSON.parse(savedSections): []
    // {
    //   title: 'Todo1',
    //   tasks: [ { content: 'recursion'}],
    // },
  },
  mutations: mutations,
  actions: actions
})

store.subscribe((mutation, state) => {
  localStorage.setItem('board-sections', JSON.stringify(state.sections))
})

export default store
