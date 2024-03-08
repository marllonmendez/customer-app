import { ReactElement } from 'react'
import { IconType } from 'react-icons'

import { ItemSidebarContainer } from './styles'

type ItemSidebarProps = {
  label: string
  icon: IconType
}

const ItemSidebar = ({ label, icon }: ItemSidebarProps): ReactElement => {
  const Icon = icon

  return (
    <ItemSidebarContainer>
      <Icon size={20} />
      {label}
    </ItemSidebarContainer>
  )
}

export { ItemSidebar }
