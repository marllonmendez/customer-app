import React, { ReactElement } from 'react'
import { FaTimes } from 'react-icons/fa'
import { RiFileList3Fill } from 'react-icons/ri'
import { HiUserPlus } from 'react-icons/hi2'

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
      <FaTimes onClick={closeWrapper} />
      <Content>
        <StyledLink to={REGISTER}>
          <ItemSidebar label={registerCustomer} icon={HiUserPlus} />
        </StyledLink>
        <StyledLink to={LIST}>
          <ItemSidebar label={listCustomer} icon={RiFileList3Fill} />
        </StyledLink>
      </Content>
    </WrapperSidebarContainer>
  )
}

export { WrapperSidebar }
