// src/components/Home/HomeContainer.tsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../redux/rootReducer';
import HomeScreen from './HomeScreen';
import { logout } from '../../auth/store/authSlice';
import { fetchAnnouncementEnd, fetchAnnouncementStart, fetchAnnouncementSuccess } from '../store/announcementSlice';
import { sendGetRequest } from '../../../utils/helpers';
import { REST_URL_DOWNLOAD_ANNOUNCEMENT } from '../../../utils/api';

const HomeContainer: React.FC<{ navigation: any }> = ({ navigation }) => {
    const dispatch = useDispatch();
    const { announcementData, downloadingAnnouncement } = useSelector((state: RootState) => state.announcement);
    const { authData } = useSelector((state: RootState) => state.auth);
    const downloadAnnouncement = async () => {
        dispatch(fetchAnnouncementStart());
        try {
            await sendGetRequest(REST_URL_DOWNLOAD_ANNOUNCEMENT, authData?.token, `${Math.random() * 1000000}`)
                .then((response) => {
                    dispatch(fetchAnnouncementSuccess(response));
                })
                .catch((err) => {
                    console.log(err)
                })
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(fetchAnnouncementEnd());
        }
    };

    const handleLogout = () => {
        // Dispatch aksi logout untuk menghapus status autentikasi pengguna
        dispatch(logout());
        navigation.replace('Login');
    };

    useEffect(() => {
        downloadAnnouncement(); // Memanggil fungsi untuk mengambil data pengguna dari API
    }, []);

    return <HomeScreen announcement={announcementData} loading={downloadingAnnouncement} onLogout={handleLogout} />;
};

export default HomeContainer;
