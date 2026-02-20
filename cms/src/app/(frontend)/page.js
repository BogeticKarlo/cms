// app/page.js
import Image from 'next/image';
import React from 'react';
import styles from '../../../public/styles.module.css';

export const dynamic = 'force-dynamic';

const CMS_URL = 'https://cms-bogetickarlos-projects.vercel.app';
const API_PATH = '/api/lessons?depth=1&sort=order';

export default async function HomePage() {
  let lessons = [];

  try {
    const res = await fetch(new URL(API_PATH, CMS_URL).toString(), {
      cache: 'no-store',
    });

    console.log('CMS status:', res.status);

    if (!res.ok) {
      const text = await res.text();
      console.error('CMS returned error:', text);
      throw new Error(`CMS fetch failed with status ${res.status}`);
    }

    let data;
    try {
      data = await res.json();
    } catch (err) {
      console.error('Failed to parse JSON:', err);
      data = { docs: [] };
    }

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
          <a className={styles.admin} href="/admin" target="_blank" rel="noopener noreferrer">
            Go to admin panel
          </a>
          <a className={styles.docs} href="https://payloadcms.com/docs" target="_blank" rel="noopener noreferrer">
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
                <li key={lesson.id}>
                  <strong>{lesson.title}</strong>: {lesson.description}
                  <br />
                  <img
                    src={new URL(lesson.heroImage.url, CMS_URL).toString()}
                    alt={lesson.heroImage.alt || ''}
                    width={lesson.heroImage.width}
                    height={lesson.heroImage.height}
                  />
                  <br />
                  <video controls width="400">
                    <source src={new URL(lesson.video.url, CMS_URL).toString()} type={lesson.video.mimeType} />
                  </video>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
