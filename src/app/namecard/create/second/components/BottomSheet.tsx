import React, { useEffect, useState } from 'react';
import thumbnail from '@/public/images/message_bottmesheet_thumnail.png';
import Image from 'next/image';
import { Info } from '@phosphor-icons/react';
import { sendMessage } from '../service/sendMessage';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BottomSheet({ isOpen, onClose }: BottomSheetProps) {
  const [showTooltip, setShowTooltip] = useState(true);

  const toggleTooltip = () => setShowTooltip(prev => !prev);
  const handleClose = () => {
    onClose();
  };
  const handleMessageSumbit = () =>{
    sendMessage()
    handleClose()
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
          onClick={handleClose}
        ></div>
      )}

      <div
        className={`fixed inset-x-0 bottom-0 bg-white rounded-t-lg p-5 transition-transform duration-300 ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ zIndex: 1000 }}
      >
        <div className='w-full flex justify-end relative'>
          <div className="relative">
            <Info size={24} color='#D9D9D9' weight="fill" onClick={toggleTooltip} className="cursor-pointer" />
            
            {showTooltip && (
              <div 
                className="absolute top-[28px] right-0 bg-white opacity-90 text-black text-sm rounded-md 
                  p-2.5 shadow-lg w-[65vw] border border-gray-300 z-50"
              >
                <p className='text-[12px]' style={{ color: '#1D1D1D' }}>
                  메시지와 명함 이미지를 보내면 번호를 저장할 확률이 업계 평균 35% 더 올라가요.
                </p>
                {/* Triangle */}
                <div
                  className="absolute -top-[7px] right-[10px] w-3 h-3 bg-white rotate-360 border border-gray-300"
                  style={{
                    zIndex: -1,
                    transform: 'rotate(-225deg)',
                    borderColor: 'transparent transparent #C6C6C6 #C6C6C6'
                  }}
                ></div>
              </div>
            )}
          </div>
        </div>

        <div className='w-full flex justify-center mb-1'>
          <Image src={thumbnail} alt="썸네일" />
        </div>

        <h2 className="text-lg font-semibold mb-4 text-center">김미나님에게 반가움을 표시해 보세요.</h2>
        
          <textarea
            className='text-center py-[24px] px-[23px] bg-[#FDFDFD] rounded-[8px] border border-[#DFDFDF] text-[#707277] text-[14px] font-medium mb-[18px] w-full outline-none'
            value={`김미나 주임님, 안녕하세요?\n오늘 인사드린 앰플랩 대표 김진영입니다.\n말씀주신 마케팅 컨설팅 도움드릴 기회가 꼭 닿길 바랍니다. 먼길 고생 많으셨고, 조심히 복귀하세요!`}
            
          />

        <div className='w-full flex gap-4'>
          <button className='w-1/2 py-[17px] bg-[#F2F3F5] text-[#9B9B9B] text-[18px] font-medium text-center rounded-[8px]'>
            수정하기
          </button>
          <button 
            onClick={handleMessageSumbit}
            className='w-1/2 py-[17px] bg-[#465EFE] text-white text-[18px] font-medium text-center rounded-[8px]'>
            안부보내기
          </button>
        </div>
      </div>
    </>
  );
}