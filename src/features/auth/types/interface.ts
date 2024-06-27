interface LoginScreenProps {
    onLogin: () => void;
    username: string;
    password: string;
    loading: boolean;
    onChangeUsername: (value: string) => void;
    onChangePassword: (value: string) => void;
}

interface OtpLoginProps {
    value: string;
    loading: boolean;
    onSubmitOtp: () => void;
    onChangeOtp: (value: string) => void;
}

interface AuthState {
    isAuthenticated: boolean;
    authData: {
        password: string | null;
        username: string | null;
        status: number | null;
        message: string | null;
        url: string | null;
        phone: string | null;
        expiredDate: string | null;
        otp: string | null;
        token: string;
    };
}
