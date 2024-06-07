import LocalizedStrings from 'react-native-localization';

const LocalizedString = new LocalizedStrings({
    'en-US': {
        common: {
            alertTitleInfo: 'INFO',
            alertTitleError: 'ERROR',
            alertTitleWarning: 'WARNING',
            alertTitleConfirmation: 'CONFIRMATION',

            buttonCaptionOK: 'OK',
            buttonCaptionCancel: 'CANCEL',
            buttonCaptionDetail: 'DETAIL',
            buttonCaptionYes: 'YES',
            buttonCaptionNo: 'NO',
            buttonCaptionSave: 'SAVE',
            buttonCaptionEdit: 'EDIT',
            buttonCaptionSubmit: 'SUBMIT',
            buttonCaptionNext: 'NEXT',
            buttonCaptionPrev: 'PREV',
            buttonCaptionBack: 'BACK',
            buttonCaptionUpdate: 'UPDATE',
            buttonCaptionApprove: 'Approve',
            buttonCaptionReject: 'Reject',
            buttonCaptionSelectFile: 'Select File',
            buttonCaptionSelectPhoto: 'Select Photo',
            buttonCaptionClose: 'Close',
            buttonCaptionTakePicture: 'Take Picture',
            buttonCaptionTakeVideo: 'Take Video',

            placeholderEmail: 'your-email@domain.com',
            placeholderAppSearch: 'Search Application Name',

            errMsgEmptyRequiredFields: 'Required fields cannot be empty',
            errMsgInvalidEmailFormat: 'The email address is invalid',
            errMsgInvalidPhoneNumberFormat: 'The phone number format is invalid',
            errMsgPasswordDoesNotMatch: 'The password does not match',
            errMsgCannotOpenUrl: 'Cannot open the URL',
            errMsgNoResultFound: 'No Data Available',
            errMsgRequired: 'Required',
            errMsgLocationPermission: 'Location permission isn\'t granted',
            errMsgInvalidQRCode: 'Invalid QR Code',
            errMsgInvalidNotification: 'This notification is invalid',
            errMsgPermissionNotGranted: 'Permission to Read File not Granted',
            errMsgEmptySelectOption: 'Select option cannot be empty',
            errMsgMokIssue: 'MOK is experiencing some issues',

            msgTaskApprovalApproveConfirmation: 'Are you sure want to approve this task?',
            msgTaskApprovalRejectConfirmation: 'Are you sure want to reject this task?',
            msgTaskSubmitConfirmation: 'Are you sure want to submit this form?',

            msgDelete: 'Are you sure to delete this item?',
            msgUpdate: 'Are you sure to update this item?',
            msgDownloadFilePDF: 'Are you sure to download this file?',
            msgActionSaved: 'There is no connectivity. Your action has been added to queue',
            msgNoInternet: 'There is no connectivity',

            footerIconLabelHome: 'Home',
            footerIconLabelApps: 'My Application',
            footerIconLabelTasklist: 'Tasklist',
            footerIconLabelProfile: 'Profile',

            headerTitleAnnouncement: 'Announcement',
            headerTitleApplication: 'Application',
            headerTitleTasklist: 'Task List',
            headerTitleTaskDetail: 'Task Detail',

            labelRequiredField: 'This Field Is Required',
            labelChooseAction: 'Choose Action',
            labelCode: 'Problem Code',
            labelNoMoreData: 'No more data',
        },
        loginScreen: {
            title: 'Log In',
            buttonCaptionLogin: 'Sign In',
            buttonCaptionForgetPassword: 'Forget Password',
            buttonCaptionRegister: 'Register',
            labelUsername: 'Username',
            labelPassword: 'Password',
            errEmptyUsernamePassword: 'Email and password cannot be empty',
        },
        emailSubmissionScreen: {
            errMsgEmailCannotBeEmpty: 'The email address cannot be empty',
        },
        forgetPasswordScreen: {
            title: 'Forget Password',
            description: 'Write your email here. We will send a PIN to your email for resetting your password',
        },
        registerEmailScreen: {
            title: 'Registration',
            description: 'Write your email here. We will send a PIN to your email to continue the registration process',
        },
        pinVerificationScreen: {
            title: 'PIN Verification',
            subTitle: 'Please enter PIN code we just sent to your email',
            labelExpiration: 'Your PIN will expire in',
            msgCancelConfirmation: 'Are you sure you want to cancel this process?',
            errMsgPinMustBeSixDigits: 'The PIN must be six digits',
        },
        resetPasswordScreen: {
            title: 'Reset Password',
            description: 'Type your new password',
            labelPassword: 'password',
            labelConfirmPassword: 'retype your password',
        },
        registrationInfoScreen: {
            title: 'Registration Info',
            description: 'Fill the information below',
            labelFullName: 'Full Name',
            labelPhone: 'Phone',
            labelJobTitle: 'Job Title',
            labelPassword: 'Password',
            labelConfirmPassword: 'Confirm Password',

            buttonCaptionRegister: 'REGISTER',
        },
        homeScreen: {
            title: 'Home',

            labelAnnouncement: 'Announcement',
            labelApplication: 'Application',
            labelMoreApps: 'Other Apps',
            labelHello: 'Hello {name}!',

            buttonCaptionSetFavorites: 'Set Favorites >>',
            buttonCaptionDForm: 'D-Form',
        },
        notificationScreen: {
            title: 'Notification',

            labelDetail: 'See Detail',
        },
        profileScreen: {
            title: 'Profile',

            labelPosition: 'Position',
            labelNrp: 'NRP',
            labelTabGeneral: 'General',
            labelTabCompetency: 'Competency',
            labelTraining: 'Training',
            labelSelectYear: 'Select Year',
            labelBenefit: 'Benefit',
            labelActual: 'Actual',
            labelTarget: 'Target',
            labelAdministrative: 'Administrative',
            labelMCU: 'MCU',
            labelDocument: 'Document',
            labelShowQR: 'Show QR',
            labelCopy: 'Success copy',

            msgLogoutConfirmation: 'Are you sure you want to logout?',

        },
        aboutAppScreen: {
            title: 'About Us',
            version: 'Version',
            description:
                'm-OK is an abbreviation of Mobile Office KPP. Mobile Office KPP is an application provided by ICT Departement so employee can connect to the Office ICT facility through the internet from mobile device (Android Phone or iPhone).',
        },
        settingScreen: {
            title: 'Setting',
        },
        eventListScreen: {
            title: 'Event Attendance',

            labelHasAttended: 'Has Attended',

            tabLabelList: 'List',
            tabLabelCalendar: 'Calendar',
        },
        eventDetailScreen: {
            title: 'Detail',

            labelInformation: 'Information',
            labelEventName: 'Event Name',
            labelDateTime: 'Date & Time',
            labelStatus: 'Status',
            labelDescription: 'Description',

            buttonCaptionCheckIn: 'Check In',
            buttonCaptionScanQR: 'Scan QR Code',

            errMsgEventNotFound: 'Event Not Found',
        },
        scanQRCodeScreen: {
            title: 'Scan QR Code',
        },
        allAppsScreen: {
            title: 'All Apps',
        },
        otpLoginScreen: {
            title: 'OTP',

            msgResendConfirmation: 'Haven\'t get the OTP code yet?',
            msgEnterPin: 'If the mobile number is\nnot your number, please contact',

            buttonCaptionResendOtp: 'Resend OTP',

            labelEnterPIN: 'Enter PIN that we have sent\nto your mobile phone',
            labelResendOTPCountdown: 'You can resend OTP after',
            labelYourPinWillExpireIn: 'PIN will expire in',
            labelYourPinHasExpired: 'PIN has expired',

            errMsgInvalidOtp: 'Invalid OTP code',
            errMsgFailedSendOTP: 'Failed to send OTP code',

        },
        editFavoriteAppScreen: {
            title: 'Edit Favorite',

            labelChangeFavorite: 'Change',
        },
        chooseFavoriteAppScreen: {
            title: 'Choose Application',
        },
        taskListScreen: {
            title: 'Task List',

            labelDForm: 'DForm',
            labelCreatorNrp: 'Creator NRP',
            labelCreatorName: 'Creator Name',
            labelSite: 'Site',
            labelPosition: 'Job Position',

            placeholderSearchBar: 'Search keyword',

            msgApproveFormConfirmation: 'Are You Sure You Want To Approve This Form?',
            msgRejectFormConfirmation: 'Are You Sure You Want To Reject This Form?',
        },
        taskDetailScreen: {
            title: 'Detail',

            labelInformation: 'Information',
            labelDateTime: 'Date & Time',
            labelRequester: 'Requester',
            labelDescription: 'Description',
            labelFeedback: 'Feedback',
            labelNote: 'Note',

            buttonCaptionReadMore: 'Read More >>',
            buttonCaptionReadLess: 'Read Less <<',

            msgNoDescription: 'No description yet',
        },
        surveyMonitoringScreen: {
            title: 'Survey Monitoring',
            labelEqnum: 'Eqnum Loader',
            labelUpload: 'Upload Photo',
            labelLocation: 'Current Coordinates',
            buttonLocation: 'Find',
        },
        fleetMatch: {
            calculateTitle: "RESULTS",
            buttonCaptionCalculate: 'CALCULATE'
        }
    },
    in: {
        common: {
            alertTitleInfo: 'INFO',
            alertTitleError: 'GALAT',
            alertTitleWarning: 'PERINGATAN',
            alertTitleConfirmation: 'KONFIRMASI',

            buttonCaptionOK: 'OK',
            buttonCaptionCancel: 'BATAL',
            buttonCaptionDetail: 'DETAIL',
            buttonCaptionYes: 'YA',
            buttonCaptionNo: 'TIDAK',
            buttonCaptionSave: 'SIMPAN',
            buttonCaptionEdit: 'UBAH',
            buttonCaptionSubmit: 'KIRIM',
            buttonCaptionNext: 'LANJUT',
            buttonCaptionPrev: 'SEBELUMNNYA',
            buttonCaptionBack: 'KEMBALI',
            buttonCaptionUpdate: 'PERBARUI',
            buttonCaptionApprove: 'Setuju',
            buttonCaptionReject: 'Tolak',
            buttonCaptionSelectFile: 'Pilih File',
            buttonCaptionSelectPhoto: 'Pilih Foto',
            buttonCaptionClose: 'Tutup',
            buttonCaptionTakePicture: 'Ambil Foto',
            buttonCaptionTakeVideo: 'Ambil Video',

            placeholderEmail: 'email-anda@domain.com',
            placeholderAppSearch: 'Cari Nama Aplikasi',

            errMsgEmptyRequiredFields: 'Tidak boleh ada field yang kosong',
            errMsgInvalidEmailFormat: 'Format email yang Anda masukkan salah',
            errMsgInvalidPhoneNumberFormat: 'Format nomor telepon yang Anda masukkan salah',
            errMsgPasswordDoesNotMatch: 'Kedua kata sandi tidak cocok',
            errMsgCannotOpenUrl: 'Tidak bisa membuka URL',
            errMsgNoResultFound: 'Tidak ada Data Ditemukan',
            errMsgRequired: 'Harus diisi',
            errMsgLocationPermission: 'Akses lokasi tidak diizinkan',
            errMsgInvalidQRCode: 'Kode QR tidak dikenal',
            errMsgInvalidNotification: 'Notif sudah tidak valid',
            errMsgPermissionNotGranted: 'Izin Membaca File Tidak Diberikan',
            errMsgEmptySelectOption: 'Pilihan tidak boleh kosong',
            msgTaskApprovalApproveConfirmation: 'Apa Anda yakin ingin menyetujui tugas ini?',
            msgTaskApprovalRejectConfirmation: 'Apa Anda yakin ingin menolak tugas ini?',
            msgTaskSubmitConfirmation: 'Apa Anda yakin ingin submit form ini?',
            errMsgMokIssue: 'Gangguan pada MOK',

            msgDelete: 'Apa anda yakin ingin hapus item ini ?',
            msgUpdate: 'Apa anda yakin ingin memperbarui item ini ?',
            msgDownloadFilePDF: 'Apa anda yakin ingin mendownload file ini?',
            msgActionSaved: 'Koneksi tidak tersedia. Aksi Anda telah ditambahkan ke antrian',
            msgNoInternet: 'Koneksi tidak tersedia',

            footerIconLabelHome: 'Beranda',
            footerIconLabelApps: 'Aplikasi Saya',
            footerIconLabelTasklist: 'Daftar Tugas',
            footerIconLabelProfile: 'Profil',

            headerTitleAnnouncement: 'Pengumuman',
            headerTitleApplication: 'Aplikasi',
            headerTitleTasklist: 'Daftar Tugas',
            headerTitleTaskDetail: 'Rincian Tugas',

            labelRequiredField: 'Field Ini Harus Diisi',
            labelChooseAction: 'Pilih Tindakan',
            labelCode: 'Kode Masalah',
            labelNoMoreData: 'Tidak ada data lagi',
        },
        loginScreen: {
            title: 'Masuk',
            buttonCaptionLogin: 'Masuk',
            buttonCaptionForgetPassword: 'Lupa Sandi',
            buttonCaptionRegister: 'Daftar',
            labelUsername: 'Nama Pengguna',
            labelPassword: 'Kata Sandi',
            errEmptyUsernamePassword: 'Email dan Sandi tidak boleh kosong',
        },
        emailSubmissionScreen: {
            errMsgEmailCannotBeEmpty: 'Alamat email tidak boleh kosong',
        },
        forgetPasswordScreen: {
            title: 'Lupa Sandi',
            description: 'Tulis email Anda di sini. Kami akan mengirim PIN ke email Anda yang bisa digunakan untuk mengembalikan password Anda',
        },
        registerEmailScreen: {
            title: 'Pendaftaran',
            description: 'Tulis email Anda di sini. Kami akan mengirim PIN ke email Anda yang bisa digunakan untuk melanjutkan proses registrasi',
        },
        pinVerificationScreen: {
            title: 'Verifikasi PIN',
            subTitle: 'Masukkan PIN yang baru saja kami kirim ke email Anda',
            labelExpiration: 'PIN akan kadaluarsa dalam',
            msgCancelConfirmation: 'Anda yakin akan membatalkan proses ini?',
            errMsgPinMustBeSixDigits: 'PIN harus terdiri dari 6 angka',
        },
        resetPasswordScreen: {
            title: 'Buat Password',
            description: 'Tulis password baru Anda',
            labelPassword: 'password',
            labelConfirmPassword: 'tulis ulang password',
        },
        registrationInfoScreen: {
            title: 'Data Pendaftaran',
            description: 'Mohon isi data di bawah',
            labelFullName: 'Nama Lengkap',
            labelPhone: 'Telepon',
            labelJobTitle: 'Jabatan',
            labelPassword: 'Sandi',
            labelConfirmPassword: 'Ulangi Sandi',

            buttonCaptionRegister: 'DAFTAR',
        },
        homeScreen: {
            title: 'Halaman Utama',

            labelAnnouncement: 'Pengumuman',
            labelApplication: 'Aplikasi',
            labelMoreApps: 'Apps Lain',
            labelHello: 'Halo {name}!',

            buttonCaptionSetFavorites: 'Atur Favorit >>',
            buttonCaptionDForm: 'D-Form',
        },
        notificationScreen: {
            title: 'Pemberitahuan',

            labelDetail: 'Lihat Detil',
        },
        profileScreen: {
            title: 'Profil',

            labelPosition: 'Posisi Jabatan',
            labelNrp: 'NRP',
            labelTabGeneral: 'Umum',
            labelTabCompetency: 'Kompetensi',
            labelTraining: 'Pelatihan',
            labelSelectYear: 'Pilih Tahun',
            labelBenefit: 'Benefit',
            labelActual: 'Aktual',
            labelTarget: 'Target',
            labelAdministrative: 'Administratif',
            labelMCU: 'MCU',
            labelDocument: 'Dokumen',
            labelShowQR: 'Lihat QR',
            labelCopy: 'Berhasil copy',

            msgLogoutConfirmation: 'Anda yakin ingin keluar?',
        },
        aboutAppScreen: {
            title: 'Tentang Kami',
            version: 'Versi',
            description:
                'm-OK singkatan dari Mobile Office KPP adalah aplikasi yang disediakan oleh ICT Departement agar karyawan dapat terhubung dengan fasilitas ICT kantor melalui sambungan internet melalui mobile device (Android Phone maupun iPhone)',
        },
        settingScreen: {
            title: 'Konfigurasi',
        },
        eventListScreen: {
            title: 'Kehadiran Acara',

            labelHasAttended: 'Sudah Datang',

            tabLabelList: 'Daftar',
            tabLabelCalendar: 'Kalender',
        },
        eventDetailScreen: {
            title: 'Rincian',

            labelInformation: 'Informasi',
            labelEventName: 'Nama Acara',
            labelDateTime: 'Tanggal & Jam',
            labelStatus: 'Status',
            labelDescription: 'Deskripsi',

            buttonCaptionCheckIn: 'Menghadiri',
            buttonCaptionScanQR: 'Pindai Kode QR',

            errMsgEventNotFound: 'Event Tidak Ditemukan',
        },
        scanQRCodeScreen: {
            title: 'Pindai Kode QR',
        },
        allAppsScreen: {
            title: 'Semua Aplikasi',
        },
        otpLoginScreen: {
            title: 'OTP',

            msgResendConfirmation: 'Belum dapat kode OTP?',
            msgEnterPin: 'Jika nomor handphone tersebut\nbukan nomor anda harap hubungi',

            buttonCaptionResendOtp: 'Kirim ulang OTP',

            labelEnterPIN: 'Masukkan PIN yang telah kami kirimkan\nke telepon Anda',
            labelResendOTPCountdown: 'Anda dapat kirim ulang kode OTP dalam ',
            labelYourPinWillExpireIn: 'Masa berlaku PIN akan habis dalam ',
            labelYourPinHasExpired: 'PIN sudah kadaluwarsa',

            errMsgInvalidOtp: 'Kode OTP tidak valid',
            errMsgFailedSendOTP: 'Gagal untuk mengirim kode OTP',
        },
        editFavoriteAppScreen: {
            title: 'Atur Favorit',

            labelChangeFavorite: 'Ganti',
        },
        chooseFavoriteAppScreen: {
            title: 'Pilih Aplikasi',
        },
        tasklistScreen: {
            title: 'Daftar Tugas',

            labelDForm: 'DForm',
            labelCreatorNrp: 'NRP Pembuat',
            labelCreatorName: 'Nama Pembuat',
            labelSite: 'Lokasi',
            labelPosition: 'Posisi Pekerjaan',

            placeholderSearchBar: 'Cari kata kunci',

            msgApproveFormConfirmation: 'Apa Anda yakin ingin menyetujui formulir ini?',
            msgRejectFormConfirmation: 'Apa Anda yakin ingin menolak formulir ini?',
        },
        taskDetailScreen: {
            title: 'Rinci',

            labelInformation: 'Informasi',
            labelDateTime: 'Tanggal & Waktu',
            labelRequester: 'Pemohon',
            labelDescription: 'Deskripsi',
            labelFeedback: 'Masukkan',
            labelNote: 'Catatan',

            buttonCaptionReadMore: 'Baca Lebih Lanjut >>',
            buttonCaptionReadLess: 'Baca Lebih Sedikit <<',

            msgNoDescription: 'Belum ada deskripsi',
        },
        surveyMonitoringScreen: {
            title: 'Survey Monitoring',
            labelEqnum: 'Eqnum Loader',
            labelUpload: 'Upload Foto',
            labelLocation: 'Koordinat Sekarang',
            buttonLocation: 'Temukan',
        },
        fleetMatch: {
            calculateTitle: "HASIL",
            buttonCaptionCalculate: 'HITUNG'
        }
    },
});

export default LocalizedString;
