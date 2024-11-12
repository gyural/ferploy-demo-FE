'use client'
import Button from '@/components/Button';
import Image from 'next/image';
import React from 'react';
import mainImage from '@/public/images/ferploy_title.png';
import sally from '@/public/images/sally.png';
import googleLogo from '@/public/images/google_logo.png';
import { handleGoogleLogin } from './service/googleAuth';
export default function Page() {
  
  return (
    <section className='min-h-screen flex flex-col justify-between py-20 px-10'>
      <div>
        <div className='relative w-[20%] h-[30px] mb-[19px]'>
          <Image 
            src={mainImage} 
            alt="로그인 이미지" 
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
        <h1 className='text-[36px] font-medium text-black'>
          간편로그인 후 <br />이용이 <br />가능합니다.
        </h1>
      </div>

      <div className='relative w-full h-[400px] flex-grow mb-[57px]'>
        <Image 
          src={sally} 
          alt="로그인 이미지" 
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>

      <div className='w-full flex flex-col gap-4'>
        <Button 
          className='w-full bg-gray-50 text-black'
          text='Google로 시작하기'
          logo={googleLogo.src}
          onClick={()=>{handleGoogleLogin()}}
        />
      </div>
    </section>
  );
}