import React, { useState, useEffect, useRef, useCallback } from 'react';
import { IoClose } from 'react-icons/io5';

interface ScrollableNumberInputProps {
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}

const ScrollableNumberInput: React.FC<ScrollableNumberInputProps> = ({ value, min, max, onChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const getDisplayNumbers = () => {
    const numbers = [];
    for (let i = -1; i <= 1; i++) {
      let num = value + i;
      if (num < min) num = max + (num - min + 1);
      if (num > max) num = min + (num - max - 1);
      numbers.push(num);
    }
    return numbers;
  };

  const handleScroll = useCallback((direction: 'up' | 'down') => {
    if (direction === 'up') {
      onChange(value === min ? max : value - 1);
    } else {
      onChange(value === max ? min : value + 1);
    }
  }, [value, min, max, onChange]);

  const handleWheel = useCallback((event: WheelEvent) => {
    event.preventDefault();
    const scrollSpeed = 100;
    if (event.deltaY < 0) {
      setTimeout(() => handleScroll('up'), scrollSpeed);
    } else {
      setTimeout(() => handleScroll('down'), scrollSpeed);
    }
  }, [handleScroll]);

  const handleTouchStart = useCallback((event: TouchEvent) => {
    const touchStartY = event.touches[0].clientY;
    const handleTouchMove = (moveEvent: TouchEvent) => {
      const touchEndY = moveEvent.touches[0].clientY;
      if (touchStartY - touchEndY > 10) {
        handleScroll('down');
      } else if (touchEndY - touchStartY > 10) {
        handleScroll('up');
      }
    };
    containerRef.current?.addEventListener('touchmove', handleTouchMove, { once: true });
  }, [handleScroll]);

  useEffect(() => {
    const container = containerRef.current;
    container?.addEventListener('wheel', handleWheel);
    container?.addEventListener('touchstart', handleTouchStart);

    return () => {
      container?.removeEventListener('wheel', handleWheel);
      container?.removeEventListener('touchstart', handleTouchStart);
    };
  }, [handleWheel, handleTouchStart]);

  return (
    <div ref={containerRef} className="relative w-24 h-48 overflow-hidden rounded-lg shadow-lg bg-white">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {getDisplayNumbers().map((num, index) => (
          <div
            key={index}
            className={`text-center transition-transform duration-500 ${
              index === 1
                ? 'text-orange-600 text-4xl font-bold'
                : 'text-orange-400 text-xl cursor-pointer'
            }`}
            style={{ transform: `translateY(${(index - 1) * 100}%)` }}
            onClick={() => onChange(num)}
          >
            {String(num).padStart(2, '0')}
          </div>
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-1/2 bg-transparent cursor-pointer" onClick={() => handleScroll('up')} />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-transparent cursor-pointer" onClick={() => handleScroll('down')} />
    </div>
  );
};

interface TimeInputProps {
  value?: string;
  onChange?: (value: string) => void;
  isEditing?: boolean;
}

const CustomTimeInput: React.FC<TimeInputProps> = ({ value = '00:00', onChange, isEditing }) => {
  const [showModal, setShowModal] = useState(false);
  const [hours, setHours] = useState(() => parseInt(value.split(':')[0]));
  const [minutes, setMinutes] = useState(() => parseInt(value.split(':')[1]));
  const modalRef = useRef<HTMLDivElement>(null);

  const handleSave = () => {
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    onChange?.(formattedTime);
    setShowModal(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = 'auto';
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal]);

  return (
    <div>
      <div className="relative max-w-[8rem] mx-auto">
        <input
          type="text"
          readOnly
          className={`bg-[#fffefe] border leading-none text-sm rounded-lg focus:ring-orange-100 focus:border-orange-100 block w-full p-2.5 cursor-pointer ${
            isEditing
              ? "border-orange-300 text-gray-900"
              : "border-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          value={value}
          onClick={() => setShowModal(true)}
          disabled={!isEditing}
        />
        <div className="absolute inset-y-0 right-0 top-0 flex items-center pr-3.5 pointer-events-none">
          <svg
            className={`w-4 h-4 ${
              isEditing ? "text-orange-500" : "text-gray-400 cursor-not-allowed"
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1001]">
          <div
            ref={modalRef}
            className="bg-white rounded-lg shadow-lg max-w-md w-full mx-4"
          >
            <div className="flex justify-between px-4 py-3 border-b border-gray-200">
              <h2 className="text-lg font-bold text-orange-600">เลือกเวลา</h2>
              <div
                className="cursor-pointer"
                onClick={() => setShowModal(false)}
              >
                <IoClose className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-center items-center space-x-2 mb-4">
                <ScrollableNumberInput
                  value={hours}
                  min={0}
                  max={23}
                  onChange={(value) => setHours(value)}
                />

                <span className="text-orange-600 font-bold">:</span>

                <ScrollableNumberInput
                  value={minutes}
                  min={0}
                  max={59}
                  onChange={(value) => setMinutes(value)}
                />
              </div>
            </div>
            <div className="px-4 py-3 flex justify-end">
              <button
                onClick={handleSave}
                className="w-full bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-all duration-300"
              >
                เลือกใช้เวลานี้
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomTimeInput;
