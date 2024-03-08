export const phoneFormat = (value: string) => {
    return value.replace(/\D+/g, '').replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3')
  }
