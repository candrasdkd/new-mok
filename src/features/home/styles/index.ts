import { StyleSheet } from 'react-native';
import { getScreenDimensionWidth } from '../../../utils/helpers';

export default StyleSheet.create({
    announcementContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    announcementSlide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    announcementImage: {
        width: getScreenDimensionWidth() - 40,
        height: 150,
        borderRadius: 10,
    },
    announcementText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
});
