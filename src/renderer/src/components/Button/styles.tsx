import styled from 'styled-components'

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 20px;
  width: 100%;
`

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  background-color: var(--sidebar-color);
  color: var(--primary-color);
  font-weight: 700;
  font-size: 15px;
  border: none;
  border-radius: 10px;
  padding: 15px;
  margin: 0 5px;

  &:hover {
    background-color: var(--secondary-color);
    color: var(--primary-color);
  }

`
