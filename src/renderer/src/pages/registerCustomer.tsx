import { ReactElement } from 'react'

import { Input } from '@/components/Input'
import { InputContainer } from '@/components/Input/styles'
import { registerCustomer } from '@/utils'

export function RegisterCustomer(): ReactElement {
  return (
    <InputContainer>
      <h1>{registerCustomer}</h1>
      <Input label="Nome" placeHolder="Cliente"></Input>
      <Input label="CPF" placeHolder="123.456.789-00"></Input>
      <Input label="Celular" placeHolder="(85) 1234-5678"></Input>
      <Input label="Email" placeHolder="cliente@gmail.com"></Input>
    </InputContainer>
  )
}
