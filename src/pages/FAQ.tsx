/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageSquare, BookOpen, UserCheck, Shield } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const FAQ: React.FC = () => {
  const { faqs } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'admission' | 'academic' | 'campus' | 'fees'>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'admission': return <UserCheck size={16} className="text-brand-primary shrink-0" />;
      case 'academic': return <BookOpen size={16} className="text-brand-primary shrink-0" />;
      case 'campus': return <Shield size={16} className="text-brand-primary shrink-0" />;
      default: return <HelpCircle size={16} className="text-brand-primary shrink-0" />;
    }
  };

  const activeFaqs = faqs.filter(f => f.status === 'active');

  const filteredFaqs = activeFaqs.filter((f) => {
    const matchesSearch = f.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          f.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || f.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div id="faq-page" className="animate-fade-in space-y-12 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#102A56] to-brand-primary text-white py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Ko'p So'raladigan Savollar (FAQ)</h1>
          <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto">
            Qabul qilish tartibi, kirish imtihonlari darajasi, kiyim-bosh, darslar rejimi va ota-onalarni qiziqtirgan barcha savollarga javoblar.
          </p>
        </div>
      </section>

      {/* Filter Category Buttons & Search */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Search */}
        <div className="relative shadow-sm max-w-lg mx-auto">
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="O'zingizni qiziqtirgan savol kalit so'zini yozing..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 text-sm rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
          />
        </div>

        {/* Category switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-150 border ${
              activeCategory === 'all' ? 'bg-brand-primary border-brand-primary text-white shadow-md' : 'bg-white border-gray-200 text-gray-600 hover:border-brand-primary hover:text-brand-primary'
            }`}
          >
            Barchasi
          </button>
          <button
            onClick={() => setActiveCategory('admission')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-150 border ${
              activeCategory === 'admission' ? 'bg-brand-primary border-brand-primary text-white shadow-md' : 'bg-white border-gray-200 text-gray-600 hover:border-brand-primary hover:text-brand-primary'
            }`}
          >
            Qabul & Imtihonlar
          </button>
          <button
            onClick={() => setActiveCategory('academic')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-150 border ${
              activeCategory === 'academic' ? 'bg-brand-primary border-brand-primary text-white shadow-md' : 'bg-white border-gray-200 text-gray-600 hover:border-brand-primary hover:text-brand-primary'
            }`}
          >
            O'quv jarayoni
          </button>
          <button
            onClick={() => setActiveCategory('campus')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-150 border ${
              activeCategory === 'campus' ? 'bg-brand-primary border-brand-primary text-white shadow-md' : 'bg-white border-gray-200 text-gray-600 hover:border-brand-primary hover:text-brand-primary'
            }`}
          >
            Shart-sharoit & Kiyim
          </button>
        </div>

      </section>

      {/* Accordion List */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredFaqs.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-gray-100 max-w-md mx-auto space-y-4">
            <HelpCircle size={40} className="text-gray-300 mx-auto" />
            <h3 className="font-bold text-base text-gray-800">Savollar topilmadi</h3>
            <p className="text-xs text-gray-500">Kiritilgan so'rov bo'yicha javoblar topilmadi. Qidiruv kalitini o'zgartirib ko'ring.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div 
                  key={faq.id}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  {/* Collapsible Trigger */}
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left flex items-start justify-between gap-4 focus:outline-none"
                  >
                    <div className="flex gap-3 items-start">
                      {getCategoryIcon(faq.category)}
                      <h4 className="font-extrabold text-sm sm:text-base text-brand-dark leading-tight">
                        {faq.question}
                      </h4>
                    </div>
                    <span className="p-1 rounded-lg bg-slate-50 text-gray-400 mt-0.5 shrink-0">
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </button>

                  {/* Body Expandable */}
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-gray-50 text-xs sm:text-sm text-gray-500 leading-relaxed font-medium animate-fade-in">
                      {faq.answer}
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Direct Contact help row */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-3xl bg-brand-light border border-brand-primary/10 text-center space-y-3">
          <MessageSquare size={32} className="text-brand-primary mx-auto" />
          <h3 className="font-extrabold text-base text-brand-dark">Sizda boshqa savollar bormi?</h3>
          <p className="text-xs text-gray-500 max-w-md mx-auto leading-relaxed font-semibold">
            Agar siz javob topa olmagan bo'lsangiz, biz bilan bevosita bog'lanishingiz mumkin. Mutaxassislarimiz barcha ma'lumotlarni berishga tayyor.
          </p>
          <div className="pt-2">
            <a 
              href="tel:+998901234567"
              className="inline-block px-5 py-2.5 rounded-xl bg-brand-primary text-white hover:bg-brand-dark text-xs font-bold shadow transition-colors"
            >
              Ma'muriyat bilan bog'lanish
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
