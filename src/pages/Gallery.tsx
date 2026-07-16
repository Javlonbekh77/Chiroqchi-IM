/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Image, Video, X, ChevronLeft, ChevronRight, Eye, Grid } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Gallery: React.FC = () => {
  const { galleryItems } = useApp();
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'infrastructure' | 'events' | 'sports' | 'lessons'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const activeItems = galleryItems.filter(item => item.status === 'active');

  const filteredItems = activeItems.filter((item) => {
    return selectedFilter === 'all' || item.category === selectedFilter;
  });

  const openLightbox = (id: string) => {
    const idx = filteredItems.findIndex(item => item.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1);
  };

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'infrastructure': return 'Infratuzilma';
      case 'events': return 'Tadbirlar';
      case 'sports': return 'Sport hayoti';
      case 'lessons': return 'Dars jarayonlari';
      default: return 'Boshqa';
    }
  };

  return (
    <div id="gallery-page" className="animate-fade-in space-y-12 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#102A56] to-brand-primary text-white py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Foto va Video Galereya</h1>
          <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto">
            Maktabimiz binosi, sinfxonalar, kimyo-fizika laboratoriyalari, sport zali hamda ta'lim va tadbir jarayonlaridan lavhalar.
          </p>
        </div>
      </section>

      {/* Filter categories bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => setSelectedFilter('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-150 border ${
            selectedFilter === 'all' ? 'bg-brand-primary border-brand-primary text-white shadow-md' : 'bg-white border-gray-200 text-gray-600 hover:border-brand-primary hover:text-brand-primary'
          }`}
        >
          Barcha rasmlar
        </button>
        <button
          onClick={() => setSelectedFilter('infrastructure')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-150 border ${
            selectedFilter === 'infrastructure' ? 'bg-brand-primary border-brand-primary text-white shadow-md' : 'bg-white border-gray-200 text-gray-600 hover:border-brand-primary hover:text-brand-primary'
          }`}
        >
          Infratuzilma & Bino
        </button>
        <button
          onClick={() => setSelectedFilter('lessons')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-150 border ${
            selectedFilter === 'lessons' ? 'bg-brand-primary border-brand-primary text-white shadow-md' : 'bg-white border-gray-200 text-gray-600 hover:border-brand-primary hover:text-brand-primary'
          }`}
        >
          Dars jarayonlari
        </button>
        <button
          onClick={() => setSelectedFilter('events')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-150 border ${
            selectedFilter === 'events' ? 'bg-brand-primary border-brand-primary text-white shadow-md' : 'bg-white border-gray-200 text-gray-600 hover:border-brand-primary hover:text-brand-primary'
          }`}
        >
          Tadbirlar
        </button>
        <button
          onClick={() => setSelectedFilter('sports')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-150 border ${
            selectedFilter === 'sports' ? 'bg-brand-primary border-brand-primary text-white shadow-md' : 'bg-white border-gray-200 text-gray-600 hover:border-brand-primary hover:text-brand-primary'
          }`}
        >
          Sport
        </button>
      </section>

      {/* Grid gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredItems.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-gray-100 max-w-md mx-auto space-y-4">
            <Image size={40} className="text-gray-300 mx-auto" />
            <h3 className="font-bold text-base text-gray-800">Rasmlar mavjud emas</h3>
            <p className="text-xs text-gray-500">Ushbu turdagi fotoalbomlar hozircha bo'sh.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                onClick={() => openLightbox(item.id)}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm group hover:shadow-md cursor-pointer relative aspect-square"
              >
                {/* Photo cover */}
                <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300" />
                
                {/* Overlay backdrop */}
                <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4">
                  <span className="text-[9px] font-extrabold text-brand-gold uppercase tracking-widest">{getCategoryLabel(item.category)}</span>
                  <h4 className="font-bold text-xs sm:text-sm text-white line-clamp-1">{item.title}</h4>
                  <div className="flex items-center gap-1 text-[10px] text-blue-100 mt-1 font-bold">
                    <Eye size={12} /> Kattalashtirish
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox full overlay screen */}
      {lightboxIndex !== null && (
        <div id="gallery-lightbox" className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-between p-4 sm:p-6 select-none animate-fade-in">
          
          {/* Header row */}
          <div className="w-full max-w-7xl flex items-center justify-between text-white pb-2 border-b border-white/10">
            <div className="space-y-0.5">
              <span className="text-[10px] font-extrabold text-brand-gold uppercase tracking-widest">{getCategoryLabel(filteredItems[lightboxIndex].category)}</span>
              <h3 className="font-extrabold text-xs sm:text-sm">{filteredItems[lightboxIndex].title}</h3>
            </div>
            <button 
              onClick={closeLightbox}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Main viewing slider area */}
          <div className="w-full max-w-5xl flex items-center justify-between gap-4 h-full py-4">
            
            {/* Prev button */}
            <button 
              onClick={handlePrev}
              className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white shrink-0"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Active image */}
            <div className="flex-1 flex items-center justify-center max-h-[70vh] overflow-hidden">
              <img 
                src={filteredItems[lightboxIndex].url} 
                alt={filteredItems[lightboxIndex].title} 
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Next button */}
            <button 
              onClick={handleNext}
              className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white shrink-0"
            >
              <ChevronRight size={24} />
            </button>

          </div>

          {/* Bottom Index counter */}
          <div className="text-white/60 text-xs font-bold tracking-wider pb-2">
            {lightboxIndex + 1} / {filteredItems.length}
          </div>

        </div>
      )}

    </div>
  );
};
