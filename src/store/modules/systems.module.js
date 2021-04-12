const state = {
  systems: [],
}

const getters = {
  downCount: state => state.systems.filter(system => !system.isUp).length,

  systems: state => state.systems,

  status: state => {
    if (state.systems.every(system => system.isUp)) {
      return 'success'
    }

    if (state.systems.some(system => system.isUp)) {
      return 'warning'
    }

    if (state.systems.every(system => !system.isUp)) {
      return 'danger'
    }

    return ''
  }
}

const mutations = {
  add (state, system) {
    state.systems.push(system)
  },

  clear (state) {
    state.systems = []
  },
}

const actions = {
  add ({ commit }, website) {
    commit('add', website)
  },

  clear ({ commit }) {
    commit('clear')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
