import React, { useState, useRef } from 'react'
import { View, Dimensions, FlatList, Platform, StatusBar } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
// import { hasNotch } from 'expo-device'
import { useQuery } from '@apollo/client'
import { GET_POSTS } from '../gql/Query'
import Post from '../components/Post'

// const getStatusBarHeight = () => {
//   if (Platform.OS === 'ios') {
//     return hasNotch() ? 44 : 20
//   } else if (Platform.OS === 'android') {
//     return hasNotch() ? 0 : StatusBar.currentHeight
//   } else {
//     return 0
//   }
// }

const HomeScreen = () => {
    const [currentVisibleIndex, setCurrentVisibleIndex] = useState(null)
    const { data, loading, refetch } = useQuery(GET_POSTS)
    const posts = data?.allPosts

  const height =
    Dimensions.get('window').height -
    useBottomTabBarHeight()
    // getStatusBarHeight()

  const renderItem = ({item, index}) => {
    return (
      <View style={{height: height}}>
        <Post
          item={item}
          index={index}
          currentVisibleIndex={currentVisibleIndex}
        />
      </View>
    )
  }

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems && viewableItems.length > 0) {
      setCurrentVisibleIndex(viewableItems[0].index)
    }
  })

  return (
    <View className="flex-1 bg-black">
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        windowSize={4}
        initialNumToRender={0}
        maxToRenderPerBatch={2}
        removeClippedSubviews
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToInterval={height}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
      />
    </View>
  )
}

export default HomeScreen
