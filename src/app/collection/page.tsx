'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import mainImage from '@/public/images/ferploy_title.png';
import BottomNav from '@/components/BottomNav';
import { DotsThreeVertical } from '@phosphor-icons/react/dist/ssr';
import NameCardList from './components/NameCardList';
import SearchInput from '@/components/SearchInput';
import Link from 'next/link';
import { GetNameCardResponse, getAllNameCards } from '../api/getNameCard';
import { useAuthStore } from '../hooks/useAuthStore';
import { useRouter } from 'next/navigation';
export default function Page() {
  const router = useRouter();
  // Mycard 컴포넌트에 전달할 mockup data
  const [nameCards, setNameCards] = useState<GetNameCardResponse>({
    myNameCardList: [],
    nameCardList: []
  });
  const [isLoading, setIsLoading] = useState(false);
  const globalUser = useAuthStore((state) => state.user); // 현재 유저 상태

  useEffect(() => {

    const fetchNameCards = async (accToken: string) => {
      setIsLoading(true); // 로딩 시작
      try {
        const nameCardsData = await getAllNameCards(accToken);
        setNameCards(nameCardsData); // 가져온 NameCard 데이터를 상태에 저장
        console.log('in collection', nameCardsData)
      } catch (error) {
        console.error("NameCard 데이터를 가져오는 중 에러 발생:", error);
      } finally {
        setIsLoading(false); // 로딩 종료
      }
    };

    if (globalUser?.accessToken) {
      fetchNameCards(globalUser.accessToken); // globalUser에서 accessToken이 있다면 즉시 요청
    } else {
      // logout 처리
      alert("로그인 후 이용해주세요")
      router.push('/start')
    }
  }, [globalUser?.accessToken]); // accessToken이 변할 때마다 실행

  return (
    <section className='min-h-screen max-h-screen flex flex-col pt-[21px] px-[19px] pb-[20px] w-full'>
      <div className='relative w-[20%] h-[30px] mb-[25px]'>
        <Image 
          src={mainImage} 
          alt="로그인 이미지" 
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
        
      <div className='flex justify-start gap-[18px] mb-[9px] items-center'>
        <p className='text-black text-[20px] font-bold'>명함 목록</p>
        <Link href='/collection/category'>
          <p className='text-[#898989] text-[20px] font-bold'>카테고리별 목록</p>
        </Link>
        <div className='ml-auto cursor-pointer'> {/* 아이콘을 오른쪽으로 이동시키기 위해 ml-auto 사용 */}
          <DotsThreeVertical size={32} />
        </div>
      </div>
      
      
      <p className='mb-4'>200명</p>
      <SearchInput placeholder='이름 검색'></SearchInput>
      
      <div className='p-5 pb-20 overflow-auto' 
        >
          {/* bottomSheet */}
          <div className='w-full'>
            <NameCardList nameCardList={nameCards.nameCardList}></NameCardList>
          </div>
        </div>
      
      {/* BottomNav를 화면 맨 아래에 위치 */}
      <BottomNav activeTab={2} />
    </section>
  );
}