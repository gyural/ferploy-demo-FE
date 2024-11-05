import React from 'react';

const greetingMessage = [
  "항상 성실하게 진행함!",
  "소통이 원활해서 좋음!",
  "기대 이상의 결과물!",
  "트렌드 반영이 빠름!",
  "꾸준한 피드백 최고!",
  "작업 속도가 정말 빠름!",
  "팀워크가 정말 좋네요!",
  "요청 사항 빠르게 처리!",
  "클라이언트 응대 훌륭!",
  "꼼꼼한 일처리 굿!",
  "깔끔한 마무리가 인상적!",
  "응답이 매우 신속해요!",
  "아이디어가 신선해요!",
  "디테일한 작업 좋음!",
  "커뮤니케이션 능력 최고!",
  "매우 협조적이고 친절함!",
  "업무 이해도가 높네요!",
  "항상 준비된 자세 좋아요!",
  "문제 해결 능력 탁월!",
  "신뢰성 높은 파트너!"
];

type ClientType = '파트너사' | '창업기업' | '투자사' | '기관' | '고객' | '협력업체' | '기타';

interface NameCard {
  name: string | null;
  companyName?: string | null;
  position?: string | null;
  mobileNumber?: string | null;
  email?: string | null;
  contactNumber?: string | null;
  clientType: ClientType;
  place?: string | null;
  memo?: string | null;
  address?: string | null;
  homepage?: string | null;
  nameCardImg?: string | null;
  backgroundColor: string;
  textColor: string;
}

interface NameCardSmallProps {
  nameCard: NameCard;
}
const bgcolor: string[][] = [
  ['#7428DE', '#fff'],  // Purple background with white text
  ['#49A2E2', '#fff'],  // Blue background with white text
  ['#49E249', '#000'],  // Green background with black text
  ['#FFE500', '#000']   // Yellow background with black text
];

export default function NameCardSmall({ nameCard }: NameCardSmallProps) {
  // Generate random indices to select a greeting and color combination
  const randomMessage = greetingMessage[Math.floor(Math.random() * greetingMessage.length)];
  const randomColors = bgcolor[Math.floor(Math.random() * bgcolor.length)];

  return (
    <div
      className='w-full py-3.5 px-[9px] rounded-lg flex flex-col h-[400px]'
      style={{
        backgroundColor: nameCard.backgroundColor,
        color: nameCard.textColor
      }}
    >
      <h1 className='text-2xl font-bold mb-2'>{randomMessage}</h1>
      <h2 className='text-sm font-medium mb-1'>{nameCard.name || "이름 없음"}</h2>
      <div 
        className='h-[0.3px] w-full bg-white mb-1'
        style={{backgroundColor: `${nameCard.textColor}`}}
      ></div>

      <p className='font-medium text-xs mb-5'>
        {nameCard.companyName || "회사 없음"} {" "} {nameCard.position || ""}
      </p>
      <p className='font-light text-[10px] mb-[2px]'>m. {nameCard.mobileNumber || ""}</p>
      <p className='font-light text-[10px] mb-[2px]'>e. {nameCard.email || " "}</p>
      <p className='font-light text-[10px] mb-[2px]'>{nameCard.address || " "}</p>
    </div>
  );
}