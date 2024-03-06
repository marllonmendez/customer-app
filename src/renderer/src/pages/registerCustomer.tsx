import React, { ReactElement } from 'react'

import { Input } from '@/components/Input'
import { InputContainer } from '@/components/Input/styles'
import { useFormat } from '@/hooks/useFormat'
import { document, registerCustomer } from '@/utils'

export function RegisterCustomer(): ReactElement {
  const { currentFormat, handleFormat } = useFormat()

  const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue = e.target.value
    const formatValue = document(inputValue)
    handleFormat(formatValue)
  }

  return (
    <InputContainer>
      <h1>{registerCustomer}</h1>
      <Input label="Nome" placeHolder="Cliente"></Input>
      <Input
        label="CPF"
        placeHolder="123.456.789-00"
        value={currentFormat}
        onChange={handleDocumentChange}
        maxLength={11}
      ></Input>
      <Input label="Celular" placeHolder="(85) 1234-5678"></Input>
      <Input label="Email" placeHolder="cliente@gmail.com"></Input>
    </InputContainer>
  )
}
