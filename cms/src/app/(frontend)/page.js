import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from '../../../public/styles.module.css'
import { getLessonPages } from '../lib/fetchLessonPages' // adjust path if needed

export default function HomePage() {
  const [lessons, setLessons] = useState([])

  useEffect(() => {
    async function loadLessons() {
      try {
        const data = await getLessonPages()
        setLessons(data.docs || [])
      } catch (err) {
        console.error('Failed to fetch lesson pages:', err)
      }
    }

    loadLessons()
  }, [])

  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <picture>
          <Image
            alt="Payload Logo"
            height={200}
            src="/logo.png"
            width={200}
          />
        </picture>

        <h1>
          Welcome to the <br />HCI 2025-26 CMS.
        </h1>

        <div className={styles.links}>
          <a
            className={styles.admin}
            href="/admin"
            rel="noopener noreferrer"
            target="_blank"
          >
            Go to admin panel
          </a>

          <a
            className={styles.docs}
            href="https://payloadcms.com/docs"
            rel="noopener noreferrer"
            target="_blank"
          >
            Documentation
          </a>
        </div>

        <div className={styles.lessons}>
          <h2>Lessons:</h2>
          {lessons.length === 0 ? (
            <p>Loading lessons...</p>
          ) : (
            <ul>
              {lessons.map((lesson) => (
                <li key={lesson.id}>{lesson.title}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
