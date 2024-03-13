import { ReactElement, ReactNode } from 'react'

import { StyledTable, StyledColumnTitle } from '@/components/Table/styles'

interface TableProps {
  label: string
  document: string
  numberPhone: string
  email: string
  children?: ReactNode
}

function Table({ label, document, numberPhone, email, children }: TableProps): ReactElement {
  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledColumnTitle>{label}</StyledColumnTitle>
          <StyledColumnTitle>{document}</StyledColumnTitle>
          <StyledColumnTitle>{numberPhone}</StyledColumnTitle>
          <StyledColumnTitle>{email}</StyledColumnTitle>
        </tr>
      </thead>
      {children}
    </StyledTable>
  )
}

export { Table }
