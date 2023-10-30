import React, { useState } from 'react';

const WethersForm = ({ getCity }) => {
  const [city, setCity] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    getCity(city);
  };
  const handleChange = e => {
    setCity(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="city" value={city} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default WethersForm;
