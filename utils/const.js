import BASE_URL from '../config'
const companyName = 'Quince'

const footerP =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu erat in eros varius congue vitae ut mauris. Nunc sit amet justo vitae enim rutrum consectetur. Morbi id pretium risus. Donec gravida porta tellus, non iaculis purus ornare ac. Donec sagittis, nulla nec placerat efficitur, velit enim malesuada felis'

const support_number = '01744329811'
const support_mail = 'quincesoftwaredev@gmail.com'
const delivery_positions = ['Inside Dhaka', 'Outside Dhaka', 'Dhaka Subburb']
const feacebook_page = 'https://www.facebook.com/'
const messenger = 'https://www.facebook.com/'
const whatsapp = 'https://web.whatsapp.com/'
const instagram = 'https://www.instagram.com/'

const colors = [
  { name: 'Black', code: '#000000' },
  { name: 'White', code: '#FFFFFF' },
  { name: 'Gray', code: '#808080' },
  { name: 'Red', code: '#FF0000' },
  { name: 'Blue', code: '#0000FF' },
  { name: 'Green', code: '#008000' },
  { name: 'Yellow', code: '#FFFF00' },
  { name: 'Orange', code: '#FFA500' },
  { name: 'Purple', code: '#800080' },
  { name: 'Pink', code: '#FFC0CB' },
  { name: 'Brown', code: '#A52A2A' },
  { name: 'Beige', code: '#F5F5DC' },
  { name: 'Navy', code: '#000080' },
  { name: 'Teal', code: '#008080' },
  { name: 'Maroon', code: '#800000' },
  { name: 'Olive', code: '#808000' },
  { name: 'Cyan', code: '#00FFFF' },
  { name: 'Magenta', code: '#FF00FF' },
  { name: 'Turquoise', code: '#40E0D0' },
  { name: 'Lime', code: '#00FF00' },
  { name: 'Indigo', code: '#4B0082' },
  { name: 'Violet', code: '#8A2BE2' },
  { name: 'Aqua', code: '#00FFFF' },
  { name: 'Silver', code: '#C0C0C0' },
  { name: 'Gold', code: '#FFD700' }
]

const seoData = {
  twitter: {
    handle: '@newsportal',
    site: '@newsportal',
    cardType: 'summary_large_image'
  }
}

function getSeoData (lang = 'en') {
  const seoData = {
    en: {
      title: `Latest News and Updates - ${companyName}`,
      description: `Stay informed with the latest news and updates from ${companyName}. Read trending articles, in-depth analysis on politics, technology, and more.`,
      canonical: BASE_URL,
      openGraph: {
        url: BASE_URL,
        title: `Latest News and Updates - ${companyName}`,
        description: `Catch up on the latest articles and breaking news from ${companyName}, covering a variety of topics including technology, politics, and education.`,
        images: [
          {
            url: 'https://images.pexels.com/photos/237635/pexels-photo-237635.jpeg?auto=compress&cs=tinysrgb&w=600',
            alt: `News and Articles - ${companyName}`,
            width: 1200,
            height: 630
          }
        ],
        site_name: companyName
      },
      twitter: {
        handle: '@newsportal',
        site: '@newsportal',
        cardType: 'summary_large_image'
      }
    },
    bn: {
      title: `সর্বশেষ খবর এবং আপডেট - ${companyName}`,
      description: `${companyName} থেকে সর্বশেষ খবর এবং আপডেট সম্পর্কে জানুন। প্রযুক্তি, রাজনীতি, এবং আরও অনেক বিষয়ের গভীর বিশ্লেষণ পড়ুন।`,
      canonical: BASE_URL,
      openGraph: {
        url: BASE_URL,
        title: `সর্বশেষ খবর এবং আপডেট - ${companyName}`,
        description: `${companyName} থেকে প্রযুক্তি, রাজনীতি এবং শিক্ষা সহ বিভিন্ন বিষয়ের সাম্প্রতিক নিবন্ধ এবং ব্রেকিং নিউজ সম্পর্কে জানুন।`,
        images: [
          {
            url: 'https://images.pexels.com/photos/237635/pexels-photo-237635.jpeg?auto=compress&cs=tinysrgb&w=600',
            alt: `সংবাদ এবং নিবন্ধ - ${companyName}`,
            width: 1200,
            height: 630
          }
        ],
        site_name: companyName
      },
      twitter: {
        handle: '@newsportal',
        site: '@newsportal',
        cardType: 'summary_large_image'
      }
    }
  }

  console.log({ lang })
  return seoData[lang] // Fallback to English if lang is not found
}

