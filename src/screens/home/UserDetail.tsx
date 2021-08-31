import React from 'react'

import { Header, Layout } from '@/components/common'
import UserDetailComponent from '@/components/home/UserDetail'

const UserDetail = () => (
  <Layout>
    <Header i18nText="home.userDetail" canBack />
    <UserDetailComponent />
  </Layout>
)

export default UserDetail
