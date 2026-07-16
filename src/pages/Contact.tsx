/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, Instagram, Facebook, Youtube, Share2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Contact: React.FC = () => {
  const { addContactMessage } = useApp();
  
  // Message Form states
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState<'admission' | 'suggestion' | 'complaint' | 'other'>('admission');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      addContactMessage({
        fullName,
        phone,
        email,
        type,
        message,
        createdAt: new Date().toISOString().split('T')[0]
      });

      setSuccess(true);
      setIsSubmitting(false);

      // Reset form fields
      setFullName('');
      setPhone('');
      setEmail('');
      setType('admission');
      setMessage('');

      // Auto-hide success
      setTimeout(() => setSuccess(false), 3000);
    }, 1200);
  };

  return (
    <div id="contact-page" className="animate-fade-in space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#102A56] to-brand-primary text-white py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Biz bilan Bog'lanish</h1>
          <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto">
            Savollaringiz bormi? Ma'muriyatimiz dushanbadan shanbagacha sizga yordam berishga va takliflaringizni tinglashga tayyor.
          </p>
        </div>
      </section>

      {/* Grid: Details & Messaging Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Direct info details */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark tracking-tight">
              Aloqa Ma'lumotlari
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-semibold">
              Siz biz bilan quyidagi telefon raqamlari, elektron pochta manzili yoki bevosita maktab binosiga tashrif buyurish orqali bog'lanishingiz mumkin.
            </p>
          </div>

          {/* Details Row blocks */}
          <div className="space-y-5">
            <div className="flex gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-primary flex items-center justify-center shrink-0">
                <MapPin size={20} />
              </div>
              <div className="space-y-1 text-xs sm:text-sm font-semibold">
                <h4 className="font-extrabold text-brand-dark">Manzilimiz:</h4>
                <p className="text-gray-500 font-medium">Qashqadaryo viloyati, Chiroqchi tumani, Amir Temur ko'chasi, 44-bino</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-primary flex items-center justify-center shrink-0">
                <Phone size={20} />
              </div>
              <div className="space-y-1 text-xs sm:text-sm font-semibold">
                <h4 className="font-extrabold text-brand-dark">Telefon raqamlarimiz:</h4>
                <p className="text-gray-500 font-medium">+998 (90) 123-45-67 | +998 (75) 482-11-22</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-primary flex items-center justify-center shrink-0">
                <Mail size={20} />
              </div>
              <div className="space-y-1 text-xs sm:text-sm font-semibold">
                <h4 className="font-extrabold text-brand-dark">Elektron pochta (Email):</h4>
                <p className="text-gray-500 font-medium">chiroqchi-im@umail.uz | info@chiroqchi-im.uz</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-primary flex items-center justify-center shrink-0">
                <Clock size={20} />
              </div>
              <div className="space-y-1 text-xs sm:text-sm font-semibold">
                <h4 className="font-extrabold text-brand-dark">Ish vaqtimiz:</h4>
                <p className="text-gray-500 font-medium">Dushanba - Shanba: 08:30 - 17:00 (Yakshanba dam olish kuni)</p>
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div className="space-y-3.5">
            <h4 className="font-extrabold text-xs text-brand-dark uppercase tracking-wider flex items-center gap-1">
              <Share2 size={14} className="text-brand-primary" /> Ijtimoiy tarmoqlarimiz:
            </h4>
            <div className="flex items-center gap-3">
              <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                <Send size={20} />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-pink-50 text-pink-600 hover:bg-pink-100 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Contact form box */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-6 sm:p-8 space-y-6">
            
            <div className="space-y-1 text-center lg:text-left">
              <h3 className="font-extrabold text-lg text-brand-dark">Ma'muriyatga xabar yuboring</h3>
              <p className="text-xs text-gray-400 font-semibold">Taklif, shikoyat yoki qabul savollari yuzasidan xabar qoldiring.</p>
            </div>

            {success ? (
              <div className="p-6 text-center space-y-2 bg-emerald-50 rounded-2xl border border-emerald-100 text-emerald-800 animate-fade-in">
                <CheckCircle2 size={32} className="text-emerald-500 mx-auto" />
                <h4 className="font-extrabold text-sm">Xabaringiz muvaffaqiyatli jo'natildi!</h4>
                <p className="text-[11px] text-emerald-600 font-semibold">Tez orada siz bilan kiritilgan telefon raqami orqali bog'lanamiz.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Ism-familiyangiz:</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Masalan: Rustam Soliyev"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Telefon raqamingiz:</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+998 90 123 45 67"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email (ixtiyoriy):</label>
                    <input 
                      type="email" 
                      placeholder="rustam@mail.ru"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Murojaat turi:</label>
                    <select
                      value={type}
                      onChange={(e) => setType(e.target.value as any)}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
                    >
                      <option value="admission">Qabul to'g'risida savol</option>
                      <option value="suggestion">Taklif kiritish</option>
                      <option value="complaint">Shikoyat kiritish</option>
                      <option value="other">Boshqa masalalar</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Xabaringiz matni:</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Murojaatingizni bu yerga batafsil yozing..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-semibold text-gray-700"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 rounded-xl bg-brand-primary text-white font-bold text-xs hover:bg-brand-dark transition-all duration-150 shadow-md flex items-center justify-center gap-1.5"
                >
                  {isSubmitting ? (
                    <>Jo'natilmoqda...</>
                  ) : (
                    <><Send size={14} /> Xabarni yuborish</>
                  )}
                </button>

              </form>
            )}

          </div>
        </div>

      </section>

      {/* 2D Styled Location Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <h3 className="font-extrabold text-base sm:text-lg text-brand-dark tracking-tight">Bizning xaritadagi joylashuvimiz</h3>
          <div className="aspect-[21/9] rounded-3xl overflow-hidden border border-gray-100 shadow-inner bg-slate-100 relative">
            
            {/* Inline 2D map mock aesthetic layout */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.632971212882!2d66.01166669999999!3d38.9772222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4ea3ca00000001%3A0x6e9f196147427d6b!2sChiroqchi%20Ixtisoslashtirilgan%20maktabi!5e0!3m2!1suz!2s!4v1700000000000!5m2!1suz!2s"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />

          </div>
        </div>
      </section>

    </div>
  );
};
