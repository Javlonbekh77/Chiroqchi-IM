/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, Calendar, Eye, ArrowRight, BookOpen, Clock } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface NewsProps {
  setCurrentTab: (tab: string) => void;
  setSelectedNewsSlug: (slug: string) => void;
}

export const News: React.FC<NewsProps> = ({ setCurrentTab, setSelectedNewsSlug }) => {
  const { newsList, incrementNewsViews } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'school' | 'education' | 'events' | 'olympiads' | 'sports' | 'admission' | 'announcements' | 'student_life'>('all');

  const categories = [
    { id: 'all', label: 'Barchasi' },
    { id: 'school', label: 'Maktab hayoti' },
    { id: 'education', label: 'Ta\'lim' },
    { id: 'olympiads', label: 'Olimpiadalar' },
    { id: 'sports', label: 'Sport' },
    { id: 'admission', label: 'Qabul' },
    { id: 'announcements', label: 'E\'lonlar' },
  ];

  const handleNewsClick = (id: string, slug: string) => {
    incrementNewsViews(id);
    setSelectedNewsSlug(slug);
    setCurrentTab('news-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'admission': return 'Qabul';
      case 'olympiads': return 'Olimpiada';
      case 'school': return 'Maktab hayoti';
      case 'education': return 'Ta\'lim';
      case 'sports': return 'Sport';
      case 'announcements': return 'E\'lon';
      default: return 'Yangilik';
    }
  };

  const filteredNews = newsList
    .filter(n => n.status === 'published')
    .filter((n) => {
      const matchesSearch = n.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            n.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || n.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

  return (
    <div id="news-page" className="animate-fade-in space-y-12 pb-16">
      
      {/* Header banner */}
      <section className="bg-gradient-to-r from-[#102A56] to-brand-primary text-white py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Maktab Yangiliklari va E'lonlar</h1>
          <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto">
            Maktabimiz hayotidagi eng so'nggi jarayonlar, musobaqalar, yangi e'lonlar va metodik maqolalarni kuzatib boring.
          </p>
        </div>
      </section>

      {/* Filter and Category tabs section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Search input */}
        <div className="max-w-xl mx-auto relative shadow-sm">
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Sarlavha yoki qisqa matn bo'yicha yangilik qidirish..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 text-sm rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-150 border ${
                selectedCategory === cat.id
                  ? 'bg-brand-primary border-brand-primary text-white shadow-md'
                  : 'bg-white border-gray-200 text-gray-600 hover:border-brand-primary hover:text-brand-primary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

      </section>

      {/* News Article list grid layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredNews.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-gray-100 max-w-md mx-auto space-y-4">
            <BookOpen size={40} className="text-gray-300 mx-auto" />
            <h3 className="font-bold text-base text-gray-800">Yangiliklar topilmadi</h3>
            <p className="text-xs text-gray-500">Kechirasiz, tanlangan tur yoki qidiruv so'roviga mos faol yangiliklar mavjud emas.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news) => (
              <article 
                key={news.id}
                onClick={() => handleNewsClick(news.id, news.slug)}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  {/* Photo cover */}
                  <div className="aspect-[16/10] relative overflow-hidden bg-slate-100">
                    <img src={news.coverImage} alt={news.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300" />
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-brand-primary/95 text-[10px] font-bold text-white uppercase tracking-wider">
                      {getCategoryLabel(news.category)}
                    </div>
                  </div>

                  {/* Body Text */}
                  <div className="p-5 space-y-3">
                    <h3 className="font-bold text-base text-brand-dark leading-snug group-hover:text-brand-primary transition-colors duration-150 line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                      {news.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer specs */}
                <div className="p-5 pt-0 border-t border-gray-50 flex items-center justify-between text-[11px] font-semibold text-gray-400 mt-2">
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} />
                    <span>{news.publishDate}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Eye size={12} />
                    <span>{news.views} marta</span>
                  </div>
                </div>

              </article>
            ))}
          </div>
        )}
      </section>

    </div>
  );
};
