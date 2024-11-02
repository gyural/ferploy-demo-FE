"use client";
import React, { useEffect } from "react";
import { X } from "@phosphor-icons/react/dist/ssr";
interface SelectMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: string[]; // Assuming items are strings; adjust type as necessary
  onSelect: (item: string) => void; // Assuming the selected item is a string; adjust type as necessary
}

const SelectMenu: React.FC<SelectMenuProps> = ({ isOpen, onClose, items, onSelect }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent background scrolling when menu is open
    } else {
      document.body.style.overflow = ""; // Restore scrolling when menu is closed
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup on unmount
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end bg-black bg-opacity-50 transition-opacity ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`w-full p-4 bg-white rounded-t-lg transition-transform duration-300 transform ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className='flex justify-end'>
          <X onClick={onClose} className='w-5 h-5 cursor-pointer text-DG' />
        </div>
        <div className='flex flex-col gap-2'>
          
        </div>
      </div>
    </div>
  );
};

export default SelectMenu;