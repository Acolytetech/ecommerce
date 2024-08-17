import React, { useState } from 'react';
import axios from 'axios';

const AddReview = ({ productId, userId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/reviews/add', { productId, userId, rating, comment });
      // Reset form or show success message
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Rating</label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="1"
          max="5"
        />
      </div>
      <div>
        <label>Comment</label>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default AddReview;
