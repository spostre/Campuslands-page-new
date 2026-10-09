export const formatDate = (date, locale = 'es-CO') =>
  new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(new Date(date))
