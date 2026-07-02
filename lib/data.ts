export const COURSES = [
  {
    id: '1',
    slug: 'noorani-qaida',
    title: 'Noorani Qaida',
    description:
      'If you are a beginner with no previous knowledge of Arabic, start here. Learn the Arabic alphabet and basic pronunciation rules.',
    image: '/images/courses/noorani-qaida.jpg',
    lessons: 20,
    duration: '10 Weeks',
    enrolled: 50,
    category: 'QURAN',
    level: 'BEGINNER',
  },
  {
    id: '2',
    slug: 'tajweed-ul-quran',
    title: 'Tajweed ul Quran',
    description:
      'Tajweed means proficiency. Learn to apply the correct pronunciation and articulation rules of the Holy Quran.',
    image: '/images/courses/tajweed.jpg',
    lessons: 20,
    duration: '10 Weeks',
    enrolled: 50,
    category: 'TAJWEED',
    level: 'INTERMEDIATE',
  },
  {
    id: '3',
    slug: 'quran-reading',
    title: 'Quran Reading',
    description:
      'The Quran has numerous benefits. Learn to read the Holy Quran with proper pronunciation and fluency.',
    image: '/images/courses/quran-reading.jpg',
    lessons: 20,
    duration: '10 Weeks',
    enrolled: 50,
    category: 'QURAN',
    level: 'BEGINNER',
  },
  {
    id: '4',
    slug: 'quran-tafseer',
    title: 'Quran Tafseer',
    description:
      "Tafseer means to explain or expound. Understand the deeper meanings and interpretations of Allah's words.",
    image: '/images/courses/tafseer.jpg',
    lessons: 20,
    duration: '10 Weeks',
    enrolled: 50,
    category: 'QURAN',
    level: 'ADVANCED',
  },
  {
    id: '5',
    slug: 'quran-ijaza',
    title: 'Quran Ijaza',
    description:
      'Obtain a formal permission to transmit the Holy Quran with a connected chain back to the Prophet Muhammad (PBUH).',
    image: '/images/courses/ijaza.jpg',
    lessons: 20,
    duration: '10 Weeks',
    enrolled: 50,
    category: 'QURAN',
    level: 'ADVANCED',
  },
  {
    id: '6',
    slug: 'quran-memorization',
    title: 'Quran Memorization',
    description:
      'Memorization of the Holy Quran is a dream for every Muslim. Our structured program makes becoming a Hafiz achievable.',
    image: '/images/courses/memorization.jpg',
    lessons: 20,
    duration: '10 Weeks',
    enrolled: 50,
    category: 'MEMORIZATION',
    level: 'INTERMEDIATE',
  },
  {
    id: '7',
    slug: 'arabic-language',
    title: 'Arabic Language',
    description:
      'Learning Arabic provides insight into Arab culture and a deeper understanding of the Quran and Islamic traditions.',
    image: '/images/courses/arabic.jpg',
    lessons: 20,
    duration: '10 Weeks',
    enrolled: 50,
    category: 'ARABIC',
    level: 'BEGINNER',
  },
  {
    id: '8',
    slug: 'ten-qirat',
    title: 'Learn Ten Qirat',
    description:
      'Ten Qirat refers to the ten distinct and historically recognized ways of reciting the Holy Quran.',
    image: '/images/courses/qirat.jpg',
    lessons: 20,
    duration: '10 Weeks',
    enrolled: 50,
    category: 'TAJWEED',
    level: 'ADVANCED',
  },
  {
    id: '9',
    slug: 'islamic-supplications',
    title: 'Islamic Supplications',
    description:
      'Learn the essential Duas and supplications from the Quran and Sunnah to enrich your daily spiritual practice.',
    image: '/images/courses/supplications.jpg',
    lessons: 20,
    duration: '10 Weeks',
    enrolled: 50,
    category: 'ISLAMIC',
    level: 'BEGINNER',
  },
]

