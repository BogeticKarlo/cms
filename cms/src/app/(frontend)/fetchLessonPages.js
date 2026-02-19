const CMS_URL = 'https://cms-bogetickarlos-projects.vercel.app'

export async function getLessonPages() {
  const res = await fetch(`${CMS_URL}/api/lesson-pages?depth=1&sort=order`)
  if (!res.ok) throw new Error('Failed to fetch lesson pages')
  return res.json()
}
