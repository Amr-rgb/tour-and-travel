import Head from 'next/head'
import Header from '../components/Header'
import Destinations from '../components/Destinations'
import Hero from '../components/Hero'
import Presentation1 from '../components/Presentation1'
import Presentation2 from '../components/Presentation2'
import Testimonials from '../components/Testimonials'
import Stories from '../components/Stories'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tour and Travel</title>
        <meta name="description" content="tour and travel app from figma to code using nextjs tailwindcss" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Mulish:wght@300;400;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <main>
        <Hero />
        <Presentation1 />
        <Destinations />
        <Presentation2 />
        <Testimonials />
        <Stories />
      </main>

      <Footer />
    </div>
  )
}
