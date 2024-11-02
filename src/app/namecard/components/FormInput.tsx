import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface FormInputProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({ label, name, register, onChange }: FormInputProps) {
  return (
    <div>
      <label className="block mb-1 text-left">{label}:</label>
      <input
        type="text"
        {...register(name)}
        className="w-full p-2 mb-2 border rounded"
        onChange={onChange}
      />
    </div>
  );
}