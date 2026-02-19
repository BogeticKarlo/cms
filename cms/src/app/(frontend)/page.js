import Image from 'next/image'
import React from 'react'
import styles from '../../../public/styles.module.css'

export const dynamic = 'force-dynamic';

const CMS_URL = 'https://cms-bogetickarlos-projects.vercel.app';
const API_PATH = '/api/lesson-pages?depth=1&sort=order';

export default async function HomePage() {
  let lessons = [];

  try {
    const res = await fetch(new URL(API_PATH, CMS_URL).toString(), {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error(`CMS fetch failed with status ${res.status}`);
    }

    const data = await res.json();
    lessons = data.docs || [];
  } catch (err) {
    console.error('Error fetching lessons:', err);
    lessons = [];
  }

  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <picture>
          <Image alt="Payload Logo" height={200} width={200} src="/logo.png" />
        </picture>

        <h1>
          Welcome to the <br />HCI 2025-26 CMS.
        </h1>

        <div className={styles.links}>
          <a
            className={styles.admin}
            href="/admin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to admin panel
          </a>
          <a
            className={styles.docs}
            href="https://payloadcms.com/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>

        <div className={styles.lessons}>
          <h2>Lessons:</h2>
          {lessons.length === 0 ? (
            <p>No lessons found.</p>
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
  );
}