export const PRICING_PLANS = [
  {
    id: '1',
    name: 'Basic',
    price: 29,
    period: 'month',
    description: 'Perfect for getting started',
    features: [
      '2 Classes per week',
      '1 Student',
      'Qualified Quran teacher',
      'Flexible schedule',
      'Progress reports',
      'WhatsApp support',
    ],
    highlighted: false,
  },
  {
    id: '2',
    name: 'Standard',
    price: 49,
    period: 'month',
    description: 'Most popular choice',
    features: [
      '3 Classes per week',
      '1 Student',
      'Certified Quran teacher',
      'Flexible schedule',
      'Progress reports',
      'WhatsApp support',
      'Monthly assessment',
      'Access to library',
    ],
    highlighted: true,
  },
  {
    id: '3',
    name: 'Premium',
    price: 79,
    period: 'month',
    description: 'For dedicated learners',
    features: [
      '5 Classes per week',
      'Up to 2 students',
      'Senior Quran teacher',
      'Priority scheduling',
      'Detailed progress reports',
      'WhatsApp & email support',
      'Weekly assessment',
      'Full library access',
      'Certificate on completion',
    ],
    highlighted: false,
  },
]

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Sarah M.',
    country: 'United Kingdom',
    rating: 5,
    review:
      'Online Madrasa has been a blessing for our family. My children have improved tremendously in their Quran recitation. The teachers are patient, knowledgeable, and truly dedicated.',
    avatar: null,
  },
  {
    id: '2',
    name: 'Ahmed K.',
    country: 'United States',
    rating: 5,
    review:
      'As a busy professional, I needed flexible timings for my Quran classes. Online Madrasa provided exactly that. My Tajweed has improved significantly in just three months.',
    avatar: null,
  },
  {
    id: '3',
    name: 'Fatima R.',
    country: 'Canada',
    rating: 5,
    review:
      'The female Quran teachers at Online Madrasa are exceptional. They create a comfortable learning environment and have helped me understand the Quran with proper Tajweed.',
    avatar: null,
  },
  {
    id: '4',
    name: 'Omar T.',
    country: 'Australia',
    rating: 5,
    review:
      'I enrolled my 7-year-old son and the results have been amazing. He can now read Quran with proper pronunciation. The teachers are very good with children.',
    avatar: null,
  },
]

export const STATS = [
  { value: '1,200+', label: 'Active Students' },
  { value: '150+', label: 'Quran Tutors' },
  { value: '113K+', label: 'Classes Conducted' },
  { value: '10K+', label: 'Students Passed' },
]

export const FEATURES = [
  {
    icon: 'BookOpen',
    title: 'Expert Quran Teachers',
    description: 'Certified and experienced teachers with ijaza and deep knowledge of Tajweed rules.',
  },
  {
    icon: 'Clock',
    title: 'Flexible Scheduling',
    description: 'Choose class times that fit your lifestyle. Available 24/7 across all time zones.',
  },
  {
    icon: 'Users',
    title: 'One-on-One Classes',
    description: 'Personalized attention in private sessions ensures rapid progress for every student.',
  },
  {
    icon: 'Globe',
    title: 'Learn from Anywhere',
    description: 'Join from the US, UK, Canada, Australia, or anywhere else in the world.',
  },
  {
    icon: 'Shield',
    title: 'Safe Learning Environment',
    description: 'Fully vetted teachers and a safe, monitored platform for students of all ages.',
  },
  {
    icon: 'Award',
    title: 'Certified Courses',
    description: 'Earn certificates upon course completion recognized by Islamic institutions.',
  },
]

export const NAV_LINKS = [
  { label: 'HOME', href: '/' },
  {
    label: 'COURSES',
    href: '/courses',
    dropdown: [
      { label: 'Noorani Qaida', href: '/courses/noorani-qaida' },
      { label: 'Tajweed ul Quran', href: '/courses/tajweed-ul-quran' },
      { label: 'Quran Reading', href: '/courses/quran-reading' },
      { label: 'Quran Memorization', href: '/courses/quran-memorization' },
      { label: 'Quran Tafseer', href: '/courses/quran-tafseer' },
      { label: 'Arabic Language', href: '/courses/arabic-language' },
    ],
  },
  {
    label: 'ABOUT',
    href: '/about',
    dropdown: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Teachers', href: '/about/teachers' },
    ],
  },
  { label: 'FEES & PLANS', href: '/pricing' },
  { label: 'BLOG', href: '/blog' },
]

export const BLOG_POSTS = [
  {
    id: '1',
    slug: 'benefits-of-learning-quran-online',
    title: 'Benefits of Learning Quran Online',
    excerpt:
      'Discover the many advantages of learning the Quran online, from flexible scheduling to access to qualified teachers worldwide.',
    image: '/images/blog/blog-1.jpg',
    publishedAt: '2024-01-15',
  },
  {
    id: '2',
    slug: 'how-to-improve-quran-recitation',
    title: 'How to Improve Your Quran Recitation',
    excerpt:
      'Practical tips and techniques to enhance your Quran recitation with proper Tajweed rules.',
    image: '/images/blog/blog-2.jpg',
    publishedAt: '2024-01-22',
  },
  {
    id: '3',
    slug: 'teaching-quran-to-children',
    title: 'Tips for Teaching Quran to Children',
    excerpt:
      'Learn effective strategies to make Quran learning fun, engaging, and effective for your children.',
    image: '/images/blog/blog-3.jpg',
    publishedAt: '2024-02-01',
  },
]
