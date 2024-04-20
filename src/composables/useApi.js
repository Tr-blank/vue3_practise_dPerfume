import { useFetch } from '@/composables/useFetch'
const apiBaseUrl = 'https://express-dperfume-api.onrender.com'

export function getCategories() {
  return useFetch(`${apiBaseUrl}/categories`, {
    method: 'get'
  })
}

export function getPerfumes() {
  return useFetch(`${apiBaseUrl}/perfumes`, {
    method: 'get'
  })
}
