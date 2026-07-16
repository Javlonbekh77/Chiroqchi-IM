/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowLeft, Clock, Eye, User, Share2, Send, Instagram, Facebook } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface NewsDetailProps {
  currentNewsSlug: string;
  setCurrentTab: (tab: string) => void;
}

export const NewsDetail: React.FC<NewsDetailProps> = ({ currentNewsSlug, setCurrentTab }) => {
  const { newsList } = useApp();

  const news = newsList.find(n => n.slug === currentNewsSlug);

  const handleBackClick = () => {
    setCurrentTab('news');
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

  if (!news) {
    return (
      <div className="max-w-md mx-auto p-12 text-center space-y-4">
        <h3 className="font-bold text-lg text-gray-800">Yangilik topilmadi</h3>
        <button 
          onClick={handleBackClick}
          className="px-4 py-2 bg-brand-primary text-white rounded-xl text-xs font-bold"
        >
          Orqaga qaytish
        </button>
      </div>
    );
  }

  // Related news (exclude current)
  const relatedNews = newsList
    .filter(n => n.status === 'published' && n.id !== news.id)
    .slice(0, 3);

  return (
    <div id="news-detail-page" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fade-in space-y-8">
      
      {/* Back button */}
      <button 
        onClick={handleBackClick}
        className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-brand-primary transition-all"
      >
        <ArrowLeft size={16} /> Yangiliklar ro'yxatiga qaytish
      </button>

      {/* Main Container */}
      <article className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Cover image banner */}
        <div className="aspect-[21/9] w-full bg-slate-100 relative">
          <img src={news.coverImage} alt={news.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 px-3 py-1 rounded bg-brand-primary text-xs font-bold text-white uppercase tracking-wider">
            {getCategoryLabel(news.category)}
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-wider pb-4 border-b border-gray-50">
            <div className="flex items-center gap-1.5">
              <User size={14} className="text-gray-400" />
              <span>{news.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-gray-400" />
              <span>{news.publishDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Eye size={14} className="text-gray-400" />
              <span>{news.views} marta o'qildi</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-dark leading-snug">
            {news.title}
          </h1>

          {/* Rich content text */}
          <div 
            className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-medium"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />

          {/* Share links footer */}
          <div className="pt-6 border-t border-gray-50 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
              <Share2 size={16} /> Maqolani ulashing:
            </span>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors" title="Telegram">
                <Send size={16} />
              </button>
              <button className="p-2 rounded-xl bg-pink-50 text-pink-600 hover:bg-pink-100 transition-colors" title="Instagram">
                <Instagram size={16} />
              </button>
              <button className="p-2 rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors" title="Facebook">
                <Facebook size={16} />
              </button>
            </div>
          </div>

        </div>
      </article>

      {/* Related News list */}
      {relatedNews.length > 0 && (
        <div className="space-y-6 pt-6">
          <h3 className="font-extrabold text-lg text-brand-dark tracking-tight border-b border-gray-100 pb-2">
            Mavzuga doir boshqa yangiliklar
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedNews.map((n) => (
              <div 
                key={n.id}
                onClick={() => {
                  newsList.map(item => item.id === n.id ? item.views++ : null); // simple local view tracking
                  setCurrentTab('news-detail');
                  // update slug
                  currentNewsSlug = n.slug;
                  window.location.reload(); // simple re-render triggers correctly
                }}
                className="bg-white rounded-2xl border border-gray-100 p-4 space-y-3 shadow-sm hover:shadow-md cursor-pointer transition-shadow"
              >
                <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-100">
                  <img src={n.coverImage} alt={n.title} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-sm text-brand-dark line-clamp-2 leading-snug">{n.title}</h4>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{n.publishDate}</p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
