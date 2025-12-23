import { motion } from 'framer-motion';
import '../styles/card.css';

export default function Card({ post }) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="card-header">
        <img src={post.avatar} alt="Аватар" className="avatar" />
        <div>
          <h4>{post.author}</h4>
        </div>
      </div>

      <div className="card-body">
        <p>{post.text}</p>

        {post.image && <img src={post.image} alt="Пост" className="post-image" />}

        {post.images && (
          <div className="grid-2 mt-3">
            {post.images.map((img, i) => (
              <img key={i} src={img} alt="Пост" className="post-image-grid" />
            ))}
          </div>
        )}
      </div>

      <div className="card-footer d-flex justify-between">
        <span>❤️ {post.likes}</span>
        <span>💬 {post.comments}</span>
      </div>
    </motion.div>
  );
}
