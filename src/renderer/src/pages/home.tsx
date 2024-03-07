import { ReactElement } from 'react'

import { Sidebar } from '@/components/Sidebar'
import { useSidebarData } from '@/hooks'
import { listCustomer, registerCustomer } from '@/utils'

export function Home(): ReactElement {
  const { handleButtonClick, getPageComponent } = useSidebarData()
  const PageComponent = getPageComponent()

  return (
    <main>
      <div className="container">
        <div className="sidebar-wrapper">
          <Sidebar
            title="Páginas"
            buttonName={[registerCustomer, listCustomer]}
            handle={handleButtonClick}
          />
        </div>
        <div className="page-wrapper">
          <PageComponent />
        </div>
      </div>
    </main>
  )
}
