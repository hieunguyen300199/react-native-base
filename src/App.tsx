import React from 'react'
import { LogBox } from 'react-native'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from 'react-query'
import CodePush from 'react-native-code-push'

import '@/utils/i18next'
import { navigationRef } from '@/navigation/NavigationService'
import Navogation from '@/navigation/Navigation'
import { AppContextProvider } from '@/contexts/app/app.context'

LogBox.ignoreLogs(['Setting a timer'])

const App: React.FC = () => {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <NavigationContainer ref={navigationRef}>
          <Navogation />
        </NavigationContainer>
      </AppContextProvider>
    </QueryClientProvider>
  )
}

const CodePushApp = CodePush({
  updateDialog: CodePush.DEFAULT_UPDATE_DIALOG,
  installMode: CodePush.InstallMode.IMMEDIATE,
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
})(App)

export default __DEV__ ? App : CodePushApp
