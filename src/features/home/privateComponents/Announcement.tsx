// src/components/CarouselComponent.tsx

import React from 'react';
import { View, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Styles from "../styles";
import ExtraLargeText from '../../../globalComponents/text/ExtraLargeText';
import { getScreenDimensionWidth } from '../../../utils/helpers';

const Announcement: React.FC<{ data: CarouselItem[] }> = ({ data }) => {
    const renderItem = ({ item }: { item: CarouselItem }) => (
        <View style={Styles.announcementSlide}>
            <Image source={{ uri: item.imageUrl }} style={Styles.announcementImage} />
            <ExtraLargeText color='black' label={item.title} />
        </View>
    );

    return (
        <View style={Styles.announcementContainer}>
            <Carousel
                width={getScreenDimensionWidth()}
                height={250}
                autoPlay={true}
                data={data}
                scrollAnimationDuration={1000}
                renderItem={renderItem}
            />
        </View>
    );
};

export default Announcement;