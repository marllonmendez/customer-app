import { ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom'

import { HomePage } from '@/pages/HomePage'
import { ListCustomerPage, RegisterCustomerPage } from '@/pages'

const AppRoutes = (): ReactElement => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage>
            <RegisterCustomerPage />
          </HomePage>
        }
      />
      <Route
        path="/list"
        element={
          <HomePage>
            <ListCustomerPage />
          </HomePage>
        }
      />
    </Routes>
  )
}

export { AppRoutes }
