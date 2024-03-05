import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const SidebarTitle = styled.h2`
  margin: 10px;
  padding: 10px;
`

export const SidebarButton = styled.button`
  border: none;
  border-radius: 20px;
  font-weight: 600;
  padding: 10px;
  margin: 5px;
  width: 40%;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--hover-background-color);
    color: var(--global-color);
  }

  @media screen and (min-width: 768px) and (max-width: 900px) {
    width: 65%;
  }

  @media screen and (min-width: 901px) and (max-width: 1307px) {
    width: 50%;
  }
`

export const ButtonText = styled.span`
  margin-left: 10px;
`
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
