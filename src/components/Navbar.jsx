import { Link, useLocation } from 'react-router-dom';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import '../styles/navbar.css';

export default function Navbar() {
  const location = useLocation();
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const navbarRef = useRef(null);
  
  const { scrollY } = useScroll();
  
  // Анимация фона при скролле (опционально)
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["linear-gradient(90deg, #2e7d32, #66bb6a)", "linear-gradient(90deg, #1b5e20, #4caf50)"]
  );

  const links = [
    { path: '/', label: 'Лента' },
    { path: '/ads', label: 'Объявления' },
    { path: '/profile', label: 'Профиль' },
    { path: '/auth', label: 'Вход' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Проверяем, прокручена ли страница
      setIsScrolled(currentScrollY > 10);
      
      // Определяем направление скролла
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Прокрутка вниз - скрываем
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY.current) {
        // Прокрутка вверх - показываем
        setIsHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Альтернативный вариант с useMotionValueEvent от Framer Motion
  useMotionValueEvent(scrollY, "change", (latest) => {
    // Эта функция будет вызываться при каждом изменении скролла
    // Можно использовать этот подход вместо useEffect, если нужна более плавная анимация
  });

  return (
    <motion.nav
      ref={navbarRef}
      className={`navbar ${isHidden ? 'hidden' : ''} ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isHidden ? -100 : 0,
        opacity: isHidden ? 0 : 1
      }}
      transition={{ 
        duration: 0.4,
        ease: "easeInOut"
      }}
      style={{
        // Применяем анимацию фона при скролле (опционально)
        background: isScrolled ? "linear-gradient(90deg, #1b5e20, #4caf50)" : 
                                "linear-gradient(90deg, #2e7d32, #66bb6a)"
      }}
    >
      <h1>🌱 Agro Net</h1>
      <ul>
        {links.map(link => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={location.pathname === link.path ? 'active' : ''}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}