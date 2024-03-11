import { ReactElement } from 'react'

import { StyledButton } from '@/components/Button/styles'

type ButtonProps = {
  label: string
  onClick: () => void
}

function Button({ label, onClick }: ButtonProps): ReactElement {
  return <StyledButton onClick={onClick}>{label}</StyledButton>
}

export { Button }
