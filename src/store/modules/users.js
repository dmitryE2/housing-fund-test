import { api } from '@/api'

export default {
  namespaced: true,

  state: () => ({
    data: null,
    loading: false,
    activeUserData: null,
    errorMessage: '',
    activeUserId: NaN,
  }),

  mutations: {
    SET_DATA: (state, value) => {
      state.data = value
    },
    SET_LOADING: (state, value) => {
      state.loading = value
    },
    SET_USER: (state, value) => {
      state.activeUserData = value
    },
    SET_USER_ID: (state, value) => {
      state.activeUserId = value
    },
    SET_ERROR: (state, value) => {
      state.errorMessage = value
    },
  },

  actions: {
    async getUsers({ commit }, { data }) {
      commit('SET_LOADING', true)

      const result = await api.users.get(data)

      if (result?.error) {
        commit('SET_ERROR', result.error.message)
      } else {
        commit('SET_DATA', result)
      }

      commit('SET_LOADING', false)
    },
    setActiveUser({ state, commit }, { id }) {
      const userData = state.data.find((user) => user.id === id)

      commit('SET_USER', userData ? userData : null)
      commit('SET_USER_ID', userData ? userData.id : NaN)
    },
    resetData({ commit }) {
      commit('SET_USER', null)
      commit('SET_DATA', null)
      commit('SET_ERROR', '')
    },
  },

  getters: {
    usersList: ({ data }) => data,
    isLoading: ({ loading }) => loading,
    activeUser: ({ activeUserData }) => activeUserData,
    errorMessage: ({ errorMessage }) => errorMessage,
    activeUserId: ({ activeUserId }) => activeUserId,
  },
}
