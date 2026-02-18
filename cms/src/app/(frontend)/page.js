import Image from 'next/image';
import React from 'react';
import config from '@/payload.config';
import './styles.css';

export default async function HomePage() {
  return (
    <div className="home">
      <div className="content">
        <picture>
          <Image
            alt="Payload Logo"
            height={200}
            src="/logo.png"
            width={200}
          />
        </picture>
        <h1>Welcome to the <br />HCI 2025-26 CMS.</h1>
        <div className="links">
          <a
            className="admin"
            href={config.routes.admin}
            rel="noopener noreferrer"
            target="_blank"
          >
            Go to admin panel
          </a>
          <a
            className="docs"
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
