export const phoneFormat = (value: string | undefined) => {
    return value.replace(/\D+/g, '').replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3')
  }
