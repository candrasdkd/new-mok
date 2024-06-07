interface AnnouncementState {
    announcementData: CarouselItem[]; // Sesuaikan dengan struktur data pengguna Anda
    downloadingAnnouncement: boolean;
}

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

interface AppState {
    appData: [];
    downloadingApp: boolean;
}

interface HomeScreenProps {
    announcement: CarouselItem[];
    loading: boolean;
    onLogout: () => void;
}