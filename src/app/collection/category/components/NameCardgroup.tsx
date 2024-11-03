import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

// Swiper 스타일을 import
import 'swiper/css';
import 'swiper/css/effect-cards';
import GroupTag from './GroupTag';

const NameCardGroup: React.FC = () => {
  return (
    <div className='w-[40%] h-[220px]  mb-[34%]'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        style={{ width: '100%', height: '100%',  borderRadius: '5px'}} // 부모 크기에 맞게 설정
      >
        {Array.from({ length: 9 }, (_, index) => (
          <SwiperSlide key={index} style={{ display: 'flex', alignItems: 'center', 
            justifyContent: 'center', marginBottom: '44px',}}>
            Slide {index + 1}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='w-full mt-[20%] flex flex-col items-center justify-center'>
        <p 
        className='w-full text-[#3D3D3D] text-[16px] font-semibold text-center
        '>AI 신기술 사업</p>
        {/* tagGroup  tag는 일단 2개로 제한함*/}
        <div className='w-[calc(100% + 10px)] flex justify-around gap-1 overflow-auto mt-2'>
          <GroupTag name='원단' />
          <GroupTag name='부자재' />
        </div>
      </div>
    </div>
  );
};

export default NameCardGroup;