import React, { useState } from "react";
import { MdNotificationAdd } from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Rightside = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`z-50 flex flex-col w-auto lg:w-[235px] xl:w-80 bg-[#0098F1]   rounded-md transition-all duration-300 ease-in-out ${
        isExpanded ? "h-[250px]" : "h-[75px]"
      }`}
    >
      <div className="flex justify-between items-center text-white px-8 py-2">
        <div className="flex items-center gap-2">
          <div className="text-lg">Notifications</div>
          <div className="text-lg">
            <MdNotificationAdd />
          </div>
        </div>
        <div className="text-xl cursor-pointer" onClick={handleToggle}>
          {isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>

      {isExpanded && (
        <div className="w-full bg-[#0098f1] rounded-lg  text-white p-4 flex flex-col gap-4">
          <div>More notifications 1</div>
          <div>More notifications 2</div>
          <div>More notifications 3</div>
          <div>More notifications 4</div>
          <div>More notifications 5</div>
        </div>
      )}
    </div>
  );
};

export default Rightside;
