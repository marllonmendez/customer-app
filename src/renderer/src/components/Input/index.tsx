import { ReactElement } from 'react'

import { StyledInput, StyledTitle } from './styles'

type InputProps = {
  label: string
  placeHolder: string
}

function Input({ label, placeHolder }: InputProps): ReactElement {
  return (
    <div>
      <StyledTitle>{label}</StyledTitle>
      <StyledInput placeholder={placeHolder}></StyledInput>
    </div>
  )
}

export { Input }
