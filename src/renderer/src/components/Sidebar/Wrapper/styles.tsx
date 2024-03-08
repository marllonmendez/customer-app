import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const WrapperSidebarContainer = styled.div`
  background-color: #171923;
  position: fixed;
  height: 100%;
  width: 300px;
  animation: showSidebar.4s;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`

export const Content = styled.div`
  margin-top: 100px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`
