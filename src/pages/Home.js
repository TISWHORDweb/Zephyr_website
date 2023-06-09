import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Banner1 from '../components/Banner1'

function Home() {
  return (
    <div>
        <Nav />
        <div className="">
            <Banner1 />
        </div>
        <Footer />
    </div>
  )
}

export default Home