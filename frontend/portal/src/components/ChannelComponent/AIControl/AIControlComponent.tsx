import React, { useState } from 'react';

interface AIControlProps {
  userId: string;
  isEnabled: boolean;
  onToggle: () => void;
}

const AIControl: React.FC<AIControlProps> = ({ userId, isEnabled, onToggle }) => {
  const profileLetter = userId.charAt(0);
  const statusColor = isEnabled ? 'bg-green-500' : 'bg-red-500';

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
      <div className="flex items-center">
        <div className={`relative w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold`}>
          {profileLetter}
          <div className={`absolute bottom-0 right-0 w-3 h-3 ${statusColor} rounded-full border-2 border-white`}></div>
        </div>
        <span className="ml-4">{userId}</span>
      </div>
      <Switch isEnabled={isEnabled} onToggle={onToggle} />
    </div>
  );
};

interface SwitchProps {
  isEnabled: boolean;
  onToggle: () => void;
}

const Switch: React.FC<SwitchProps> = ({ isEnabled, onToggle }) => {
  return (
    <div
      onClick={onToggle}
      className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer ${
        isEnabled ? 'bg-orange-600' : 'bg-gray-300'
      }`}
    >
      <div
        className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
          isEnabled ? 'translate-x-7' : ''
        }`}
      />
    </div>
  );
};

export default AIControl;