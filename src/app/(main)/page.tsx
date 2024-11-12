'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import mainImage from '@/public/images/ferploy_title.png';
import Mycard from './components/Mycard';
import BottomNav from '@/components/BottomNav';
import BottomSheet from './components/BottomSheet';
import Link from 'next/link';
import { getGoogleUserData } from '../service/authService';
import { useAuthStore } from '../hooks/useAuthStore';
import { NameCardDTO, getAllNameCards } from '../api/getNameCard';

export default function Page() {
  const setGlobalUser = useAuthStore((state) => state.setUser); // 유저 정보 설정 함수
  const globalUser = useAuthStore((state) => state.user); // 현재 유저 상태
  const [nameCards, setNameCards] = useState<NameCardDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(nameCards)
  useEffect(() => {
    const fetchData = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');

      if (code) {
        setIsLoading(true); // 로딩 시작

        try {
          const data = await getGoogleUserData(code); // 비동기로 데이터 가져오기
          const userData = {
            id: data.userInfo.id,
            email: data.userInfo.email,
            name: data.userInfo.name,
            given_name: data.userInfo.given_name,
            family_name: data.userInfo.family_name,
            picture: data.userInfo.picture,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
          };

          setGlobalUser(userData); // 전역 상태에 유저 데이터 저장
        } catch (error) {
          console.error('Error fetching Google user data:', error);
        } finally {
          setIsLoading(false); // 로딩 종료
        }

        // URL에서 code 파라미터 제거
        urlParams.delete('code');
        window.history.replaceState({}, document.title, window.location.pathname + '?' + urlParams.toString());
      }
    };

    const fetchNameCards = async (accToken: string) => {
      setIsLoading(true); // 로딩 시작
      try {
        const nameCardsData = await getAllNameCards(accToken);
        setNameCards(nameCardsData); // 가져온 NameCard 데이터를 상태에 저장
        console.log("NameCard 데이터:", nameCardsData);
      } catch (error) {
        console.error("NameCard 데이터를 가져오는 중 에러 발생:", error);
      } finally {
        setIsLoading(false); // 로딩 종료
      }
    };

    if (globalUser?.accessToken) {
      fetchNameCards(globalUser.accessToken); // globalUser에서 accessToken이 있다면 즉시 요청
    } else {
      fetchData(); // code가 있을 경우 Google 데이터 요청
    }
  }, [globalUser?.accessToken, setGlobalUser]); // accessToken이 변할 때마다 실행

  // Mycard 컴포넌트에 전달할 mockup data
  const myCardData = [
    {
      bg: '#465EFE',
      text: '#ffffff',
      head: '처음,\n뵙겠습니다.',
      name_eng: 'John Doe',
      name: '존 도',
      position: 'Chief Executive Officer',
      phone: '010-1234-5678',
      email: 'john.doe@example.com',
      address: '1234 Seoul St, Korea',
    },
    {
      bg: '#eaeaea',
      text: '#111111',
      head: 'CTO',
      name_eng: 'Jane Smith',
      name: '제인 스미스',
      position: 'Chief Technology Officer',
      phone: '010-8765-4321',
      email: 'jane.smith@example.com',
      address: '4321 Busan Rd, Korea',
    },
  ];

  return (
    <section className='min-h-screen max-h-screen flex flex-col pt-[21px] px-[19px] pb-[20px] w-full'>
      {/* Loading Indicator */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
          <div className="flex flex-col items-center">
            <div className="loader"></div>
            <p className="mt-4 text-lg">로딩 중입니다...</p>
          </div>
        </div>
      )}
      <div className='relative w-[20%] h-[30px] mb-[25px]'>
        <Image 
          src={mainImage} 
          alt="로그인 이미지" 
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
        
      <div className='flex justify-start gap-[18px] mb-[27px]'>
        <p className='text-black text-[20px] font-bold'>내명함</p>
        <Link
          href='/namecard/create/first'
        >
          <p className='text-[#898989] text-[20px] font-bold'>명함 등록하기</p>
        </Link>
      </div>
      
      <section className='flex gap-5 overflow-auto mb-3'>
        {myCardData.map((card, index) => (
          <Mycard
            key={index}
            bg={card.bg}
            text={card.text}
            head={card.head}
            name_eng={card.name_eng}
            name={card.name}
            position={card.position}
            phone={card.phone}
            email={card.email}
            address={card.address}
          />
        ))}
      </section>
      
      <section className='h-[20vh'>
        <BottomSheet />
      </section>
      {/* BottomNav를 화면 맨 아래에 위치 */}
      <BottomNav activeTab={0} />
    </section>
  );
}