import { ReactElement } from 'react'

import { Home } from '@/pages/home'
import { document } from '@/utils'

function App(): ReactElement {
  console.log(document('12312312300'))
  return <Home />
}

export default App
