import React from 'react';

export default function Keybs({keybsObj}) {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <img src={keybsObj.picname} alt={keybsObj.name} />
        <p>
        {keybsObj.name}
        </p>
      </div>
    </div>
  );
}

