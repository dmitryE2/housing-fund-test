const makeRequest = async (url, payload, method = 'GET') => {
  const isQueryParams = method === 'GET'

  try {
    if (isQueryParams) {
      const queryParams = new URLSearchParams(payload)
      url = `${url}?${queryParams}`
    }

    const response = await fetch(url, { method, body: isQueryParams ? null : payload })

    if (response.status < 200 || response.status > 299) {
      throw new Error(`Произошла ошибка. Код ошибки: ${response.status}`)
    }

    const result = await response.json()

    return result
  } catch (error) {
    return { error }
  }
}

const useApi = {
  get: async (url, payload = {}) => {
    return await makeRequest(url, payload)
  },
  post: async (url, payload = {}) => {
    return await makeRequest(url, payload, 'POST')
  },
  patch: async (url, payload = {}) => {
    return await makeRequest(url, payload, 'PATCH')
  },
  put: async (url, payload = {}) => {
    return await makeRequest(url, payload, 'PUT')
  },
  delete: async (url, payload = {}) => {
    return await makeRequest(url, payload, 'DELETE')
  },
}

export { useApi }
