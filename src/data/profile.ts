import type { Localized } from '../lib/i18n';

// EXAMPLE DATA: replace with your own.
export const PROFILE = {
  name: 'Andy Vu',
  headline: {
    vi: 'Đang học lập trình web',
    en: 'Learning web development',
  } as Localized,
  intro: {
    vi: 'Đây là nơi mình ghi lại những gì đã học, ghi chú trong quá trình học và các chứng chỉ đã đạt được.',
    en: "This is where I keep track of what I've learned, my study notes, and the certificates I've earned.",
  } as Localized,
  about: [
    {
      vi: 'Mình bắt đầu tự học lập trình từ năm 2026, tập trung vào phát triển web.',
      en: 'I started teaching myself programming in 2026, focusing on web development.',
    },
    {
      vi: 'Mục tiêu tiếp theo: làm các dự án thực tế và tìm vị trí thực tập frontend.',
      en: 'Next goal: build real projects and land a frontend internship.',
    },
  ] as Localized[],
  location: { vi: 'Việt Nam', en: 'Vietnam' } as Localized,
  // Shown as text; email links don't work in every browser setup.
  email: '',
  links: [
    { label: 'GitHub', url: 'https://github.com/andy-hdg', icon: 'github' },
    // { label: 'LinkedIn', url: 'https://www.linkedin.com/in/your-profile', icon: 'linkedin' },
  ] as { label: string; url: string; icon: 'github' | 'linkedin' | 'globe' }[],
  education: [
    {
      title: { vi: 'Tên ngành học', en: 'Degree or major' },
      subtitle: { vi: '[Năm bắt đầu] – [Năm kết thúc] · [Tên trường]', en: '[Start year] – [End year] · [School name]' },
    },
  ] as { title: Localized; subtitle: Localized; description?: Localized }[],
};
