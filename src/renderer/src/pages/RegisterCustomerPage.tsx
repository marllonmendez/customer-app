import { ReactElement, useState } from 'react'

import { Input } from '@/components/Input'
import { InputContainer } from '@/components/Input/styles'
import { CustomerData } from '@/interface'
import { useCustomerDataMutate } from '@/hooks'
import { registerCustomer, documentFormat, removeFormat, phoneFormat } from '@/utils'
import { Button } from '@/components/Button'
import { ButtonContainer } from '@/components/Button/styles'
export function RegisterCustomerPage(): ReactElement {
  const [name, setName] = useState<string>('')
  const [document, setDocument] = useState<string>('')
  const [numberPhone, setNumberPhone] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const { mutate } = useCustomerDataMutate()

  const onSubmit = (): void => {
    const customerData: CustomerData = {
      name,
      document,
      numberPhone,
      email
    }
    mutate(customerData)
  }

  const onClear = (): void => {
    setName(''), setDocument(''), setNumberPhone(''), setEmail('')
  }

  return (
    <InputContainer>
      <h1>{registerCustomer}</h1>
      <Input
        label="Nome"
        placeHolder="Cliente"
        value={name}
        updateValue={(value) => setName(value)}
      />
      <Input
        label="CPF"
        placeHolder="000.000.000-00"
        value={documentFormat(document)}
        updateValue={(value) => setDocument(removeFormat(value))}
        maxLength={11}
      />
      <Input
        label="Celular"
        placeHolder="(00) 0000-0000"
        value={phoneFormat(numberPhone)}
        updateValue={(value) => setNumberPhone(removeFormat(value))}
        maxLength={10}
      />
      <Input
        label="Email"
        placeHolder="cliente@email.com"
        value={email}
        updateValue={(value) => setEmail(value)}
      />
      <ButtonContainer>
        <Button label="SALVAR" onClick={onSubmit} />
        <Button label="LIMPAR" onClick={onClear} />
      </ButtonContainer>
    </InputContainer>
  )
}
