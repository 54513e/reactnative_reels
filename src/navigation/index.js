import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
// import {SafeArea} from '../components/SafeArea'

import HomeScreen from '../screens/HomeScreen'
import {BlogNavigator} from './BlogNavigator'
import AddScreen from '../screens/AddScreen'
import FriendsScreen from '../screens/FriendsScreen'
import ProfileScreen from '../screens/ProfileScreen'
import Ionicons from '@expo/vector-icons/Ionicons'

const BottomTab = createBottomTabNavigator()

const AppNavigator = () => {
  return (
    // <SafeArea>
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
              let iconName
              if (route.name === 'Home') {
                iconName = focused ? 'ios-home' : 'ios-home-outline'
              } else if (route.name === 'Blog') {
                iconName = focused
                  ? 'ios-document-text'
                  : 'ios-document-text-outline'
              } else if (route.name === 'Add') {
                iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline'
                size = 40
              } else if (route.name === 'Friends') {
                iconName = focused ? 'ios-people' : 'ios-people-outline'
              } else if (route.name === 'Profile') {
                iconName = focused ? 'ios-person' : 'ios-person-outline'
              }
              return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              backgroundColor: 'black',
            },
          })}>
          <BottomTab.Screen
            name={'Home'}
            component={HomeScreen}
            options={{
              tabBarLabel: 'レコメンド',
            }}
          />
          <BottomTab.Screen
            name={'Blog'}
            component={BlogNavigator}
            options={{
              tabBarLabel: 'ブログ',
            }}
          />
          <BottomTab.Screen
            name={'Add'}
            component={AddScreen}
            options={{
              tabBarLabel: () => null,
            }}
          />
          <BottomTab.Screen
            name={'Friends'}
            component={FriendsScreen}
            options={{
              tabBarLabel: '友達',
            }}
          />
          <BottomTab.Screen
            name={'Profile'}
            component={ProfileScreen}
            options={{
              tabBarLabel: 'プロフィール',
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    // </SafeArea>
  )
}

export default AppNavigator
