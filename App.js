import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import RootNavigation from './src/navigation'

const client = new ApolloClient({
  uri: 'http://10.0.2.2:8000/graphql/',
  cache: new InMemoryCache(),
})

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-black">
        <StatusBar barStyle="light-content" backgroundColor="black" />
        <ApolloProvider client={client}>
          <RootNavigation />
        </ApolloProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App
