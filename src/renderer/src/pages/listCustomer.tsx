import { ReactElement } from 'react'

import { StyledTable, StyledTitleData, TableContainer } from '@/components/Table/styles'
import { useCustomer } from '@/hooks/useCustomer'
import { document, listCustomer } from '@/utils'

export function ListCustomer(): ReactElement {
  const { data } = useCustomer()

  return (
    <TableContainer>
      <h1>{listCustomer}</h1>
      <StyledTable>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Celular</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((customerData) => (
            <tr key={customerData.id}>
              <StyledTitleData>{customerData.name}</StyledTitleData>
              <StyledTitleData>{document(customerData.document.toString())}</StyledTitleData>
              <StyledTitleData>{customerData.numberPhone}</StyledTitleData>
              <StyledTitleData>{customerData.email}</StyledTitleData>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  )
}
