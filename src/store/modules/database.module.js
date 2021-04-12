const state = {
  database: {},
}

const getters = {
  database: state => state.database,
}

const mutations = {
  add (state, database) {
    state.database = database
  },
}

const actions = {
  add ({ commit }, database) {
    commit('add', database)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
