/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Teacher {
  id: string;
  fullName: string;
  slug: string;
  photo: string;
  subject: string;
  position: string;
  experienceYears: number;
  degree: string;
  category: string;
  education: string;
  certificates: string[];
  achievements: string[];
  studentResults: string;
  biography: string;
  languages: string[];
  featured: boolean;
  order: number;
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}

export interface Achievement {
  id: string;
  studentName: string;
  studentPhoto: string;
  className: string;
  category: 'olympiad' | 'international_cert' | 'national_cert' | 'university_grant' | 'sport' | 'art' | 'other';
  title: string;
  result: string; // e.g., "1-o'rin", "IELTS 8.0", "Full Grant"
  level: 'international' | 'national' | 'regional' | 'school';
  subject?: string;
  teacherId?: string;
  date: string;
  certificateImage?: string;
  description: string;
  featured: boolean;
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}

export interface News {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  gallery?: string[];
  category: 'school' | 'education' | 'events' | 'olympiads' | 'sports' | 'admission' | 'announcements' | 'student_life';
  tags: string[];
  author: string;
  publishDate: string;
  featured: boolean;
  status: 'published' | 'draft';
  views: number;
  createdAt: string;
  updatedAt: string;
}

export interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  fullContent: string;
  image: string;
  startDate: string; // YYYY-MM-DD
  startTime: string; // HH:MM
  endDate: string;
  endTime: string;
  location: string;
  responsiblePerson: string;
  registrationRequired: boolean;
  eventStatus: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

export interface SchoolClass {
  id: string;
  grade: number; // 1 to 11
  className: string; // e.g., "A", "B", "Ixtisoslashgan"
  language: 'uz' | 'ru' | 'en';
  shift: 1 | 2;
  currentStudents: number;
  capacity: number;
  availableSeats: number;
  monthlyFee: number; // in UZS
  teacherId?: string; // Sinv rahbari (Teacher ID)
  admissionStatus: 'open' | 'limited' | 'closed';
  createdAt: string;
  updatedAt: string;
}

export interface AdmissionApplication {
  id: string; // e.g. ADM-2026-0001
  applicationNumber: string;
  studentFullName: string;
  birthDate: string;
  gender: 'male' | 'female';
  currentGrade: string; // e.g., "Boshlang'ich", "4-sinf"
  requestedGrade: number; // 1 to 11
  educationLanguage: 'uz' | 'ru' | 'en';
  parentFullName: string;
  phone: string;
  secondaryPhone?: string;
  email?: string;
  address: string;
  previousSchool?: string;
  message?: string;
  documents?: string[]; // list of file paths/names
  status: 'new' | 'contacted' | 'interview_scheduled' | 'test_scheduled' | 'documents_pending' | 'accepted' | 'rejected' | 'archived';
  adminNote?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Vacancy {
  id: string;
  title: string;
  department: string;
  employmentType: 'full_time' | 'part_time' | 'contract';
  description: string;
  responsibilities: string[];
  requirements: string[];
  experience: string; // e.g., "Kamida 3 yil"
  education: string; // e.g., "Oliy ma'lumotli"
  salary: string; // e.g., "Kelishiladi" yoki miqdor
  deadline: string;
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}

export interface JobApplication {
  id: string;
  vacancyId: string;
  vacancyTitle: string;
  fullName: string;
  phone: string;
  email: string;
  address: string;
  experience: string;
  message?: string;
  cvFile?: string; // name of CV file
  portfolioUrl?: string;
  status: 'new' | 'reviewed' | 'interview_scheduled' | 'accepted' | 'rejected';
  adminNote?: string;
  createdAt: string;
  updatedAt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'classes' | 'events' | 'sports' | 'labs' | 'library' | 'trips' | 'olympiads' | 'graduation' | 'school_life';
  type: 'image' | 'video';
  mediaUrl: string;
  thumbnail?: string;
  description?: string;
  eventDate: string;
  order: number;
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'admission' | 'fees' | 'schedule' | 'transport' | 'meals' | 'uniform' | 'extra_classes' | 'safety' | 'documents' | 'exams';
  order: number;
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}

export interface ContactMessage {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  type: 'admission' | 'complaint' | 'suggestion' | 'partnership' | 'other';
  message: string;
  status: 'new' | 'read' | 'replied' | 'archived';
  adminNote?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Club {
  id: string;
  name: string;
  leader: string;
  ageLimit: string;
  schedule: string;
  description: string;
  image: string;
}

export interface SchoolTransport {
  enabled: boolean;
  routes: { id: string; name: string; areas: string[]; price: number }[];
  details: string;
}

export interface SchoolMeals {
  enabled: boolean;
  menu: { day: string; breakfast: string; lunch: string; snack: string; allergens: string }[];
  details: string;
}

export interface SchoolDocument {
  id: string;
  name: string;
  category: 'admission' | 'rules' | 'payments' | 'uniform' | 'other';
  fileType: 'pdf' | 'docx' | 'xlsx';
  fileSize: string;
  fileUrl: string;
}

export interface SiteSettings {
  schoolName: string;
  logo: string;
  favicon: string;
  description: string;
  address: string;
  phoneNumbers: string[];
  email: string;
  workingHours: string;
  socialLinks: {
    telegram: string;
    instagram: string;
    facebook: string;
    youtube: string;
  };
  mapCoordinates: string; // e.g., latitude,longitude
  statistics: {
    studentsCount: number;
    teachersCount: number;
    achievementsCount: number;
    experienceYears: number;
    universityEntryRate: number;
  };
  admissionOpen: boolean;
  announcementBar: {
    enabled: boolean;
    text: string;
    color: string;
  };
  showFees: boolean;
  showTransport: boolean;
  showMeals: boolean;
  showTestimonials: boolean;
  maintenanceMode: boolean;
  updatedAt: string;
}
