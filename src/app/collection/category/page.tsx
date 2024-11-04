'use client'
import Image from 'next/image';
import React from 'react';
import mainImage from '@/public/images/ferploy_title.png';
import BottomNav from '@/components/BottomNav';
import { DotsThreeVertical } from '@phosphor-icons/react/dist/ssr';
import SearchInput from '@/components/SearchInput';
import GroupContainer from './components/GroupContainer';
import Link from 'next/link';

export default function Page() {
  return (
    <section className='min-h-screen flex flex-col pt-[21px] px-[19px] pb-[20px] w-full'>
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
        <Link href={'/collection'}>
          <p className='text-[#898989] text-[20px] font-bold'>명함 목록</p>
        </Link>
        <p className='text-black text-[20px] font-bold'>카테고리별 목록</p>
        <div className='ml-auto cursor-pointer'>
          <DotsThreeVertical size={32} />
        </div>
      </div>
      
      <p className='mb-4'>200명</p>
      <SearchInput placeholder='이름 검색' />

      {/* scrollable content */}
      <div className='flex-grow overflow-auto'>
        <GroupContainer />
      </div>
    
      {/* BottomNav를 화면 맨 아래에 고정 */}
      <div className='fixed bottom-0 left-0 w-full z-[999]'>
        <BottomNav activeTab={2} />
      </div>
    </section>
  );
}