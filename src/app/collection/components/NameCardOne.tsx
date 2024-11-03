'use client'

import React, { useState } from 'react';
import Avatar from '@/app/(main)/components/Avatar';
import Tag from '@/app/(main)/components/Tag';
import { NameCard } from './NameCardList';
import { Check } from '@phosphor-icons/react/dist/ssr';

// NameCardOne에서 공통 타입인 ClientType을 정의


interface NameCardOneProps {
  namecard: NameCard;
}

export default function NameCardOne({ namecard }: NameCardOneProps) {
  const {
    name,
    clientType,
    mobileNumber
  } = namecard;

  const [checked, setChecked] = useState(false); // 체크 상태 관리

  const toggleCheck = () => {
    setChecked((prev) => !prev); // 체크 상태 토글
  };


  return (
    <div className="flex gap-[11px] justify-start items-center">
      {/* checkbox */}
      <div
        onClick={toggleCheck}
        className={`w-[22px] h-[22px] flex items-center justify-center cursor-pointer rounded ${
          checked ? 'bg-blue-500' : 'border border-gray-300 bg-transparent'
        }`}
      >
        {checked ? 
          (<Check size={16} weight='bold' color='white' />) : (
          <Check size={16} weight='bold' color='gray' />
          )}
    </div>
      <div className="flex gap-[15px] justify-start items-center">
        <Avatar />
        <div>
          <div className="flex items-center gap-2">
            <span>{name}</span>
            <Tag type={clientType} /> {/* clientType을 Tag에 전달 */}
          </div>
          <p>m. {mobileNumber}</p>
        </div>
      </div>
    </div>
  );
}