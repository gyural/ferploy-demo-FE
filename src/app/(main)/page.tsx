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
import { GetNameCardResponse, getAllNameCards } from '../api/getNameCard';

export default function Page() {
  const setGlobalUser = useAuthStore((state) => state.setUser); // 유저 정보 설정 함수
  const globalUser = useAuthStore((state) => state.user); // 현재 유저 상태
  const [nameCards, setNameCards] = useState<GetNameCardResponse>({
    myNameCardList: [],
    nameCardList: []
  });
  const [isLoading, setIsLoading] = useState(false);
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
      {nameCards.myNameCardList.map((card, index) => (
        <Mycard
          key={index}
          bg={card.bgColor ?? "#FFFFFF"} // Fallback to white if undefined
          text={card.textColor ?? "#000000"} // Fallback to black if undefined
          head={card.greetingMessage ?? ""} // Default empty string if undefined
          name_eng={card.name ?? ""}
          name={card.name}
          position={card.position ?? ""}
          phone={card.mobileNumber ?? ""}
          email={card.email ?? ""}
          address={card.address ?? ""}
        />
      ))}
      </section>
      
      <section className='h-[20vh'>
        <BottomSheet nameCardList={nameCards.nameCardList} />
      </section>
      {/* BottomNav를 화면 맨 아래에 위치 */}
      <BottomNav activeTab={0} />
    </section>
  );
}