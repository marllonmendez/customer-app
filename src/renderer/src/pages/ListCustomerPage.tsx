import { ReactElement, useState } from 'react'

import { StyledTitleData, TableContainer, StyledLines } from '@/components/Table/styles'
import { useCustomerData } from '@/hooks/useCustomerData'
import { listCustomer, documentFormat, phoneFormat } from '@/utils'
import { Table } from '@/components/Table'
import { Input } from '@/components/Input'
import { CustomerData } from '@/interface'

export function ListCustomerPage(): ReactElement {
  const [query, setQuery] = useState('')

  const { data } = useCustomerData()

  const search = (data) => {
    if (!data) return []
    return data.filter((item: CustomerData) => item.document.includes(query))
  }

  return (
    <TableContainer>
      <h1>{listCustomer}</h1>
      <Input
        label="Buscar Cliente"
        placeHolder="Digite o CPF"
        value={query}
        updateValue={(value) => setQuery(value)}
      />
      <Table label="Nome" document="CPF" numberPhone="Celular" email="Email">
        <tbody>
          {search(data)?.map((customerData) => (
            <StyledLines key={customerData.id}>
              <StyledTitleData>{customerData.name}</StyledTitleData>
              <StyledTitleData>{documentFormat(customerData.document)}</StyledTitleData>
              <StyledTitleData>{phoneFormat(customerData.numberPhone)}</StyledTitleData>
              <StyledTitleData>{customerData.email}</StyledTitleData>
            </StyledLines>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  )
}
