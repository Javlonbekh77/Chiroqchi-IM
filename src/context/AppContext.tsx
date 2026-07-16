/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Teacher,
  Achievement,
  News,
  Event,
  SchoolClass,
  AdmissionApplication,
  Vacancy,
  JobApplication,
  GalleryItem,
  FAQItem,
  ContactMessage,
  SiteSettings
} from '../types';
import {
  INITIAL_TEACHERS,
  INITIAL_ACHIEVEMENTS,
  INITIAL_NEWS,
  INITIAL_EVENTS,
  INITIAL_CLASSES,
  INITIAL_VACANCIES,
  INITIAL_FAQ,
  INITIAL_GALLERY,
  INITIAL_SETTINGS
} from '../data/demoData';

interface AppContextType {
  teachers: Teacher[];
  achievements: Achievement[];
  newsList: News[];
  events: Event[];
  classes: SchoolClass[];
  vacancies: Vacancy[];
  gallery: GalleryItem[];
  faq: FAQItem[];
  siteSettings: SiteSettings;
  admissionApplications: AdmissionApplication[];
  jobApplications: JobApplication[];
  contactMessages: ContactMessage[];
  isAdminLoggedIn: boolean;

  // Actions
  addTeacher: (teacher: Omit<Teacher, 'id' | 'createdAt' | 'updatedAt' | 'slug'>) => void;
  updateTeacher: (id: string, teacher: Partial<Teacher>) => void;
  deleteTeacher: (id: string) => void;

