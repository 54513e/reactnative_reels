import React, { useEffect } from 'react'
import { ActivityIndicator, ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { get_blog } from '../../../store/actions/blog'

const BlogScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const blog = useSelector((state) => state.blog.blog)

  useEffect(() => {
    const fn = async () => {
      if (dispatch && dispatch !== null && dispatch !== undefined) {
        await dispatch(get_blog())
      }
    }
    fn()
  }, [dispatch])

  const selectBlog = (id, title) => {
    navigation.navigate('BlogDetailScreen', {
      blogId: id,
    })
  }

  return (
    <>
      {blog ? (
        <ScrollView className="bg-gray-100 p-2" >
          {blog.map((item) => {
            return (
              <TouchableOpacity
                className="border rounded p-5 border-gray-300 bg-white mb-2"
                onPress={() => {
                  selectBlog(item.id)
                }}
                key={item.id}
              >
                <Text className="text-sm mb-2 text-center" >{item.created_at}</Text>
                <Text className="font-bold text-xl mb-2 text-center" >{item.title}</Text>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      ) : (
        <View className="flex-1 justify-center items-center" >
          <ActivityIndicator size="large" color="gray" />
        </View>
      )}
    </>
  )
}

export default BlogScreen