/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  History, Eye, Heart, Award, Shield, Library, CheckCircle2, 
  MapPin, Clock, Trophy, Users, Star, BookOpen 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const About: React.FC = () => {
  const { siteSettings } = useApp();

  const values = [
    { title: 'Sifatli Bilim', desc: 'Zamonaviy metodlar va STEAM texnologiyalari orqali xalqaro standartlarga mos dars berish.' },
    { title: 'Mas\'uliyat', desc: 'O\'quvchi shaxsining ahloqiy tarbiyasi va maktabdagi xavfsizligi uchun to\'liq javobgarlik.' },
    { title: 'Hurmat va Bag\'rikenglik', desc: 'Har bir o\'quvchining shaxsiy fikri, dunyoqarashi va iqtidorini hurmat qilish.' },
    { title: 'Temir Intizom', desc: 'Akademik muvaffaqiyatlar asosi bo\'lgan o\'zaro hurmatga asoslangan tartib va intizom.' },
    { title: 'Ijodkorlik', desc: 'An\'anaviy darslardan xoli holda bolalardagi ijodiy va mantiqiy g\'oyalarni qo\'llab-quvvatlash.' },
    { title: 'Halollik va Shafofflik', desc: 'Ota-onalar bilan ishonchli va doimiy ochiq muloqot munosabatlarini o\'rnatish.' }
  ];

  const adminMembers = [
    {
      name: 'To\'lqin Ergashev',
      role: 'Maktab direktori',
      education: 'Toshkent Davlat Pedagogika Universiteti (Pedagogika va Psixologiya fanlari doktori)',
      experience: '25 yil',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80',
      bio: 'To\'lqin Ergashev ko\'p yillar davomida tuman xalq ta\'limi bo\'limida rahbar lavozimlarida va nufuzli litseylarda direktor bo\'lib ishlagan. Chiroqchi Tuman IM tashkil topgan kundan buyon unga rahbarlik qilib kelmoqda.'
    },
    {
      name: 'Nigora Xoliqova',
      role: 'O\'quv ishlari bo\'yicha direktor o\'rinbosari',
      education: 'Samarqand Davlat Universiteti (Matematika metodikasi)',
      experience: '18 yil',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
      bio: 'O\'quv jarayonini rejalashtirish, dars jadvallari, o\'qituvchilar malakasini oshirish va xalqaro o\'quv dasturlarini joriy etish mas\'uli.'
    },
    {
      name: 'Suhrob Bekmurodov',
      role: 'Ma\'naviy-ma\'rifiy ishlar bo\'yicha direktor o\'rinbosari',
      education: 'Qarshi Davlat Universiteti (Tarix va jamiyatshunoslik)',
      experience: '14 yil',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80',
      bio: 'O\'quvchilar o\'rtasida ahloqiy-tarbiyaviy ishlar, to\'garaklar, madaniy tadbirlar va sport turnirlarini tashkil etish koordinatori.'
    }
  ];

  return (
    <div id="about-page" className="animate-fade-in space-y-16 pb-16">
      
      {/* Page Header banner */}
      <section className="bg-gradient-to-r from-[#102A56] to-brand-primary text-white py-12 text-center relative">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Biz Haqimizda</h1>
          <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto">
            Chiroqchi Tuman Ixtisoslashtirilgan Maktabi tarixi, ma'muriyati va ta'lim prinsiplari bilan tanishing.
          </p>
        </div>
      </section>

      {/* 1. History & Mission Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand-primary text-xs font-bold uppercase tracking-wider">
            <History size={14} />
            Maktab Tarixi
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight leading-tight">
            2018-yildan buyon ilm-fan xizmatida
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Chiroqchi Tuman Ixtisoslashtirilgan Maktabi 2018-yilda tuman hokimligi hamda Xalq ta'limi vazirligi tashabbusi bilan tumandagi iqtidorli yoshlarni qo'llab-quvvatlash va ularga chuqurlashtirilgan STEAM hamda tillar o'qitish standartlarini yetkazish maqsadida tashkil etilgan.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            Dastlab 150 nafar iqtidorli o'quvchi va 15 nafar o'qituvchi bilan faoliyat boshlagan maktabimiz, qisqa yillar ichida Qashqadaryo viloyatining eng nufuzli maktablari qatoridan joy oldi. Bugungi kunga kelib maktabimizda 850 nafardan ortiq o'quvchi zamonaviy sharoitlarda eng ilg'or uslublar yordamida tahsil olmoqda.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
            <div className="flex gap-2 items-start">
              <CheckCircle2 size={18} className="text-brand-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-xs text-brand-dark">Davlat Akkreditatsiyasi</h4>
                <p className="text-[10px] text-gray-400">To'liq litsenziyalangan ta'lim dasturi</p>
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <CheckCircle2 size={18} className="text-brand-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-xs text-brand-dark">STEAM sertifikati</h4>
                <p className="text-[10px] text-gray-400">Laboratoriyalar xalqaro standartda</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 aspect-[4/3] bg-slate-100">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=80" 
            alt="Chiroqchi Tuman IM binosi" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 2. Director's Welcome Letter */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-4 rounded-2xl overflow-hidden aspect-[3/4] shadow-md border border-gray-200 bg-white shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80" 
              alt="To'lqin Ergashev" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:col-span-8 space-y-5">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest bg-brand-light px-3 py-1 rounded-full">
              Direktor Murojaati
            </span>
            <h2 className="text-2xl font-extrabold text-brand-dark tracking-tight">
              \"Farzandlarimiz - bizning kelajagimiz, ilm esa uning kalitidir\"
            </h2>
            <p className="text-sm text-gray-600 italic leading-relaxed">
              \"Assalomu alaykum muhtaram ota-onalar va qadrli yosh do'stlar! Chiroqchi Tuman Ixtisoslashtirilgan Maktabi jamoasi nomidan sizlarni qutlashdan cheksiz mamnunman. Bizning asosiy intilishimiz - har bir boladagi yashirin iqtidorni yuzaga chiqarish, ularda nafaqat ilm, balki yuksak ahloq, mas'uliyat va mustaqil fikrlash malakasini tarbiyalashdir. Biz bolalarni ertangi IT va STEAM asrining haqiqiy egalari bo'lib voyaga yetishlariga ishonamiz.\"
            </p>
            <div>
              <h4 className="font-extrabold text-sm text-brand-dark">To'lqin Ergashev</h4>
              <p className="text-xs text-gray-400 font-semibold">Chiroqchi Tuman IM maktabi direktori, Pedagogika fanlari doktori</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand-primary text-xs font-bold uppercase tracking-wider">
            <Heart size={14} />
            Qadriyatlarimiz
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
            Ta'lim va Tarbiya Qadriyatlarimiz
          </h2>
          <p className="text-sm text-gray-500">
            Maktabimiz barcha dars va tadbirlarni mana shu oltita oltin qadriyatga tayangan holda tashkil qiladi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {values.map((v, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm space-y-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-brand-light text-brand-primary font-bold text-xs">
                0{i + 1}
              </span>
              <h3 className="font-bold text-base text-brand-dark">{v.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Administration / Management team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand-primary text-xs font-bold uppercase tracking-wider">
            <Award size={14} />
            Rahbariyat
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
            Maktab Ma'muriyati
          </h2>
          <p className="text-sm text-gray-500">
            O'quv va tarbiya jarayonlarini, innovatsiyalar hamda maktab hayotini boshqaruvchi malakali boshliqlar jamoasi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {adminMembers.map((m, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden">
                <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-5 space-y-3">
                <div>
                  <h3 className="font-extrabold text-base text-brand-dark">{m.name}</h3>
                  <p className="text-xs text-brand-primary font-bold">{m.role}</p>
                </div>
                <div className="text-xs space-y-1 text-gray-500 leading-normal border-t border-gray-50 pt-3">
                  <p><strong>Ma'lumoti:</strong> {m.education}</p>
                  <p><strong>Pedagogik staj:</strong> {m.experience}</p>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed pt-1 border-t border-gray-50/50">
                  {m.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Infrastructure and Safety policies */}
      <section className="bg-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-gold text-xs font-bold uppercase tracking-wider">
              <Shield size={14} />
              Xavfsizlik va Infratuzilma
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Sinfxonalar, Laboratoriyalar va Xavfsiz Maktab hududi
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              O'quvchilarimizning salomatligi va xavfsizligini ta'minlash bizning eng oliy maqsadimizdir. Maktab hududi 24/7 rejimida qo'riqlanadi va maxsus FaceID (yuzni aniqlash) orqali kirib-chiqish tizimi bilan jihozlangan.
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-brand-gold shrink-0">
                  <Library size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-white">Boy Axborot-Kutubxona Markazi</h4>
                  <p className="text-[11px] text-slate-400">10,000 dan ortiq darsliklar, badiiy va xalqaro ilmiy adabiyotlar fondi.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-brand-gold shrink-0">
                  <Star size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-white">Yevropa standarti laboratoriyalari</h4>
                  <p className="text-[11px] text-slate-400">Kimyo, fizika va biologiya laboratoriyalari to'liq raqamli o'lchov datchiklari bilan jihozlangan.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden aspect-square shadow-md bg-slate-800">
              <img src="https://images.unsplash.com/photo-1562774053-401386df887f?w=400&auto=format&fit=crop&q=80" alt="Kimyo Laboratoriya" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square shadow-md bg-slate-800 translate-y-6">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&auto=format&fit=crop&q=80" alt="Kompyuter xonasi" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
