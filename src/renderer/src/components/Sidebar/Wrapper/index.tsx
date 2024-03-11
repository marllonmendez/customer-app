import React, { ReactElement } from 'react'
import { HiUserAdd, HiUserGroup } from 'react-icons/hi'

import { ItemSidebar } from '@/components/Sidebar/Item'
import { WrapperSidebarContainer, Content, StyledLink } from '@/components/Sidebar/Wrapper/styles'
import { listCustomer, registerCustomer, LIST, REGISTER } from '@/utils'

type WrapperSidebarProps = {
  label: string
  active?: React.Dispatch<React.SetStateAction<boolean>>
}

function WrapperSidebar({ label, active }: WrapperSidebarProps): ReactElement {
  return (
    <WrapperSidebarContainer sidebar={active}>
      <h2>{label}</h2>
      <Content>
        <StyledLink to={REGISTER}>
          <ItemSidebar label={registerCustomer} icon={HiUserAdd} />
        </StyledLink>
        <StyledLink to={LIST}>
          <ItemSidebar label={listCustomer} icon={HiUserGroup} />
        </StyledLink>
      </Content>
    </WrapperSidebarContainer>
  )
}

export { WrapperSidebar }
