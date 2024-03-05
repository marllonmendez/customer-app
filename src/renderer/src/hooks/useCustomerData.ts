import axios, { AxiosPromise } from 'axios'
import { useQuery } from '@tanstack/react-query'
import { CustomerData } from '@/interface/CustomerData'

const fetchData = async (): AxiosPromise<CustomerData[]> => {
  return axios.get('http://localhost:8080/customers/list')
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
