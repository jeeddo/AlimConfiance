export default function formatDate(date: string) {
  const dateObj = new Date(date)
  return new Intl.DateTimeFormat('fr-FR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(dateObj)
}
