import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { getScreenDimensionHeight, getScreenDimensionWidth } from '../../../utils/helpers';
import { SmallText } from '../../../globalComponents';
const renderAppCard = (item: AppItem, index: number,) => {
    if (index < 7) {
        return (
            <View style={{ flexDirection: 'column' }}>
                <TouchableOpacity style={styles.circle}>
                    <Image
                        source={{ uri: item.iconUrl }}
                        style={styles.logo}
                    />
                    <SmallText
                        label={item.appName}
                        textAlign='center'
                        customStyle={{ width: 50 }}
                    />
                </TouchableOpacity>
            </View>
        )
    }
    return null;
};
const Apps: React.FC<{ data: AppItem[] }> = ({ data }) => {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={data}
                numColumns={4}
                renderItem={({ item, index }) => renderAppCard(item, index)}
                style={styles.flatListContainer}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    circle: {
        width: getScreenDimensionWidth() / 4.5,
        height: getScreenDimensionHeight() / 10,
        borderRadius: 25,
        // justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        // paddingHorizontal: 10,
    },
    logo: {
        width: '100%',
        height: '60%',
        resizeMode: 'contain',
    },
    flatListContainer: {
        flex: 1,
        flexWrap: 'wrap',
    },
});

export default Apps