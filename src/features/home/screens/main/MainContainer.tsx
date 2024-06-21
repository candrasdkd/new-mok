import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/rootReducer';
import HomeScreen from './MainScreen';
import { fetchAnnouncementEnd, fetchAnnouncementStart, fetchAnnouncementSuccess, fetchAppEnd, fetchAppStart, fetchAppSuccess, changeStatusOnBoarding } from '../../store/homeSlice';
import { sendGetRequest, sortAsc } from '../../../../utils/helpers';
import { REST_URL_DOWNLOAD_ANNOUNCEMENT, REST_URL_DOWNLOAD_APPLICATION_LIST } from '../../../../utils/api';

const HomeContainer: React.FC<{ navigation: any }> = ({ navigation }) => {
    const dispatch = useDispatch();
    const { announcementData, appData, downloadingAnnouncement, downloadingApp, tutorialDone } = useSelector((state: RootState) => state.home);
    const cek = useSelector((state: RootState) => state.home);
    console.log('cek', cek);

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

    const downloadAppMenu = async () => {
        dispatch(fetchAppStart());
        try {
            await sendGetRequest(REST_URL_DOWNLOAD_APPLICATION_LIST, authData?.token, `${Math.random() * 1000000}`)
                .then((response) => {
                    let newAppList = []
                    const data = Object.values(response) as Array<AppItem>
                    const requiredFilterData = data.filter(app => app.order < 9 && app.IS_DEFAULT === true)
                    const requiredSortData = requiredFilterData.sort((a, b) => sortAsc(a.appName, b.appName))
                    const chooseFilterData = data.filter(app => app.order < 9 && app.IS_DEFAULT === false)
                    newAppList.push(
                        ...requiredSortData,
                        ...chooseFilterData
                    )

                    dispatch(fetchAppSuccess(newAppList));
                })
                .catch((err) => {
                    console.log(err)
                })
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(fetchAppEnd());
        }
    };

    useEffect(() => {
        downloadAnnouncement(); // Memanggil fungsi untuk mengambil data pengguna dari API
        downloadAppMenu()
    }, []);


    return <HomeScreen
        announcement={announcementData}
        applist={appData}
        loading={downloadingAnnouncement || downloadingApp}
        tutorialDone={tutorialDone}
        changeStatusOnBoard={() => dispatch(changeStatusOnBoarding(true))}
    />;
};

export default HomeContainer;
