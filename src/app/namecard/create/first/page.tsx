'use client'
import Image from 'next/image';
import React from 'react';
import mainImage from '@/public/images/ferploy_title.png';
import BottomNav from '@/components/BottomNav';
import { DotsThreeVertical } from '@phosphor-icons/react/dist/ssr';
import SearchInput from '@/components/SearchInput';
import SelectPhotoOption from '../../components/SelectPhotoOption';
import Link from 'next/link';

export default function Page() {
  // Mycard 컴포넌트에 전달할 mockup data
  
  return (
    <section className='min-h-screen flex flex-col pt-[21px] px-[19px] pb-[14vh] w-full'>
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
        <div className='ml-auto cursor-pointer'>
          <DotsThreeVertical size={32} />
        </div>
      </div>
      
      {/* scrollable content */}
      <div className='flex-grow overflow-auto mt-[54px]'>
        <SelectPhotoOption/>
      </div>
    
      {/* BottomNav를 화면 맨 아래에 고정 */}
      <div className='fixed bottom-0 left-0 w-full z-[999]'>
        <BottomNav activeTab={1} />
      </div>
    </section>
  );
}