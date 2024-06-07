import { SafeAreaView, ViewStyle } from 'react-native'
import React from 'react'
interface propsBaseScreen {
  customStyle?: ViewStyle | ViewStyle[]
  children: React.ReactNode
}
const BaseScreen: React.FC<propsBaseScreen> = ({ customStyle, children }) => {
  return (
    <SafeAreaView style={[customStyle, { flex: 1, marginHorizontal: 16, marginVertical: 20 }]}>
      {children}
    </SafeAreaView>
  )
}

export default BaseScreen