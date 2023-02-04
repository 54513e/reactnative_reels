import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BlogScreen from '../screens/blog/BlogScreen'
import BlogDetailScreen from '../screens/blog/BlogDetailScreen'

const Stack = createStackNavigator()

export const BlogNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BlogScreen"
        component={BlogScreen}
        options={{
          headerTitle: 'ブログ',
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="BlogDetailScreen"
        component={BlogDetailScreen}
        options={{
          headerTitle: 'ブログ詳細',
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  )
}