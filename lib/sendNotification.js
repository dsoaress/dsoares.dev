export default function sendNotification(message) {
  return fetch('/api/webhook', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ content: message })
  })
}
