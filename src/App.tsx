import React from 'react'
import { LogBox } from 'react-native'
import 'react-native-gesture-handler'
import 'react-native-url-polyfill/auto'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'

import '@/utils/i18next'
import { navigationRef } from '@/navigation/NavigationService'
import Navogation from '@/navigation/Navigation'
import { AppContextProvider } from '@/contexts/app/app.context'

LogBox.ignoreLogs(['Setting a timer'])

const App = () => {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <PaperProvider theme={DefaultTheme}>
          <NavigationContainer ref={navigationRef}>
            <Navogation />
          </NavigationContainer>
        </PaperProvider>
      </AppContextProvider>
    </QueryClientProvider>
  )
}

export default App
