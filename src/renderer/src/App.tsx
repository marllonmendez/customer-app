import { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from '@/routes'

function App(): ReactElement {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
