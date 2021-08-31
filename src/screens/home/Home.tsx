import React from 'react'

import { Header, Layout } from '@/components/common'
import HomeComponent from '@/components/home/Home'

const Home = () => (
  <Layout>
    <Header i18nText="home.title" />
    <HomeComponent />
  </Layout>
)

export default Home
