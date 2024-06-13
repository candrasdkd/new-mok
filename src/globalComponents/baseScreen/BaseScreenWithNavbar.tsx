import React from 'react';
import {
    View, Dimensions,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import BaseScreen from './BaseScreen';
import { Iconify } from 'react-native-iconify';

import LocalizedString from '../../utils/localization';
import { COLOR_DISABLED, COLOR_WHITE, NAV_NAME_HOME, NAV_NAME_PROFILE } from '../../utils/constants';
import { getScreenDimensionHeight } from '../../utils/helpers';
import { SmallText } from '../';
import { NavigationProp, useNavigation } from '@react-navigation/native';

interface propsBaseScreen {
    activeId: number
    children: React.ReactNode
}

const BaseScreenWithNavbar: React.FC<propsBaseScreen> = ({ activeId, children }) => {
    const height = getScreenDimensionHeight();
    const navigation = useNavigation<NavigationProp<any>>();
    const heightAdjustment = 10;
    const screenPrecentage = 90;
    const adjustedHeight = height * screenPrecentage / 100 + heightAdjustment;
    const upperContainerHeight = adjustedHeight * 10 / 11;
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            height,
        },
        containerTabs: {
            flex: 1,
            justifyContent: "space-between",
        },
        buttonContainer: {
            flex: 1,
            alignItems: "center",
        },
        footerIconContainer: {
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: COLOR_WHITE,
            borderTopWidth: 1,
            borderColor: COLOR_DISABLED
        },
        iosContainer: {
            height: upperContainerHeight
        },
        androidContainer: {
            flex: 1,
        },
        lowerContainer: {
            height: 60,
        },
    });

    return (
        <BaseScreen>
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    {children}
                </View>
                <View style={styles.lowerContainer}>
                    <View style={styles.containerTabs}>

                        {/* <HorizontalLineSeparator /> */}

                        <View style={styles.footerIconContainer}>
                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={() => navigation.navigate(NAV_NAME_HOME)}
                            >
                                <Iconify
                                    icon="ic:round-home"
                                    size={30}
                                    color={activeId === 1 ? 'green' : COLOR_DISABLED}
                                />
                                <SmallText
                                    color={activeId === 1 ? 'green' : COLOR_DISABLED}
                                    label={LocalizedString.common.footerIconLabelHome}
                                />

                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonContainer}>
                                <Iconify
                                    icon="mdi:file-document-edit"
                                    size={30}
                                    color={activeId === 2 ? 'green' : COLOR_DISABLED}
                                />
                                <SmallText
                                    color={activeId === 2 ? 'green' : COLOR_DISABLED}
                                    label={LocalizedString.common.footerIconLabelTasklist}
                                />

                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={() => navigation.navigate(NAV_NAME_PROFILE)}
                            >
                                <Iconify
                                    icon="iconamoon:profile-fill"
                                    size={30}
                                    color={activeId === 3 ? 'green' : COLOR_DISABLED}
                                />
                                <SmallText
                                    color={activeId === 3 ? 'green' : COLOR_DISABLED}
                                    label={LocalizedString.common.footerIconLabelProfile}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </BaseScreen>
    )
};

export default BaseScreenWithNavbar;


