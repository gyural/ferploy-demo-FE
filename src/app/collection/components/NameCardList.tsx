import React from 'react'
import NameCardOne from '@/app/(main)/components/NameCardOne';

export type ClientType = '파트너사' | '창업기업' | '투자사' | '기관' | '고객' | '협력업체' | '기타';

export interface NameCard {
  name: string | null;
  companyName?: string | null;
  position?: string | null;
  mobileNumber?: string | null;
  email?: string | null;
  contactNumber?: string | null;
  clientType: ClientType;  // ClientType 타입 사용
  place?: string | null;
  memo?: string | null;
  address?: string | null;
  homepage?: string | null;
  nameCardImg?: string | null;
}

const mockData:NameCard[] = [
  {
      name: "Alice Kim",
      companyName: "Korea Innovations",
      position: "Product Manager",
      mobileNumber: "010-1111-2222",
      email: "alice.kim@example.com",
      contactNumber: "02-1234-5678",
      clientType: "파트너사",
      place: "Seoul",
      memo: "Met at tech conference.",
      address: "123 Seoul St, Seoul",
      homepage: "https://koreainnovations.com",
      nameCardImg: "image1.jpg"
  },
  {
      name: "Bob Lee",
      companyName: null,
      position: "Freelance Developer",
      mobileNumber: "010-3333-4444",
      email: "bob.lee@example.com",
      contactNumber: null,
      clientType: "창업기업",
      place: "Busan",
      memo: null,
      address: "456 Busan Rd, Busan",
      homepage: null,
      nameCardImg: "image2.jpg"
  },
  {
      name: "Catherine Park",
      companyName: "Global Tech",
      position: "CTO",
      mobileNumber: "010-5555-6666",
      email: "catherine.park@globaltech.com",
      contactNumber: "02-8765-4321",
      clientType: "기관",
      place: "Incheon",
      memo: "Interested in AI solutions.",
      address: "789 Incheon Blvd, Incheon",
      homepage: "https://globaltech.com",
      nameCardImg: null
  },
  {
      name: "Daniel Choi",
      companyName: "Smart Solutions",
      position: "CEO",
      mobileNumber: "010-7777-8888",
      email: "daniel.choi@smartsolutions.co.kr",
      contactNumber: "031-555-1212",
      clientType: "협력업체",
      place: null,
      memo: "Potential partnership.",
      address: "1234 Gyeonggi Ave, Gyeonggi",
      homepage: null,
      nameCardImg: "image3.jpg"
  },
  {
      name: null,
      companyName: "Future Vision",
      position: "Marketing Lead",
      mobileNumber: "010-9999-0000",
      email: null,
      contactNumber: "02-333-4444",
      clientType: "투자사",
      place: "Sejong",
      memo: "Follow up next quarter.",
      address: null,
      homepage: "https://futurevision.kr",
      nameCardImg: null
  },
  {
    name: null,
    companyName: "Future Vision",
    position: "Marketing Lead",
    mobileNumber: "010-9999-0000",
    email: null,
    contactNumber: "02-333-4444",
    clientType: "투자사",
    place: "Sejong",
    memo: "Follow up next quarter.",
    address: null,
    homepage: "https://futurevision.kr",
    nameCardImg: null
},
{
  name: null,
  companyName: "Future Vision",
  position: "Marketing Lead",
  mobileNumber: "010-9999-0000",
  email: null,
  contactNumber: "02-333-4444",
  clientType: "투자사",
  place: "Sejong",
  memo: "Follow up next quarter.",
  address: null,
  homepage: "https://futurevision.kr",
  nameCardImg: null
},
{
  name: null,
  companyName: "Future Vision",
  position: "Marketing Lead",
  mobileNumber: "010-9999-0000",
  email: null,
  contactNumber: "02-333-4444",
  clientType: "투자사",
  place: "Sejong",
  memo: "Follow up next quarter.",
  address: null,
  homepage: "https://futurevision.kr",
  nameCardImg: null
},
{
  name: null,
  companyName: "Future Vision",
  position: "Marketing Lead",
  mobileNumber: "010-9999-0000",
  email: null,
  contactNumber: "02-333-4444",
  clientType: "투자사",
  place: "Sejong",
  memo: "Follow up next quarter.",
  address: null,
  homepage: "https://futurevision.kr",
  nameCardImg: null
},
{
  name: null,
  companyName: "Future Vision",
  position: "Marketing Lead",
  mobileNumber: "010-9999-0000",
  email: null,
  contactNumber: "02-333-4444",
  clientType: "투자사",
  place: "Sejong",
  memo: "Follow up next quarter.",
  address: null,
  homepage: "https://futurevision.kr",
  nameCardImg: null
},
{
  name: null,
  companyName: "Future Vision",
  position: "Marketing Lead",
  mobileNumber: "010-9999-0000",
  email: null,
  contactNumber: "02-333-4444",
  clientType: "투자사",
  place: "Sejong",
  memo: "Follow up next quarter.",
  address: null,
  homepage: "https://futurevision.kr",
  nameCardImg: null
}
];
export default function NameCardList() {
  return (
    <section className='flex flex-col gap-[15px]'>
      {mockData.map((namecard, index) => (
          <NameCardOne key={index} namecard={namecard} />
      ))}
    </section>
  )
}
