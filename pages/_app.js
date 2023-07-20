import '../styles/globals.scss'

import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Layout } from '../components'


function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          {/* create Head for Becca & Matt, a travel, tech and nutrition blog updated weekly. Provide twitter, facebook, standard google search and iphone link meta tags, us bg.png as the image */}
          <title>Becca & Matt</title>
          <meta name="description" content="Becca & Matt, a travel, tech and nutrition blog updated weekly." />
          <meta name="keywords" content="Becca & Matt, travel, tech, nutrition, blog" />
          <meta name="author" content="Becca & Matt" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@beccaandmatt" />
          <meta name="twitter:creator" content="@beccaandmatt" />
          <meta name="twitter:title" content="Becca & Matt" />
          <meta name="twitter:description" content="Becca & Matt, a travel, tech and nutrition blog updated weekly." />
          <meta name="twitter:image" content="https://beccamatt.com/bg.png" />
          <meta property="og:title" content="Becca & Matt" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://beccamatt.com" />
          <meta property="og:image" content="https://beccamatt.com/bg.png" />
          <meta property="og:description" content="Becca & Matt, a travel, tech and nutrition blog updated weekly." />
          <meta property="og:site_name" content="Becca & Matt" />
          <meta property="fb:app_id" content="your fb app id" />
          <meta name="apple-mobile-web-app-title" content="Becca & Matt" />
          <meta name="application-name" content="Becca & Matt" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />

          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=yy2kMqQk5k" />

          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=yy2kMqQk5k" />

          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=yy2kMqQk5k" />

          <link rel="manifest" href="/site.webmanifest?v=yy2kMqQk5k" />

          <link rel="mask-icon" href="/safari-pinned-tab.svg?v=yy2kMqQk5k" color="#5bbad5" />

          <link rel="shortcut icon" href="/favicon.ico?v=yy2kMqQk5k" />

          <meta name="msapplication-TileColor" content="#da532c" />

          <meta name="msapplication-config" content="/browserconfig.xml?v=yy2kMqQk5k" />

          <meta name="theme-color" content="#ffffff" />

      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>

  )
}

export default MyApp
