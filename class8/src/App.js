import React, { useState } from 'react';

function SimpleLocalStorage() {
  // 1. LocalStorage se data nikalna (agar pehle se save hai)
  const [name, setName] = useState(localStorage.getItem('my_name') || '');

  // 2. Button dabane par data save karna
  const handleSave = () => {
    localStorage.setItem('my_name', name);
    alert('Naam save ho gaya!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Apna naam likhein"
      />
      
      <button onClick={handleSave}>Save Karein</button>

      <p>Hello, {name}!</p>
    </div>
  );
}

export default SimpleLocalStorage;