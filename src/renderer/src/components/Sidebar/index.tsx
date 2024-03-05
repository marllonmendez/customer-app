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

type SidebarProps = {
  title: string
  buttonName: string[]
}

const buttonIcons = {
  'Registrar Cliente': HiUserPlus,
  'Lista de Clientes': RiFileList3Fill
}

function Sidebar({ title, buttonName }: SidebarProps): ReactElement {
  return (
    <SidebarContainer>
      <SidebarTitle>{title}</SidebarTitle>
      {buttonName.map((value, index) => {
        const Icon = buttonIcons[value]
        return (
          <SidebarButton key={index}>
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
