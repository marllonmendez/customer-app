import { ReactElement, useState } from 'react'

import { WrapperSidebar } from '@/components/Sidebar/Wrapper'

import { SidebarContainer } from './styles'

const Sidebar = (): ReactElement => {
  const [sidebar, setSidebar] = useState(true)

  return (
    <SidebarContainer>
      {sidebar && <WrapperSidebar label="Customer" active={setSidebar} />}
    </SidebarContainer>
  )
}

export { Sidebar }
