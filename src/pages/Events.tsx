/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, CheckCircle2, AlertCircle, X, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Event } from '../types';

export const Events: React.FC = () => {
  const { events, addContactMessage } = useApp();
  const [activeFilter, setActiveFilter] = useState<'all' | 'upcoming' | 'completed'>('all');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showRsvpModal, setShowRsvpModal] = useState(false);
  
  // RSVP Form inputs
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpPhone, setRsvpPhone] = useState('');
  const [rsvpEmail, setRsvpEmail] = useState('');
  const [rsvpSuccess, setRsvpSuccess] = useState(false);

  const filteredEvents = events.filter((e) => {
    if (activeFilter === 'upcoming') {
      return e.eventStatus === 'upcoming' || e.eventStatus === 'ongoing';
    }
    if (activeFilter === 'completed') {
      return e.eventStatus === 'completed';
    }
    return true; // 'all'
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-100">● Kutilmoqda</span>;
      case 'ongoing':
        return <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-100 animate-pulse">● Bo'lib o'tmoqda</span>;
      case 'completed':
        return <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gray-100 text-gray-500 border border-gray-200">Yakunlangan</span>;
      default:
        return <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-100">Bekor qilingan</span>;
    }
  };

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rsvpName || !rsvpPhone) return;

    // Add RSVP to contactMessages database mock
    addContactMessage({
      fullName: rsvpName,
      phone: rsvpPhone,
      email: rsvpEmail,
      type: 'other',
      message: `[TADBIRGA RO'YXATDAN O'TISH] Tadbir: ${selectedEvent?.title}`
    });

    setRsvpSuccess(true);
    setTimeout(() => {
      setRsvpSuccess(false);
      setShowRsvpModal(false);
      setRsvpName('');
      setRsvpPhone('');
      setRsvpEmail('');
    }, 2500);
  };

  return (
    <div id="events-page" className="animate-fade-in space-y-12 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#102A56] to-brand-primary text-white py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Tadbirlar Taqvim</h1>
          <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto">
            Maktabimizda bo'lib o'tadigan ochiq eshiklar kuni, intellektual olimpiada bayramlari va madaniy tadbirlar.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-2">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-150 border ${
            activeFilter === 'all' ? 'bg-brand-primary border-brand-primary text-white shadow-md' : 'bg-white border-gray-200 text-gray-600 hover:border-brand-primary hover:text-brand-primary'
          }`}
        >
          Barcha tadbirlar
        </button>
        <button
          onClick={() => setActiveFilter('upcoming')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-150 border ${
            activeFilter === 'upcoming' ? 'bg-brand-primary border-brand-primary text-white shadow-md' : 'bg-white border-gray-200 text-gray-600 hover:border-brand-primary hover:text-brand-primary'
          }`}
        >
          Kutilayotgan tadbirlar
        </button>
        <button
          onClick={() => setActiveFilter('completed')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-150 border ${
            activeFilter === 'completed' ? 'bg-brand-primary border-brand-primary text-white shadow-md' : 'bg-white border-gray-200 text-gray-600 hover:border-brand-primary hover:text-brand-primary'
          }`}
        >
          Bo'lib o'tganlar (Arxiv)
        </button>
      </section>

      {/* Events Card Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredEvents.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-gray-100 max-w-md mx-auto space-y-4">
            <Calendar size={40} className="text-gray-300 mx-auto" />
            <h3 className="font-bold text-base text-gray-800">Tadbirlar topilmadi</h3>
            <p className="text-xs text-gray-500">Ushbu kategoriya doirasida hozircha hech qanday tadbir kiritilmagan.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((e) => (
              <div 
                key={e.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
              >
                <div>
                  {/* Event photo cover */}
                  <div className="aspect-[16/10] bg-slate-100 relative">
                    <img src={e.image} alt={e.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3">
                      {getStatusBadge(e.eventStatus)}
                    </div>
                  </div>

                  {/* Body stats & description */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-1 text-brand-primary text-xs font-bold">
                      <Calendar size={14} />
                      <span>Sana: {e.startDate} {e.startTime && `| Soat: ${e.startTime}`}</span>
                    </div>
                    <h3 className="font-extrabold text-base text-brand-dark leading-snug truncate">
                      {e.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                      {e.description}
                    </p>
                  </div>
                </div>

                {/* Footer RSVP / details button */}
                <div className="p-4 bg-slate-50 border-t border-gray-100 flex items-center justify-between gap-2 mt-2">
                  <button
                    onClick={() => setSelectedEvent(e)}
                    className="px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 font-bold text-xs hover:border-brand-primary hover:text-brand-primary transition-all flex-1"
                  >
                    Batafsil ko'rish
                  </button>
                  {e.registrationRequired && (e.eventStatus === 'upcoming' || e.eventStatus === 'ongoing') && (
                    <button
                      onClick={() => {
                        setSelectedEvent(e);
                        setShowRsvpModal(true);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-brand-primary text-white font-bold text-xs hover:bg-brand-dark transition-all flex-1"
                    >
                      Ro'yxatdan o'tish
                    </button>
                  )}
                </div>

              </div>
            ))}
          </div>
        )}
      </section>

      {/* Event Details Overlay dialog */}
      {selectedEvent && !showRsvpModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedEvent(null)} />
          
          <div className="relative bg-white w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6 z-50 animate-fade-in">
            <button onClick={() => setSelectedEvent(null)} className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-500 hover:bg-gray-100">
              <X size={20} />
            </button>

            <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-slate-100">
              <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                {getStatusBadge(selectedEvent.eventStatus)}
                {selectedEvent.registrationRequired && (
                  <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-100 font-bold text-[10px]">Ro'yxatdan o'tish shart</span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark">{selectedEvent.title}</h2>
              
              <div className="p-4 bg-slate-50 rounded-xl space-y-2.5 text-xs sm:text-sm font-semibold text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-brand-primary shrink-0" />
                  <span>Sana: {selectedEvent.startDate} {selectedEvent.startTime && `| Boshlanishi: ${selectedEvent.startTime}`} {selectedEvent.endTime && `- ${selectedEvent.endTime}`}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-brand-primary shrink-0" />
                  <span>Manzil: {selectedEvent.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-brand-primary shrink-0" />
                  <span>Tashkilotchi: {selectedEvent.responsiblePerson}</span>
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-xs text-brand-dark uppercase tracking-wider">Tadbir tavsifi:</h4>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
                  {selectedEvent.fullContent || selectedEvent.description}
                </p>
              </div>

              {selectedEvent.registrationRequired && (selectedEvent.eventStatus === 'upcoming' || selectedEvent.eventStatus === 'ongoing') && (
                <div className="pt-4 border-t border-gray-100">
                  <button
                    onClick={() => setShowRsvpModal(true)}
                    className="w-full py-2.5 rounded-xl bg-brand-primary text-white font-bold text-xs hover:bg-brand-dark text-center shadow-lg"
                  >
                    Ushbu tadbirda qatnashish uchun ro'yxatdan o'tish
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* RSVP SignUp Overlay form */}
      {showRsvpModal && selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowRsvpModal(false)} />
          
          <div className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl p-6 sm:p-8 space-y-5 z-50 animate-fade-in">
            <button onClick={() => setShowRsvpModal(false)} className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-500 hover:bg-gray-100">
              <X size={20} />
            </button>

            <div className="text-center space-y-1">
              <div className="w-10 h-10 rounded-full bg-brand-light text-brand-primary flex items-center justify-center mx-auto">
                <Sparkles size={18} />
              </div>
              <h3 className="font-extrabold text-base text-brand-dark">Tadbirga Ro'yxatdan O'tish</h3>
              <p className="text-xs text-gray-400 font-semibold line-clamp-1">{selectedEvent.title}</p>
            </div>

            {rsvpSuccess ? (
              <div className="p-6 text-center space-y-2 bg-emerald-50 rounded-2xl border border-emerald-100 text-emerald-800">
                <CheckCircle2 size={32} className="text-emerald-500 mx-auto" />
                <h4 className="font-extrabold text-sm">Muvaffaqiyatli ro'yxatdan o'tdingiz!</h4>
                <p className="text-[11px] text-emerald-600 font-semibold">Tashkilotchilarimiz tez orada siz bilan bog'lanishadi.</p>
              </div>
            ) : (
              <form onSubmit={handleRsvpSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Ism-familiyangiz:</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Masalan: Sardor Ergashev"
                    value={rsvpName}
                    onChange={(e) => setRsvpName(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Telefon raqamingiz:</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+998 90 123 45 67"
                    value={rsvpPhone}
                    onChange={(e) => setRsvpPhone(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email (ixtiyoriy):</label>
                  <input 
                    type="email" 
                    placeholder="example@mail.ru"
                    value={rsvpEmail}
                    onChange={(e) => setRsvpEmail(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-brand-primary text-white font-bold text-xs hover:bg-brand-dark transition-colors duration-150 shadow-md"
                >
                  Yuborish
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
