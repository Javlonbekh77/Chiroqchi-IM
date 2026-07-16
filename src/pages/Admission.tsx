/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, FileText, Phone, User, Calendar, GraduationCap, ChevronRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Admission: React.FC = () => {
  const { addAdmissionApplication, classes } = useApp();
  
  // Form states
  const [parentName, setParentName] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentBirthDate, setStudentBirthDate] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('uz');
  const [extraNote, setExtraNote] = useState('');

  // UI Flow states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  // Filter available classes for options
  const uniqueGrades = Array.from(new Set(classes.map(c => Number(c.grade)))).sort((a: number, b: number) => a - b);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !parentPhone || !studentName || !selectedGrade) return;

    setIsSubmitting(true);

    // Simulate database write lag
    setTimeout(() => {
      const appNumber = addAdmissionApplication({
        studentFullName: studentName,
        birthDate: studentBirthDate,
        gender: 'male',
        currentGrade: `${selectedGrade}-sinf`,
        requestedGrade: parseInt(selectedGrade),
        educationLanguage: selectedLanguage as 'uz' | 'ru' | 'en',
        parentFullName: parentName,
        phone: parentPhone,
        email: parentEmail,
        address: 'Chiroqchi',
        message: extraNote
      });

      setSubmittedId(appNumber);
      setIsSubmitting(false);

      // Reset form fields
      setParentName('');
      setParentPhone('');
      setParentEmail('');
      setStudentName('');
      setStudentBirthDate('');
      setSelectedGrade('');
      setSelectedLanguage('uz');
      setExtraNote('');
    }, 1500);
  };


  const steps = [
    { num: '01', title: 'Onlayn Ariza', desc: 'Ushbu sahifada ariza to\'ldiring va maxsus ADM raqamini saqlab qo\'ying.' },
    { num: '02', title: 'Hujjatlar taqdimoti', desc: 'Ota-ona pasporti, bolaning guvohnomasi va tibbiy daftarchasi topshiriladi.' },
    { num: '03', title: 'Saralash Imtihoni', desc: 'Matematika, mantiqiy fikrlash va ingliz tili bo\'yicha imtihonlar tashkil etiladi.' },
    { num: '04', title: 'Suhbat va Shartnoma', desc: 'Suhbat natijasiga ko\'ra o\'quvchi maktab safiga qabul qilinadi.' }
  ];

  const requiredDocuments = [
    'Ota-ona (yoki vasiy) pasporti nusxasi',
    'O\'quvchining tug\'ilganlik to\'g\'risidagi guvohnomasi nusxasi',
    'Yashash joyidan ma\'lumotnoma (elektron)',
    'Tibbiy ma\'lumotnoma (086-U shakli)',
    'O\'quvchining 4 dona 3x4 o\'lchamdagi rangli fotosurati',
    'Oxirgi baholar choraklik tabeli (yuqori sinflar uchun)'
  ];

  return (
    <div id="admission-page" className="animate-fade-in space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-brand-primary to-[#4A6B54] text-white py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">Onlayn Qabul 2026-2027</h1>
          <p className="text-xs sm:text-sm text-slate-100 max-w-xl mx-auto">
            Ixtisoslashtirilgan maktabimiz safiga qo'shilish uchun arizalarni qabul qilish boshlandi. Hujjatlaringizni onlayn yuboring.
          </p>
        </div>
      </section>

      {/* Grid: 1. Process steps & Documents checklist */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Col: Process steps & Docs */}
        <div className="lg:col-span-7 space-y-10">
          
          {/* Steps */}
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark tracking-tight border-b border-gray-100 pb-3">
              Qabul Bosqichlari
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {steps.map((st, i) => (
                <div key={i} className="p-5 bg-white border border-gray-100 shadow-sm rounded-2xl flex gap-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-light text-brand-primary font-extrabold text-sm shrink-0">
                    {st.num}
                  </span>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-sm text-brand-dark">{st.title}</h4>
                    <p className="text-[11px] text-gray-500 leading-normal">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Checklist doc requirements */}
          <div className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark tracking-tight border-b border-gray-100 pb-3">
              Talab qilinadigan hujjatlar ro'yxati
            </h2>
            <p className="text-xs text-gray-500 leading-relaxed font-semibold">
              Onlayn arizangiz ma'muriyat tomonidan ko'rib chiqilib ma'qullangandan so'ng, suhbat va imtihon kuni quyidagi hujjatlar qog'oz shaklida topshirilishi shart:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {requiredDocuments.map((doc, idx) => (
                <li key={idx} className="flex gap-2.5 items-start text-xs font-semibold text-gray-600">
                  <CheckCircle2 size={16} className="text-brand-primary shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Right Col: Register Form Container */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-6 sm:p-8 space-y-6 sticky top-24">
            <div className="text-center space-y-1">
              <div className="w-10 h-10 rounded-full bg-brand-light text-brand-primary flex items-center justify-center mx-auto">
                <Sparkles size={18} />
              </div>
              <h3 className="font-extrabold text-base sm:text-lg text-brand-dark">Qabul uchun Ariza</h3>
              <p className="text-xs text-gray-400 font-semibold">Onlayn ro'yxatdan o'tish varaqasi</p>
            </div>

            {submittedId ? (
              /* Success screen state */
              <div className="space-y-6 text-center animate-fade-in py-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-100">
                  <ShieldCheck size={32} />
                </div>
                <div className="space-y-2">
                  <h4 className="font-extrabold text-base text-brand-dark">Arizangiz muvaffaqiyatli topshirildi!</h4>
                  <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed font-semibold">
                    Hurmatli ota-ona, arizangiz ko'rib chiqish tizimiga yuborildi. Iltimos, quyidagi ro'yxatga olish kodini skrinshot qilib oling:
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-gray-100/50 space-y-1">
                  <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider">Sizning unikal ariza kodingiz:</p>
                  <p className="text-2xl font-black text-brand-primary tracking-widest">{submittedId}</p>
                </div>
                <button
                  onClick={() => setSubmittedId(null)}
                  className="px-4 py-2 bg-brand-primary text-white rounded-xl text-xs font-bold hover:bg-brand-dark transition-colors shadow"
                >
                  Yangi ariza topshirish
                </button>
              </div>
            ) : (
              /* Form input state */
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                
                {/* 1. Parent Data Group */}
                <div className="space-y-3.5 border-b border-gray-50 pb-4">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1">
                    <User size={12} /> Ota-ona (Vasiy) ma'lumotlari
                  </p>
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-gray-500">Ism-familiyangiz (Ota-ona):</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Masalan: G'ayrat Ergashev"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-gray-500">Telefoningiz:</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+998 90 123 45 67"
                        value={parentPhone}
                        onChange={(e) => setParentPhone(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-gray-500">Email:</label>
                      <input 
                        type="email" 
                        placeholder="masalan@mail.ru"
                        value={parentEmail}
                        onChange={(e) => setParentEmail(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Student Data Group */}
                <div className="space-y-3.5">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1">
                    <GraduationCap size={12} /> O'quvchi ma'lumotlari
                  </p>
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-gray-500">O'quvchi ism-familiyasi:</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Masalan: Sardor Ergashev"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-gray-500">Tug'ilgan sanasi:</label>
                      <input 
                        type="date" 
                        required
                        value={studentBirthDate}
                        onChange={(e) => setStudentBirthDate(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-gray-500">Yuborilayotgan sinf:</label>
                      <select
                        required
                        value={selectedGrade}
                        onChange={(e) => setSelectedGrade(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
                      >
                        <option value="">Sinfni tanlang</option>
                        {uniqueGrades.map((gr) => (
                          <option key={gr} value={gr}>{gr}-sinf</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-gray-500">Ta'lim tili:</label>
                      <select
                        value={selectedLanguage}
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
                      >
                        <option value="uz">O'zbek tili</option>
                        <option value="ru">Rus tili</option>
                        <option value="en">Ingliz tili</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-gray-500">Izoh (Qo'shimcha):</label>
                      <input 
                        type="text" 
                        placeholder="Masalan: Yutuqlari..."
                        value={extraNote}
                        onChange={(e) => setExtraNote(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 rounded-xl bg-brand-primary text-white font-bold text-xs hover:bg-brand-dark transition-all duration-150 shadow-md flex items-center justify-center gap-1"
                >
                  {isSubmitting ? (
                    <>Arizangiz jo'natilmoqda...</>
                  ) : (
                    <>Ariza topshirish <ChevronRight size={14} /></>
                  )}
                </button>

              </form>
            )}

          </div>
        </div>

      </section>

    </div>
  );
};
