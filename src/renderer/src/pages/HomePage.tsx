import { ReactElement, ReactNode } from 'react'

import { RegisterCustomerPage } from '@/pages/RegisterCustomerPage'
import { Sidebar } from '@/components/Sidebar'

export const HomePage = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <main>
      <div className="container">
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="page-wrapper">{children}</div>
      </div>
    </main>
  )
}

export function LayoutPage(): ReactElement {
  return <HomePage>{RegisterCustomerPage()}</HomePage>
}
