import styled from 'styled-components'

export const ItemSidebarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #1a202c;
  font-size: 20px;
  font-weight: 600;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  margin: 0 15px 20px;

  > svg {
    margin: 0 20px;
  }

  &:hover {
    background-color: var(--hover-color);
    color: var(--primary-color);
  }
`
