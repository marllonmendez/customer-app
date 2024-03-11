import { AlertContainer } from '@/components/Alert/styles'
import { ReactElement, useEffect, useState } from 'react'

type AlertProps = {
  message: string
  onClose: () => void
}

export function Alert({ message, onClose }: AlertProps): ReactElement {
  const [show, setShow] = useState<boolean>(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
      onClose()
    }, 2000)

    return () => clearTimeout(timer)
  }, [onClose])

  return <AlertContainer show={show}>{message}</AlertContainer>
}
