/// <reference types="vite/client" />

export const env = {
  POST: import.meta.env.VITE_API_URL + '/customers/create',
  GET: import.meta.env.VITE_API_URL + '/customers/list'
}
