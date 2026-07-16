/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BookOpen, Users, CheckCircle, Search, Filter, AlertTriangle, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface ClassesProps {
  setCurrentTab: (tab: string) => void;
}

export const SchoolClasses: React.FC<ClassesProps> = ({ setCurrentTab }) => {
  const { classes, teachers, siteSettings } = useApp();
  const [selectedLanguage, setSelectedLanguage] = useState<'all' | 'uz' | 'ru' | 'en'>('all');
  const [selectedGrade, setSelectedGrade] = useState<string>('all');

  const activeClasses = classes;

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getTeacherName = (teacherId?: string) => {
    if (!teacherId) return 'Tayyinlanmagan';
    const teacher = teachers.find(t => t.id === teacherId);
    return teacher ? teacher.fullName : 'Tayyinlanmagan';
  };

  const filteredClasses = activeClasses.filter((cl) => {
    const matchesLanguage = selectedLanguage === 'all' || cl.language === selectedLanguage;
    
    let matchesGrade = true;
    if (selectedGrade === 'primary') {
      matchesGrade = cl.grade >= 1 && cl.grade <= 4;
    } else if (selectedGrade === 'middle') {
      matchesGrade = cl.grade >= 5 && cl.grade <= 9;
    } else if (selectedGrade === 'high') {
      matchesGrade = cl.grade >= 10 && cl.grade <= 11;
    }

    return matchesLanguage && matchesGrade;
  });

  const getCapacityBadge = (status: 'open' | 'limited' | 'closed') => {
    switch (status) {
      case 'open':
      case 'limited':
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">● Qabul ochiq</span>;
      default:
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-100">● Qabul yopilgan</span>;
    }
  };

  return (
    <div id="classes-page" className="animate-fade-in space-y-12 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-dark text-white py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">Sinflarimiz va Yo'nalishlar</h1>
          <p className="text-xs sm:text-sm text-slate-100 max-w-xl mx-auto">
            Maktabimizda 1-sinfdan 11-sinfgacha bo'lgan guruhlar ro'yxati, tillar, smena jadvallari va dars rahbarlari.
          </p>
        </div>
      </section>

      {/* Filter and settings triggers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-8 gap-4 items-center">
          
          {/* Language filter */}
          <div className="md:col-span-4 select-wrapper">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Ta'lim tili</label>
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value as any)}
              className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
            >
              <option value="all">Barcha dars tillari</option>
              <option value="uz">O'zbekcha darslar</option>
              <option value="ru">Ruscha darslar</option>
              <option value="en">Inglizcha darslar</option>
            </select>
          </div>

          {/* Grade Level filter */}
          <div className="md:col-span-4 select-wrapper">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Sinf darajasi</label>
            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
            >
              <option value="all">Barcha sinf darajalari</option>
              <option value="primary">Boshlang'ich sinflar (1-4 sinf)</option>
              <option value="middle">O'rta sinflar (5-9 sinf)</option>
              <option value="high">Yuqori sinflar (10-11 sinf)</option>
            </select>
          </div>

        </div>
      </section>

      {/* Main Table Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredClasses.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-gray-100 max-w-md mx-auto space-y-4">
            <AlertTriangle size={40} className="text-gray-300 mx-auto" />
            <h3 className="font-bold text-base text-gray-800">Sinflar topilmadi</h3>
            <p className="text-xs text-gray-500">Tanlangan filterlar doirasida hech qanday sinf topilmadi. Filter sozlamalarini o'zgartiring.</p>
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                                  <tr className="bg-slate-50 border-b border-gray-100 text-xs font-bold text-brand-dark uppercase tracking-wider">
                    <th className="p-4 sm:p-5">Sinf nomi</th>
                    <th className="p-4 sm:p-5">Ta'lim tili</th>
                    <th className="p-4 sm:p-5">Smena</th>
                    <th className="p-4 sm:p-5">Maksimal sig'im</th>
                    <th className="p-4 sm:p-5">Sinf rahbari</th>
                    {siteSettings.showFees && <th className="p-4 sm:p-5">To'lov miqdori</th>}
                    <th className="p-4 sm:p-5">Qabul holati</th>
                    <th className="p-4 sm:p-5 text-right">Harakat</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-xs sm:text-sm font-semibold text-gray-700">
                  {filteredClasses.map((cl) => (
                    <tr key={cl.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4 sm:p-5 font-bold text-brand-dark">{cl.grade}-sinf {cl.className}</td>
                      <td className="p-4 sm:p-5 uppercase">{cl.language}</td>
                      <td className="p-4 sm:p-5">{cl.shift}-smena</td>
                      <td className="p-4 sm:p-5">{cl.capacity} nafar</td>
                      <td className="p-4 sm:p-5 text-gray-500 font-medium">{getTeacherName(cl.teacherId)}</td>
                      {siteSettings.showFees && (
                        <td className="p-4 sm:p-5 text-brand-primary font-bold">
                          {cl.monthlyFee > 0 ? `${cl.monthlyFee.toLocaleString()} UZS` : "Davlat ta'minotida"}
                        </td>
                      )}
                      <td className="p-4 sm:p-5">
                        {getCapacityBadge(cl.admissionStatus)}
                      </td>
                      <td className="p-4 sm:p-5 text-right">
                        <button
                          onClick={() => handleNavClick('admission')}
                          disabled={cl.admissionStatus === 'closed'}
                          className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all duration-150 ${
                            cl.admissionStatus === 'closed'
                              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                              : 'bg-brand-primary text-white hover:bg-brand-dark'
                          }`}
                        >
                          Qabulga kirish
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50 border-t border-gray-100 text-center text-xs text-gray-400 font-medium">
              Sinflardagi o'quv dasturlari va darslar ma'muriyat tomonidan tasdiqlangan davlat standartlari asosida olib boriladi.
            </div>
          </div>
        )}
      </section>

      {/* Extra Clubs call block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-brand-light border border-brand-primary/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="font-extrabold text-base sm:text-lg text-brand-dark">Qo'shimcha darslar va bepul to'garaklarimiz</h3>
            <p className="text-xs text-gray-500 leading-relaxed font-semibold">
              Maktabimizda darsdan so'ng Shaxmat, Dasturlash, Robototexnika, Dzyudo va ingliz tili debat to'garaklari mutloq bepul yoki bevosita homiylar tomonidan tashkil etiladi.
            </p>
          </div>
          <button
            onClick={() => handleNavClick('admission')}
            className="px-5 py-2.5 rounded-xl bg-brand-primary text-white hover:bg-brand-dark font-bold text-xs shrink-0 inline-flex items-center gap-1 shadow"
          >
            To'g'ridan to'g'ri ariza topshirish <ArrowRight size={14} />
          </button>
        </div>
      </section>

    </div>
  );
};
