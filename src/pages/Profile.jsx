import { motion } from 'framer-motion';
import Card from '../components/Card';
import '../styles/profile.css';

import avatarImg from '../assets/images/4.jpg';
import post1Img from '../assets/images/1.jpg';
import post2Img from '../assets/images/2.jpg';
import post3Img from '../assets/images/4.jpg';

const user = {
  name: 'Иван Петров',
  farm: 'Фермерское хозяйство "Петров и сыновья"',
  region: 'Московская область',
  avatar: avatarImg,
  stats: { posts: 156, followers: 1245, following: 589, ads: 24 },
  posts: [
    { id: 1, avatar: avatarImg, image: post1Img, likes: 24, comments: 8, text: 'Новый урожай пшеницы 2023' },
    { id: 2, avatar: avatarImg, image: post2Img, likes: 42, comments: 15, text: 'Техника в работе' },
    { id: 3, avatar: avatarImg, image: post3Img, likes: 18, comments: 5, text: 'Подготовка к посевной' }
  ]
};

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={user.avatar} alt="Аватар" className="avatar-lg" />
        <div className="profile-info">
          <h2>{user.name}</h2>
          <p>{user.farm}</p>
          <p>📍 {user.region}</p>
        </div>
      </div>

      <div className="profile-stats">
        <div className="stat-card">
          <h3>{user.stats.posts}</h3>
          <p>Публикаций</p>
        </div>
        <div className="stat-card">
          <h3>{user.stats.followers}</h3>
          <p>Подписчиков</p>
        </div>
        <div className="stat-card">
          <h3>{user.stats.following}</h3>
          <p>Подписок</p>
        </div>
        <div className="stat-card">
          <h3>{user.stats.ads}</h3>
          <p>Объявления</p>
        </div>
      </div>

      <h3 className="mt-4">Публикации</h3>
      <div className="profile-posts">
        {user.posts.map(post => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: post.id * 0.1 }}
          >
            <Card post={post} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
