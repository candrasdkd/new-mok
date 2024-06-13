interface ProfileItem {
    competencyBar: CompetencyBar[];
    generalBar: GeneralBar[];
    generalInfo: GeneralInfo[];
    message: null;
    name: string;
    nrp: string;
    district: string;
    picture: null;
    position: string;
    positionId: string;
    profilePicture: string;
    status: number;
    url: null;
}

interface GeneralInfo {
    label: string;
    order: number;
    value: string;
}

interface GeneralBar {
    label: string;
    order: number;
    maxValue: number;
    value: string;
}

interface CompetencyBar {
    label: string;
    order: number;
    maxValue: number;
    value: string;
}


interface ProfileState {
    activeMenuId: number;
    profileData: ProfileItem;
    downloadingProfile: boolean;
}

interface ProfileScreenPropps {
    profile: ProfileItem;
    loading: boolean;
    onLogout: () => void;
}

