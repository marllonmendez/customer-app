import styled from 'styled-components'

export const SidebarContainer = styled.div`
  height: 100px;
  display: flex;

  > svg {
    position: fixed;
    color: var(--primary-color);
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
`
