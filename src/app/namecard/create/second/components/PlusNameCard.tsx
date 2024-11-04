import React from 'react'
import { PlusCircle } from '@phosphor-icons/react/dist/ssr'
export default function PlusNameCard() {
  return (
    <div
      className='min-h-[270px] border-dashed border border-[#465EFE] rounded-[10px] flex justify-center items-center'
      style={{ backgroundColor: 'rgba(70, 94, 254, 0.10)' }}
    >
      <PlusCircle size={36} weight='fill' color='#465EFE' />
    </div>
  )
}
