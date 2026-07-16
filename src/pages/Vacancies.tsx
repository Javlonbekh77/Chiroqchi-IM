/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, Award, CheckCircle2, ChevronRight, X, Sparkles, AlertCircle, FileText } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Vacancies: React.FC = () => {
  const { addContactMessage } = useApp();
  const [selectedVacancy, setSelectedVacancy] = useState<any | null>(null);
  const [showApplyModal, setShowApplyModal] = useState(false);
  
  // Application form states
  const [candidateName, setCandidateName] = useState('');
  const [candidatePhone, setCandidatePhone] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [candidateExperience, setCandidateExperience] = useState('');
  const [candidateBio, setCandidateBio] = useState('');
  const [applySuccess, setApplySuccess] = useState(false);

  // realistic vacancies
  const vacanciesList = [
    {
      id: 'v1',
      title: 'Matematika fani o\'qituvchisi',
      department: 'Akademik bo\'lim',
      type: 'To\'liq stavka (Full-time)',
      experience: 'Kamida 3 yil',
      salary: 'Kelishuv asosida (yuqori oylik)',
      requirements: [
        'Oliy pedagogik ma\'lumot (Matematika yo\'nalishi bo\'yicha)',
        'Kamida 3 yillik sinfda dars berish tajribasi',
        'C1 yoki milliy sertifikatga ega bo\'lish (ustunlik beradi)',
        'STEAM metodikalarini tushunish va qo\'llay olish'
      ],
      responsibilities: [
        'Chuqurlashtirilgan guruhlarda matematika fanidan yuqori darajada dars o\'tish',
        'O\'quvchilarni fan olimpiadalariga tayyorlash',
        'Ota-onalar bilan muntazam hamkorlik qilish va hisobotlar yuborish'
      ]
    },
    {
      id: 'v2',
      title: 'Ingliz tili (IELTS) o\'qituvchisi',
      department: 'Tillar markazi',
      type: 'To\'liq yoki yarim stavka',
      experience: 'Kamida 2 yil',
      salary: 'Kelishuv asosida',
      requirements: [
        'Oliy filologik ma\'lumot (Ingliz tili filologiyasi)',
        'IELTS sertifikati kamida 7.5 yoki 8.0 ball',
        'IELTS imtihoniga tayyorlash bo\'yicha muvaffaqiyatli keyslar',
        'Muloqotchanlik va interaktiv dars uslubi'
      ],
      responsibilities: [
        '9-11 sinf o\'quvchilariga IELTS formatida darslar o\'tish',
        'Mock testlar o\'tkazish va o\'quvchilar kamchiliklarini bartaraf etish'
      ]
    },
    {
      id: 'v3',
      title: 'Informatika va IT o\'qituvchisi (Python/Frontend)',
      department: 'Texnologiya bo\'limi',
      type: 'Yarim stavka (Part-time)',
      experience: 'Kamida 1-2 yil',
      requirements: [
        'Informatika yoki Axborot texnologiyalari bo\'yicha ma\'lumot',
        'Python dasturlash tili yoki HTML/CSS/JS texnologiyalarini bilish',
        'Bolalar bilan ishlash malakasi'
      ],
      responsibilities: [
        'O\'quvchilarga dasturlash va kompyuter savodxonligi fanidan dars berish',
        'Robototexnika va Web-dasturlash to\'garaklarini yuritish'
      ]
    }
  ];

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidateName || !candidatePhone || !candidateExperience) return;

    // Add candidate application to contact messages
    addContactMessage({
      fullName: candidateName,
      phone: candidatePhone,
      email: candidateEmail,
      type: 'other',
      message: `[ISHGA ARIZA] Lavozim: ${selectedVacancy?.title}\nPedagogik staj: ${candidateExperience} yil\nNomzod haqida: ${candidateBio}`
    });

    setApplySuccess(true);
    setTimeout(() => {
      setApplySuccess(false);
      setShowApplyModal(false);
      setSelectedVacancy(null);
      setCandidateName('');
      setCandidatePhone('');
      setCandidateEmail('');
      setCandidateExperience('');
      setCandidateBio('');
    }, 2500);
  };

  return (
    <div id="vacancies-page" className="animate-fade-in space-y-12 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#102A56] to-brand-primary text-white py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Bo'sh Ish O'rinlari</h1>
          <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto">
            Chiroqchi Tuman Ixtisoslashtirilgan Maktabining professional jamoasiga qo'shiling. O'z sohangizning ustasi bo'lsangiz, arizangizni topshiring.
          </p>
        </div>
      </section>

      {/* Vacancies Main Grid */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark tracking-tight border-b border-gray-100 pb-3">
            Mavjud Bo'sh Lavozimlar
          </h2>
          <p className="text-xs text-gray-500 font-semibold">
            Maktabimiz doimiy ravishda o'z ustida ishlaydigan, ilmga chanqoq va iqtidorli o'qituvchilarni qo'llab-quvvatlashga va ularga munosib shart-sharoitlar yaratib berishga tayyor.
          </p>
        </div>

        {/* Vacancies List items */}
        <div className="space-y-4 pt-2">
          {vacanciesList.map((vac) => (
            <div 
              key={vac.id}
              className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="space-y-2">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-brand-light text-brand-primary text-[10px] font-bold uppercase tracking-wider">
                  {vac.department}
                </span>
                <h3 className="font-extrabold text-base sm:text-lg text-brand-dark leading-snug">
                  {vac.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-400">
                  <span className="flex items-center gap-1"><Clock size={14} /> {vac.type}</span>
                  <span className="flex items-center gap-1"><Award size={14} /> Tajriba: {vac.experience}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full md:w-auto">
                <button
                  onClick={() => {
                    setSelectedVacancy(vac);
                    setShowApplyModal(true);
                  }}
                  className="px-4 py-2 bg-brand-primary text-white hover:bg-brand-dark text-xs font-bold rounded-xl transition-all shadow flex-1 md:flex-initial text-center"
                >
                  Ariza topshirish
                </button>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Quick FAQ / Info block on benefits */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h4 className="font-extrabold text-brand-dark text-base">Biz taklif etamiz:</h4>
            <ul className="space-y-2">
              <li className="flex gap-2 items-start text-xs font-semibold text-gray-600">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>Raqobatbardosh va barqaror oylik maosh tizimi</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-semibold text-gray-600">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>Zamonaviy texnologiyalar bilan jihozlangan shinam sinfxonalar</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-semibold text-gray-600">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>Malakali o'qituvchilar va xorijiy mutaxassislar bilan tajriba almashish</span>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-extrabold text-brand-dark text-base">Bizga kimlar kerak?</h4>
            <p className="text-xs text-gray-500 leading-relaxed font-semibold">
              O'z fani va kasbiga cheksiz mehr qo'ygan, o'quvchilarda ilmga qiziqish uyg'ota oladigan, darslarni interaktiv, qiziqarli uslubda tashkil etadigan pedagoglar jamoamizning eng sevimli a'zolariga aylanishadi.
            </p>
          </div>
        </div>
      </section>

      {/* Candidate Apply Form Modal overlay */}
      {showApplyModal && selectedVacancy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowApplyModal(false)} />
          
          <div className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl p-6 sm:p-8 space-y-5 z-50 animate-fade-in max-h-[90vh] overflow-y-auto">
            <button onClick={() => setShowApplyModal(false)} className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-500 hover:bg-gray-100">
              <X size={20} />
            </button>

            <div className="text-center space-y-1">
              <div className="w-10 h-10 rounded-full bg-brand-light text-brand-primary flex items-center justify-center mx-auto">
                <Briefcase size={18} />
              </div>
              <h3 className="font-extrabold text-base sm:text-lg text-brand-dark">Vakansiyaga Ariza Yuborish</h3>
              <p className="text-xs text-gray-400 font-semibold line-clamp-1">{selectedVacancy.title}</p>
            </div>

            {applySuccess ? (
              <div className="p-6 text-center space-y-2 bg-emerald-50 rounded-2xl border border-emerald-100 text-emerald-800">
                <CheckCircle2 size={32} className="text-emerald-500 mx-auto" />
                <h4 className="font-extrabold text-sm">Arizangiz muvaffaqiyatli qabul qilindi!</h4>
                <p className="text-[11px] text-emerald-600 font-semibold">Bizning kadrlar bo'limimiz arizangizni ko'rib chiqib, 3 ish kuni ichida siz bilan bog'lanishadi.</p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Ism-familiyangiz:</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Masalan: Dilshod Rahmonov"
                    value={candidateName}
                    onChange={(e) => setCandidateName(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Telefoningiz:</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+998 90 123 45 67"
                      value={candidatePhone}
                      onChange={(e) => setCandidatePhone(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Pedagogik tajriba (yil):</label>
                    <input 
                      type="number" 
                      required
                      placeholder="Masalan: 5"
                      value={candidateExperience}
                      onChange={(e) => setCandidateExperience(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email (ixtiyoriy):</label>
                  <input 
                    type="email" 
                    placeholder="example@mail.ru"
                    value={candidateEmail}
                    onChange={(e) => setCandidateEmail(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Oliy ma'lumotingiz, mutaxassislik va sertifikatlaringiz:</label>
                  <textarea 
                    rows={3}
                    placeholder="Masalan: Qarshi DU tamomlaganman. Matematika fani o'qituvchisiman, IELTS 7.0 va milliy sertifikatim bor."
                    value={candidateBio}
                    onChange={(e) => setCandidateBio(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-brand-primary text-white font-bold text-xs hover:bg-brand-dark transition-colors duration-150 shadow-md"
                >
                  Arizani yuborish
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
