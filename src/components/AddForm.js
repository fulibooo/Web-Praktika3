import React, { useState } from 'react';
import './AddForm.css';

function AddForm({ onAddTravel }) {
  const [formData, setFormData] = useState({
    country: '',
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.country && formData.title && formData.description) {
      onAddTravel(formData);
      setFormData({
        country: '',
        title: '',
        description: ''
      });
    }
  };

  return (
    <div className="add-form-card">
      <h3>Добавить путешествие</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="country"
          placeholder="Страна *"
          value={formData.country}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Название *"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Краткое описание *"
          value={formData.description}
          onChange={handleChange}
          rows="3"
          required
        />
        <button type="submit" className="submit-button">
          Добавить
        </button>
      </form>
    </div>
  );
}

export default AddForm;