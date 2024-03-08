import { ReactElement, useState } from 'react'
import { FaBars } from 'react-icons/fa'

import { WrapperSidebar } from '@/components/Sidebar/Wrapper'

import { SidebarContainer } from './styles'

const Sidebar = (): ReactElement => {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = (): void => setSidebar(!sidebar)

  return (
    <SidebarContainer>
      <FaBars onClick={showSidebar} />
      {sidebar && <WrapperSidebar active={setSidebar} />}
    </SidebarContainer>
  )
}

export { Sidebar }
