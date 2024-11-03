import React from 'react'
import NameCardgroup from './NameCardgroup'
export default function GroupContainer() {
  return (
    <section className='flex gap-[10%] px-[22px] mt-[7%] flex-wrap pb-[100px]'>
        <NameCardgroup></NameCardgroup>
        <NameCardgroup></NameCardgroup>

      <NameCardgroup></NameCardgroup>
    </section>
  )
}
