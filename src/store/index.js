import Vue from 'vue'
import Vuex from 'vuex'

import database from './modules/database.module'
import systems from './modules/systems.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    database,
    systems,
  }
})
