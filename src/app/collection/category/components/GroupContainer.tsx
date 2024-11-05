import React from 'react'
import nameCardGroupListDummy from '../data/nameCardGroupdummy'
import NameCardGroup from './NameCardgroup'
export default function GroupContainer() {
  return (
    <section className='flex gap-[10%] px-[22px] mt-[7%] flex-wrap pb-[100px]'>
      {nameCardGroupListDummy.map(({ groupName, hashtag, NameCardList }) => (
        <NameCardGroup
          key={groupName}  // or a unique ID if available
          groupName={groupName}
          hashtag={hashtag}
          NameCardList={NameCardList}
        />
      ))}
    </section>
  )
}
