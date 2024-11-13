'use client'

import React, { useState } from 'react';
import Avatar from './Avatar';
import Tag from './Tag';
import { Check } from '@phosphor-icons/react/dist/ssr';
import { NameCard } from '@/app/collection/components/NameCardList';
import { NameCardDTO } from '@/app/api/getNameCard';

// NameCardOne에서 공통 타입인 ClientType을 정의


interface NameCardOneProps{
  namecard: NameCardDTO
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
        className={`w-[22px] h-[22px] flex items-center justify-center cursor-pointer rounded-[5px] ${
          checked ? 'bg-[#465EFE]' : 'border border-[#7B7B7B] bg-transparent'
        }`}
      >
        {checked ? 
          (<Check size={16} weight='bold' color='white' />) : (
          <Check size={16} weight='bold' color='#7B7B7B' />
          )}
    </div>
      <div className="flex gap-[15px] justify-start items-center">
        <Avatar 
          bgColor={namecard.bgColor? namecard.bgColor : undefined}
          tag={namecard.clientType? namecard.clientType : undefined}
        />
        <div>
          <div className="flex items-center gap-2">
            <span>{name}</span>
            <Tag type={namecard.clientType?  namecard.clientType : undefined} /> {/* clientType을 Tag에 전달 */}
          </div>
          <p>m. {mobileNumber}</p>
        </div>
      </div>
    </div>
  );
}