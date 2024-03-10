import { ReactElement, useState } from 'react'
import { IoCloseCircle } from 'react-icons/io5'

import { WrapperSidebar } from '@/components/Sidebar/Wrapper'

import { SidebarContainer } from './styles'

const Sidebar = (): ReactElement => {
  const [sidebar, setSidebar] = useState(true)
  const showSidebar = (): void => setSidebar(!sidebar)

  return (
    <SidebarContainer>
      <IoCloseCircle onClick={showSidebar} />
      {sidebar && <WrapperSidebar active={setSidebar} />}
    </SidebarContainer>
  )
}

export { Sidebar }
