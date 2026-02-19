// app/page.js
import Image from "next/image";
import styles from "../../../public/styles.module.css";
import { getLessonPages } from "@/lib/cms";

export const dynamic = "force-dynamic"; // ensures server-side fetch

export default async function HomePage() {
  let lessons = [];

  try {
    lessons = await getLessonPages();
  } catch (err) {
    console.error("Error loading lesson pages:", err);
    lessons = [];
  }

  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <picture>
          <Image alt="Payload Logo" height={200} width={200} src="/logo.png" />
        </picture>

        <h1>
          Welcome to the <br />
          HCI 2025-26 CMS
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
                <li key={lesson.id}>{lesson.title}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
