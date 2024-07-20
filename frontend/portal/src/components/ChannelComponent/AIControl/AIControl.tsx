import { useState } from "react";
import { useDataChannel } from "@/store/dataChannel";
import { motion, AnimatePresence } from "framer-motion";

interface AIControlProps {
  userId: string;
  isEnabled: boolean;
  onToggle: () => void;
}

const AIControl: React.FC<AIControlProps> = ({
  userId,
  isEnabled,
  onToggle,
}) => {
  const profileLetter = userId.charAt(0);
  const statusColor = isEnabled ? "bg-green-500" : "bg-red-500";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex items-center justify-between p-2 sm:p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-3"
    >
      <div className="flex items-center space-x-2 sm:space-x-4">
        <div
          className={`relative w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-sm sm:text-xl font-bold text-white`}
        >
          {profileLetter}
          <div
            className={`absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 ${statusColor} rounded-full border-2 border-white`}
          ></div>
        </div>
        <span className="text-sm sm:text-lg font-medium text-gray-700">{userId}</span>
      </div>
      <Switch isEnabled={isEnabled} onToggle={onToggle} />
    </motion.div>
  );
};

const Switch: React.FC<{ isEnabled: boolean; onToggle: () => void }> = ({
  isEnabled,
  onToggle,
}) => {
  return (
    <div
      onClick={onToggle}
      className={`w-10 sm:w-14 h-5 sm:h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ease-in-out ${
        isEnabled ? "bg-orange-500" : "bg-gray-300"
      }`}
    >
      <motion.div
        layout
        className="bg-white w-4 h-4 sm:w-5 sm:h-5 rounded-full shadow-md"
        animate={{
          x: isEnabled ? 28 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </div>
  );
};

const AIControlList: React.FC = () => {
  const { dataChannel } = useDataChannel();
  const [controls, setControls] = useState([
    { userId: "123456789", isEnabled: false },
    { userId: "123456783", isEnabled: true },
    { userId: "123456785", isEnabled: true },
    { userId: "123456798", isEnabled: false },
    { userId: "123456790", isEnabled: false },
    { userId: "123456784", isEnabled: true },
    { userId: "123456786", isEnabled: true },
    { userId: "123456799", isEnabled: false },
  ]);

  const handleToggle = (userId: string) => {
    setControls(
      controls.map((control) =>
        control.userId === userId
          ? { ...control, isEnabled: !control.isEnabled }
          : control
      )
    );
  };

  const enabledControls = controls.filter((control) => control.isEnabled);
  const disabledControls = controls.filter((control) => !control.isEnabled);

  return (
    <section className="max-w-7xl mx-auto p-4 sm:p-6">
      <h1 className="text-center text-2xl sm:text-4xl font-black text-orange-500 mb-4 sm:mb-8">
        {dataChannel ? dataChannel.business_name : "ผ้าไทย"}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
      <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-lg">
          <h3 className="text-center text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-800">
            ระบบ AI ที่ปิดใช้งาน
          </h3>
          <AnimatePresence>
            {disabledControls.map((control) => (
              <AIControl
                key={control.userId}
                userId={control.userId}
                isEnabled={control.isEnabled}
                onToggle={() => handleToggle(control.userId)}
              />
            ))}
          </AnimatePresence>
        </div>

        <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-lg">
          <h3 className="text-center text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-800">
            ระบบ AI ที่เปิดใช้งาน
          </h3>
          <AnimatePresence>
            {enabledControls.map((control) => (
              <AIControl
                key={control.userId}
                userId={control.userId}
                isEnabled={control.isEnabled}
                onToggle={() => handleToggle(control.userId)}
              />
            ))}
          </AnimatePresence>
        </div>
    
      </div>
    </section>
  );
};

export default AIControlList;