import { ReactElement } from 'react'

import { Input } from '@/components/Input'

export function RegisterCustomer(): ReactElement {
  return (
    <div>
      <Input label="Nome" placeHolder="Cliente"></Input>
      <Input label="CPF" placeHolder="123.456.789-00"></Input>
      <Input label="Celular" placeHolder="(85) 1234-5678"></Input>
      <Input label="Email" placeHolder="cliente@gmail.com"></Input>
    </div>
  )
}
