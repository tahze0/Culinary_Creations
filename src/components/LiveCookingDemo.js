import React, { useState } from 'react';
import { Calendar, Clock, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LiveCookingDemo = () => {
  const { t } = useTranslation();
  const [selectedDemo, setSelectedDemo] = useState(null);

  const upcomingDemos = [
    { id: 1, title: 'FrenchPastryTechniques', chef: 'Marie Dubois', date: '2024-07-15', time: '14:00', participants: 25 },
    { id: 2, title: 'SushiRollingMasterclass', chef: 'Haruto Tanaka', date: '2024-07-20', time: '18:00', participants: 30 },
    { id: 3, title: 'ItalianPastaFromScratch', chef: 'Luca Rossi', date: '2024-07-25', time: '16:00', participants: 20 },
  ];

  const handleDemoSelect = (demo) => {
    setSelectedDemo(demo);
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-4xl font-bold mb-8">{t('liveCookingDemonstrations')}</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">{t('upcomingDemonstrations')}</h2>
          <div className="space-y-4">
            {upcomingDemos.map(demo => (
              <button
                key={demo.id}
                onClick={() => handleDemoSelect(demo)}
                className={`w-full p-4 rounded-lg shadow-md text-left ${
                  selectedDemo && selectedDemo.id === demo.id ? 'bg-orange-200' : 'bg-white'
                }`}
              >
                <h3 className="text-xl font-semibold">{t(demo.title)}</h3>
                <p>{t('chef')}: {demo.chef}</p>
                <div className="flex items-center mt-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{demo.date}</span>
                  <Clock className="w-4 h-4 ml-4 mr-2" />
                  <span>{demo.time}</span>
                  <Users className="w-4 h-4 ml-4 mr-2" />
                  <span>{t('participantsCount', { count: demo.participants })}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div>
          {selectedDemo ? (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold mb-4">{t(selectedDemo.title)}</h2>
              <p className="text-xl mb-2">{t('chef')}: {selectedDemo.chef}</p>
              <p className="mb-4">{t('liveDemoDescription')}</p>
              <div className="flex items-center mb-2">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{selectedDemo.date}</span>
              </div>
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 mr-2" />
                <span>{selectedDemo.time}</span>
              </div>
              <div className="flex items-center mb-4">
                <Users className="w-5 h-5 mr-2" />
                <span>{t('participantsCount', { count: selectedDemo.participants })}</span>
              </div>
              <button className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition duration-300">
                {t('registerForDemo')}
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-xl text-gray-500">{t('selectDemoToViewDetails')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveCookingDemo;