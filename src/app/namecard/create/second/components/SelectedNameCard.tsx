import React from 'react'
import mockQr from '@/public/images/mock/qrNobg.png';
import Image from 'next/image';
import firployTitleWhite from '@/public/images/ferploy_title_white.png'
interface SelectedNameCardProps {
  bg: string;
  text: string;
  head: string;
  name_eng: string;
  name: string;
  position: string;
  phone?: string;
  email?: string;
  address: string;
}

export default function SelectedNameCard({
  bg,
  text,
  // head,
  // name_eng,
  name,
  position,
  phone,
  email,
  address,
}: SelectedNameCardProps) {
  return (
    <div 
      className={`py-[18px] px-[19px] w-[70%] min-h-[320px] rounded-[10px] leading-normal`} 
      style={{ backgroundColor: bg, color: text }}
    > 
      <Image
        src={firployTitleWhite}
        alt="title"
        width={70}
        height={34}
      >
      </Image>
      <h2 className='text-[35px] font-semibold mb-2 mt-2.5'>
        <p className='text-[12px] font-medium mb-6'>{position}</p>
      </h2>
      <p className='text-[30px] font-medium mb-[6px]'>{name}</p>
      
      {/* 구분선 */}
      <div 
        className={`bg-[${text}] w-full h-[1px] mb-8`} 
        style={{ backgroundColor: text }} // text 색상으로 구분선 설정
      ></div>
      
      
      
      <div className='flex flex-col gap-1 items-start mb-3 font-light'>
        <p className='text-[12px]'>m. {phone}</p>
        <p className='text-[12px]'>e. {email}</p>
        <p className='text-[12px]'>{address}</p>
      </div>

      <Image
        src={mockQr}
        alt="QR Code"
        width={34}
        height={34}
      />
        
    </div>
  );
}



  
