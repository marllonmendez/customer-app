import axios, { AxiosPromise } from 'axios'

import { useQuery } from '@tanstack/react-query'

import { CustomerData } from '@/interface/CustomerData'
import { env } from '@/env'

const fetchData = async (): AxiosPromise<CustomerData[]> => {
  return axios.get(env.GET)
}

export function useCustomerData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['customer-data'],
    retry: 2
  })

  return {
    ...query,
    data: query.data?.data
  }
}
