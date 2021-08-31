import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { useTranslation } from 'react-i18next'
import Icon from '@/assets/icon'
import HomeStack from '@/navigation/stacks/HomeStack'
import SettingStack from '@/navigation/stacks/SettingStack'
import ROUTER from '@/navigation/config/router'

type TabStackType = {
  key: number
  name: string
  component: React.ComponentType<any>
  tabBarLabel: string
  tabBarIcon: ({ color }: any) => React.ReactNode
}

const Tab = createBottomTabNavigator()

const TabBarIcon: React.FC<{ color: string; source: any }> = ({ color, source }) => (
  <Image source={source} style={[styles.icon, { tintColor: color }]} />
)

const ArrayTabs: TabStackType[] = [
  {
    key: 1,
    name: ROUTER.APP.HOME.TAB,
    component: HomeStack,
    tabBarLabel: 'home.title',
    tabBarIcon: ({ color }) => <TabBarIcon color={color} source={Icon.home} />,
  },
  {
    key: 2,
    name: ROUTER.APP.SETTING.TAB,
    component: SettingStack,
    tabBarLabel: 'setting.title',
    tabBarIcon: ({ color }) => <TabBarIcon color={color} source={Icon.setting} />,
  },
]

const RootTab = () => {
  const { t } = useTranslation()
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarActiveTintColor: '#000',
      }}
    >
      {ArrayTabs.map((tab) => (
        <Tab.Screen {...tab} key={tab.key} options={{ tabBarLabel: t(tab.tabBarLabel), tabBarIcon: tab.tabBarIcon }} />
      ))}
    </Tab.Navigator>
  )
}

const styles = ScaledSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
  tabBarLabelStyle: {
    fontWeight: 'bold',
    fontSize: '10@s',
  },
})

export default RootTab