  addAchievement: (achievement: Omit<Achievement, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateAchievement: (id: string, achievement: Partial<Achievement>) => void;
  deleteAchievement: (id: string) => void;

  addNews: (news: Omit<News, 'id' | 'createdAt' | 'updatedAt' | 'slug' | 'views'>) => void;
  updateNews: (id: string, news: Partial<News>) => void;
  deleteNews: (id: string) => void;
  incrementNewsViews: (id: string) => void;

  addEvent: (event: Omit<Event, 'id' | 'createdAt' | 'updatedAt' | 'slug'>) => void;
  updateEvent: (id: string, event: Partial<Event>) => void;
  deleteEvent: (id: string) => void;

  addClass: (schoolClass: Omit<SchoolClass, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateClass: (id: string, schoolClass: Partial<SchoolClass>) => void;
  deleteClass: (id: string) => void;

  addVacancy: (vacancy: Omit<Vacancy, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateVacancy: (id: string, vacancy: Partial<Vacancy>) => void;
  deleteVacancy: (id: string) => void;

  addGalleryItem: (item: Omit<GalleryItem, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateGalleryItem: (id: string, item: Partial<GalleryItem>) => void;
  deleteGalleryItem: (id: string) => void;

  addFAQItem: (item: Omit<FAQItem, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateFAQItem: (id: string, item: Partial<FAQItem>) => void;
  deleteFAQItem: (id: string) => void;

  updateSiteSettings: (settings: Partial<SiteSettings>) => void;

  // Forms / Submissions
  addAdmissionApplication: (application: Omit<AdmissionApplication, 'id' | 'applicationNumber' | 'status' | 'createdAt' | 'updatedAt'>) => string;
  updateAdmissionStatus: (id: string, status: AdmissionApplication['status'], note?: string) => void;
  deleteAdmissionApplication: (id: string) => void;

  addJobApplication: (application: Omit<JobApplication, 'id' | 'status' | 'createdAt' | 'updatedAt'>) => void;
  updateJobApplicationStatus: (id: string, status: JobApplication['status'], note?: string) => void;
  deleteJobApplication: (id: string) => void;

  addContactMessage: (message: Omit<ContactMessage, 'id' | 'status' | 'createdAt' | 'updatedAt'>) => void;
  updateContactMessageStatus: (id: string, status: ContactMessage['status'], note?: string) => void;
  deleteContactMessage: (id: string) => void;

  // Auth
  loginAdmin: (email: string, pass: string) => boolean;
  logoutAdmin: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [newsList, setNewsList] = useState<News[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [classes, setClasses] = useState<SchoolClass[]>([]);
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [faq, setFaq] = useState<FAQItem[]>([]);
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(INITIAL_SETTINGS);
  const [admissionApplications, setAdmissionApplications] = useState<AdmissionApplication[]>([]);
  const [jobApplications, setJobApplications] = useState<JobApplication[]>([]);
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([]);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(false);

  // Load from LocalStorage or Fallback to demo data
  useEffect(() => {
    const localTeachers = localStorage.getItem('school_teachers');
    const localAchievements = localStorage.getItem('school_achievements');
    const localNews = localStorage.getItem('school_news');
    const localEvents = localStorage.getItem('school_events');
    const localClasses = localStorage.getItem('school_classes');
    const localVacancies = localStorage.getItem('school_vacancies');
    const localGallery = localStorage.getItem('school_gallery');
    const localFaq = localStorage.getItem('school_faq');
    const localSettings = localStorage.getItem('school_settings');
    const localAdmissions = localStorage.getItem('school_admissions');
    const localJobs = localStorage.getItem('school_jobs');
    const localMessages = localStorage.getItem('school_messages');
    const localAuth = localStorage.getItem('school_admin_auth');

    setTeachers(localTeachers ? JSON.parse(localTeachers) : INITIAL_TEACHERS);
    setAchievements(localAchievements ? JSON.parse(localAchievements) : INITIAL_ACHIEVEMENTS);
    setNewsList(localNews ? JSON.parse(localNews) : INITIAL_NEWS);
    setEvents(localEvents ? JSON.parse(localEvents) : INITIAL_EVENTS);
    setClasses(localClasses ? JSON.parse(localClasses) : INITIAL_CLASSES);
    setVacancies(localVacancies ? JSON.parse(localVacancies) : INITIAL_VACANCIES);
    setGallery(localGallery ? JSON.parse(localGallery) : INITIAL_GALLERY);
    setFaq(localFaq ? JSON.parse(localFaq) : INITIAL_FAQ);
    setSiteSettings(localSettings ? JSON.parse(localSettings) : INITIAL_SETTINGS);
    setAdmissionApplications(localAdmissions ? JSON.parse(localAdmissions) : []);
    setJobApplications(localJobs ? JSON.parse(localJobs) : []);
    setContactMessages(localMessages ? JSON.parse(localMessages) : []);
    setIsAdminLoggedIn(localAuth === 'true');
  }, []);

  // Sync state helper
  const syncAndSave = (key: string, data: any, setter: Function) => {
    setter(data);
    localStorage.setItem(key, JSON.stringify(data));
  };

  const createSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  // --- TEACHERS ---
  const addTeacher = (item: Omit<Teacher, 'id' | 'createdAt' | 'updatedAt' | 'slug'>) => {
    const slug = createSlug(item.fullName);
    const newTeacher: Teacher = {
      ...item,
      id: 'teacher_' + Date.now(),
      slug,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    syncAndSave('school_teachers', [newTeacher, ...teachers], setTeachers);
  };

  const updateTeacher = (id: string, partial: Partial<Teacher>) => {
    const updated = teachers.map(t => {
      if (t.id === id) {
        const next = { ...t, ...partial, updatedAt: new Date().toISOString() };
        if (partial.fullName) next.slug = createSlug(partial.fullName);
        return next;
      }
      return t;
    });
    syncAndSave('school_teachers', updated, setTeachers);
  };

  const deleteTeacher = (id: string) => {
    const updated = teachers.filter(t => t.id !== id);
    syncAndSave('school_teachers', updated, setTeachers);
  };

  // --- ACHIEVEMENTS ---
  const addAchievement = (item: Omit<Achievement, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newItem: Achievement = {
      ...item,
      id: 'achievement_' + Date.now(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    syncAndSave('school_achievements', [newItem, ...achievements], setAchievements);
  };

  const updateAchievement = (id: string, partial: Partial<Achievement>) => {
    const updated = achievements.map(item =>
      item.id === id ? { ...item, ...partial, updatedAt: new Date().toISOString() } : item
    );
    syncAndSave('school_achievements', updated, setAchievements);
  };

  const deleteAchievement = (id: string) => {
    const updated = achievements.filter(item => item.id !== id);
    syncAndSave('school_achievements', updated, setAchievements);
  };

  // --- NEWS ---
  const addNews = (item: Omit<News, 'id' | 'createdAt' | 'updatedAt' | 'slug' | 'views'>) => {
    const slug = createSlug(item.title);
    const newItem: News = {
      ...item,
      id: 'news_' + Date.now(),
      slug,
      views: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    syncAndSave('school_news', [newItem, ...newsList], setNewsList);
  };

  const updateNews = (id: string, partial: Partial<News>) => {
    const updated = newsList.map(item => {
      if (item.id === id) {
        const next = { ...item, ...partial, updatedAt: new Date().toISOString() };
        if (partial.title) next.slug = createSlug(partial.title);
        return next;
      }
      return item;
    });
    syncAndSave('school_news', updated, setNewsList);
  };

  const deleteNews = (id: string) => {
    const updated = newsList.filter(item => item.id !== id);
    syncAndSave('school_news', updated, setNewsList);
  };

  const incrementNewsViews = (id: string) => {
    const updated = newsList.map(item =>
      item.id === id ? { ...item, views: item.views + 1 } : item
    );
    // Silent save - don't trigger huge redraws if possible, but keep correct count
    setNewsList(updated);
    localStorage.setItem('school_news', JSON.stringify(updated));
  };

  // --- EVENTS ---
  const addEvent = (item: Omit<Event, 'id' | 'createdAt' | 'updatedAt' | 'slug'>) => {
    const slug = createSlug(item.title);
    const newItem: Event = {
      ...item,
      id: 'event_' + Date.now(),
      slug,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    syncAndSave('school_events', [newItem, ...events], setEvents);
  };

  const updateEvent = (id: string, partial: Partial<Event>) => {
    const updated = events.map(item => {
      if (item.id === id) {
        const next = { ...item, ...partial, updatedAt: new Date().toISOString() };
        if (partial.title) next.slug = createSlug(partial.title);
        return next;
      }
      return item;
    });
    syncAndSave('school_events', updated, setEvents);
  };

  const deleteEvent = (id: string) => {
    const updated = events.filter(item => item.id !== id);
    syncAndSave('school_events', updated, setEvents);
  };

  // --- CLASSES ---
  const addClass = (item: Omit<SchoolClass, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newItem: SchoolClass = {
      ...item,
      id: 'class_' + Date.now(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    syncAndSave('school_classes', [...classes, newItem], setClasses);
  };

  const updateClass = (id: string, partial: Partial<SchoolClass>) => {
    const updated = classes.map(item =>
      item.id === id ? { ...item, ...partial, updatedAt: new Date().toISOString() } : item
    );
    syncAndSave('school_classes', updated, setClasses);
  };

  const deleteClass = (id: string) => {
    const updated = classes.filter(item => item.id !== id);
    syncAndSave('school_classes', updated, setClasses);
  };

  // --- VACANCIES ---
  const addVacancy = (item: Omit<Vacancy, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newItem: Vacancy = {
      ...item,
      id: 'vacancy_' + Date.now(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    syncAndSave('school_vacancies', [newItem, ...vacancies], setVacancies);
  };

  const updateVacancy = (id: string, partial: Partial<Vacancy>) => {
    const updated = vacancies.map(item =>
      item.id === id ? { ...item, ...partial, updatedAt: new Date().toISOString() } : item
    );
    syncAndSave('school_vacancies', updated, setVacancies);
  };

  const deleteVacancy = (id: string) => {
    const updated = vacancies.filter(item => item.id !== id);
    syncAndSave('school_vacancies', updated, setVacancies);
  };

  // --- GALLERY ---
  const addGalleryItem = (item: Omit<GalleryItem, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newItem: GalleryItem = {
      ...item,
      id: 'gallery_' + Date.now(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    syncAndSave('school_gallery', [newItem, ...gallery], setGallery);
  };

  const updateGalleryItem = (id: string, partial: Partial<GalleryItem>) => {
    const updated = gallery.map(item =>
      item.id === id ? { ...item, ...partial, updatedAt: new Date().toISOString() } : item
    );
    syncAndSave('school_gallery', updated, setGallery);
  };

  const deleteGalleryItem = (id: string) => {
    const updated = gallery.filter(item => item.id !== id);
    syncAndSave('school_gallery', updated, setGallery);
  };

  // --- FAQ ---
  const addFAQItem = (item: Omit<FAQItem, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newItem: FAQItem = {
      ...item,
      id: 'faq_' + Date.now(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    syncAndSave('school_faq', [...faq, newItem], setFaq);
  };

  const updateFAQItem = (id: string, partial: Partial<FAQItem>) => {
    const updated = faq.map(item =>
      item.id === id ? { ...item, ...partial, updatedAt: new Date().toISOString() } : item
    );
    syncAndSave('school_faq', updated, setFaq);
  };

  const deleteFAQItem = (id: string) => {
    const updated = faq.filter(item => item.id !== id);
    syncAndSave('school_faq', updated, setFaq);
  };

  // --- SETTINGS ---
  const updateSiteSettings = (partial: Partial<SiteSettings>) => {
    const next = { ...siteSettings, ...partial, updatedAt: new Date().toISOString() };
    setSiteSettings(next);
    localStorage.setItem('school_settings', JSON.stringify(next));
  };

  // --- ADMISSION APPLICATIONS ---
  const addAdmissionApplication = (item: Omit<AdmissionApplication, 'id' | 'applicationNumber' | 'status' | 'createdAt' | 'updatedAt'>) => {
    const currentYear = new Date().getFullYear();
    const count = admissionApplications.length + 1;
    const formattedCount = String(count).padStart(4, '0');
    const applicationNumber = `ADM-${currentYear}-${formattedCount}`;
    const id = 'adm_' + Date.now();

    const newItem: AdmissionApplication = {
      ...item,
      id,
      applicationNumber,
      status: 'new',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    syncAndSave('school_admissions', [newItem, ...admissionApplications], setAdmissionApplications);
    return applicationNumber;
  };

  const updateAdmissionStatus = (id: string, status: AdmissionApplication['status'], note?: string) => {
    const updated = admissionApplications.map(item =>
      item.id === id
        ? {
            ...item,
            status,
            adminNote: note !== undefined ? note : item.adminNote,
            updatedAt: new Date().toISOString()
          }
        : item
    );
    syncAndSave('school_admissions', updated, setAdmissionApplications);
  };

  const deleteAdmissionApplication = (id: string) => {
    const updated = admissionApplications.filter(item => item.id !== id);
    syncAndSave('school_admissions', updated, setAdmissionApplications);
  };

  // --- JOB APPLICATIONS ---
  const addJobApplication = (item: Omit<JobApplication, 'id' | 'status' | 'createdAt' | 'updatedAt'>) => {
    const newItem: JobApplication = {
      ...item,
      id: 'job_' + Date.now(),
      status: 'new',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    syncAndSave('school_jobs', [newItem, ...jobApplications], setJobApplications);
  };

  const updateJobApplicationStatus = (id: string, status: JobApplication['status'], note?: string) => {
    const updated = jobApplications.map(item =>
      item.id === id
        ? {
            ...item,
            status,
            adminNote: note !== undefined ? note : item.adminNote,
            updatedAt: new Date().toISOString()
          }
        : item
    );
    syncAndSave('school_jobs', updated, setJobApplications);
  };

  const deleteJobApplication = (id: string) => {
    const updated = jobApplications.filter(item => item.id !== id);
    syncAndSave('school_jobs', updated, setJobApplications);
  };

  // --- CONTACT MESSAGES ---
  const addContactMessage = (item: Omit<ContactMessage, 'id' | 'status' | 'createdAt' | 'updatedAt'>) => {
    const newItem: ContactMessage = {
      ...item,
      id: 'msg_' + Date.now(),
      status: 'new',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    syncAndSave('school_messages', [newItem, ...contactMessages], setContactMessages);
  };

  const updateContactMessageStatus = (id: string, status: ContactMessage['status'], note?: string) => {
    const updated = contactMessages.map(item =>
      item.id === id
        ? {
            ...item,
            status,
            adminNote: note !== undefined ? note : item.adminNote,
            updatedAt: new Date().toISOString()
          }
        : item
    );
    syncAndSave('school_messages', updated, setContactMessages);
  };

  const deleteContactMessage = (id: string) => {
    const updated = contactMessages.filter(item => item.id !== id);
    syncAndSave('school_messages', updated, setContactMessages);
  };

  // --- ADMIN AUTH ---
  const loginAdmin = (email: string, pass: string): boolean => {
    // Default system credentials
    if (
      (email === 'admin@chiroqchi-im.uz' || email === 'admin') &&
      (pass === 'admin123' || pass === 'admin')
    ) {
      setIsAdminLoggedIn(true);
      localStorage.setItem('school_admin_auth', 'true');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem('school_admin_auth');
  };

  return (
    <AppContext.Provider
      value={{
        teachers,
        achievements,
        newsList,
        events,
        classes,
        vacancies,
        gallery,
        faq,
        siteSettings,
        admissionApplications,
        jobApplications,
        contactMessages,
        isAdminLoggedIn,

        addTeacher,
        updateTeacher,
        deleteTeacher,

        addAchievement,
        updateAchievement,
        deleteAchievement,

        addNews,
        updateNews,
        deleteNews,
        incrementNewsViews,

        addEvent,
        updateEvent,
        deleteEvent,

        addClass,
        updateClass,
        deleteClass,

        addVacancy,
        updateVacancy,
        deleteVacancy,

        addGalleryItem,
        updateGalleryItem,
        deleteGalleryItem,

        addFAQItem,
        updateFAQItem,
        deleteFAQItem,

        updateSiteSettings,

        addAdmissionApplication,
        updateAdmissionStatus,
        deleteAdmissionApplication,

        addJobApplication,
        updateJobApplicationStatus,
        deleteJobApplication,

        addContactMessage,
        updateContactMessageStatus,
        deleteContactMessage,

        loginAdmin,
        logoutAdmin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
