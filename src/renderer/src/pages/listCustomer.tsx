import { ReactElement } from 'react'
import { useCustomerData } from '@/hooks/useCustomerData'
import { StyledTable, StyledTitleData, TableContainer } from '@/components/Table/styles'

export function ListCustomer(): ReactElement {
  const { data } = useCustomerData()

  return (
    <TableContainer>
      <h1>Lista de Clientes</h1>
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
              <StyledTitleData>{customerData.document}</StyledTitleData>
              <StyledTitleData>{customerData.numberPhone}</StyledTitleData>
              <StyledTitleData>{customerData.email}</StyledTitleData>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  )
}
