import { ReactElement } from 'react'
import { StyledTable, StyledTitleData } from "@/components/Table/styles";

interface TableProps {
  name: string
  document: number
  numberPhone: number
  email: string
}

function Table({ name, document, numberPhone, email }: TableProps): ReactElement {
  return (
    <StyledTable>
      <tbody>
        <tr>
          <StyledTitleData>{name}</StyledTitleData>
          <StyledTitleData>{document}</StyledTitleData>
          <StyledTitleData>{numberPhone}</StyledTitleData>
          <StyledTitleData>{email}</StyledTitleData>
        </tr>
      </tbody>
    </StyledTable>
  )
}

export { Table }
