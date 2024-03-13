import axios, { AxiosPromise } from 'axios'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { CustomerData } from '@/interface/CustomerData'
import { env } from '@/env'

const postData = async (data: CustomerData): AxiosPromise<string> => {
  return axios.post(env.POST, data)
}

export function useCustomerDataMutate() {
  const queryClient = useQueryClient()
  const mutete = useMutation({
    mutationFn: postData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries(['customer-data'])
    }
  })

  return mutete
}
