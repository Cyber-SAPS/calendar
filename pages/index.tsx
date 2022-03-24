import Calendar from './calendar'
import type { NextPage } from 'next'
import * as React from 'react'
import Head from 'next/head'


const Home: NextPage = () => {
  return (
    <React.Fragment>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86"/>
    </Head>
   <div className="container md:mx-auto">
     {/* Home Page */}
     <Calendar />
   </div>
   </React.Fragment>
  )
}

export default Home
