import { ReactElement } from 'react'

import { RiFileList3Fill } from 'react-icons/ri'
import { HiUserPlus } from 'react-icons/hi2'

import {
  ButtonText,
  IconWrapper,
  SidebarButton,
  SidebarContainer,
  SidebarTitle
} from '@/components/Sidebar/styles'
import { listCustomer, registerCustomer } from '@/utils'

type SidebarProps = {
  title: string
  buttonName: string[]
  handle: (page: string) => void
}

const buttonIcons = {
  [registerCustomer]: HiUserPlus,
  [listCustomer]: RiFileList3Fill
}

function Sidebar({ title, buttonName, handle }: SidebarProps): ReactElement {
  return (
    <SidebarContainer>
      <SidebarTitle>{title}</SidebarTitle>
      {buttonName.map((value, index) => {
        const Icon = buttonIcons[value]
        return (
          <SidebarButton key={index} onClick={() => handle(value)}>
            <IconWrapper>
              {Icon && <Icon size={20} />}
              <ButtonText>{value}</ButtonText>
            </IconWrapper>
          </SidebarButton>
        )
      })}
    </SidebarContainer>
  )
}

export { Sidebar }
