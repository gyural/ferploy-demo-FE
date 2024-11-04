'use client'
import Image from 'next/image';
import React from 'react';
import mainImage from '@/public/images/ferploy_title.png';
import Mycard from './components/Mycard';
import BottomNav from '@/components/BottomNav';
import BottomSheet from './components/BottomSheet';
import Link from 'next/link';

export default function Page() {
  // Mycard 컴포넌트에 전달할 mockup data
  const myCardData = [
    {
      bg: '#465EFE',
      text: '#ffffff',
      head: '처음,\n뵙겠습니다.',
      name_eng: 'John Doe',
      name: '존 도',
      position: 'Chief Executive Officer',
      phone: '010-1234-5678',
      email: 'john.doe@example.com',
      address: '1234 Seoul St, Korea',
    },
    {
      bg: '#eaeaea',
      text: '#111111',
      head: 'CTO',
      name_eng: 'Jane Smith',
      name: '제인 스미스',
      position: 'Chief Technology Officer',
      phone: '010-8765-4321',
      email: 'jane.smith@example.com',
      address: '4321 Busan Rd, Korea',
    },
  ];

  return (
    <section className='min-h-screen max-h-screen flex flex-col pt-[21px] px-[19px] pb-[20px] w-full'>
      <div className='relative w-[20%] h-[30px] mb-[25px]'>
        <Image 
          src={mainImage} 
          alt="로그인 이미지" 
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
        
      <div className='flex justify-start gap-[18px] mb-[27px]'>
        <p className='text-black text-[20px] font-bold'>내명함</p>
        <Link
          href='/namecard/create/first'
        >
          <p className='text-[#898989] text-[20px] font-bold'>명함 등록하기</p>
        
        </Link>
      </div>
      
      <section className='flex gap-5 overflow-auto mb-3'>
        {myCardData.map((card, index) => (
          <Mycard
            key={index}
            bg={card.bg}
            text={card.text}
            head={card.head}
            name_eng={card.name_eng}
            name={card.name}
            position={card.position}
            phone={card.phone}
            email={card.email}
            address={card.address}
          />
        ))}
      </section>
      
      <section className='h-[20vh'>
        <BottomSheet/>
      </section>
      {/* BottomNav를 화면 맨 아래에 위치 */}
      <BottomNav activeTab={0} />
    </section>
  );
}