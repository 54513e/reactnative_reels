import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { Provider } from 'react-redux'

import blogReducer from './store/reducers/blog'
import AppNavigator from './src/navigation'
import thunk from 'redux-thunk'

const client = new ApolloClient({
  uri: 'http://10.0.2.2:8000/graphql/',
  cache: new InMemoryCache(),
})

const rootReducer = combineReducers({
  blog: blogReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView className="flex-1 bg-black">
          <StatusBar barStyle="light-content" backgroundColor="black" />
          <ApolloProvider client={client}>
            <AppNavigator />
          </ApolloProvider>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  )
}

export default App
