import { View, ViewStyle } from 'react-native'
import React from 'react'
import { COLOR_WHITE } from '../../utils/constants'
interface propsBaseScreen {
  customStyle?: ViewStyle | ViewStyle[]
  children: React.ReactNode
}
const BaseScreen: React.FC<propsBaseScreen> = ({ customStyle, children }) => {
  return (
    <View style={[customStyle, { flex: 1, padding: 20, backgroundColor: COLOR_WHITE }]}>
      {children}
    </View>
  )
}

export default BaseScreen