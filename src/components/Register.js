import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Register = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    class: '',
    date: '',
    paymentInfo: ''
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setBookingConfirmed(true);
  };

  const classes = [
    'ItalianPastaMaking',
    'ThaiCurryFundamentals',
    'SushiRollingTechniques',
    'FrenchPastryBasics'
  ];

  if (bookingConfirmed) {
    return (
      <div className="container mx-auto mt-8 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4 text-orange-600">{t('bookingConfirmed')}</h1>
        <p className="mb-4 text-lg">{t('confirmationEmailSent')} <span className="font-semibold">{formData.email}</span></p>
        <p className="text-gray-600">{t('contactForInquiries')} <span className="font-semibold">613-000-1234</span></p>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-4xl font-bold mb-8 text-orange-600 text-center">{t('registerForCookingClass')}</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">{t('name')}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">{t('emailAddress')}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="class" className="block mb-2 font-semibold text-gray-700">{t('selectClass')}</label>
          <select
            id="class"
            name="class"
            value={formData.class}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">{t('chooseClass')}</option>
            {classes.map(classOption => (
              <option key={classOption} value={classOption}>{t(classOption)}</option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="date" className="block mb-2 font-semibold text-gray-700">{t('selectDate')}</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="paymentInfo" className="block mb-2 font-semibold text-gray-700">{t('enterPaymentInfo')}</label>
          <input
            type="text"
            id="paymentInfo"
            name="paymentInfo"
            value={formData.paymentInfo}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <button type="submit" className="w-full bg-orange-600 text-white py-3 px-4 rounded-md hover:bg-orange-700 transition duration-300 font-semibold">
          {t('registerNow')}
        </button>
      </form>
    </div>
  );
};

export default Register;