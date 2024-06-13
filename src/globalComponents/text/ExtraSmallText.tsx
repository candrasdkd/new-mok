import { Text, TextProps, ViewStyle } from 'react-native'
import React from 'react'
import { COLOR_BLACK } from '../../utils/constants'

interface PropsText extends TextProps {
    fontSize?: number
    label: string
    color?: string
    bold?: boolean
    italic?: boolean
    underline?: boolean
    textAlign?: "left" | "auto" | "right" | "center" | "justify"
    customStyle?: ViewStyle | ViewStyle[]
}

const ExtraSmallText: React.FC<PropsText> = ({
    fontSize, color, bold, italic, underline, customStyle, label, textAlign, ...props }) => {
    return (
        <Text
            style={[
                customStyle,
                {
                    fontSize: fontSize ? fontSize : 10,
                    color: color ? color : COLOR_BLACK,
                    fontWeight: bold ? "bold" : "normal",
                    fontStyle: italic ? 'italic' : 'normal',
                    textDecorationLine: underline ? 'underline' : 'none',
                    textAlign: textAlign ? textAlign : 'left',
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
