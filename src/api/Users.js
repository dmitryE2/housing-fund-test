const resource = 'users'

export const Users = (api, API_URL) => ({
  get(data) {
    return api.get(`${API_URL}/${resource}/`, data)
  },
})
