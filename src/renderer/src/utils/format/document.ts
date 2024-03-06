export const document = (value: string) => {
  return value.replace(/\D+/g, '').replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4')
}
