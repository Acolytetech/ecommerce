import React from 'react'
import Banner from '../../component/banner/Banner'
import Card from '../../component/banner/Card'
import Testimonials from '../../component/banner/Tesimonial'
import Whovr from '../../component/banner/Whovr'
import Subscribe from '../../component/banner/Subscribe'
import Topproduct from '../../component/banner/Topproduct'
// import { Card } from '@mui/material'

function Home() {
  return (
    <div>
        <Banner/>
      <Topproduct/>

      <Card/>
      
      <Testimonials/>
      <Whovr/>
      <Subscribe/>
    </div>
  )
}

export default Home
