import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/rootReducer';
import ProfileScreen from './MainScreen';
import { logout } from '../../../../store/slice/authSlice';
import { fetchProfileEnd, fetchProfileStart, fetchProfileSuccess } from '../../../../store/slice/profileSlice';
import { changeStatusOnBoarding } from '../../../../store/slice/homeSlice';
import { sendGetRequest } from '../../../../utils/helpers';
import { REST_URL_MYPROFILE } from '../../../../utils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileContainer: React.FC<{ navigation: any }> = ({ navigation }) => {
    const dispatch = useDispatch();
    const { profileData, downloadingProfile } = useSelector((state: RootState) => state.profile);
    const { authData } = useSelector((state: RootState) => state.auth);
    const downloadProfile = async () => {
        dispatch(fetchProfileStart());
        try {
            await sendGetRequest(REST_URL_MYPROFILE, authData?.token, `${Math.random() * 1000000}`)
                .then((response) => {
                    dispatch(fetchProfileSuccess(response));
                })
                .catch((err) => {
                    console.log(err)
                })
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(fetchProfileEnd());
        }
    };

    const handleLogout = () => {
        // Dispatch aksi logout untuk menghapus status autentikasi pengguna
        dispatch(logout());
        AsyncStorage.removeItem('authentication');
        changeStatusOnBoarding(false)
        navigation.replace('Login');
    };

    useEffect(() => {
        downloadProfile()
    }, []);

    return <ProfileScreen
        profile={profileData}
        loading={downloadingProfile}
        onLogout={handleLogout}
    />;
};

export default ProfileContainer;
