'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import mainImage from '@/public/images/ferploy_title.png';
import BottomNav from '@/components/BottomNav';
import Link from 'next/link';
import SelectedNameCard from './components/SelectedNameCard';
import PlusNameCard from './components/PlusNameCard';
import NameCardForm from './components/NameCardForm';
import BottomSheet from './components/BottomSheet'; // Import the BottomSheet component

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

export default function Page() {
  // State to control the BottomSheet visibility
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  // Function to open BottomSheet
  const openBottomSheet = () => setIsBottomSheetOpen(true);
  // Function to close BottomSheet
  const closeBottomSheet = () => setIsBottomSheetOpen(false);

  return (
    <section className='min-h-screen flex flex-col pt-[21px] px-[19px] pb-[13vh] w-full'>
      {/* HEADER */}
      <div className='relative w-[20%] h-[30px] mb-[25px]'>
        <Image 
          src={mainImage} 
          alt="로그인 이미지" 
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
        
      <div className='flex justify-start gap-[18px] mb-[9px] items-center'>
        <Link href='/namecard/mycard'>
          <p className='text-[#898989] text-[20px] font-bold'>내 명함</p>
        </Link>
        <p className='text-black text-[20px] font-bold'>명함등록하기</p>
      </div>
      
      {/* scrollable content */}
      <div className='flex-grow overflow-auto mt-6'>
        <div className='flex gap-2 items-center'>
          <SelectedNameCard {...myCardData[0]} />
          <PlusNameCard /> {/* Open BottomSheet on click */}
        </div>
        <NameCardForm onOpen={openBottomSheet} />
      </div>
    
      {/* BottomSheet Component */}
      <BottomSheet isOpen={isBottomSheetOpen}  onClose={closeBottomSheet} />

      {/* BottomNav fixed at the bottom */}
      <div className='fixed bottom-0 left-0 w-full z-[999]'>
        <BottomNav activeTab={1} />
      </div>
    </section>
  );
}