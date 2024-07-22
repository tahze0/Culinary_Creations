import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Calendar, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  const imagePath = `${process.env.PUBLIC_URL}/image1.jpg`;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center', color: '#FF7F50' }}>
        {t('welcome')}
      </h1>
      <p style={{ fontSize: '18px', marginBottom: '40px', textAlign: 'center' }}>
        {t('discover')}
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
        <FeatureCard
          to="/explore"
          icon={<Book size={48} color="#FF7F50" />}
          title={t('exploreRecipes')}
          description={t('exploreDescription')}
        />
        <FeatureCard
          to="/register"
          icon={<Calendar size={48} color="#FF7F50" />}
          title={t('registerClasses')}
          description={t('registerDescription')}
        />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <img
          src={imagePath}
          alt="Culinary Creations"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
        />
      </div>

      <div className="card">
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center', color: '#FF7F50' }}>
          {t('userReviews')}
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={24} color="#FFD700" style={{ marginRight: '5px' }} />
          ))}
        </div>
        <p style={{ fontStyle: 'italic', fontSize: '18px', marginBottom: '10px' }}>
          "{t('reviewQuote')}"
        </p>
        <p style={{ textAlign: 'right', fontWeight: 'bold' }}>- {t('reviewAuthor')}</p>
      </div>
    </div>
  );
};

const FeatureCard = ({ to, icon, title, description }) => (
  <Link to={to} className="card" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
    <div style={{ marginBottom: '20px' }}>{icon}</div>
    <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px', color: '#FF7F50' }}>{title}</h2>
    <p>{description}</p>
  </Link>
);

export default Home;