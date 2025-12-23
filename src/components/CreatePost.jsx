import { useState } from 'react';
import { motion } from 'framer-motion';

export default function CreatePost({ onPost }) {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = () => {
    if (!text && !image) return;
    onPost({ text, image, author: 'Вы', likes: 0, comments: 0, avatar: '/src/assets/images/4.jpg' });
    setText(''); setImage(null);
  };

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <textarea
        placeholder="Что у вас нового?"
        value={text}
        onChange={e => setText(e.target.value)}
        style={{ width: '100%', padding: '10px', borderRadius: '12px', border: '1px solid #ccc' }}
      />
      <input type="file" onChange={e => setImage(URL.createObjectURL(e.target.files[0]))} style={{ marginTop: '10px' }} />
      <motion.button
        className="primary"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSubmit}
        style={{ marginTop: '10px' }}
      >
        Опубликовать
      </motion.button>
    </motion.div>
  );
}
