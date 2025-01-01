import Technologies from "../components/Technologies";
import { projects, termsAndConditions } from "../data";

const dict = {
    footerP: {
        en: "Quince is a remote-first company, with team members located across the globe. This allows us to access the best talent and keep our overhead low, ultimately benefiting our clients. With a commitment to excellence, we are dedicated to helping businesses thrive in the digital age.",
        bn: "কুইন্স একটি রিমোট-ফার্স্ট কোম্পানি, যার টিম সদস্যরা সারা বিশ্বজুড়ে অবস্থান করছেন। এটি আমাদের সেরা প্রতিভার কাছে পৌঁছানোর সুযোগ দেয় এবং আমাদের খরচ কম রাখে, যা অবশেষে আমাদের ক্লায়েন্টদের উপকারে আসে। উৎকৃষ্টতার প্রতি প্রতিশ্রুতিবদ্ধ, আমরা ডিজিটাল যুগে ব্যবসাগুলোকে সফল হতে সাহায্য করতে নিবেদিত"
    },
    Home: {
        en: "Home",
        bn: "হোম",
    },
    Service: {
        en: "Service",
        bn: "সেবা"
    },
    Contact: {
        en: "Contact",
        bn: "যোগাযোগ করুন"
    },
    Technologies: {
        en: "Technologies",
        bn: "টেকনোলজি"
    },
    termsAndConditions: {
        en: "Terms And Conditions",
        bn: "শর্তাবলী"
    },
    Career: {
        en: "Career",
        bn: "ক্যারিয়ার"
    },
    privacyPolicy: {
        en: "Privacy Policy",
        bn: "গোপনীয়তা নীতি"
    },
    Projects: {
        en: "Projects",
        bn: "প্রকল্প"
    },
    About: {
        en: "About",
        bn: "আমাদের সম্পর্কে"
    },
    contactUs: {
        en: "Contact Us",
        bn: "আমাদের সাথে যোগাযোগ করুন"
    },
    learnMore: {
        en: "Learn More",
        bn: "আরও জানুন"
    },
    callUs: {
        en: "Call Us",
        bn: "আমাদের কল করুন"
    },
    Websites: {
        en: "Websites",
        bn: "ওয়েবসাইট"
    },
    ourCompany: {
        en: "Our Company",
        bn: "আমাদের কোম্পানি"
    }
    ,
    contactUs: {
        en: "Contact Us",
        bn: "আমাদের সাথে যোগাযোগ করুন"
    },
    emailUs: {
        en: "Email Us",
        bn: "আমাদের ইমেইল করুন"
    },
    callUs: {
        en: "Call Us",
        bn: "আমাদের কল করুন"
    }
    , learMore: {
        en: "Learn More",
        bn: "বিস্তারিত"
    }



}

const t = (key, lang) => {
    return dict[key] ? dict[key][lang] : key;
}

export default t