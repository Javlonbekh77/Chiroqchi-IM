/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, User, Phone, GraduationCap, ChevronDown } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, setCurrentTab }) => {
  const { siteSettings } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [activeLang, setActiveLang] = useState<'uz' | 'ru' | 'en'>('uz');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'home', label: 'Bosh sahifa' },
    { id: 'about', label: 'Maktab haqida' },
    { id: 'teachers', label: 'O\'qituvchilar' },
    { id: 'achievements', label: 'Yutuqlar' },
    { id: 'news', label: 'Yangiliklar' },
    { id: 'events', label: 'Tadbirlar' },
    { id: 'classes', label: 'Sinflar' },
    { id: 'admission', label: 'Qabul' },
    { id: 'gallery', label: 'Galereya' },
    { id: 'vacancies', label: 'Vakansiyalar' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Bog\'lanish' },
  ];

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getLangLabel = (lang: string) => {
    switch (lang) {
      case 'ru': return 'RU';
      case 'en': return 'EN';
      default: return 'O\'Z';
    }
  };

  return (
    <>
      {/* Top Banner (Announcement Bar) */}
      {siteSettings.announcementBar.enabled && (
        <div 
          id="announcement-bar"
          className="w-full text-white text-center py-2 px-4 text-xs sm:text-sm font-medium relative z-50 transition-all duration-300"
          style={{ backgroundColor: siteSettings.announcementBar.color }}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <span className="mx-auto flex items-center gap-2">
              <GraduationCap size={16} />
              {siteSettings.announcementBar.text}
            </span>
          </div>
        </div>
      )}

      {/* Main Header */}
      <header
        id="main-header"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-brand-bg shadow-md py-3' 
            : 'bg-brand-bg/95 backdrop-blur-md py-4 border-b border-[#EAE3D2]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & School Name */}
          <div 
            id="header-logo"
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center p-1 shadow-md border border-gray-100 group-hover:scale-105 transition-transform duration-200 shrink-0">
              <img src="/image.png" alt="Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </div>
            <div>
              <h1 className="font-serif font-bold text-lg sm:text-xl tracking-tight text-brand-dark group-hover:text-brand-primary transition-colors duration-200">
                {siteSettings.schoolName}
              </h1>
              <p className="text-[10px] text-gray-500 font-medium uppercase tracking-widest hidden sm:block">
                Ixtisoslashtirilgan Maktab
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 relative ${
                  currentTab === item.id
                    ? 'text-brand-primary bg-brand-light'
                    : 'text-gray-600 hover:text-brand-primary hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions: Lang, Admin, CTA */}
          <div className="hidden xl:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative">
              <button
                id="lang-selector"
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold text-gray-600 hover:bg-slate-50 border border-gray-200 hover:border-brand-primary transition-all duration-200"
              >
                <Globe size={16} className="text-gray-400" />
                <span>{getLangLabel(activeLang)}</span>
                <ChevronDown size={14} className="text-gray-400" />
              </button>
              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-1.5 w-24 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50">
                  {(['uz', 'ru', 'en'] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setActiveLang(lang);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs font-semibold hover:bg-brand-light hover:text-brand-primary transition-colors duration-200 ${
                        activeLang === lang ? 'text-brand-primary bg-brand-light' : 'text-gray-700'
                      }`}
                    >
                      {lang === 'uz' ? 'O\'zbek' : lang === 'ru' ? 'Русский' : 'English'}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Admin Login Shortcut */}
            <button
              id="admin-nav-btn"
              onClick={() => handleNavClick('admin')}
              className={`p-2 rounded-lg text-gray-500 hover:text-brand-primary hover:bg-brand-light transition-all duration-200 border border-gray-200 hover:border-brand-primary ${
                currentTab === 'admin' ? 'text-brand-primary bg-brand-light border-brand-primary' : ''
              }`}
              title="Admin Panel"
            >
              <User size={18} />
            </button>

            {/* CTA Button */}
            <button
              id="header-cta-btn"
              onClick={() => handleNavClick('admission')}
              className="px-4 py-2 rounded-lg bg-brand-primary text-white font-semibold text-sm hover:bg-brand-dark hover:shadow-lg transition-all duration-200 transform active:scale-95"
            >
              Qabulga ariza berish
            </button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="xl:hidden flex items-center gap-2">
            {/* Lang switcher on mobile header */}
            <button
              onClick={() => {
                const nextLang = activeLang === 'uz' ? 'ru' : activeLang === 'ru' ? 'en' : 'uz';
                setActiveLang(nextLang);
              }}
              className="p-2 rounded-lg text-gray-500 border border-gray-100 hover:bg-gray-50"
              title="Tilni o'zgartirish"
            >
              <Globe size={18} />
            </button>

            {/* Admin icon on mobile header */}
            <button
              onClick={() => handleNavClick('admin')}
              className="p-2 rounded-lg text-gray-500 border border-gray-100 hover:bg-gray-50"
              title="Admin Panel"
            >
              <User size={18} />
            </button>

            {/* Hamburger button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-50 focus:outline-none border border-gray-100"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div id="mobile-menu-drawer" className="xl:hidden fixed inset-0 z-50 flex">
          {/* Overlay background */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer body */}
          <div className="relative flex flex-col w-full max-w-xs bg-brand-bg h-full shadow-2xl z-50 animate-fade-in">
            {/* Header of Drawer */}
            <div className="flex items-center justify-between p-4 border-b border-[#EAE3D2]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center p-0.5 shadow-sm border border-gray-100 shrink-0">
                  <img src="/image.png" alt="Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <h2 className="font-serif font-bold text-sm text-brand-dark">
                  {siteSettings.schoolName}
                </h2>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-gray-500 hover:bg-brand-light"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation list */}
            <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 ${
                    currentTab === item.id
                      ? 'text-brand-primary bg-brand-light'
                      : 'text-gray-700 hover:bg-brand-light hover:text-brand-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Bottom Panel of Drawer */}
            <div className="p-4 border-t border-[#EAE3D2] space-y-3">
              <div className="flex items-center gap-2 text-xs text-gray-500 px-2">
                <Phone size={14} />
                <span>{siteSettings.phoneNumbers[0]}</span>
              </div>
              <button
                onClick={() => handleNavClick('admission')}
                className="w-full py-2.5 rounded-xl bg-brand-primary text-white font-bold text-sm text-center shadow-lg hover:bg-brand-dark transition-colors duration-200 block"
              >
                Qabulga ariza topshirish
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
