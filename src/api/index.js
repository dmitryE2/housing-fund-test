import { useApi } from '@/utils/useApi'

import { Users } from './Users'

const API_URL = 'https://jsonplaceholder.typicode.com'

const api = {
  users: Users(useApi, API_URL),
}

export { api }
