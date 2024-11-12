import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormData } from './NameCardForm';

interface FormInputProps {
  label: string; 
  register: ReturnType<UseFormRegister<FormData>>; // Make sure register is correctly typed
}
export default function FormInput({ label, register }: FormInputProps) {
  return (
    <div className="mb-[18px]">
      <label className="text-[18px] block text-sm font-semibold text-gray-700 mb-[11px]">
        {label}
      </label>
      <input
        {...register} // Use the passed register function directly
        className="py-[11px] px-[15px] block w-full bg-[#F2F3F5] rounded-[5px] shadow-sm focus:ring focus:ring-blue-300 outline-[#465EFE]"
        type="text"
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </div>
  );
}