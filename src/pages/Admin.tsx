/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, FileText, Settings, LogOut, CheckCircle2, 
  XCircle, Clock, Trash2, Edit3, Plus, ShieldAlert, KeyRound, 
  Eye, RefreshCw, Mail, MessageSquare, AlertCircle, Save 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Teacher, News, AdmissionApplication } from '../types';

export const Admin: React.FC = () => {
  const { 
    teachers, addTeacher, updateTeacher, deleteTeacher,
    newsList, addNews, updateNews, deleteNews,
    admissionApplications, updateAdmissionStatus, deleteAdmissionApplication,
    contactMessages, deleteContactMessage,
    siteSettings, updateSiteSettings
  } = useApp();

  // Authentication states
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('school_admin_token') === 'true';
  });
  const [loginError, setLoginError] = useState('');

  // Admin UI Navigation
  const [activeSubTab, setActiveSubTab] = useState<'dashboard' | 'admissions' | 'messages' | 'teachers' | 'news' | 'settings'>('dashboard');

  // Modal / Editing states
  const [teacherModalOpen, setTeacherModalOpen] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState<Partial<Teacher> | null>(null);

  const [newsModalOpen, setNewsModalOpen] = useState(false);
  const [editingNews, setEditingNews] = useState<Partial<News> | null>(null);

  // Stats Counters
  const countPendingAdmissions = admissionApplications.filter(a => a.status === 'new').length;
  const countTotalAdmissions = admissionApplications.length;
  const countUnreadMessages = contactMessages.length; // all are unread in this session

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('school_admin_token', 'true');
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Login yoki parol noto\'g\'ri!');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('school_admin_token');
    setIsLoggedIn(false);
  };

  // 1. Admission actions
  const changeAdmissionStatus = (id: string, status: AdmissionApplication['status']) => {
    updateAdmissionStatus(id, status);
  };

  const removeAdmission = (id: string) => {
    if (confirm('Ushbu qabul arizasini o\'chirishni xohlaysizmi?')) {
      deleteAdmissionApplication(id);
    }
  };

  // 2. Message actions
  const removeMessage = (id: string) => {
    if (confirm('Ushbu xabarni tizimdan butunlay o\'chirasizmi?')) {
      deleteContactMessage(id);
    }
  };

  // 3. Teacher CRUD actions
  const handleTeacherSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingTeacher?.fullName || !editingTeacher?.subject) return;

    if (editingTeacher.id) {
      // Edit
      updateTeacher(editingTeacher.id, editingTeacher);
    } else {
      // Add new
      const newTeacher: Omit<Teacher, 'id' | 'createdAt' | 'updatedAt' | 'slug'> = {
        fullName: editingTeacher.fullName,
        subject: editingTeacher.subject,
        position: editingTeacher.position || 'O\'qituvchi',
        experienceYears: Number(editingTeacher.experienceYears) || 2,
        category: editingTeacher.category || 'Ikkinchi toifali o\'qituvchi',
        degree: editingTeacher.degree || 'Bakalavr',
        photo: editingTeacher.photo || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
        biography: editingTeacher.biography || '',
        education: editingTeacher.education || '',
        certificates: editingTeacher.certificates || [],
        achievements: editingTeacher.achievements || [],
        studentResults: editingTeacher.studentResults || '',
        languages: editingTeacher.languages || ['O\'zbekcha'],
        featured: editingTeacher.featured || false,
        order: Number(editingTeacher.order) || 0,
        status: 'active'
      };
      addTeacher(newTeacher);
    }

    setTeacherModalOpen(false);
    setEditingTeacher(null);
  };

  const removeTeacher = (id: string) => {
    if (confirm('Ushbu o\'qituvchini faolsizlantirishni (tizimdan o\'chirish) xohlaysizmi?')) {
      deleteTeacher(id);
    }
  };

  // 4. News CRUD actions
  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingNews?.title || !editingNews?.content) return;

    if (editingNews.id) {
      // Edit
      updateNews(editingNews.id, editingNews);
    } else {
      // Add new
      const newArticle: Omit<News, 'id' | 'createdAt' | 'updatedAt' | 'slug' | 'views'> = {
        title: editingNews.title,
        excerpt: editingNews.excerpt || '',
        content: editingNews.content,
        coverImage: editingNews.coverImage || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
        category: (editingNews.category as any) || 'school',
        author: editingNews.author || 'Maktab Ma\'muriyati',
        publishDate: new Date().toISOString().split('T')[0],
        tags: editingNews.tags || ['Maktab'],
        featured: editingNews.featured || false,
        status: editingNews.status || 'published'
      };
      addNews(newArticle);
    }

    setNewsModalOpen(false);
    setEditingNews(null);
  };

  const removeNews = (id: string) => {
    if (confirm('Ushbu yangilikni o\'chirishni xohlaysizmi?')) {
      deleteNews(id);
    }
  };

  /* --- Render Login flow --- */
  if (!isLoggedIn) {
    return (
      <div id="admin-login-page" className="min-h-[80vh] flex items-center justify-center px-4 animate-fade-in bg-slate-50">
        <div className="w-full max-w-md bg-white rounded-3xl border border-gray-100 shadow-xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-brand-light text-brand-primary flex items-center justify-center mx-auto border border-brand-primary/10">
              <KeyRound size={22} />
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-brand-dark tracking-tight">Ma'murlar Tizimi</h2>
            <p className="text-xs text-gray-400 font-semibold">Tizimga kirish uchun maxfiy login parolingizni kiriting</p>
          </div>

          {loginError && (
            <div className="p-3 rounded-xl bg-rose-50 text-rose-800 text-xs font-bold flex items-center gap-2 border border-rose-100">
              <ShieldAlert size={16} className="shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Foydalanuvchi nomi:</label>
              <input 
                type="text" 
                required
                placeholder="masalan: admin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Maxfiy Parol:</label>
              <input 
                type="password" 
                required
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-brand-primary text-white font-bold text-xs hover:bg-brand-dark transition-colors duration-150 shadow-md"
            >
              Tizimga Kirish
            </button>
          </form>

          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100/50 text-[10px] sm:text-xs text-amber-800 font-medium leading-relaxed">
            <strong>Eslatma:</strong> Mahalliy sinov rejimi uchun standart ma'lumotlar: <strong>Login:</strong> admin | <strong>Parol:</strong> admin123
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="admin-dashboard-page" className="animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-16">
      
      {/* Top Admin Header info */}
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 bg-white border border-gray-100 rounded-3xl shadow-sm">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h1 className="text-xl sm:text-2xl font-black text-brand-dark tracking-tight">Xush kelibsiz, Ma'mur!</h1>
          </div>
          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Boshqaruv Tizimi: Chiroqchi Tuman IM</p>
        </div>
        
        <button
          onClick={handleLogout}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 text-gray-500 hover:text-rose-600 hover:bg-rose-50 border border-gray-100 font-bold text-xs transition-colors"
        >
          <LogOut size={14} /> Chiqish (Log out)
        </button>
      </header>

      {/* Admin Sidebar & Main board grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Navigation Sidebar col */}
        <aside className="lg:col-span-3 bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden p-4 space-y-1.5">
          <button
            onClick={() => setActiveSubTab('dashboard')}
            className={`w-full p-3 rounded-2xl text-left text-xs sm:text-sm font-bold flex items-center gap-3 transition-colors ${
              activeSubTab === 'dashboard' ? 'bg-brand-primary text-white' : 'text-gray-600 hover:bg-slate-50'
            }`}
          >
            <LayoutDashboard size={18} /> Statistika & Xulosa
          </button>

          <button
            onClick={() => setActiveSubTab('admissions')}
            className={`w-full p-3 rounded-2xl text-left text-xs sm:text-sm font-bold flex items-center justify-between transition-colors ${
              activeSubTab === 'admissions' ? 'bg-brand-primary text-white' : 'text-gray-600 hover:bg-slate-50'
            }`}
          >
            <span className="flex items-center gap-3"><FileText size={18} /> Qabul Arizalari</span>
            {countPendingAdmissions > 0 && (
              <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-black ${
                activeSubTab === 'admissions' ? 'bg-white text-brand-primary' : 'bg-brand-primary text-white'
              }`}>
                {countPendingAdmissions}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveSubTab('messages')}
            className={`w-full p-3 rounded-2xl text-left text-xs sm:text-sm font-bold flex items-center justify-between transition-colors ${
              activeSubTab === 'messages' ? 'bg-brand-primary text-white' : 'text-gray-600 hover:bg-slate-50'
            }`}
          >
            <span className="flex items-center gap-3"><Mail size={18} /> Murojaatlar</span>
            {countUnreadMessages > 0 && (
              <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-black ${
                activeSubTab === 'messages' ? 'bg-white text-brand-primary' : 'bg-brand-primary text-white'
              }`}>
                {countUnreadMessages}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveSubTab('teachers')}
            className={`w-full p-3 rounded-2xl text-left text-xs sm:text-sm font-bold flex items-center gap-3 transition-colors ${
              activeSubTab === 'teachers' ? 'bg-brand-primary text-white' : 'text-gray-600 hover:bg-slate-50'
            }`}
          >
            <Users size={18} /> Ustozlar Ro'yxati
          </button>

          <button
            onClick={() => setActiveSubTab('news')}
            className={`w-full p-3 rounded-2xl text-left text-xs sm:text-sm font-bold flex items-center gap-3 transition-colors ${
              activeSubTab === 'news' ? 'bg-brand-primary text-white' : 'text-gray-600 hover:bg-slate-50'
            }`}
          >
            <MessageSquare size={18} /> Yangiliklar & E'lonlar
          </button>

          <button
            onClick={() => setActiveSubTab('settings')}
            className={`w-full p-3 rounded-2xl text-left text-xs sm:text-sm font-bold flex items-center gap-3 transition-colors ${
              activeSubTab === 'settings' ? 'bg-brand-primary text-white' : 'text-gray-600 hover:bg-slate-50'
            }`}
          >
            <Settings size={18} /> Maktab Sozlamalari
          </button>
        </aside>

        {/* Dashboard Panels Main body col */}
        <main className="lg:col-span-9 bg-white border border-gray-100 rounded-3xl shadow-sm p-6 min-h-[50vh]">
          
          {/* 1. Dashboard Subpanel */}
          {activeSubTab === 'dashboard' && (
            <div className="space-y-6">
              <h2 className="text-lg font-extrabold text-brand-dark border-b border-gray-100 pb-2">Umumiy Statistika</h2>
              
              {/* Stats bento layout */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 space-y-1">
                  <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider">Jami arizalar</p>
                  <p className="text-2xl font-extrabold text-brand-dark">{countTotalAdmissions} ta</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 space-y-1">
                  <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider">Kutilmoqda (Ariza)</p>
                  <p className="text-2xl font-extrabold text-brand-primary">{countPendingAdmissions} ta</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 space-y-1">
                  <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider">Murojaat xabarlari</p>
                  <p className="text-2xl font-extrabold text-brand-dark">{countUnreadMessages} ta</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 space-y-1">
                  <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider">Dars beruvchi ustozlar</p>
                  <p className="text-2xl font-extrabold text-brand-dark">{teachers.length} nafar</p>
                </div>
              </div>

              {/* Informational checklist block */}
              <div className="p-5 rounded-2xl bg-brand-light border border-brand-primary/10 space-y-2">
                <h4 className="font-extrabold text-sm text-brand-dark flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-brand-primary" /> Adminlar qo'llanmasi:
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                  Tizim orqali siz onlayn kelib tushadigan o'quvchilar arizasini ko'rishingiz, o'chirishingiz yoki holatini o'zgartirishingiz mumkin. Shuningdek, yangi dars o'tuvchi o'qituvchilarni kiritish, yangilik e'lon qilish va umumiy to'lov sozlamalarini boshqarish imkoningiz bor.
                </p>
              </div>
            </div>
          )}

          {/* 2. Admissions Management Subpanel */}
          {activeSubTab === 'admissions' && (
            <div className="space-y-6">
              <h2 className="text-lg font-extrabold text-brand-dark border-b border-gray-100 pb-2">Kelib tushgan onlayn arizalar</h2>
              
              {admissionApplications.length === 0 ? (
                <div className="p-10 text-center text-gray-400 text-xs">Hech qanday ariza kelib tushmagan.</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                        <th className="p-3">Ariza ID</th>
                        <th className="p-3">O'quvchi ismi / Sinfi</th>
                        <th className="p-3">Ota-ona / Telefon</th>
                        <th className="p-3">Holati</th>
                        <th className="p-3 text-right">Amal</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 text-xs font-semibold text-gray-700">
                      {admissionApplications.map((adm) => (
                        <tr key={adm.id} className="hover:bg-slate-50/50">
                          <td className="p-3 font-bold text-brand-primary">{adm.applicationNumber}</td>
                          <td className="p-3">
                            <p className="font-extrabold text-brand-dark">{adm.studentFullName}</p>
                            <p className="text-[10px] text-gray-400 font-bold">{adm.requestedGrade}-sinf | {adm.educationLanguage.toUpperCase()}</p>
                          </td>
                          <td className="p-3 font-medium text-gray-500">
                            <p>{adm.parentFullName}</p>
                            <p className="text-[10px] text-brand-dark font-bold">{adm.phone}</p>
                          </td>
                          <td className="p-3">
                            {adm.status === 'new' && <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px]">Yangi</span>}
                            {adm.status === 'accepted' && <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px]">Qabul qilindi</span>}
                            {adm.status === 'rejected' && <span className="px-2 py-0.5 rounded bg-rose-50 text-rose-700 text-[10px]">Rad etilgan</span>}
                            {adm.status !== 'new' && adm.status !== 'accepted' && adm.status !== 'rejected' && <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 text-[10px]">Ko'rilmoqda</span>}
                          </td>
                          <td className="p-3 text-right space-x-1.5 whitespace-nowrap">
                            <button
                              onClick={() => changeAdmissionStatus(adm.id, 'accepted')}
                              className="px-2 py-1 rounded bg-emerald-100 text-emerald-800 text-[10px] hover:bg-emerald-200 transition-colors"
                            >
                              Tasdiqlash
                            </button>
                            <button
                              onClick={() => changeAdmissionStatus(adm.id, 'rejected')}
                              className="px-2 py-1 rounded bg-rose-100 text-rose-800 text-[10px] hover:bg-rose-200 transition-colors"
                            >
                              Rad etish
                            </button>
                            <button
                              onClick={() => removeAdmission(adm.id)}
                              className="p-1 text-gray-400 hover:text-rose-600 transition-colors"
                            >
                              <Trash2 size={14} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* 3. Messages Subpanel */}
          {activeSubTab === 'messages' && (
            <div className="space-y-6">
              <h2 className="text-lg font-extrabold text-brand-dark border-b border-gray-100 pb-2">Kelgan xabarlar va ro'yxatdan o'tganlar</h2>
              
              {contactMessages.length === 0 ? (
                <div className="p-10 text-center text-gray-400 text-xs">Murojaat xabarlari mavjud emas.</div>
              ) : (
                <div className="space-y-4">
                  {contactMessages.map((msg) => (
                    <div key={msg.id} className="p-4 rounded-2xl bg-slate-50 border border-gray-100/50 space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="font-extrabold text-sm text-brand-dark">{msg.fullName}</h4>
                          <p className="text-[10px] text-gray-400 font-bold">Aloqa: {msg.phone} {msg.email && `| ${msg.email}`}</p>
                        </div>
                        <button
                          onClick={() => removeMessage(msg.id!)}
                          className="text-gray-400 hover:text-rose-600 p-1"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed bg-white p-3 rounded-xl border border-gray-50 font-semibold">
                        {msg.message}
                      </p>
                      <div className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider text-right">
                        Sana: {msg.createdAt}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 4. Teachers CRUD Panel */}
          {activeSubTab === 'teachers' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <h2 className="text-lg font-extrabold text-brand-dark">Maktab o'qituvchilari boshqaruvi</h2>
                <button
                  onClick={() => {
                    setEditingTeacher({});
                    setTeacherModalOpen(true);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-brand-primary text-white hover:bg-brand-dark font-bold text-xs inline-flex items-center gap-1 shadow"
                >
                  <Plus size={14} /> Yangi qo'shish
                </button>
              </div>

              {/* Active list table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                      <th className="p-3">O'qituvchi</th>
                      <th className="p-3">Mutaxassislik (Fan)</th>
                      <th className="p-3">Sertifikatlari</th>
                      <th className="p-3">Tajribasi</th>
                      <th className="p-3 text-right">Harakatlar</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50 text-xs font-semibold text-gray-700">
                    {teachers.filter(t => t.status === 'active').map((t) => (
                      <tr key={t.id} className="hover:bg-slate-50/50">
                        <td className="p-3 flex items-center gap-3">
                          <img src={t.photo} alt={t.fullName} className="w-8 h-8 rounded-full object-cover shrink-0" />
                          <div>
                            <p className="font-extrabold text-brand-dark">{t.fullName}</p>
                            <p className="text-[10px] text-gray-400">{t.position}</p>
                          </div>
                        </td>
                        <td className="p-3 font-medium">{t.subject}</td>
                        <td className="p-3">
                          <div className="flex flex-wrap gap-1">
                            {t.certificates.slice(0, 2).map((c, idx) => (
                              <span key={idx} className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 text-[9px] font-bold">{c}</span>
                            ))}
                          </div>
                        </td>
                        <td className="p-3">{t.experienceYears} yil</td>
                        <td className="p-3 text-right space-x-1.5 whitespace-nowrap">
                          <button
                            onClick={() => {
                              setEditingTeacher(t);
                              setTeacherModalOpen(true);
                            }}
                            className="p-1 text-gray-400 hover:text-brand-primary"
                          >
                            <Edit3 size={14} />
                          </button>
                          <button
                            onClick={() => removeTeacher(t.id)}
                            className="p-1 text-gray-400 hover:text-rose-600"
                          >
                            <Trash2 size={14} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          )}

          {/* 5. News CRUD Panel */}
          {activeSubTab === 'news' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <h2 className="text-lg font-extrabold text-brand-dark">Yangiliklar va e'lonlar boshqaruvi</h2>
                <button
                  onClick={() => {
                    setEditingNews({});
                    setNewsModalOpen(true);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-brand-primary text-white hover:bg-brand-dark font-bold text-xs inline-flex items-center gap-1 shadow"
                >
                  <Plus size={14} /> Maqola yozish
                </button>
              </div>

              {/* Active List */}
              <div className="space-y-3">
                {newsList.map((n) => (
                  <div key={n.id} className="p-3 rounded-2xl bg-slate-50 border border-gray-100/50 flex items-center justify-between gap-4 text-xs font-semibold">
                    <div className="flex items-center gap-3">
                      <img src={n.coverImage} alt={n.title} className="w-10 h-10 rounded-xl object-cover shrink-0" />
                      <div>
                        <h4 className="font-extrabold text-brand-dark line-clamp-1">{n.title}</h4>
                        <p className="text-[10px] text-gray-400 font-bold">Kategoriya: {n.category.toUpperCase()} | Sana: {n.publishDate} | O'qildi: {n.views}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => {
                          setEditingNews(n);
                          setNewsModalOpen(true);
                        }}
                        className="p-1.5 text-gray-400 hover:text-brand-primary"
                      >
                        <Edit3 size={14} />
                      </button>
                      <button
                        onClick={() => removeNews(n.id)}
                        className="p-1.5 text-gray-400 hover:text-rose-600"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* 6. Settings Panel */}
          {activeSubTab === 'settings' && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-lg font-extrabold text-brand-dark border-b border-gray-100 pb-2">Maktab global sozlamalari</h2>
              
              <div className="space-y-4 max-w-xl">
                
                {/* Fee Toggle toggle */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-gray-100 flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-sm text-brand-dark">Oylik o'quv to'lovlarini ko'rsatish</h4>
                    <p className="text-[10px] text-gray-400 font-semibold">Yoqilganda, sinflar jadvalida oylik to'lovlar miqdori ochiq ko'rsatiladi.</p>
                  </div>
                  <input 
                    type="checkbox" 
                    id="fee-toggle-checkbox"
                    checked={siteSettings.showFees}
                    onChange={(e) => updateSiteSettings({ showFees: e.target.checked })}
                    className="w-5 h-5 rounded border-gray-300 text-brand-primary focus:ring-brand-primary"
                  />
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-gray-100 flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-sm text-brand-dark">Online arizalarni qabul qilish (Qabul 2026)</h4>
                    <p className="text-[10px] text-gray-400 font-semibold">Taqiqlanganda, onlayn ariza yuborish formalari vaqtinchalik yopiladi.</p>
                  </div>
                  <input 
                    type="checkbox" 
                    id="admission-toggle-checkbox"
                    checked={siteSettings.registrationOpen}
                    onChange={(e) => updateSiteSettings({ registrationOpen: e.target.checked })}
                    className="w-5 h-5 rounded border-gray-300 text-brand-primary focus:ring-brand-primary"
                  />
                </div>

                {/* Info credentials note */}
                <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100/50 text-xs text-amber-800 leading-relaxed font-semibold">
                  Siz ushbu sozlamalarni o'zgartirishingiz bilan ular zudlik bilan barcha ota-onalar va mehmonlar sahifalariga ta'sir ko'rsatadi hamda mahalliy bazada (localStorage) saqlanadi.
                </div>

              </div>
            </div>
          )}

        </main>

      </div>

      {/* Teacher Add/Edit Modal */}
      {teacherModalOpen && editingTeacher && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setTeacherModalOpen(false)} />
          <div className="relative bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 space-y-4 z-50 animate-fade-in">
            <button onClick={() => setTeacherModalOpen(false)} className="absolute top-4 right-4 p-1 rounded-lg hover:bg-slate-50 text-gray-400">
              <XCircle size={20} />
            </button>
            <h3 className="font-extrabold text-base text-brand-dark border-b pb-2">
              {editingTeacher.id ? 'O\'qituvchini tahrirlash' : 'Yangi o\'qituvchi qo\'shish'}
            </h3>
            <form onSubmit={handleTeacherSubmit} className="space-y-3.5 text-xs text-left font-semibold">
              <div className="space-y-1">
                <label className="text-gray-400 uppercase text-[9px] tracking-wider">To'liq ism-familiyasi:</label>
                <input 
                  type="text" 
                  required
                  placeholder="Masalan: Jamshid To'rayev"
                  value={editingTeacher.fullName || ''}
                  onChange={(e) => setEditingTeacher({...editingTeacher, fullName: e.target.value})}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 font-semibold text-gray-700"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-gray-400 uppercase text-[9px] tracking-wider">O'tadigan fani:</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Masalan: Kimyo"
                    value={editingTeacher.subject || ''}
                    onChange={(e) => setEditingTeacher({...editingTeacher, subject: e.target.value})}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 font-semibold text-gray-700"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-gray-400 uppercase text-[9px] tracking-wider">Lavozimi:</label>
                  <input 
                    type="text" 
                    placeholder="Masalan: Oliy toifali o'qituvchi"
                    value={editingTeacher.position || ''}
                    onChange={(e) => setEditingTeacher({...editingTeacher, position: e.target.value})}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 font-semibold text-gray-700"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-gray-400 uppercase text-[9px] tracking-wider">Pedagogik tajriba (yil):</label>
                  <input 
                    type="number" 
                    placeholder="5"
                    value={editingTeacher.experienceYears || ''}
                    onChange={(e) => setEditingTeacher({...editingTeacher, experienceYears: parseInt(e.target.value) || 0})}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 font-semibold text-gray-700"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-gray-400 uppercase text-[9px] tracking-wider">Toifasi:</label>
                  <select
                    value={editingTeacher.category || 'Ikkinchi toifali o\'qituvchi'}
                    onChange={(e) => setEditingTeacher({...editingTeacher, category: e.target.value})}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 font-semibold text-gray-700"
                  >
                    <option value="Oliy toifali o'qituvchi">Oliy toifa</option>
                    <option value="Birinchi toifali o'qituvchi">Birinchi toifa</option>
                    <option value="Ikkinchi toifali o'qituvchi">Ikkinchi toifa</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-gray-400 uppercase text-[9px] tracking-wider">Rasm (Havola URL):</label>
                <input 
                  type="text" 
                  placeholder="https://..."
                  value={editingTeacher.photo || ''}
                  onChange={(e) => setEditingTeacher({...editingTeacher, photo: e.target.value})}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 font-semibold text-gray-700"
                />
              </div>
              <div className="space-y-1">
                <label className="text-gray-400 uppercase text-[9px] tracking-wider">Tarjimai hol (Biografiya):</label>
                <textarea 
                  rows={2}
                  placeholder="Tarjimai holi haqida qisqacha ma'lumotlar..."
                  value={editingTeacher.biography || ''}
                  onChange={(e) => setEditingTeacher({...editingTeacher, biography: e.target.value})}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 font-semibold text-gray-700"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-brand-primary text-white font-bold rounded-xl"
              >
                Saqlash
              </button>
            </form>
          </div>
        </div>
      )}

      {/* News Add/Edit Modal */}
      {newsModalOpen && editingNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setNewsModalOpen(false)} />
          <div className="relative bg-white w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 space-y-4 z-50 animate-fade-in">
            <button onClick={() => setNewsModalOpen(false)} className="absolute top-4 right-4 p-1 rounded-lg hover:bg-slate-50 text-gray-400">
              <XCircle size={20} />
            </button>
            <h3 className="font-extrabold text-base text-brand-dark border-b pb-2">
              {editingNews.id ? 'Maqolani tahrirlash' : 'Yangi maqola yozish'}
            </h3>
            <form onSubmit={handleNewsSubmit} className="space-y-3.5 text-xs text-left font-semibold">
              <div className="space-y-1">
                <label className="text-gray-400 uppercase text-[9px] tracking-wider">Sarlavha (Title):</label>
                <input 
                  type="text" 
                  required
                  placeholder="Maktabimizda Navro'z bayrami..."
                  value={editingNews.title || ''}
                  onChange={(e) => setEditingNews({...editingNews, title: e.target.value})}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 font-semibold text-gray-700"
                />
              </div>
              <div className="space-y-1">
                <label className="text-gray-400 uppercase text-[9px] tracking-wider">Qisqa tavsif (Excerpt):</label>
                <input 
                  type="text" 
                  placeholder="Maqola haqida 1-2 gapdan iborat qisqa tushuncha..."
                  value={editingNews.excerpt || ''}
                  onChange={(e) => setEditingNews({...editingNews, excerpt: e.target.value})}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 font-semibold text-gray-700"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-gray-400 uppercase text-[9px] tracking-wider">Kategoriya:</label>
                  <select
                    value={editingNews.category || 'school'}
                    onChange={(e) => setEditingNews({...editingNews, category: e.target.value})}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 font-semibold text-gray-700"
                  >
                    <option value="school">Maktab hayoti</option>
                    <option value="admission">Qabul</option>
                    <option value="olympiads">Olimpiadalar</option>
                    <option value="sports">Sport</option>
                    <option value="announcements">E'lonlar</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-gray-400 uppercase text-[9px] tracking-wider">Muallif (Author):</label>
                  <input 
                    type="text" 
                    placeholder="Maktab Ma'muriyati"
                    value={editingNews.author || ''}
                    onChange={(e) => setEditingNews({...editingNews, author: e.target.value})}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 font-semibold text-gray-700"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-gray-400 uppercase text-[9px] tracking-wider">Rasm havolasi (Cover URL):</label>
                <input 
                  type="text" 
                  placeholder="https://..."
                  value={editingNews.coverImage || ''}
                  onChange={(e) => setEditingNews({...editingNews, coverImage: e.target.value})}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 font-semibold text-gray-700"
                />
              </div>
              <div className="space-y-1">
                <label className="text-gray-400 uppercase text-[9px] tracking-wider">To'liq matni (HTML formatda ham yozish mumkin):</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="Yangilikning to'liq matnini kiriting..."
                  value={editingNews.content || ''}
                  onChange={(e) => setEditingNews({...editingNews, content: e.target.value})}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 font-semibold text-gray-700 font-mono text-xs"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-brand-primary text-white font-bold rounded-xl"
              >
                Maqolani saqlash
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
