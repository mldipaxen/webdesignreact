import { motion } from 'framer-motion';
import Card from '../components/Card';
import '../styles/feed.css';

import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';

import img7 from '../assets/images/7.jpg';
import img8 from '../assets/images/8.jpg';
import img12 from '../assets/images/12.jpg';
import img13 from '../assets/images/13.jpg';

import avatar1 from '../assets/images/4.jpg';
import avatar2 from '../assets/images/5.jpg';
import avatar3 from '../assets/images/6.jpg';
import avatar4 from '../assets/images/9.jpg';
import avatar5 from '../assets/images/10.jpg';
import avatar6 from '../assets/images/11.jpg';

const posts = [
  { id:1, author:'Иван Петров', avatar: avatar1, text:'Отличный урожай пшеницы 🌾', image:img1, likes:24, comments:8 },
  { id:2, author:'Мария Сидорова', avatar: avatar2, text:'Приобрели новую технику для обработки почвы.', images:[img2,img3], likes:42, comments:15 },
  { id:3, author:'Сергей Козлов', avatar: avatar3, text:'Наша ферма перешла на органическое земледелие.', image:img1, likes:35, comments:12 },

  // новые посты
  { id:4, author:'Анна Смирнова', avatar: avatar6, text:'Посевная кампания успешно завершена 🌱', image:img12, likes:28, comments:10 },
  { id:5, author:'Дмитрий Иванов', avatar: avatar4, text:'Новая техника для полива установлена 💧', images:[img7,img8], likes:33, comments:14 },
  { id:6, author:'Екатерина Волкова', avatar: avatar5, text:'Готовимся к уборке урожая! 🚜', image:img13, likes:40, comments:20 }
];

export default function Feed() {
  return (
    <div className="feed-container">
      {posts.map(post => (
        <motion.div
          key={post.id}
          initial={{ opacity:0, y:20 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.5, delay:post.id*0.1 }}
        >
          <Card post={post} />
        </motion.div>
      ))}
    </div>
  );
}
