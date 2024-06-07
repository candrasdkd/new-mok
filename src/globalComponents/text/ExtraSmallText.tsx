import { Text, ViewStyle } from 'react-native'
import React from 'react'
import { COLOR_BLACK } from '../../utils/constants'

interface PropsText {
    fontSize?: number
    label: string
    color?: string
    bold?: boolean
    italic?: boolean
    underline?: boolean
    customStyle?: ViewStyle | ViewStyle[]
}

const ExtraSmallText: React.FC<PropsText> = ({
    fontSize, color, bold, italic, underline, customStyle, label, ...props }) => {
    return (
        <Text
            style={[
                customStyle,
                {
                    fontSize: fontSize ? fontSize : 10,
                    color: color ? color : COLOR_BLACK,
                    fontWeight: bold ? "bold" : "normal",
                    fontStyle: italic ? 'italic' : 'normal',
                    textDecorationLine: underline ? 'underline' : 'none'
                }
            ]}
            allowFontScaling={false}
            {...props}
        >
            {label}
        </Text>
    )
}

export default ExtraSmallText
