import Image from 'next/image';
import React from 'react';
import config from '@/payload.config';
import styles from 'C:\Users\karlo\Desktop\repository\cms\cms\public\styles.module.css';

export default async function HomePage() {
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
            href={config.routes.admin}
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
      </div>
    </div>
  );
}
