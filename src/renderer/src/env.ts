/// <reference types="vite/client" />

export const env = {
  REGISTER: import.meta.env.VITE_API_URL + '/customers/create',
  LIST: import.meta.env.VITE_API_URL + '/customers/list'
}
