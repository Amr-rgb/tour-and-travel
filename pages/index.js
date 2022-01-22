import Head from 'next/head'
import Hero from '../components/Hero'
import Presentation1 from '../components/Presentation1'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tour and Travel</title>
        <meta name="description" content="tour and travel app from figma to code using nextjs tailwindcss" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Mulish:wght@300;400;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <Hero />
        <Presentation1 />
      </main>
    </div>
  )
}
