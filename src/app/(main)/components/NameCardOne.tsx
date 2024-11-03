// NameCardOne.tsx
import React from 'react';
import Avatar from './Avatar';
import Tag from './Tag';
import { NameCard, ClientType } from './NameCardList';
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

  return (
    <div className="flex gap-[11px] justify-start items-center">
      <input className="bg-[#465EFE] text-white rounded-[5px]" type="checkbox" />
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