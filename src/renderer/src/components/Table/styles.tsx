import styled from 'styled-components'

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
  padding: 30px;
  margin: 20px;
  border-radius: 24px;

  h1 {
    text-align: center;
    color: var(--secondary-color);
  }
`

export const StyledTable = styled.table`
  padding: 12px;
  border: 2px solid var(--border-color);
  color: var(--text-color);
  font-size: 18px;
  border-radius: 12px;
  margin-bottom: 12px;
  width: 97%;
`

export const StyledColumnTitle = styled.th`
  color: var(--secondary-color);
  background-color: var(--border-color);
`

export const StyledTitleData = styled.td`
  white-space: nowrap;
  padding: 12px;
`
export const StyledLines = styled.tr`
  white-space: nowrap;
  &:nth-child(even) {
    background-color: var(--line-color)
  }
`

