/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AppProvider } from './context/AppContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Teachers } from './pages/Teachers';
import { Achievements } from './pages/Achievements';
import { News } from './pages/News';
import { NewsDetail } from './pages/NewsDetail';
import { Events } from './pages/Events';
import { SchoolClasses } from './pages/Classes';
import { Admission } from './pages/Admission';
import { Gallery } from './pages/Gallery';
import { Vacancies } from './pages/Vacancies';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { Admin } from './pages/Admin';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedNewsSlug, setSelectedNewsSlug] = useState<string>('');

  const renderPage = () => {
    switch (currentTab) {
      case 'home':
        return <Home setCurrentTab={setCurrentTab} setSelectedNewsSlug={setSelectedNewsSlug} />;
      case 'about':
        return <About />;
      case 'teachers':
        return <Teachers />;
      case 'achievements':
        return <Achievements />;
      case 'news':
        return <News setCurrentTab={setCurrentTab} setSelectedNewsSlug={setSelectedNewsSlug} />;
      case 'news-detail':
        return <NewsDetail currentNewsSlug={selectedNewsSlug} setCurrentTab={setCurrentTab} />;
      case 'events':
        return <Events />;
      case 'classes':
        return <SchoolClasses setCurrentTab={setCurrentTab} />;
      case 'admission':
        return <Admission />;
      case 'gallery':
        return <Gallery />;
      case 'vacancies':
        return <Vacancies />;
      case 'faq':
        return <FAQ />;
      case 'contact':
        return <Contact />;
      case 'admin':
        return <Admin />;
      default:
        return <Home setCurrentTab={setCurrentTab} setSelectedNewsSlug={setSelectedNewsSlug} />;
    }
  };

  return (
    <AppProvider>
      <div id="app-root" className="min-h-screen bg-brand-bg flex flex-col justify-between font-sans text-brand-text">
        <div>
          {/* Global Sticky Navigation Header */}
          <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />

          {/* Dynamic Page Main Content Canvas */}
          <main className="w-full">
            {renderPage()}
          </main>
        </div>

        {/* Global Footer component */}
        <Footer setCurrentTab={setCurrentTab} />
      </div>
    </AppProvider>
  );
}

