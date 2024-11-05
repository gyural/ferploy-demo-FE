'use client'
import Image from 'next/image';
import React from 'react';
import mainImage from '@/public/images/ferploy_title.png';
import BottomNav from '@/components/BottomNav';
import { DotsThreeVertical } from '@phosphor-icons/react/dist/ssr';
import NameCardList from './components/NameCardList';
import SearchInput from '@/components/SearchInput';
import Link from 'next/link';

export default function Page() {
  // Mycard 컴포넌트에 전달할 mockup data
  
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
        
      <div className='flex justify-start gap-[18px] mb-[9px] items-center'>
        <p className='text-black text-[20px] font-bold'>명함 목록</p>
        <Link href='/collection/category'>
          <p className='text-[#898989] text-[20px] font-bold'>카테고리별 목록</p>
        </Link>
        <div className='ml-auto cursor-pointer'> {/* 아이콘을 오른쪽으로 이동시키기 위해 ml-auto 사용 */}
          <DotsThreeVertical size={32} />
        </div>
      </div>
      
      
      <p className='mb-4'>200명</p>
      <SearchInput placeholder='이름 검색'></SearchInput>
      
      <div className='p-5 pb-20 overflow-auto' 
        >
          {/* bottomSheet */}
          <div className='w-full'>
            <NameCardList></NameCardList>
          </div>
        </div>
      
      {/* BottomNav를 화면 맨 아래에 위치 */}
      <BottomNav activeTab={2} />
    </section>
  );
}