import { useFetch } from '@/composables/useFetch'
const apiBaseUrl = 'https://express-dperfume-api.onrender.com'

export function getCategories() {
  const { data, error } = useFetch(`${apiBaseUrl}/categories`, {
    method: 'get'
  })
  return { data, error }
}
