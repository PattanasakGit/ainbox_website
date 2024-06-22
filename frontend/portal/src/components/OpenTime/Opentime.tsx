import React from 'react';
import { IOpenTime } from '../../models/IOpenTime';
import CustomTimeInput from './CustomTimeInput';
import './Opentime.css';

interface OpentimeProps {
  hours: IOpenTime;
  toggleOpen: (day: keyof IOpenTime) => void;
  handleTimeChange: (day: keyof IOpenTime, type: 'from' | 'to', value: string) => void;
  isEditing: boolean;
}

const Opentime: React.FC<OpentimeProps> = ({ hours, toggleOpen, handleTimeChange, isEditing }) => {
  return (
    <div className={`p-4 rounded-xl border ${isEditing ? '' : 'bg-[#f7f7f7] cursor-not-allowed'}`}>
      {Object.keys(hours).map((day) => (
        <div key={day} className="flex items-center mb-2 rounded-md p-2 h-12">
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              type="checkbox"
              checked={hours[day as keyof IOpenTime].open}
              onChange={() => toggleOpen(day as keyof IOpenTime)}
              className={`toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer ${!isEditing ? 'cursor-not-allowed' : ''}`}
              disabled={!isEditing}
            />
            <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-200 cursor-pointer"></label>
          </div>

          <label className="w-1/5 text-[#555] font-semibold">{day}</label>

          {hours[day as keyof IOpenTime].open ? (
            <div className="flex items-center">
              <CustomTimeInput
                value={hours[day as keyof IOpenTime].from}
                onChange={(value) => handleTimeChange(day as keyof IOpenTime, 'from', value)}
                isEditing={isEditing}
              />
              <span className="mx-2 text-orange-500">ถึง</span>
              <CustomTimeInput
                value={hours[day as keyof IOpenTime].to}
                onChange={(value) => handleTimeChange(day as keyof IOpenTime, 'to', value)}
                isEditing={isEditing}
              />
            </div>
          ) : (
            <span className="text-orange-500">ปิด</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Opentime;
