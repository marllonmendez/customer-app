import { ReactElement } from 'react'

import { StyledTitleData, TableContainer, StyledLines } from '@/components/Table/styles'
import { useCustomerData } from '@/hooks/useCustomerData'
import { listCustomer, documentFormat, phoneFormat } from '@/utils'
import { Table } from '@/components/Table'

export function ListCustomerPage(): ReactElement {
  const { data } = useCustomerData()

  return (
    <TableContainer>
      {/*campo de pesquisa, usar hash no Backend*/}
      <h1>{listCustomer}</h1>
      <Table label="Nome" document="CPF" numberPhone="Celular" email="Email">
        <tbody>
          {data?.map((customerData) => (
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
