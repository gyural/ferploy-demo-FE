// FormSelect.tsx
import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormData } from './NameCardForm';
import { ClientType } from '@/app/collection/components/NameCardList';

interface FormSelectProps {
  label: string;
  register: ReturnType<UseFormRegister<FormData>>;
}

const clientTypes: ClientType[] = ['파트너사', '창업기업', '투자사', '기관', '고객', '협력업체', '기타'];

export default function FormSelect({ label, register }: FormSelectProps) {
  return (
    <div className="mb-[18px]">
      <label className="text-[18px] block text-sm font-semibold text-gray-700 mb-[11px]">
        {label}
      </label>
      <select
        {...register}
        className="py-[11px] px-[15px] block w-full bg-[#F2F3F5] rounded-[5px] shadow-sm focus:ring focus:ring-blue-300 outline-[#465EFE]"
      >
        {clientTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}