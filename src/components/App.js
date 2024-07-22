import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { ChefHat, Book, Calendar, MessageSquare, Activity, Video, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Home from './Home';
import Explore from './Explore';
import Register from './Register';
import AskChef from './AskChef';
import NutritionalAnalysis from './NutritionalAnalysis';
import LiveCookingDemo from './LiveCookingDemo';
import './global.css';

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <nav className="navbar bg-orange-600 text-white shadow-md" style={{ padding: '1rem 0' }}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-grow">
              <Link to="/" className="navbar-logo text-3xl font-bold flex items-center hover:text-orange-200 transition duration-300">
                <ChefHat className="mr-3" size={36} />
                {t('culinaryCreations')}
              </Link>
              <div className="navbar-links flex space-x-4 ml-6">
                <NavLink to="/explore" icon={<Book className="w-5 h-5" />} text={t('explore')} />
                <NavLink to="/register" icon={<Calendar className="w-5 h-5" />} text={t('register')} />
                <NavLink to="/ask-chef" icon={<MessageSquare className="w-5 h-5" />} text={t('askChef')} />
                <NavLink to="/nutritional-analysis" icon={<Activity className="w-5 h-5" />} text={t('nutrition')} />
                <NavLink to="/live-cooking-demo" icon={<Video className="w-5 h-5" />} text={t('liveDemo')} />
              </div>
            </div>
            <div className="flex items-center space-x-2 ml-4">
              <Globe className="w-5 h-5" />
              <button 
                onClick={() => changeLanguage('en')} 
                className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-white text-orange-600' : 'hover:bg-orange-500'}`}
              >
                EN
              </button>
              <button 
                onClick={() => changeLanguage('fr')} 
                className={`px-2 py-1 rounded ${i18n.language === 'fr' ? 'bg-white text-orange-600' : 'hover:bg-orange-500'}`}
              >
                FR
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main style={{ flex: '1 0 auto' }}>
        <div className="container mx-auto mt-8 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/register" element={<Register />} />
            <Route path="/ask-chef" element={<AskChef />} />
            <Route path="/nutritional-analysis" element={<NutritionalAnalysis />} />
            <Route path="/live-cooking-demo" element={<LiveCookingDemo />} />
          </Routes>
        </div>
      </main>

      <footer style={{ flexShrink: 0 }} className="footer bg-brown-800 text-white py-8">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h3 className="footer-title text-2xl font-semibold mb-2">{t('culinaryCreations')}</h3>
          <p className="footer-subtitle mb-4 italic">{t('footerSubtitle')}</p>
          <div className="footer-contact mt-4">
            <p className="font-semibold text-xl mb-2">{t('contactUs')}</p>
            <p className="text-lg">613-000-1234</p>
            <p>{t('businessHours')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};


const NavLink = ({ to, icon, text }) => (
  <Link to={to} className="navbar-link flex items-center hover:text-orange-200 transition duration-300 text-lg">
    {icon}
    <span className="ml-2">{text}</span>
  </Link>
);

export default App;