import { ReactElement } from 'react'

import { Sidebar } from '@/components/Sidebar'
import { useSidebar } from '@/hooks'
import { listCustomer, registerCustomer } from '@/utils'

export function Home(): ReactElement {
  const { handleButtonClick, getPageComponent } = useSidebar()
  const PageComonent = getPageComponent()

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
          <PageComonent />
        </div>
      </div>
    </main>
  )
}
