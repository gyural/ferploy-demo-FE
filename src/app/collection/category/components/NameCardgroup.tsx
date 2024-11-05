import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import { NameCard } from '../data/nameCardGroupdummy';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import GroupTag from './GroupTag';
import NameCardSmall from './NameCardSmall';

interface NameCardGroupProps {
  groupName: string;
  hashtag: string[];
  NameCardList: NameCard[];
}

const NameCardGroup = ({ groupName, hashtag, NameCardList }: NameCardGroupProps) => {
  return (
    <div className='w-[40%] h-[240px] mb-[34%]'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        style={{ width: '100%', height: '100%', borderRadius: '0px' }}
      >
        {NameCardList?.map((namecard, index) => (
          <SwiperSlide key={index}>
            <NameCardSmall nameCard={namecard} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='w-full mt-[20%] flex flex-col items-center justify-center'>
        <p className='w-full text-[#3D3D3D] text-[16px] font-semibold text-center'>
          {groupName}
        </p>
        
        <div className='w-[calc(100% + 10px)] flex justify-around gap-1 overflow-auto mt-2'>
          {hashtag.slice(0, 2).map((tag, index) => (
            <GroupTag key={index} name={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NameCardGroup;