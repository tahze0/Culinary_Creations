import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const chefs = [
  { id: 1, name: 'Luca Rossi', specialty: 'ItalianCuisine' },
  { id: 2, name: 'Anurak Phan', specialty: 'ThaiCuisine' },
  { id: 3, name: 'Haruto Tanaka', specialty: 'JapaneseCuisine' },
];

const AskChef = () => {
  const { t } = useTranslation();
  const [selectedChef, setSelectedChef] = useState(null);
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);

  const handleChefSelect = (chef) => {
    setSelectedChef(chef);
    setConversation([]);
  };

  const handleMessageSend = () => {
    if (message.trim() === '') return;

    const newMessage = { sender: 'user', text: message };
    setConversation([...conversation, newMessage]);
    setMessage('');

    // Simulate chef's response
    setTimeout(() => {
      const chefResponse = { sender: 'chef', text: t('chefResponse', { specialty: t(selectedChef.specialty) }) };
      setConversation(prev => [...prev, chefResponse]);
    }, 1000);
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-4xl font-bold mb-8 text-orange-600 text-center">{t('askChef')}</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 pr-8">
          <h2 className="text-2xl font-semibold mb-4 text-orange-600">{t('selectChef')}</h2>
          <div className="space-y-4">
            {chefs.map(chef => (
              <button
                key={chef.id}
                onClick={() => handleChefSelect(chef)}
                className={`w-full p-4 rounded-lg shadow-md text-left transition duration-300 ${
                  selectedChef && selectedChef.id === chef.id ? 'bg-orange-200' : 'bg-white hover:bg-orange-100'
                }`}
              >
                <h3 className="text-xl font-semibold text-orange-600">{chef.name}</h3>
                <p className="text-gray-600">{t(chef.specialty)}</p>
              </button>
            ))}
          </div>
        </div>
        <div className="w-full md:w-2/3 mt-8 md:mt-0">
          {selectedChef ? (
            <>
              <h2 className="text-2xl font-semibold mb-4 text-orange-600">{t('chatWith', { name: selectedChef.name })}</h2>
              <div className="bg-white p-4 rounded-lg shadow-md h-96 flex flex-col">
                <div className="flex-grow overflow-y-auto mb-4 space-y-4">
                  {conversation.map((msg, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg ${
                        msg.sender === 'user' ? 'bg-orange-100 ml-auto' : 'bg-gray-100'
                      } max-w-3/4`}
                    >
                      {msg.text}
                    </div>
                  ))}
                </div>
                <div className="flex">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t('typeMessage')}
                    className="flex-grow p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <button
                    onClick={handleMessageSend}
                    className="bg-orange-600 text-white p-3 rounded-r-md hover:bg-orange-700 transition duration-300"
                  >
                    <Send />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full bg-white p-8 rounded-lg shadow-md">
              <p className="text-xl text-gray-500">{t('selectChefToChat')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AskChef;