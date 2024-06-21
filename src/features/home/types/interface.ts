interface CarouselItem {
    body: string;
    id: string;
    imageUrl: string;
    location: string;
    order: number;
    status: number;
    targetUrl: string;
    title: string;
    type: string;
}

interface AppItem {
    IS_DEFAULT: boolean;
    MENU_GROUP: string;
    androidAppId: null;
    appName: string;
    downloadUrl: null;
    iconUrl: string;
    iosAppId: null;
    menuId: string;
    order: number;
    url: string;
}
interface HomeState {
    activeMenuId: number;
    announcementData: CarouselItem[]; // Sesuaikan dengan struktur data pengguna Anda
    downloadingAnnouncement: boolean;
    appData: AppItem[];
    downloadingApp: boolean;
    tutorialDone: boolean;
}

interface HomeScreenProps {
    announcement: CarouselItem[];
    applist: AppItem[];
    loading: boolean;
    tutorialDone: boolean;
    changeStatusOnBoard: () => {};
}