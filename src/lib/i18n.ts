export const LANGS = ['vi', 'en'] as const;
export type Lang = (typeof LANGS)[number];

export type Localized = string | { vi: string; en?: string };

/** Pick the text for `lang`, falling back to Vietnamese. */
export function t(value: Localized | undefined, lang: Lang): string {
  if (value === undefined) return '';
  if (typeof value === 'string') return value;
  return value[lang] ?? value.vi;
}

/** Prefix a site-relative path with the configured base, e.g. "/andy-learning/". */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

/** Link to `path` (e.g. "/learning/") in the given language. */
export function localizePath(lang: Lang, path: string): string {
  return withBase(lang === 'en' ? `/en${path}` : path);
}

const pad = (n: number) => String(n).padStart(2, '0');

/** "05/2026" in Vietnamese, "May 2026" in English. */
export function formatMonth(date: Date, lang: Lang): string {
  if (lang === 'vi') return `${pad(date.getUTCMonth() + 1)}/${date.getUTCFullYear()}`;
  return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(date);
}

/** "15/05/2026" in Vietnamese, "May 15, 2026" in English. */
export function formatDay(date: Date, lang: Lang): string {
  if (lang === 'vi') return `${pad(date.getUTCDate())}/${formatMonth(date, 'vi')}`;
  return new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(
    date,
  );
}

export const UI = {
  vi: {
    nav: {
      home: 'Trang chủ',
      learning: 'Học tập',
      certificates: 'Chứng chỉ',
      skills: 'Kỹ năng',
      about: 'Giới thiệu',
    },
    status: { planned: 'Dự định', learning: 'Đang học', done: 'Hoàn thành' },
    hello: 'Xin chào, mình là',
    viewCertificates: 'Xem chứng chỉ',
    stats: { done: 'chủ đề đã học', certificates: 'chứng chỉ', hours: 'giờ học', learning: 'đang học' },
    nowLearning: 'Đang học',
    featuredCertificates: 'Chứng chỉ nổi bật',
    recentlyCompleted: 'Mới hoàn thành',
    seeAll: 'Xem tất cả',
    all: 'Tất cả',
    category: 'Lĩnh vực',
    status_: 'Trạng thái',
    issuer: 'Đơn vị cấp',
    noResults: 'Không có mục nào khớp bộ lọc.',
    learningIntro: 'Những gì mình đã và đang học, mới nhất ở trên.',
    certificatesIntro: 'Các chứng chỉ đã đạt được. Bấm vào để xem chi tiết và xác minh.',
    skillsIntro: 'Kỹ năng tự đánh giá theo thang 1–5, kèm những gì đã học để có kỹ năng đó.',
    back: 'Quay lại',
    source: 'Nguồn học',
    started: 'Bắt đầu',
    completed: 'Hoàn thành',
    hours: 'Số giờ',
    hoursUnit: 'giờ',
    progress: 'Tiến độ',
    notes: 'Ghi chú',
    notesInVietnameseOnly: '',
    relatedCertificates: 'Chứng chỉ liên quan',
    issued: 'Ngày cấp',
    expires: 'Hết hạn',
    noExpiry: 'Không hết hạn',
    expired: 'Đã hết hạn',
    validUntil: 'Còn hạn đến',
    credentialId: 'Mã chứng chỉ',
    score: 'Điểm',
    verify: 'Xác minh',
    copy: 'Sao chép mã',
    copied: 'Đã sao chép',
    learnedFrom: 'Học từ',
    level: 'Mức độ',
    levels: ['', 'Mới bắt đầu', 'Cơ bản', 'Khá', 'Thành thạo', 'Chuyên sâu'],
    usedIn: 'Đã học qua',
    profile: 'Hồ sơ',
    education: 'Học vấn',
    contact: 'Liên hệ',
    footer: 'Xây dựng bằng',
    language: 'Ngôn ngữ',
    notFound: 'Không tìm thấy trang bạn cần.',
  },
  en: {
    nav: {
      home: 'Home',
      learning: 'Learning',
      certificates: 'Certificates',
      skills: 'Skills',
      about: 'About',
    },
    status: { planned: 'Planned', learning: 'In progress', done: 'Completed' },
    hello: "Hi there, I'm",
    viewCertificates: 'View certificates',
    stats: { done: 'topics learned', certificates: 'certificates', hours: 'hours of study', learning: 'in progress' },
    nowLearning: 'Currently learning',
    featuredCertificates: 'Featured certificates',
    recentlyCompleted: 'Recently completed',
    seeAll: 'See all',
    all: 'All',
    category: 'Field',
    status_: 'Status',
    issuer: 'Issuer',
    noResults: 'Nothing matches these filters.',
    learningIntro: "What I've learned and am learning, newest first.",
    certificatesIntro: "Certificates I've earned. Open one for details and verification.",
    skillsIntro: 'Self-assessed skills on a 1–5 scale, with what I studied to build each one.',
    back: 'Back',
    source: 'Source',
    started: 'Started',
    completed: 'Completed',
    hours: 'Hours',
    hoursUnit: 'hours',
    progress: 'Progress',
    notes: 'Notes',
    notesInVietnameseOnly: 'These notes are only available in Vietnamese.',
    relatedCertificates: 'Related certificates',
    issued: 'Issued',
    expires: 'Expires',
    noExpiry: 'Does not expire',
    expired: 'Expired',
    validUntil: 'Valid until',
    credentialId: 'Credential ID',
    score: 'Score',
    verify: 'Verify',
    copy: 'Copy ID',
    copied: 'Copied',
    learnedFrom: 'Learned in',
    level: 'Level',
    levels: ['', 'Beginner', 'Basic', 'Intermediate', 'Proficient', 'Expert'],
    usedIn: 'Studied in',
    profile: 'Profile',
    education: 'Education',
    contact: 'Contact',
    footer: 'Built with',
    language: 'Language',
    notFound: "The page you're looking for couldn't be found.",
  },
} as const;
