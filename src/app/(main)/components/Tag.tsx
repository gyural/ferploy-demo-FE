// Tag.tsx
import { ClientType } from '@/app/collection/components/NameCardList';
import React from 'react';

interface TagProps {
  type?: ClientType;  // Optional ClientType
}

// 각 타입에 따른 배경색을 정의한 객체
const tagColors: { [key in ClientType]: string } = {
  파트너사: '#FF5C00',
  창업기업: '#28DE81',
  투자사: '#90EE90',
  기관: '#FFA07A',
  고객: '#FFB6C1',
  협력업체: '#465EFE',
  기타: '#D3D3D3',
};

export default function Tag({ type }: TagProps) {  // 기본값으로 '기타' 설정
  const finalType = type? type : '기타'
  console.log('type', type)
  return (
    <div
      className="px-3 py-1 rounded-full text-white text-sm font-semibold"
      style={{ backgroundColor: tagColors[finalType] }}
    >
      {type}
    </div>
  );
}