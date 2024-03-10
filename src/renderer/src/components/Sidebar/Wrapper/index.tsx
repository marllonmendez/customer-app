import React, { ReactElement } from 'react'
import { IoListCircle } from 'react-icons/io5'
import { HiUserAdd, HiUserGroup } from 'react-icons/hi'

import { ItemSidebar } from '@/components/Sidebar/Item'
import { WrapperSidebarContainer, Content, StyledLink } from '@/components/Sidebar/Wrapper/styles'
import { listCustomer, registerCustomer, LIST, REGISTER } from '@/utils'

type WrapperSidebarProps = {
  active?: React.Dispatch<React.SetStateAction<boolean>>
}

function WrapperSidebar({ active }: WrapperSidebarProps): ReactElement {
  const closeWrapper = (): void => {
    active && active(false)
  }

  return (
    <WrapperSidebarContainer sidebar={active}>
      <IoListCircle onClick={closeWrapper} />
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
