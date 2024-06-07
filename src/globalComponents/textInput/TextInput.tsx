import React, { Fragment } from 'react';
import { TextInput, StyleSheet, ViewStyle, TextInputProps } from 'react-native';

interface PropsTextInput extends TextInputProps {
    label?: string,
    placeholder?: string,
    value?: string,
    defaultValue?: string,
    placeholderTextColor?: string
    onChangeText: (text: string) => void
    customStyle?: ViewStyle | ViewStyle[]
}

const TextInputBox: React.FC<PropsTextInput> = ({
    placeholder, value, defaultValue, placeholderTextColor, customStyle, onChangeText, ...props
}) => {
    return (
        <Fragment>
            <TextInput
                style={[styles.input, customStyle]}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor ? placeholderTextColor : 'gray'}
                value={value}
                defaultValue={defaultValue}
                onChangeText={onChangeText}
                {...props}
            />
        </Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginBottom: 10,
        width: '100%'
    },
});

export default TextInputBox;

