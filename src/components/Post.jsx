import { motion } from 'framer-motion';
import '../styles/card.css';

export default function Post({ author, text, image }) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
    >
      <h3>{author}</h3>
      <p>{text}</p>
      {image && <img src={image} />}
      <div className="actions">❤️ 24 · 💬 8 · 🔄</div>
    </motion.div>
  );
}
