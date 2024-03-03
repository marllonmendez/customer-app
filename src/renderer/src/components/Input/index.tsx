import { ReactElement } from 'react'

import { StyledInput, StyledTitle } from './styles'

type Props = {
  label: string
  placeHolder: string
}

function Input({ label, placeHolder }: Props): ReactElement {
  return (
    <div>
      <StyledTitle>{label}</StyledTitle>
      <StyledInput placeholder={placeHolder}></StyledInput>
    </div>
  )
}

export { Input }
