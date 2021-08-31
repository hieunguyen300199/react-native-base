import React from 'react'

import { Header, Layout } from '@/components/common'
import SettingComponent from '@/components/setting/Setting'

const Setting = () => (
  <Layout>
    <Header i18nText="setting.title" />
    <SettingComponent />
  </Layout>
)

export default Setting
