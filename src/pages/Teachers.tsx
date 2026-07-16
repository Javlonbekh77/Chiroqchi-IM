/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, Filter, Award, BookOpen, GraduationCap, Clock, X, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Teacher } from '../types';

export const Teachers: React.FC = () => {
  const { teachers } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  // Active teachers list
  const activeTeachers = teachers.filter(t => t.status === 'active');

  // Subjects lists
  const subjects = ['all', ...Array.from(new Set(activeTeachers.map(t => t.subject)))];

  // Categories list
  const categories = ['all', 'Oliy toifali o\'qituvchi', 'Birinchi toifali o\'qituvchi', 'Ikkinchi toifali o\'qituvchi'];

  // Filter logic
  const filteredTeachers = activeTeachers.filter((t) => {
    const matchesSearch = t.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          t.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || t.subject === selectedSubject;
    const matchesCategory = selectedCategory === 'all' || t.category === selectedCategory;

    return matchesSearch && matchesSubject && matchesCategory;
  });

  return (
    <div id="teachers-page" className="animate-fade-in space-y-12 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#102A56] to-brand-primary text-white py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">O'qituvchilarimiz</h1>
          <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto">
            Maktabimizda dars beradigan, xalqaro tajribaga ega bo'lgan professional va sertifikatlangan ustozlar jamoasi.
          </p>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          
          {/* Search bar */}
          <div className="md:col-span-5 relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Ustoz ismi yoki fani bo'yicha qidiring..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
            />
          </div>

          {/* Subject Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
            >
              <option value="all">Barcha fanlar</option>
              {subjects.filter(s => s !== 'all').map((sub) => (
                <option key={sub} value={sub}>{sub}</option>
              ))}
            </select>
          </div>

          {/* Category Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
            >
              <option value="all">Barcha toifalar</option>
              {categories.filter(c => c !== 'all').map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Reset button */}
          <div className="md:col-span-1">
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedSubject('all');
                setSelectedCategory('all');
              }}
              className="w-full px-3 py-2 rounded-xl text-xs font-bold text-gray-500 border border-gray-200 hover:text-brand-primary hover:bg-slate-50 transition-colors"
            >
              Tozalash
            </button>
          </div>

        </div>
      </section>

      {/* Teachers Grid Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredTeachers.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-gray-100 max-w-md mx-auto space-y-4">
            <GraduationCap size={40} className="text-gray-300 mx-auto" />
            <h3 className="font-bold text-base text-gray-800">Ustozlar topilmadi</h3>
            <p className="text-xs text-gray-500">Qidiruv so'rovingizga mos keladigan o'qituvchilar mavjud emas. Filterlarni tozalab ko'ring.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTeachers.map((t) => (
              <div 
                key={t.id}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Photo area */}
                  <div className="aspect-[3/4] relative overflow-hidden bg-slate-100">
                    <img src={t.photo} alt={t.fullName} className="w-full h-full object-cover" />
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-brand-primary text-[10px] font-bold text-white uppercase tracking-wider">
                      {t.subject}
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-4 space-y-2">
                    <h3 className="font-extrabold text-base text-brand-dark leading-tight">{t.fullName}</h3>
                    <p className="text-xs text-gray-400 font-medium">{t.position}</p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {t.certificates.slice(0, 2).map((cert, idx) => (
                        <span key={idx} className="inline-block px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 text-[9px] font-bold">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer specs & Button */}
                <div className="p-4 pt-0 border-t border-gray-50 flex items-center justify-between text-xs font-semibold mt-3">
                  <span className="text-gray-400">Tajriba: {t.experienceYears} yil</span>
                  <button
                    onClick={() => setSelectedTeacher(t)}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-primary hover:text-brand-dark hover:translate-x-0.5 transition-all"
                  >
                    Batafsil ma'lumot <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Teacher Detail Modal Drawer */}
      {selectedTeacher && (
        <div id="teacher-detail-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay backblur */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedTeacher(null)}
          />

          {/* Modal box */}
          <div className="relative bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl z-50 animate-fade-in p-6 sm:p-8">
            {/* Close button */}
            <button
              onClick={() => setSelectedTeacher(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-500 hover:bg-gray-100"
            >
              <X size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 pt-4">
              {/* Left Column: Portrait & Stats */}
              <div className="md:col-span-4 space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow bg-slate-100">
                  <img src={selectedTeacher.photo} alt={selectedTeacher.fullName} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 bg-slate-50 rounded-xl space-y-2 text-xs">
                  <div className="flex items-center justify-between text-gray-500">
                    <span>Mutaxassisligi:</span>
                    <strong className="text-brand-dark">{selectedTeacher.subject}</strong>
                  </div>
                  <div className="flex items-center justify-between text-gray-500">
                    <span>Tajribasi:</span>
                    <strong className="text-brand-dark">{selectedTeacher.experienceYears} yil</strong>
                  </div>
                  <div className="flex items-center justify-between text-gray-500">
                    <span>Malaka toifasi:</span>
                    <strong className="text-brand-primary">{selectedTeacher.category}</strong>
                  </div>
                  <div className="flex items-center justify-between text-gray-500">
                    <span>Ilmiy darajasi:</span>
                    <strong className="text-brand-dark">{selectedTeacher.degree}</strong>
                  </div>
                </div>
              </div>

              {/* Right Column: Bio & Achievements */}
              <div className="md:col-span-8 space-y-5">
                <div>
                  <h2 className="text-2xl font-extrabold text-brand-dark">{selectedTeacher.fullName}</h2>
                  <p className="text-xs text-brand-primary font-bold uppercase tracking-wider">{selectedTeacher.position}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-xs text-brand-dark uppercase tracking-widest flex items-center gap-1.5 border-b border-gray-100 pb-1">
                    <BookOpen size={14} className="text-brand-primary" /> Tarjimai Hol (Bio)
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {selectedTeacher.biography}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-xs text-brand-dark uppercase tracking-widest flex items-center gap-1.5 border-b border-gray-100 pb-1">
                    <GraduationCap size={14} className="text-brand-primary" /> Ma'lumoti
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                    {selectedTeacher.education}
                  </p>
                </div>

                {selectedTeacher.certificates && selectedTeacher.certificates.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-bold text-xs text-brand-dark uppercase tracking-widest flex items-center gap-1.5 border-b border-gray-100 pb-1">
                      <Award size={14} className="text-brand-primary" /> Sertifikatlari
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedTeacher.certificates.map((cert, index) => (
                        <span key={index} className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 text-[10px] font-bold">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedTeacher.studentResults && (
                  <div className="space-y-2">
                    <h4 className="font-bold text-xs text-brand-dark uppercase tracking-widest flex items-center gap-1.5 border-b border-gray-100 pb-1">
                      <CheckCircle2 size={14} className="text-emerald-500" /> O'quvchilari natijalari
                    </h4>
                    <p className="text-xs text-gray-600 font-semibold bg-emerald-50/50 p-3 rounded-xl border border-emerald-100/50 leading-relaxed">
                      {selectedTeacher.studentResults}
                    </p>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
