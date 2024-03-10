import { ReactElement, ReactNode } from 'react'

import { RegisterCustomerPage } from '@/pages/RegisterCustomerPage'
import { Sidebar } from '@/components/Sidebar'

export const HomePage = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <main className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="children">{children}</div>
    </main>
  )
}

export function LayoutPage(): ReactElement {
  return <HomePage>{RegisterCustomerPage()}</HomePage>
}
