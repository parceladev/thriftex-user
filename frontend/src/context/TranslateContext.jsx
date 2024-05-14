import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const defaultLanguage = localStorage.getItem("i18nextLng") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        //General
        Loading: "Loading...",

        //Navbar
        Home: "Home",
        "Legit Check": "Legit Check",
        About: "About",
        Profile: "Profile",

        "Sign In": "Sign In",
        "Dark Mode": "DARK",
        "Light Mode": "LIGHT",

        //Jumbotron
        "IS YOUR FASHION STYLE LEGIT?": "IS YOUR FASHION STYLE LEGIT?",
        "CHECK NOW": "CHECK NOW",

        //Tagline
        "tagline 1": "Original With Us",
        "tagline 2":
          "provide innovation to help educate and inform people about brand originality to reduce fake product around the world",
        "tagline 3": "Collaborating with brand experts and communities to",
        "span tagline": "VERIFY",
        "continuation paragraph": "a product’s originality",

        //Statistic
        "statistic 1": "MAKING PEOPLE ENJOY WEARING THEIR OUTFITS",
        "statistic 2": "TOTAL CHECK",

        //Banner in Legit Check Page
        "bannerlegit 1": "Is Your Fashion Style",
        "bannerLegit 2": "Legit ?",
        "bannerLegit 3": "Total Check",
        "bannerLegit 4": "Check Below",

        //LegitCheckPage
        "LegitPage 1": "Track a Legit Check",
        "search page": "Example: ID- 040121",
        "Not Found": "No result found",

        //ButtonFormLegit
        "button form legit": "Legit Check",

        //LegitCheckFormPage
        "Heading Legit Form": "Legit Check Form",
        "Button Left": "Back",
        "Label Form 1": "Item Category",
        "Label Form 2": "Item Brand",
        "Label Form 3": "Item Name",
        "Label Form 4": "Upload Images",
        "Label Form 5": "Purchase",
        "Label Form 6": "Store Name",
        "Label Form 7": "Item Condition",
        "Label Form 8": "Other Notes",
        "Default Value 1": "Select Item Category",
        "Default Value 2": "Select Brand",
        "Default Value 3": "Select Purchase",
        "Default Value 4": "Select Item Condition",
        "PlaceHolder 1": "Enter Item Name",
        "PlaceHolder 2": "Enter Store Name",

        //Input Image
        "input image 1": "Make sure to upload 6 images.",
        continous: "Image size must be less than 1,000KB.",

        //Input
        Optional: "(Optional)",
        Required: "(Required)",
        Old: "Old",
        New: "New",

        //Span Submit Legit Form
        Submit: "Submitting...",
        Close: "Close",

        //MyLegitPage
        "Heading My Legit": "My Legit Page",
        "Paraf My Legit": " Youve never done a legit check, legit check now!",

        //Alert Legit Check
        "Heading Alert": "THANK YOU",
        "Paraf Alert": "Please wait until your item is",
        "Span Alert": "verified",
        "Continous Paraf Alert": "by our validator",

        //Legit Check Detail
        "Heading Detail": "Legit Check Detail",
        "Label Detail 1": "CASE CODE",
        "Label Detail 2": "ITEM CATEGORY",
        "Label Detail 3": "BRAND NAME",
        "Label Detail 4": "ITEM NAME",
        "Label Detail 5": "PURCHASE DATE",
        "Label Detail 6": "STORE NAME",
        "Label Detail 7": "ITEM CONDITION",
        "Label Detail 8": "OTHER NOTE",
        "Heading Result": "Legit Check Result",
        "Under Review": "Your legit check is still under review",

        //Photos Field
        "Label Detail": "ITEM PHOTOS",

        //Banner About
        "Heading About": "About Thriftex",
        "Heading About 2": "Meet the Team",

        //OurGoals About
        "Heading Goals": "Our Goals",
        "Heading Goals 2":
          "Thriftex stands to educate people about fake product and intellectual property.",
        "Heading Goals 3":
          "With Creativity & Technology, Thriftex is commited to help",
        "Heading Goals 4": "Consument",
        "Heading Goals 5": "Producer",
        "Heading Goals 6": "Stackholder",
        "Heading Goals 7":
          "So they can understand and access every needs about product’s authenticity",

        //Partner Brands
        "Heading Partners 1": "Partner Brands",
        "Heading Partners 2": "We work together with these brand companies",

        //WhyWeDifferent
        "Different 1": " Why We Different?",
        "Different 2": "Free Lifetime",
        "Different 3": "Community & Brand Expert",
        "Different 4": "Result 1 x 24 Hour",
        "Different 5": "24/7 Service",
        "Different 6": "Local & International Brand",
        "Different 7": "Online Certification",

        //AccountSettings
        "Old Password Required": "Please enter your old password.",
        "Password Length": "New password must be at least 8 characters long.",
        "Password Not Match": "New passwords do not match.",
        "Update Success": "Profile updated successfully!",
        "Update Failed": "Failed to update profile. Please try again.",
        "Settings Save": "Save Information",

        //PersonalForm
        "Heading Personal 1": "Personal Information",
        "Label Personal 1": "Username",
        "Label Personal 2": "Name",
        "Label Personal 3": "Phone Number",
        "Label Personal 4": "Gender",
        "PlaceHolder Personal": "Example: 081234xxxxxx",
        "Option Personal 1": "Select Gender",
        "Option Personal 2": "Male",
        "Option Personal 3": "Female",
        "Option Personal 4": "Other",

        //SecurityForm
        "Heading Security 1": "Security Information",
        "Label Security 1": "Email",
        "Label Security 2": "Input Password",
        "Label Security 3": "Old Password",
        "Label Security 4": "New Password",
        "Label Security 5": "Confirm New Password",
        "PlaceHolder Security 1": "Your Old Password",
        "PlaceHolder Security 2": "Your New Password",
        "PlaceHolder Security 3": "Confirm Your New Password",
        "Button Cancel": "Cancel",
        "Button Change Password": "Change Password",

        //Logout
        "Span Logout": "Log Out",

        //MyLegit
        "Span MyLegit": "My Legit Check",

        //ContactUs
        "Heading Contact": "CONTACT US",
        "Div Success": "Message sent successfully!",
        "Label Contact 1": "Name",
        "Label Contact 2": "Email",
        "Label Contact 3": "Phone Number",
        "Label Contact 4": "Message",
        "PlaceHolder Contact 1": "Enter your name",
        "PlaceHolder Contact 2": "Enter your email",
        "PlaceHolder Contact 3": "Enter your phone number",
        "PlaceHolder Contact 4": "Enter your message",
        "Submit Contact 1": "Submitting...",
        "Submit Contact 2": "SUBMIT MESSAGE",
        "Paraf Contact 1": "CONTACT US",
        "Paraf Contact 2": "CUSTOMER SERVICE SUPPORT HOURS",
        "Paraf Contact 3": "Monday – Friday 8:00 am - 4:00pm EST.",
        "Paraf Contact 4": "Excluding the weekend and major holidays.",

        //FAQ
        "Question FAQ 1": "What is Thriftex ?",
        "Question FAQ 2": "How does Thriftex’s legit check works?",
        "Question FAQ 3":
          "How long does it take to get the result from a legit check?",
        "Question FAQ 4": "How does Thriftex process and protect user’s data?",
        "Question FAQ 5":
          "What happens if my bought product happen to be fake?",
        "Question FAQ 6":
          "Is the legit check service from Thriftex really costless?",
        "Question FAQ 7": "Does Thriftex sell products?",
        "Answer FAQ 1":
          "Thriftex is a website that offers free legit checks for fashion items like clothing, shoes, and accessories. We help you verify the authenticity of thrifted or second-hand goods before you purchase them.",
        "Answer FAQ 2":
          "To use Thriftex legit check service, simply visit our website, upload a photo of the product you want to verify, and our team will analyze and check its authenticity for free. We will then provide you with the results.",
        "Answer FAQ 3":
          "Typically, the legit check process takes about 24 hours, but it may take longer depending on the volume of requests we are handling. We strive to deliver results as quickly as possible",
        "Answer FAQ 4":
          "We understand the importance of your data privacy. Thriftex processes user data securely and confidentially in accordance with our privacy policy. We do not share or sell user data to third parties without your consent. For more information, please refer to our privacy policy on our website.",
        "Answer FAQ 5":
          "If a product you verify through our legit check service turns out to be fake, we will provide detailed information on why we believe it to be counterfeit. We recommend that you avoid purchasing fake items and exercise caution in transactions.",
        "Answer FAQ 6":
          "Yes, the legit check service at Thriftex is completely free. We believe that everyone should have access to product authenticity information, especially when shopping for thrift or second-hand goods. We are committed to providing this service free of charge to our users.",
        "Answer FAQ 7":
          "No, Thriftex is not an e-commerce that sell products. We only provide a legit check service to help you verify product authenticity. After receiving our verification results, you will need to find another place or platform to complete your purchase.",

        //Footer
        CONTACT: "CONTACT US",
        "TERMS AND CONDITION": "TERM AND CONDITION",

        //CardProductLegitPublish
        Waiting: "waiting",
        fake: "Fake",
        Original: "Original",
      },
    },
    id: {
      translation: {
        //General
        Loading: "Memuat...",

        //Homepage
        Home: "Beranda",
        "Legit Check": "Cek Legit",
        About: "Tentang",
        Profile: "Profil",

        "Sign In": "Masuk",
        "Dark Mode": "GELAP",
        "Light Mode": "TERANG",

        //Jumbotron
        "IS YOUR FASHION STYLE LEGIT?": "APAKAH FASHION ANDA LEGIT?",
        "CHECK NOW": "CEK SEKARANG",

        //Tagline
        "tagline 1": "Asli Bersama Kami",
        "tagline 2":
          "Hadirkan inovasi untuk memberikan pemahaman dan informasi kepada masyarakat mengenai merek, sambil mempromosikan keaslian guna mengurangi produk palsu di seluruh dunia.",
        "tagline 3": "Bekerjasama dengan para ahli merek dan komunitas untuk",
        "span tagline": "MEMERIKSA",
        "continuation paragraph": "keasilian produk",

        //Statistic
        "statistic 1": "MEMBUAT ORANG MENIKMATI MENGENAKAN PAKAIAN MEREKA",
        "statistic 2": "TOTAL CEK",

        //Banner in Legit Check Page
        "bannerlegit 1": "Apakah Gaya Busana Anda",
        "bannerLegit 2": "Asli",
        "bannerLegit 3": "Total Cek",
        "bannerLegit 4": "Lihat Lebih Lanjut",

        //LegitCheckPage
        "LegitPage 1": "Lacak Pemeriksaan Yang Sah",
        "search page": "Contoh: ID- 040121",
        "Not Found": "Hasil tidak ditemukan",

        //ButtonFormLegit
        "button form legit": "Cek Legit",

        //LegitCheckFormPage
        "Heading Legit Form": "Formulir Cek Legit",
        "Button Left": "Kembali",
        "Label Form 1": "Kategori Produk",
        "Label Form 2": "Merek Produk",
        "Label Form 3": "Nama Produk",
        "Label Form 4": "Unggah Gambar",
        "Label Form 5": "Pembelian",
        "Label Form 6": "Nama Toko",
        "Label Form 7": "Kondisi Produk",
        "Label Form 8": "Catatan Lain",
        "Default Value 1": "Pilih Kategori Produk",
        "Default Value 2": "Pilih Merk",
        "Default Value 3": "Pilih Pembelian",
        "Default Value 4": "Pilih Kondisi Produk",
        "PlaceHolder 1": "Masukkan Nama Produk",
        "PlaceHolder 2": "Masukkan Nama Toko",

        //Input Image
        "input image 1": "Pastikan untuk mengunggah 6 gambar.",
        continous: "Ukuran gambar harus kurang dari 1.000 KB.",

        //Input
        Optional: "(Opsional)",
        Required: "(Wajib)",
        Old: "Lama",
        New: "Baru",

        //Span Submit Legit Form
        Submit: "Mengirimkan...",
        Close: "Tutup",

        //MyLegitPage
        "Heading My Legit": "Halaman Legit Saya",
        "Paraf My Legit":
          "Kamu belum pernah melakukan legit cek, legit cek sekarang!",

        //Alert Legit Check
        "Heading Alert": "TERIMA KASIH",
        "Paraf Alert": "Mohon menunggu sampai produk anda",
        "Span Alert": "terverifikasi",
        "Continous Paraf Alert": "oleh validator kami",

        //Legit Check Detail
        "Heading Detail": "Detail Legit Cek",
        "Label Detail 1": "KODE KASUS",
        "Label Detail 2": "KATEGORI PRODUK",
        "Label Detail 3": "NAMA BRAND",
        "Label Detail 4": "NAMA PRODUK",
        "Label Detail 5": "TANGGAL PEMBELIAN",
        "Label Detail 6": "NAMA TOKO",
        "Label Detail 7": "KONDISI PRODUK",
        "Label Detail 8": "CATATAN LAIN",
        "Heading Result": "Hasil Legit Check",
        "Under Review": "Legit cek anda masih dalam peninjauan",

        //Photos Field
        "Label Detail": "FOTO PRODUK",

        //Banner About
        "Heading About": "Tentang Thriftex",
        "Heading About 2": "Temui Tim",

        //OurGoals About
        "Heading Goals": "Tujuan Kami",
        "Heading Goals 2":
          "Thriftex bertujuan untuk mendidik masyarakat tentang produk palsu dan hak kekayaan intelektual.",
        "Heading Goals 3":
          "Dengan Kreativitas & Teknologi, Thriftex berkomitmen membantu",
        "Heading Goals 4": "Konsumen",
        "Heading Goals 5": "Produsen",
        "Heading Goals 6": "Pemangku Kepentingan",
        "Heading Goals 7":
          "Sehingga mereka dapat memahami dan mengakses setiap kebutuhan akan keaslian produk",

        //Partner Brands
        "Heading Partners 1": "Mitra Merek",
        "Heading Partners 2": "Kami bekerja sama dengan perusahaan merek ini",

        //WhyWeDifferent
        "Different 1": "Kenapa Kami Berbeda?",
        "Different 2": "Gratis Seumur Hidup",
        "Different 3": "Pakar Komunitas & Merek",
        "Different 4": "Hasil 1 x 24 Jam",
        "Different 5": "Layanan 24/7",
        "Different 6": "Merek Lokal & Internasional",
        "Different 7": "Sertifikasi Online",

        //AccountSettings
        "Old Password Required": "Silakan masukkan kata sandi lama Anda.",
        "Password Length":
          "Kata sandi baru harus terdiri dari minimal 8 karakter.",
        "Password Not Match": "Kata sandi baru tidak cocok.",
        "Update Success": "Profil berhasil diperbarui!",
        "Update Failed": "Gagal memperbarui profil. Silakan coba lagi.",
        "Settings Save": "Simpan Informasi",

        //Personal Form
        "Heading Personal 1": "Informasi pribadi",
        "Label Personal 1": "Nama belakang",
        "Label Personal 2": "Nama",
        "Label Personal 3": "Nomor telepon",
        "Label Personal 4": "Jenis Kelamin",
        "PlaceHolder Personal": "Contoh: 081234xxxxxx",
        "Option Personal 1": "Pilih Jenis Kelamin",
        "Option Personal 2": "Pria",
        "Option Personal 3": "Wanita",
        "Option Personal 4": "Lainnya",

        //SecurityForm
        "Heading Security 1": "Informasi Keamanan",
        "Label Security 1": "Surel",
        "Label Security 2": "Masukkan Kata Sandi",
        "Label Security 3": "Kata Sandi Lama",
        "Label Security 4": "Kata Sandi Baru",
        "Label Security 5": "Konfirmasi Kata Sandi Baru",
        "PlaceHolder Security 1": "Kata Sandi Lama Anda",
        "PlaceHolder Security 2": "Kata Sandi Baru Anda",
        "PlaceHolder Security 3": "Konfirmasikan Kata Sandi Baru Anda",
        "Button Cancel": "Batal",
        "Button Change Password": "Ubah Kata Sandi",

        //Logout
        "Span Logout": "Keluar",

        //MyLegit
        "Span MyLegit": "Legit Cek Saya",

        //ContactUs
        "Heading Contact": "HUBUNGI KAMI",
        "Div Success": "Pesan berhasil terkirim!",
        "Label Contact 1": "Nama",
        "Label Contact 2": "Surel",
        "Label Contact 3": "Nomor Telepon",
        "Label Contact 4": "Pesan",
        "PlaceHolder Contact 1": "Masukkan nama Anda",
        "PlaceHolder Contact 2": "Masukkan email Anda",
        "PlaceHolder Contact 3": "Masukkan nomor telepon Anda",
        "PlaceHolder Contact 4": "Masukkan pesan Anda",
        "Submit Contact": "Mengirimkan...",
        "Submit Contact 2": "KIRIM PESAN",
        "Paraf Contact 1": "HUBUNGI KAMI",
        "Paraf Contact 2": "JAM DUKUNGAN LAYANAN PELANGGAN",
        "Paraf Contact 3": "Senin – Jumat pukul 08.00 - 16.00 EST.",
        "Paraf Contact 4": "Tidak termasuk akhir pekan dan hari libur besar.",

        //FAQ
        "Question FAQ 1": "Apa itu Thriftex",
        "Question FAQ 2": "Bagaimana cara kerja Legit Cek Thriftex?",
        "Question FAQ 3":
          "Berapa lama waktu yang dibutuhkan untuk mendapatkan hasil legit cek ?",
        "Question FAQ 4":
          "Bagaimana cara Thriftex memproses dan melindungi data pengguna?",
        "Question FAQ 5":
          "Apa yang terjadi jika produk yang saya beli ternyata palsu?",
        "Question FAQ 6":
          "Apakah layanan legit cek dari Thriftex benar-benar gratis?",
        "Question FAQ 7": "Apakah Thriftex menjual produk?",
        "Answer FAQ 1":
          "Thriftex adalah situs web yang menawarkan legit cek gratis untuk item fashion seperti pakaian, sepatu, dan aksesoris. Kami membantu Anda memverifikasi keaslian barang bekas atau barang bekas sebelum Anda membelinya.",
        "Answer FAQ 2":
          "Untuk menggunakan layanan legit cek Thriftex, cukup kunjungi website kami, unggah foto produk yang ingin Anda verifikasi, dan tim kami akan menganalisis dan memeriksa keasliannya secara gratis. Kami kemudian akan memberi Anda hasilnya.",
        "Answer FAQ 3":
          "Biasanya, proses pemeriksaan yang sah memakan waktu sekitar 24 jam, namun mungkin memerlukan waktu lebih lama tergantung pada volume permintaan yang kami tangani. Kami berusaha untuk memberikan hasil secepat mungkin",
        "Answer FAQ 4":
          "Kami memahami pentingnya privasi data Anda. Thriftex memproses data pengguna dengan aman dan rahasia sesuai dengan kebijakan privasi kami. Kami tidak membagikan atau menjual data pengguna kepada pihak ketiga tanpa persetujuan Anda. Untuk informasi lebih lanjut, silakan lihat kebijakan privasi kami di situs web kami.",
        "Answer FAQ 5":
          "Jika produk yang Anda verifikasi melalui layanan pemeriksaan resmi kami ternyata palsu, kami akan memberikan informasi rinci mengapa kami yakin produk tersebut palsu. Kami menyarankan Anda menghindari pembelian barang palsu dan berhati-hati dalam bertransaksi.",
        "Answer FAQ 6":
          "Ya, layanan legit cek di Thriftex sepenuhnya gratis. Kami percaya bahwa setiap orang harus memiliki akses terhadap informasi keaslian produk, terutama saat berbelanja barang bekas atau barang bekas. Kami berkomitmen untuk menyediakan layanan ini secara gratis kepada pengguna kami.",
        "Answer FAQ 7":
          "Tidak, Thriftex bukanlah e-commerce yang menjual produk. Kami hanya menyediakan layanan pengecekan yang sah untuk membantu Anda memverifikasi keaslian produk. Setelah menerima hasil verifikasi kami, Anda perlu mencari tempat atau platform lain untuk menyelesaikan pembelian Anda.",

        //Footer
        CONTACT: "KONTAK KAMI",
        "TERMS AND CONDITION": "SYARAT DAN KETENTUAN",

        //CardProductLegitPublish
        Waiting: "menunggu",
        fake: "Palsu",
        Original: "Asli",
      },
    },
  },
  lng: defaultLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
