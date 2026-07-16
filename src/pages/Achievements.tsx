/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Award, Trophy, Search, Filter, ShieldCheck, GraduationCap, Calendar, BookOpen, Star, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Achievements: React.FC = () => {
  const { achievements } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'olympiad' | 'international_cert' | 'national_cert' | 'university_grant' | 'sport' | 'art'>('all');
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'international' | 'national' | 'regional'>('all');

  // Filter out active achievements
  const activeAchievements = achievements.filter(a => a.status === 'active');

  // Count metrics for micro-dashboard
  const countOlympiads = activeAchievements.filter(a => a.category === 'olympiad').length;
  const countLanguageCerts = activeAchievements.filter(a => a.category === 'international_cert' || a.category === 'national_cert').length;
  const countGrants = activeAchievements.filter(a => a.category === 'university_grant').length;
  const countSportsArt = activeAchievements.filter(a => a.category === 'sport' || a.category === 'art').length;

  const filteredAchievements = activeAchievements.filter((a) => {
    const matchesSearch = a.studentName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (a.subject && a.subject.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || a.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || a.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'olympiad': return 'Fan Olimpiadasi';
      case 'international_cert': return 'Xalqaro Sertifikat';
      case 'national_cert': return 'Milliy Sertifikat';
      case 'university_grant': return 'Oliygoh Granti';
      case 'sport': return 'Sport yutug\'i';
      case 'art': return 'San\'at va Ijod';
      default: return 'Boshqa yutuq';
    }
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'olympiad': return 'bg-amber-50 text-amber-800 border-amber-100';
      case 'international_cert': return 'bg-blue-50 text-blue-800 border-blue-100';
      case 'national_cert': return 'bg-indigo-50 text-indigo-800 border-indigo-100';
      case 'university_grant': return 'bg-purple-50 text-purple-800 border-purple-100';
      case 'sport': return 'bg-emerald-50 text-emerald-800 border-emerald-100';
      default: return 'bg-slate-50 text-slate-800 border-slate-100';
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'international':
        return <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800">Xalqaro daraja</span>;
      case 'national':
        return <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">Respublika darajasi</span>;
      default:
        return <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">Viloyat / Tuman</span>;
    }
  };

  return (
    <div id="achievements-page" className="animate-fade-in space-y-12 pb-16">
      
      {/* Header banner */}
      <section className="bg-gradient-to-r from-[#102A56] to-brand-primary text-white py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">O'quvchilar Yutuqlari</h1>
          <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto">
            Maktabimiz yosh iqtidorlarining fan, tillar, sport va ijod yo'nalishlarida qo'lga kiritgan ulkan g'alabalari.
          </p>
        </div>
      </section>

      {/* Statistics Dashboard row */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 bg-white border border-gray-100 rounded-3xl shadow-sm text-center">
          
          <div className="space-y-1">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-2">
              <Trophy size={20} />
            </div>
            <p className="text-xl sm:text-2xl font-extrabold text-brand-dark">{countOlympiads} ta</p>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Olimpiada medallari</p>
          </div>

          <div className="space-y-1 border-l border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-2">
              <Star size={20} />
            </div>
            <p className="text-xl sm:text-2xl font-extrabold text-brand-dark">{countLanguageCerts} ta</p>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">IELTS / CEFR ballar</p>
          </div>

          <div className="space-y-1 border-l border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-2">
              <GraduationCap size={20} />
            </div>
            <p className="text-xl sm:text-2xl font-extrabold text-brand-dark">{countGrants} nafar</p>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Universitet grantlari</p>
          </div>

          <div className="space-y-1 border-l border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-2">
              <Award size={20} />
            </div>
            <p className="text-xl sm:text-2xl font-extrabold text-brand-dark">{countSportsArt} ta</p>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Sport & San'at g'olibi</p>
          </div>

        </div>
      </section>

      {/* Filter and Search parameters section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          
          {/* Search text */}
          <div className="md:col-span-5 relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="O'quvchi ismi, yutuq nomi yoki fani bo'yicha..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
            />
          </div>

          {/* Category Dropdown */}
          <div className="md:col-span-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as any)}
              className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
            >
              <option value="all">Barcha toifalar</option>
              <option value="olympiad">Fan Olimpiadasi</option>
              <option value="international_cert">Xalqaro Sertifikat (IELTS, SAT)</option>
              <option value="national_cert">Milliy Sertifikat (DTM)</option>
              <option value="university_grant">Oliygoh Granti</option>
              <option value="sport">Sport yutug'i</option>
              <option value="art">San'at va Ijod</option>
            </select>
          </div>

          {/* Level Dropdown */}
          <div className="md:col-span-3">
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value as any)}
              className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
            >
              <option value="all">Barcha darajalar</option>
              <option value="international">Xalqaro daraja</option>
              <option value="national">Respublika darajasi</option>
              <option value="regional">Viloyat / Tuman darajasi</option>
            </select>
          </div>

          {/* Clear Button */}
          <div className="md:col-span-1">
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedLevel('all');
              }}
              className="w-full px-3 py-2 rounded-xl text-xs font-bold text-gray-500 border border-gray-200 hover:text-brand-primary hover:bg-slate-50 transition-colors"
            >
              Tozalash
            </button>
          </div>

        </div>
      </section>

      {/* Achievement list grid layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredAchievements.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-gray-100 max-w-md mx-auto space-y-4">
            <Trophy size={40} className="text-gray-300 mx-auto" />
            <h3 className="font-bold text-base text-gray-800">Yutuqlar topilmadi</h3>
            <p className="text-xs text-gray-500">Qidiruv yoki filter mezonlariga mos yutuqlar ro'yxatda mavjud emas. Ma'lumotlarni qayta tekshiring.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAchievements.map((a) => (
              <div 
                key={a.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
              >
                {/* Content top card */}
                <div className="p-5 space-y-4">
                  {/* Student portrait & mini-meta info header */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-gray-100">
                      <img src={a.studentPhoto} alt={a.studentName} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-base text-brand-dark leading-tight">{a.studentName}</h3>
                      <p className="text-[11px] text-gray-400 font-semibold">Sinfi: {a.className} {a.subject ? `| ${a.subject}` : ''}</p>
                    </div>
                  </div>

                  {/* Badge tags and title */}
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className={`inline-block px-2 py-0.5 rounded text-[9px] font-extrabold border uppercase tracking-wider ${getCategoryColor(a.category)}`}>
                        {getCategoryLabel(a.category)}
                      </span>
                      {getLevelBadge(a.level)}
                    </div>
                    <h4 className="font-extrabold text-sm text-brand-dark pt-1">{a.title}</h4>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-500 leading-relaxed font-medium">
                    {a.description}
                  </p>
                </div>

                {/* Bottom Result and Date Bar */}
                <div className="p-4 bg-slate-50 border-t border-gray-100 flex items-center justify-between text-xs font-semibold">
                  <div className="flex items-center gap-1 text-brand-primary">
                    <Award size={14} />
                    <span>Natija: <strong className="font-extrabold">{a.result}</strong></span>
                  </div>
                  <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">{a.date}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
};
