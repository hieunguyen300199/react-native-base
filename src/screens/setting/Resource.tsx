import React from 'react'

import { Header, Layout } from '@/components/common'
import ResourceComponent from '@/components/setting/Resource'

const Resource = () => (
  <Layout>
    <Header i18nText="setting.resource.title" canBack />
    <ResourceComponent />
  </Layout>
)

export default Resource
