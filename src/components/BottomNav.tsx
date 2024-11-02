import Link from 'next/link';
import React from 'react';
import tab1_grey from '@/public/images/tab1_grey.png';
import tab2_grey from '@/public/images/tab2_grey.png';
import tab3_grey from '@/public/images/tab3_grey.png';
import tab4_grey from '@/public/images/tab4_grey.png';
import tab1_blue from '@/public/images/tab1_blue.png';
import tab2_blue from '@/public/images/tab2_blue.png';
import tab3_blue from '@/public/images/tab3_blue.png';
import tab4_blue from '@/public/images/tab4_blue.png';
import Image, { StaticImageData } from 'next/image';

interface Tab {
  href: string;
  label: string;
  iconGrey: StaticImageData;
  iconBlue: StaticImageData;
}

const tabs: Tab[] = [
  { href: '/', label: '메인', iconGrey: tab1_grey, iconBlue: tab1_blue },
  { href: '/tab2', label: '탭 2', iconGrey: tab2_grey, iconBlue: tab2_blue },
  { href: '/tab3', label: '탭 3', iconGrey: tab3_grey, iconBlue: tab3_blue },
  { href: '/tab4', label: '탭 4', iconGrey: tab4_grey, iconBlue: tab4_blue },
];

interface BottomNavProps {
  activeTab: number; // 부모로부터 받은 활성화된 탭 인덱스
}

export default function BottomNav({ activeTab }: BottomNavProps) {
  return (
    <nav className='bg-white border-t border-gray-200'>
      <div className='flex justify-between items-center p-4'>
        {tabs.map((tab, index) => (
          <Link key={index} href={tab.href} className='flex flex-col items-center'>
            <Image
              src={activeTab === index ? tab.iconBlue : tab.iconGrey}
              alt={tab.label}
              width={24}
              height={24}
            />
            <span className={`text-sm ${activeTab === index ? 'text-blue-500' : 'text-gray-500'}`}>
              {tab.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}