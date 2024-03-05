import { ReactElement } from 'react'

import { ListCustomer } from '@/pages/listCustomer'
import { Sidebar } from '@/components/Sidebar'

function App(): ReactElement {
  return (
    <main>
      <div className="container">
        <div className="sidebar-wrapper">
          <Sidebar title="Páginas" buttonName={['Registrar Cliente', 'Lista de Clientes']} />
        </div>
        <div className="list-customer-wrapper">
          <ListCustomer />
        </div>
      </div>
    </main>
  )
}

export default App
