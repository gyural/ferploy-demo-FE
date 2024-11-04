import React from 'react'
import { CaretRight } from '@phosphor-icons/react'
import { PlusCircle } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
export default function SelectPhotoOption() {
  return (
    <section>
      <div className='flex flex-col items-center'>
        <div className='w-[127px] h-[193px] bg-[#465EFE] pt-[22px] px-5 rounded-[10px] mb-[21px]'>
          <div className='w-full h-[10px] bg-white mb-2.5'></div>
          <div className='w-[56px] h-[10px] bg-white mb-2.5'></div>
          <div className='w-[40px] h-[10px] bg-white mb-2.5'></div>
        </div>

        <h1 className='text-[23px] text-black font-bold mb-10px'>명함이 있나요?</h1>
        <Link href='/namecard/create/second?photo=true'>
          <div className='flex gap-1 items-center'>
            <h2 className='text-[18px] font-medium text-[#898989]'>사진으로 명함 등록하기</h2>
            <CaretRight/>
          </div>
        </Link>
      </div>

      {/* devide */}
      <div className='h-[1px] w-full bg-[#465EFE4D] opacity-30 my-[47px]'></div>

      <div className='flex flex-col items-center'>
        <div className='w-[127px] h-[193px] border-dashed  border border-[#465EFE] bg-[rgba(70, 94, 254, 0.10)]
          py-[22px] px-5 rounded-[10px] mb-[21px] flex justify-center items-center'>
          <div className='bg-white w-9 h-9'>
            <PlusCircle size={36} weight='fill' color='#465EFE'/>
          </div>
        </div>

        <h1 className='text-[23px] text-black font-bold mb-10px'>명함이 없나요?</h1>
        
        <Link href='/namecard/create/second?photo=false'>
          <div className='flex gap-1 items-center'>
            <h2 className='text-[18px] font-medium text-[#898989]'>명함 정보 등록하기</h2>
            <CaretRight/>
          </div>
        </Link>
      </div>
    </section>
  )
}
