"use client";
import React from "react";
import NameCardList from "@/app/collection/components/NameCardList";
import { NameCardDTO } from "@/app/api/getNameCard";

interface BottomSheetProps{
  nameCardList: NameCardDTO[]
}

const BottomSheet: React.FC<BottomSheetProps> = ({ nameCardList }) => {

  return (
    <div className='p-5 pb-2 h-[38vh] flex flex-col' 
          style={{
            boxShadow: '0px -4px 30px 0px rgba(0, 0, 0, 0.10)',
            borderRadius: '30px 30px 0px 0px'
          }}
        >
          <div className='flex justify-start gap-[18px] mb-2'>
            <p className='text-black text-[20px] font-bold'>명함 목록</p>
            <p className='text-[#898989] text-[20px] font-normal'>카테고리 목록</p>
          </div>

          <p className='mb-4'>200명</p>

          <input 
          type="text" placeholder='이름 검색'
          className='w-full bg-[#F5F5F5] text-[12px] text-[#AFAFAF] mb-5
          font-medium p-[9px] rounded-[5px] border-[#D9D9D9] border-[1px]'
          />
          {/* bottomSheet */}
          <div className='w-full flex-grow overflow-y-auto'>
            <NameCardList nameCardList={nameCardList}></NameCardList>
          </div>
        </div>
  );
};

export default BottomSheet;

