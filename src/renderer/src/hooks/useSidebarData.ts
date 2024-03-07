import React, { FC, useState } from 'react'

import { RegisterCustomer, ListCustomer } from '@/pages'
import { listCustomer, registerCustomer } from '@/utils'

export const useSidebarData = (): {
  handleButtonClick: (page: string) => void
  getPageComponent: () => React.FC
  currentPage: string
} => {
  const [currentPage, setCurrentPage] = useState<string>(registerCustomer)

  const handleButtonClick = (page: string): void => {
    setCurrentPage(page)
  }

  const pageComponents: Record<string, FC> = {
    [registerCustomer]: RegisterCustomer,
    [listCustomer]: ListCustomer
  }

  const getPageComponent = (): React.FC => {
    return pageComponents[currentPage || '']
  }

  return {
    currentPage,
    handleButtonClick,
    getPageComponent
  }
}
