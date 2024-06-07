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
        password: string;
        username: string;
        status: number;
        message: string;
        url: string;
        phone: string;
        expiredDate: string;
        otp: string;
        token: string;
    };
}
