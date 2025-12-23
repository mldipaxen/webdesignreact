import { motion, AnimatePresence } from 'framer-motion';
import { FaTractor, FaSeedling } from 'react-icons/fa';
import img1 from '../assets/images/2.jpg';
import img2 from '../assets/images/3.jpg';
import img12 from '../assets/images/12.jpg';
import img13 from '../assets/images/13.jpg';
import img14 from '../assets/images/14.jpg';
import img15 from '../assets/images/15.jpg';
import img16 from '../assets/images/16.jpg';
import img17 from '../assets/images/17.jpg';
import img18 from '../assets/images/18.jpg';
import img19 from '../assets/images/19.jpg';
import '../styles/ads.css';
import { useState } from 'react';

const ads = [
  { id:1, type:'tech', title:'Продам комбайн John Deere', description:'2018 год, отличное состояние, 1500 моточасов, с документами.', price:'💰 2 500 000 ₽', location:'📍 Московская область', image:img1 },
  { id:2, type:'crop', title:'Продажа пшеницы', description:'3 класс, урожай 2023, 50 тонн, доставка по региону возможна.', price:'💰 15 ₽ / кг', location:'📍 Краснодарский край', image:img2 },
  { id:3, type:'tech', title:'Трактор нового поколения', description:'Мощность 150 л.с., состояние нового, 2022 год выпуска.', price:'💰 3 200 000 ₽', location:'📍 Воронежская область', image:img14 },
  { id:4, type:'crop', title:'Пшеница урожая 2024', description:'Сорт высшего класса, 100 тонн, хранение и доставка возможны.', price:'💰 18 ₽ / кг', location:'📍 Ростовская область', image:img15 },
  { id:5, type:'tech', title:'Комбайн в работе', description:'Идеально подходит для уборки зерновых культур, 2019 год.', price:'💰 2 800 000 ₽', location:'📍 Краснодарский край', image:img16 },
  { id:6, type:'tech', title:'Склад с техникой', description:'Продается оборудование для хранения и обработки зерна.', price:'💰 1 500 000 ₽', location:'📍 Московская область', image:img17 },
  { id:7, type:'crop', title:'Семена и удобрения', description:'Полный комплект семян и удобрений для посевной кампании.', price:'💰 50 000 ₽', location:'📍 Тульская область', image:img18 },
  { id:8, type:'crop', title:'Овощехранилище', description:'Современное хранилище для овощей, холодильная камера, вместимость 200 тонн.', price:'💰 1 800 000 ₽', location:'📍 Калужская область', image:img19 }
];

function AdCard({ ad, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="ad-card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <img src={ad.image} alt={ad.title} className="ad-image" />

      <div className="ad-type">
        {ad.type === 'tech' && <FaTractor color="#2e7d32" />}
        {ad.type === 'crop' && <FaSeedling color="#2e7d32" />}
        <span>{ad.type === 'tech' ? 'Техника' : 'Урожай'}</span>
      </div>

      <h3>{ad.title}</h3>
      <p>{ad.price}</p>
      <p>{ad.location}</p>

      <button className="details-btn" onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Скрыть' : 'Подробнее'}
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key={`details-${ad.id}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="ad-details"
          >
            <p>{ad.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Ads() {
  return (
    <div className="container">
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ marginBottom: '20px' }}>
        Объявления
      </motion.h2>

      <div className="ads-grid">
        {ads.map((ad, index) => (
          <AdCard key={ad.id} ad={ad} index={index} />
        ))}
      </div>
    </div>
  );
}
