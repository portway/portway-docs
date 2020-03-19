export async function fetchGuides() {
  const response = await fetch('/api/guides', {
    headers: {
      'content-type': 'application/json'
    }
  })
  return response.json()
}
