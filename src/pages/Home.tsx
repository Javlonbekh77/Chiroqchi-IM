/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Users, Award, Calendar, BookOpen, CheckCircle, ArrowRight, ShieldCheck, 
  Sparkles, GraduationCap, ChevronLeft, ChevronRight, School, Laptop, Dumbbell, Clock
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { motion } from 'motion/react';

interface HomeProps {
  setCurrentTab: (tab: string) => void;
  setSelectedNewsSlug: (slug: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setCurrentTab, setSelectedNewsSlug }) => {
  const { siteSettings, teachers, achievements, newsList, classes, faq } = useApp();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Filter out active featured items
  const featuredTeachers = teachers.filter(t => t.featured && t.status === 'active').slice(0, 4);
  if (featuredTeachers.length === 0) {
    // Fallback if none are marked featured
    featuredTeachers.push(...teachers.slice(0, 4));
  }

  const latestNews = newsList.filter(n => n.status === 'published').slice(0, 3);

  const testimonials = [
    {
      id: 1,
      name: 'Xurshida Ergasheva',
      status: '11-A o\'quvchisi onasi',
      text: 'Maktabning dars berish uslubi menga juda ma\'qul keldi. O\'g\'lim Zafar o\'qituvchilar ko\'magi bilan IELTSdan 8.0 ball oldi. Ustozlariga katta rahmat aytaman. Chiroqchida bunday darajadagi maktab borligidan faxrlanamiz.'
    },
    {
      id: 2,
      name: 'Ilhom Boboqulov',
      status: '10-A o\'quvchisi otasi',
      text: 'Qizim Madina matematika olimpiadasida viloyat va respublika miqyosida oltin medallasini band etdi. Buning uchun Sardor Alimov kabi kuchli fidoyi o\'qituvchilarga minnatdorlik bildiraman.'
    },
    {
      id: 3,
      name: 'Nodir Toshpo\'latov',
      status: 'Bitiruvchi o\'quvchi otasi',
      text: 'O\'g\'lim Javohir ushbu maktabning chuqurlashtirilgan IT to\'garaklari hamda ingliz tili darslari tufayli Singapurning nufuzli oliygohiga to\'liq grant yutdi. Bu har bir ota-onaning orzusidir.'
    }
  ];

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNewsClick = (slug: string) => {
    setSelectedNewsSlug(slug);
    setCurrentTab('news-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Class capacity levels
  const getCapacityBadge = (status: 'open' | 'limited' | 'closed', seats: number) => {
    switch (status) {
      case 'open':
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">● {seats} ta bo'sh o'rin</span>;
      case 'limited':
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-100">● Kam qoldi ({seats} ta)</span>;
      default:
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-100">● Qabul yopilgan</span>;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'admission': return 'Qabul';
      case 'olympiads': return 'Olimpiada';
      case 'school': return 'Maktab hayoti';
      case 'education': return 'Ta\'lim';
      case 'sports': return 'Sport';
      default: return 'Yangilik';
    }
  };

  return (
    <div id="home-page" className="animate-fade-in space-y-20 pb-16">
       {/* 1. HERO SECTION */}
      <section id="hero-section" className="relative bg-brand-light/40 py-16 md:py-24 text-brand-dark overflow-hidden border-b border-[#EAE3D2]">
        {/* Background Decorative Patterns */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#1E40AF_1px,transparent_1px)] [background-size:24px_24px]" />
        
        {/* Animated Background Blobs */}
        <motion.div 
          animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-primary filter blur-[120px] opacity-10" 
        />
        <motion.div 
          animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-brand-gold filter blur-[120px] opacity-15" 
        />
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-blue-300 rounded-full filter blur-[80px] opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left: Text & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 md:space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-primary/10 text-brand-primary text-xs font-bold rounded-full uppercase tracking-widest border border-brand-primary/20 w-fit shadow-sm">
              <Sparkles size={14} className="animate-pulse text-brand-gold" />
              Chiroqchi tuman ixtisoslashtirilgan maktabi
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-[1.1] text-brand-dark">
              Kelajak <span className="italic font-light text-brand-primary">bilimdan</span> boshlanadi.
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl font-medium">
              Biz har bir o‘quvchining mantiqiy fikrlashini, ijodiy qobiliyatini va kelajakdagi zamonaviy IT hamda STEAM ko‘nikmalarini rivojlantiradigan mukammal o‘quv muhitini taqdim etamiz.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleNavClick('admission')}
                className="px-8 py-4 rounded-xl bg-brand-primary text-white font-bold transition-all duration-200 transform hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0 shadow-lg shadow-brand-primary/20 hover:bg-brand-dark"
              >
                Qabulga ariza topshirish
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="px-8 py-4 border-2 border-brand-primary text-brand-primary rounded-xl font-bold transition-all duration-200 hover:bg-brand-primary/5 transform hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0"
              >
                Maktab haqida batafsil
              </button>
            </div>
 
            {/* Micro Stats inside Hero */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#EAE3D2]">
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-brand-primary">{siteSettings.statistics.studentsCount}+</p>
                <p className="text-[10px] text-gray-500 font-extrabold uppercase tracking-wider">O'quvchilar</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-brand-gold">{siteSettings.statistics.teachersCount}+</p>
                <p className="text-[10px] text-gray-500 font-extrabold uppercase tracking-wider">O'qituvchilar</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-brand-dark">{siteSettings.statistics.achievementsCount}+</p>
                <p className="text-[10px] text-gray-500 font-extrabold uppercase tracking-wider">Yutuqlarimiz</p>
              </div>
            </div>
          </motion.div>
 
          {/* Hero Right: Creative Image showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            {/* Interactive floating image frame */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto w-full max-w-md aspect-square rounded-[40px] overflow-hidden shadow-2xl border border-blue-100 bg-blue-50"
            >
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&auto=format&fit=crop&q=80" 
                alt="Chiroqchi Tuman IM maktabi" 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
              {/* Floating badges on image */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-brand-bg/95 backdrop-blur border border-blue-100 flex items-center gap-3 shadow-xl">
                <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold shrink-0">
                  92%
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-brand-dark">Universitet grant sohiblari</h4>
                  <p className="text-[10px] text-gray-500 font-medium">Bitiruvchilarning oliygohga kirish ko'rsatkichi</p>
                </div>
              </div>
            </motion.div>

            {/* Parallax Floating Badge 1 - Top Left */}
            <motion.div
              animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-4 bg-white border border-blue-50 p-3 rounded-2xl shadow-xl flex items-center gap-2 hidden sm:flex z-20"
            >
              <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-white shrink-0"><Sparkles size={16} /></div>
              <div>
                <h4 className="font-extrabold text-[10px] uppercase tracking-wider text-brand-dark">Top Ta'lim</h4>
                <p className="text-[9px] text-gray-500 font-bold">STEAM / IT Ixtisoslik</p>
              </div>
            </motion.div>

            {/* Parallax Floating Badge 2 - Mid Right */}
            <motion.div
              animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -right-6 bg-white border border-blue-50 p-3 rounded-2xl shadow-xl flex items-center gap-2 hidden sm:flex z-20"
            >
              <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white shrink-0"><GraduationCap size={16} /></div>
              <div>
                <h4 className="font-extrabold text-[10px] uppercase tracking-wider text-brand-dark">Yutuqlar</h4>
                <p className="text-[9px] text-gray-500 font-bold">Xalqaro daraja</p>
              </div>
            </motion.div>
          </motion.div>
 
        </div>
      </section>

      {/* 2. ADVANTAGES SECTION */}
      <section id="advantages-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest bg-brand-light px-3 py-1 rounded-full">
            Nima uchun biz?
          </span>
          <h2 className="text-3xl font-serif font-bold text-brand-dark tracking-tight">
            Maktabimizni nima uchun tanlashadi?
          </h2>
          <p className="text-sm text-gray-500">
            Farzandingiz mukammal va xavfsiz akademik muhitda, tajribali ustozlar ko'magida bilim va hayotiy ko'nikmalarni o'rganadi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          
          {/* Advantage 1 */}
          <motion.div 
            whileHover={{ y: -8, scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.05)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300 space-y-4 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-200">
              <Users size={24} />
            </div>
            <h3 className="font-bold text-base text-brand-dark">Kvalifikatsiyali Ustozlar</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Xalqaro sertifikatlar (IELTS, CELTA) va fanlar bo'yicha oliy toifalarga ega tajribali pedagoglar jamoasi.
            </p>
          </motion.div>
 
          {/* Advantage 2 */}
          <motion.div 
            whileHover={{ y: -8, scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.05)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300 space-y-4 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-200">
              <Laptop size={24} />
            </div>
            <h3 className="font-bold text-base text-brand-dark">STEAM va IT Darslar</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Mantiqiy dasturlash, Python tili, robototexnika darslari hamda zamonaviy STEAM laboratoriya mashg'ulotlari.
            </p>
          </motion.div>
 
          {/* Advantage 3 */}
          <motion.div 
            whileHover={{ y: -8, scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.05)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300 space-y-4 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-200">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-bold text-base text-brand-dark">24/7 Xavfsiz Muhit</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Yuzni aniqlash (FaceID) tizimi orqali kirish-chiqish, 24/7 qo'riqlash va butun bino bo'ylab videokuzatuv.
            </p>
          </motion.div>
 
          {/* Advantage 4 */}
          <motion.div 
            whileHover={{ y: -8, scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.05)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300 space-y-4 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-200">
              <Award size={24} />
            </div>
            <h3 className="font-bold text-base text-brand-dark">Individual Yondashuv</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              O'quvchining qobiliyati, fanlarni o'zlashtirishi va maqsadlariga qarab yo'naltiriladigan kichik guruhlar.
            </p>
          </motion.div>

        </div>
      </section>

      {/* 3. ABOUT SUMMARY */}
      <section id="about-summary-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-3xl bg-brand-bg border border-[#EAE3D2] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-[4/3] relative">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80" 
              alt="Dars jarayoni Chiroqchi IM" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest bg-brand-light px-3 py-1 rounded-full">
              Maktab haqida qisqacha
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-dark tracking-tight">
              Tarix, Missiyamiz va Ta'lim Qadriyatlarimiz
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Chiroqchi Tuman Ixtisoslashtirilgan Maktabi</strong> o‘quvchilarga chuqurlashtirilgan aniq va tabiiy fanlar, chet tillari hamda axborot texnologiyalari bilimlarini birlashtirgan, milliy o'zlik va qadriyatlarimizga asoslangan holda jahon darajasidagi zamonaviy ta’lim muhitini taklif qiladi.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Biz faqat dars berish emas, balki bolalarda mustaqil tadqiqot olib borish, jamoada ishlash va mantiqiy xulosalar chiqarish qobiliyatini rivojlantiramiz. Bizning asosiy missiyamiz - vatanimiz ravnaqi uchun munosib xizmat qiladigan har tomonlama komil intellektual avlodni tarbiyalashdir.
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleNavClick('about')}
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary hover:text-brand-dark hover:translate-x-1 transition-all duration-200"
              >
                Missiyamiz va tariximiz haqida batafsil o'qish <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. ACADEMIC DIRECTIONS */}
      <section id="directions-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest bg-brand-light px-3 py-1 rounded-full">
            Yo'nalishlar
          </span>
          <h2 className="text-3xl font-serif font-bold text-brand-dark tracking-tight">
            Bizning ta'lim yo'nalishlarimiz
          </h2>
          <p className="text-sm text-gray-500">
            Maktabda o'quvchilar sinfga qarab maxsus chuqurlashtirilgan akademiyalar doirasida tahsil olishadi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          
          {/* Direction 1 */}
          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <BookOpen size={20} />
              </div>
              <h3 className="font-bold text-base text-brand-dark">Aniq fanlar akademiyasi</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Matematika va Geometriya fanlariga chuqur urg'u berilgan. Olimpiadalarga va nufuzli texnik institutlar imtihonlariga tayyorlash.
              </p>
            </div>
            <div className="pt-4 text-xs font-semibold text-gray-400 border-t border-gray-50 mt-4">
              Sinflar: 5-11 sinflar
            </div>
          </div>

          {/* Direction 2 */}
          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <School size={20} />
              </div>
              <h3 className="font-bold text-base text-brand-dark">Tabiiy fanlar (STEAM)</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Kimyo va Biologiya fanlarini maxsus datchiklar, amaliy laboratoriya eksperimentlari yordamida hayotiy o'rganish kursi.
              </p>
            </div>
            <div className="pt-4 text-xs font-semibold text-gray-400 border-t border-gray-50 mt-4">
              Sinflar: 7-11 sinflar
            </div>
          </div>

          {/* Direction 3 */}
          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                <Laptop size={20} />
              </div>
              <h3 className="font-bold text-base text-brand-dark">IT va Dasturlash</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Kompuyter savodxonligi, Python dasturlash tili, HTML/CSS/JS veb platformalar va robotlarni boshqarish amaliyotlari.
              </p>
            </div>
            <div className="pt-4 text-xs font-semibold text-gray-400 border-t border-gray-50 mt-4">
              Sinflar: 6-11 sinflar
            </div>
          </div>

          {/* Direction 4 */}
          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                <Sparkles size={20} />
              </div>
              <h3 className="font-bold text-base text-brand-dark">Xorijiy tillar (IELTS)</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Ingliz tili, rus tili mukammal so'zlashish kurslari hamda yuqori toifali ustozlardan maxsus IELTS va SAT tayyorlovlari.
              </p>
            </div>
            <div className="pt-4 text-xs font-semibold text-gray-400 border-t border-gray-50 mt-4">
              Sinflar: 1-11 sinflar
            </div>
          </div>

        </div>
      </section>

      {/* 5. TEACHERS PREVIEW */}
      <section id="teachers-preview" className="bg-brand-light/35 py-16 border-t border-b border-[#EAE3D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-bold text-brand-primary uppercase tracking-widest bg-brand-light px-3 py-1 rounded-full">
                O'qituvchilarimiz
              </span>
              <h2 className="text-3xl font-serif font-bold text-brand-dark tracking-tight">
                Yetakchi va Tajribali Pedagoglarimiz
              </h2>
              <p className="text-sm text-gray-500">
                O'quvchilarimizga o'z ishi fidoyilari bo'lgan, oliy ma'lumotli va milliy hamda xalqaro toifalarga ega bo'lgan ustozlar dars berishadi.
              </p>
            </div>
            <button
              onClick={() => handleNavClick('teachers')}
              className="px-5 py-2.5 rounded-xl bg-white text-brand-primary font-bold text-xs border border-gray-200 hover:border-brand-primary hover:bg-slate-50 transition-all duration-200 shrink-0"
            >
              Barcha o'qituvchilarimiz bilan tanishish
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTeachers.map((t) => (
              <div 
                key={t.id} 
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer group"
                onClick={() => handleNavClick('teachers')}
              >
                <div className="aspect-[3/4] relative overflow-hidden bg-slate-100">
                  <img 
                    src={t.photo} 
                    alt={t.fullName} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 px-2 py-1 rounded bg-brand-primary/95 text-[10px] font-bold text-white uppercase tracking-wider">
                    {t.subject}
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <h3 className="font-extrabold text-base text-brand-dark">{t.fullName}</h3>
                    <p className="text-xs text-gray-500 font-medium">{t.position}</p>
                  </div>
                  <div className="pt-2 border-t border-gray-50 flex items-center justify-between text-[11px] font-semibold text-gray-400">
                    <span>Tajriba: {t.experienceYears} yil</span>
                    <span className="text-brand-primary bg-brand-light px-2 py-0.5 rounded text-[10px]">{t.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. ACHIEVEMENTS STATS & PREVIEW */}
      <section id="achievements-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest bg-brand-light px-3 py-1 rounded-full">
            Yutuqlarimiz
          </span>
          <h2 className="text-3xl font-serif font-bold text-brand-dark tracking-tight">
            Iqtidorli o'quvchilarimiz yutuqlari
          </h2>
          <p className="text-sm text-gray-500">
            Xalqaro sertifikatlar (IELTS, SAT, CEFR) hamda tuman, viloyat va respublika olimpiada medallari g'oliblari maktabimiz faxridir.
          </p>
        </div>

        {/* Dashboard visual stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-brand-dark text-center shadow-lg shadow-amber-500/10 border border-amber-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-300/20 rounded-full blur-xl pointer-events-none" />
          
          <div className="space-y-1 relative z-10">
            <p className="text-4xl sm:text-5xl font-black text-brand-dark drop-shadow-sm">47 ta</p>
            <p className="text-xs font-bold text-brand-dark/85 uppercase tracking-wider">IELTS 7.0+ va SAT</p>
          </div>
          <div className="space-y-1 border-l border-brand-dark/10 relative z-10">
            <p className="text-4xl sm:text-5xl font-black text-brand-dark drop-shadow-sm">28 ta</p>
            <p className="text-xs font-bold text-brand-dark/85 uppercase tracking-wider">Olimpiada medallari</p>
          </div>
          <div className="space-y-1 border-l border-brand-dark/10 relative z-10">
            <p className="text-4xl sm:text-5xl font-black text-brand-dark drop-shadow-sm">19 nafar</p>
            <p className="text-xs font-bold text-brand-dark/85 uppercase tracking-wider">Xalqaro Grant sohibi</p>
          </div>
          <div className="space-y-1 border-l border-brand-dark/10 relative z-10">
            <p className="text-4xl sm:text-5xl font-black text-brand-dark drop-shadow-sm">92%</p>
            <p className="text-xs font-bold text-brand-dark/85 uppercase tracking-wider">Universitetga kirish</p>
          </div>
        </div>

        {/* Featured Achievement card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.filter(a => a.featured && a.status === 'active').slice(0, 3).map((a) => (
            <div key={a.id} className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm flex gap-4 hover:shadow-md transition-shadow duration-200">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                <img src={a.studentPhoto} alt={a.studentName} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-1 flex-1 min-w-0">
                <span className="inline-flex items-center px-2 py-0.5 rounded bg-brand-light text-brand-primary text-[10px] font-bold uppercase tracking-wider">
                  {a.result}
                </span>
                <h3 className="font-extrabold text-sm text-brand-dark truncate">{a.studentName}</h3>
                <p className="text-[11px] text-gray-400 font-medium">Sinfi: {a.className} | {a.title}</p>
                <p className="text-xs text-gray-500 leading-snug pt-1 line-clamp-2">{a.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => handleNavClick('achievements')}
            className="inline-flex items-center gap-1 text-sm font-bold text-brand-primary hover:text-brand-dark"
          >
            Barcha yutuqlar daryosini ko'rish <ArrowRight size={14} />
          </button>
        </div>
      </section>

      {/* 7. RECENT NEWS SECTION */}
      <section id="recent-news" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest bg-brand-light px-3 py-1 rounded-full">
              Yangiliklar
            </span>
            <h2 className="text-3xl font-serif font-bold text-brand-dark tracking-tight">
              Maktabimiz So'nggi Yangiliklari
            </h2>
            <p className="text-sm text-gray-500">
              E'lonlar, tadbirlar, bayramlar va dars jarayonidagi eng so'nggi ma'lumotlarni o'qib boring.
            </p>
          </div>
          <button
            onClick={() => handleNavClick('news')}
            className="px-5 py-2.5 rounded-xl bg-white text-brand-primary font-bold text-xs border border-gray-200 hover:border-brand-primary hover:bg-slate-50 transition-all duration-200 shrink-0"
          >
            Barcha yangiliklar bloki
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestNews.map((news) => (
            <article 
              key={news.id} 
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onClick={() => handleNewsClick(news.slug)}
            >
              <div>
                <div className="aspect-[16/10] relative overflow-hidden bg-slate-100">
                  <img 
                    src={news.coverImage} 
                    alt={news.title} 
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-brand-primary/95 text-[10px] font-bold text-white uppercase tracking-wider">
                    {getCategoryLabel(news.category)}
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="font-bold text-base text-brand-dark leading-snug group-hover:text-brand-primary transition-colors duration-150 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                    {news.excerpt}
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 border-t border-gray-50 flex items-center justify-between text-[11px] font-semibold text-gray-400 mt-2">
                <div className="flex items-center gap-1.5">
                  <Clock size={12} />
                  <span>{news.publishDate}</span>
                </div>
                <span>Ko'rildi: {news.views}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 9. PARENTS TESTIMONIALS */}
      <section id="testimonials-section" className="bg-brand-light/35 py-16 border-t border-b border-[#EAE3D2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center relative">
          
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest bg-brand-light px-3 py-1 rounded-full">
            Fikrlar
          </span>
          <h2 className="text-3xl font-serif font-bold text-brand-dark tracking-tight">
            Ota-onalar fikrlari
          </h2>

          <div className="relative min-h-[160px] flex items-center justify-center pt-4">
            <div className="space-y-4 animate-fade-in" key={currentTestimonial}>
              <p className="text-base sm:text-lg text-slate-700 italic leading-relaxed max-w-2xl mx-auto">
                " {testimonials[currentTestimonial].text} "
              </p>
              <div>
                <h4 className="font-extrabold text-sm text-brand-dark">{testimonials[currentTestimonial].name}</h4>
                <p className="text-xs text-gray-400 font-medium">{testimonials[currentTestimonial].status}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 pt-4">
            <button
              onClick={handlePrevTestimonial}
              className="p-2 rounded-xl bg-white text-gray-600 border border-gray-100 hover:text-brand-primary shadow-sm hover:shadow transition-all duration-150"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    currentTestimonial === idx ? 'w-5 bg-brand-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNextTestimonial}
              className="p-2 rounded-xl bg-white text-gray-600 border border-gray-100 hover:text-brand-primary shadow-sm hover:shadow transition-all duration-150"
            >
              <ChevronRight size={18} />
            </button>
          </div>

        </div>
      </section>

      {/* 10. PARTNERS SECTION */}
      <section id="partners-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Bizning hamkor oliygohlar va tashkilotlar</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-65">
          <div className="font-bold text-gray-400 text-lg sm:text-xl tracking-tight uppercase">Uzbekistan National Univ</div>
          <div className="font-bold text-gray-400 text-lg sm:text-xl tracking-tight uppercase">Samarkand State Univ</div>
          <div className="font-bold text-gray-400 text-lg sm:text-xl tracking-tight uppercase">Qarshi State Univ</div>
          <div className="font-bold text-gray-400 text-lg sm:text-xl tracking-tight uppercase">Webster Tashkent</div>
          <div className="font-bold text-gray-400 text-lg sm:text-xl tracking-tight uppercase">Amity University</div>
        </div>
      </section>

      {/* 11. ADMISSION CTA */}
      <section id="admission-cta" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-br from-brand-primary via-[#4D7157] to-brand-dark text-white text-center space-y-6 md:space-y-8 shadow-xl relative overflow-hidden border border-white/5">
          
          {/* Light accents */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-gold filter blur-[140px] opacity-25 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white filter blur-[140px] opacity-10 pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight leading-tight">
              Farzandingiz kelajagi uchun eng to'g'ri ta'lim muhitini tanlang
            </h2>
            <p className="text-sm sm:text-base text-slate-100 leading-relaxed">
              Maktabimizda dars sharoitlari va ta'lim tizimi bilan shaxsan tanishish uchun ro'yxatdan o'ting yoki farzandingiz uchun onlayn ariza topshiring.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <button
              onClick={() => handleNavClick('admission')}
              className="px-6 py-3 rounded-xl bg-brand-gold hover:bg-yellow-500 text-slate-950 font-bold transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
            >
              Ariza topshirish
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/20 transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Maktabga tashrif buyurish
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
