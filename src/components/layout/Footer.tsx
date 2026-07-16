/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, Instagram, Facebook, Youtube } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab }) => {
  const { siteSettings } = useApp();

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-brand-dark text-slate-100">
      
      {/* Upper Footer: Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        
        {/* Column 1: About & Social */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center p-0.5 shadow-sm shrink-0">
              <img src="/image.png" alt="Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </div>
            <h3 className="font-serif font-bold text-lg tracking-tight text-white">
              {siteSettings.schoolName}
            </h3>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {siteSettings.description}
          </p>
          {/* Social Links */}
          <div className="flex items-center gap-3 pt-2">
            <a 
              href={siteSettings.socialLinks.telegram} 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/10 hover:bg-brand-gold hover:text-brand-dark text-slate-200 transition-all duration-200"
              title="Telegram"
            >
              <Send size={18} />
            </a>
            <a 
              href={siteSettings.socialLinks.instagram} 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/10 hover:bg-brand-gold hover:text-brand-dark text-slate-200 transition-all duration-200"
              title="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a 
              href={siteSettings.socialLinks.facebook} 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/10 hover:bg-brand-gold hover:text-brand-dark text-slate-200 transition-all duration-200"
              title="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a 
              href={siteSettings.socialLinks.youtube} 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/10 hover:bg-brand-gold hover:text-brand-dark text-slate-200 transition-all duration-200"
              title="YouTube"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-0.5 after:bg-brand-gold">
            Foydali havolalar
          </h4>
          <ul className="space-y-2.5 pt-2 text-sm text-slate-300 font-medium">
            <li>
              <button 
                onClick={() => handleNavClick('home')}
                className="hover:text-brand-gold hover:translate-x-1 transition-all duration-200 text-left"
              >
                Bosh sahifa
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('about')}
                className="hover:text-brand-gold hover:translate-x-1 transition-all duration-200 text-left"
              >
                Maktab haqida
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('teachers')}
                className="hover:text-brand-gold hover:translate-x-1 transition-all duration-200 text-left"
              >
                O'qituvchilar tarkibi
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('achievements')}
                className="hover:text-brand-gold hover:translate-x-1 transition-all duration-200 text-left"
              >
                O'quvchilar yutuqlari
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('classes')}
                className="hover:text-brand-gold hover:translate-x-1 transition-all duration-200 text-left"
              >
                Sinflar va Bo'sh o'rinlar
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Secondary Links */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-0.5 after:bg-brand-gold">
            Qabul va xizmatlar
          </h4>
          <ul className="space-y-2.5 pt-2 text-sm text-slate-300 font-medium">
            <li>
              <button 
                onClick={() => handleNavClick('admission')}
                className="hover:text-brand-gold hover:translate-x-1 transition-all duration-200 text-left"
              >
                Maktabga onlayn qabul
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('gallery')}
                className="hover:text-brand-gold hover:translate-x-1 transition-all duration-200 text-left"
              >
                Fotogalereya
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('vacancies')}
                className="hover:text-brand-gold hover:translate-x-1 transition-all duration-200 text-left"
              >
                Bo'sh ish o'rinlari
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('faq')}
                className="hover:text-brand-gold hover:translate-x-1 transition-all duration-200 text-left"
              >
                Ko'p so'raladigan savollar
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('contact')}
                className="hover:text-brand-gold hover:translate-x-1 transition-all duration-200 text-left"
              >
                Aloqa va manzillar
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-0.5 after:bg-brand-gold">
            Bog'lanish
          </h4>
          <ul className="space-y-3.5 pt-2 text-sm text-slate-300 font-medium">
            <li className="flex items-start gap-2.5">
              <MapPin size={18} className="text-brand-gold shrink-0 mt-0.5" />
              <span className="leading-relaxed">{siteSettings.address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={18} className="text-brand-gold shrink-0" />
              <div className="flex flex-col">
                <a href={`tel:${siteSettings.phoneNumbers[0].replace(/\s+/g, '')}`} className="hover:text-brand-gold transition-colors duration-150">
                  {siteSettings.phoneNumbers[0]}
                </a>
                {siteSettings.phoneNumbers[1] && (
                  <a href={`tel:${siteSettings.phoneNumbers[1].replace(/\s+/g, '')}`} className="hover:text-brand-gold transition-colors duration-150 text-xs text-slate-400">
                    {siteSettings.phoneNumbers[1]}
                  </a>
                )}
              </div>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={18} className="text-brand-gold shrink-0" />
              <a href={`mailto:${siteSettings.email}`} className="hover:text-brand-gold transition-colors duration-150 break-all">
                {siteSettings.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock size={18} className="text-brand-gold shrink-0" />
              <span>{siteSettings.workingHours}</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Footer: Copyright & Legal */}
      <div className="bg-slate-950/40 border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <p className="text-center sm:text-left">
            © 2026 {siteSettings.schoolName}. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex items-center gap-4 sm:gap-6 justify-center">
            <button className="hover:text-brand-gold transition-colors duration-150">Maxfiylik siyosati</button>
            <button className="hover:text-brand-gold transition-colors duration-150">Foydalanish shartlari</button>
          </div>
        </div>
      </div>

    </footer>
  );
};