const TermsAndConditionSeoData = {
  title: `Our Terms And Conditions - ${companyName}`,
  description: `Welcome to ${companyName}! These terms and conditions outline the rules and regulations for the use of ${companyName}'s Website, located at ${BASE_URL}`,
  canonical: `${BASE_URL}/cart`,
  openGraph: {
    title: `Our Terms And Conditions - ${companyName}`,
    description: `Welcome to ${companyName}! These terms and conditions outline the rules and regulations for the use of ${companyName}'s Website, located at ${BASE_URL}`,

    url: `${BASE_URL}/terms-and-conditions`,
    images: [
      {
        url: `${BASE_URL}/images/terms-and-conditions.png`,
        width: 1200,
        height: 630,
        alt: `Our Terms And Conditions - ${companyName}`
      }
    ],
    type: 'website'
  },
  twitter: seoData.twitter
}

const privacyPolicySeoData = {
  title: `Privacy Policy - ${companyName}`,
  description: `Welcome to ${companyName}! These privacy policy outline the rules and regulations for the use of ${companyName}'s Website, located at ${BASE_URL}`,
  canonical: `${BASE_URL}/cart`,
  openGraph: {
    title: `Privacy Policy - ${companyName}`,
    description: `Welcome to ${companyName}! These privacy policy outline the rules and regulations for the use of ${companyName}'s Website, located at ${BASE_URL}`,

    url: `${BASE_URL}/privacy-policy`,
    images: [
      {
        url: `${BASE_URL}/images/privacy-policy.png`,
        width: 1200,
        height: 630,
        alt: `Privacy Policy - ${companyName}`
      }
    ],
    type: 'website'
  },
  twitter: seoData.twitter
}

const registerSeoData = {
  title: `Register - ${companyName}`,
  description: `Create an account on ${companyName} to stay updated with the latest news and articles from various categories.`,
  canonical: `${BASE_URL}/register`,
  openGraph: {
    title: `Register - ${companyName}`,
    description: `Join ${companyName} to stay informed about breaking news, exclusive content, and in-depth analysis on current events.`,
    url: `${BASE_URL}/register`,
    images: [
      {
        url: `${BASE_URL}/images/register.png`,
        width: 1200,
        height: 630,
        alt: `Register - ${companyName}`
      }
    ],
    type: 'website'
  },
  twitter: seoData.twitter
}

const loginSeoData = {
  title: `Login - ${companyName}`,
  description: `Sign in to your ${companyName} account to access personalized news, save your favorite articles, and stay informed.`,
  canonical: `${BASE_URL}/login`,
  openGraph: {
    title: `Login - ${companyName}`,
    description: `Sign in to your ${companyName} account to access personalized news, save your favorite articles, and stay informed.`,
    url: `${BASE_URL}/login`,
    images: [
      {
        url: `${BASE_URL}/images/login.png`,
        width: 1200,
        height: 630,
        alt: `Login - ${companyName}`
      }
    ],
    type: 'website'
  },
  twitter: seoData.twitter
}

const themeBg = 'linear-gradient(45deg, rgb(29, 102, 12), rgb(137, 208, 5))'
const themeTransparent = 'rgba(7, 121, 214,0.1)'
const themeC = 'rgb(29, 102, 12)'
const buttonC = 'white'
const buttonBg = 'linear-gradient(45deg, rgb(29, 102, 12), rgb(137, 208, 5))'
const bg = 'white'
const outerBg = 'rgb(232, 241, 247)'
const borderColor = 'rgba(52, 134, 11, 0.5)'

const statusColors = {
  draft: 'rgb(255, 165, 0)', // Orange
  published: 'rgb(0, 0, 255)', // Blue
  confirmed: 'rgb(0, 128, 0)', // Green
  completed: 'rgb(0, 128, 0)', // Green
  packing: 'rgb(255, 215, 0)', // Gold
  packed: 'rgb(255, 140, 0)', // Dark Orange
  reads: 'rgb(30, 144, 255)', // Dodger Blue
  views: 'rgb(255, 205, 50)', // Lime Green
  canceled: 'rgb(255, 0, 0)', // Red
  failed: 'rgb(139, 0, 0)', // Dark Red
  none: 'rgb(255,255,255)',
  featured: `${themeC}`
}

export {
  delivery_positions,
  themeTransparent,
  themeBg,
  themeC,
  outerBg,
  bg,
  colors,
  buttonC,
  buttonBg,
  borderColor,
  getSeoData,
  seoData,
  TermsAndConditionSeoData,
  privacyPolicySeoData,
  registerSeoData,
  loginSeoData,
  companyName,
  support_mail,
  support_number,
  statusColors,
  feacebook_page,
  whatsapp,
  messenger,
  instagram,
  footerP
}
