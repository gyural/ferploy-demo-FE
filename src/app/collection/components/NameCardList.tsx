import React from 'react'
import NameCardOne from '@/app/(main)/components/NameCardOne';
import { NameCardDTO } from '@/app/api/getNameCard';

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

// const mockData: NameCardDTO[] = [
//   {
//       name: "Alice Kim",
//       companyName: "Korea Innovations",
//       position: "Product Manager",
//       mobileNumber: "010-1111-2222",
//       email: "alice.kim@example.com",
//       contactNumber: "02-1234-5678",
//       clientType: "파트너사",
//       place: "Seoul",
//       memo: "Met at tech conference.",
//       address: "123 Seoul St, Seoul",
//       homepage: "https://koreainnovations.com",
//       nameCardImg: "image1.jpg",
//       bgColor:
//   },
//   {
//       name: "Bob Lee",
//       companyName: "Lee Development", // Provided a default company name
//       position: "Freelance Developer",
//       mobileNumber: "010-3333-4444",
//       email: "bob.lee@example.com",
//       contactNumber: "02-5555-6666", // Provided a default contact number
//       clientType: "창업기업",
//       place: "Busan",
//       memo: "Available for projects.", // Provided a default memo
//       address: "456 Busan Rd, Busan",
//       homepage: "https://bobleedev.com", // Provided a default homepage
//       nameCardImg: "image2.jpg"
//   },
//   {
//       name: "Catherine Park",
//       companyName: "Global Tech",
//       position: "CTO",
//       mobileNumber: "010-5555-6666",
//       email: "catherine.park@globaltech.com",
//       contactNumber: "02-8765-4321",
//       clientType: "기관",
//       place: "Incheon",
//       memo: "Interested in AI solutions.",
//       address: "789 Incheon Blvd, Incheon",
//       homepage: "https://globaltech.com",
//       nameCardImg: "image4.jpg" // Provided a default image
//   },
//   {
//       name: "Daniel Choi",
//       companyName: "Smart Solutions",
//       position: "CEO",
//       mobileNumber: "010-7777-8888",
//       email: "daniel.choi@smartsolutions.co.kr",
//       contactNumber: "031-555-1212",
//       clientType: "협력업체",
//       place: "Gyeonggi", // Provided a default place
//       memo: "Potential partnership.",
//       address: "1234 Gyeonggi Ave, Gyeonggi",
//       homepage: "https://smartsolutions.co.kr", // Provided a default homepage
//       nameCardImg: "image3.jpg"
//   },
//   {
//       name: "Emma Lee", // Provided a default name
//       companyName: "Future Vision",
//       position: "Marketing Lead",
//       mobileNumber: "010-9999-0000",
//       email: "emma.lee@futurevision.kr", // Provided a default email
//       contactNumber: "02-333-4444",
//       clientType: "투자사",
//       place: "Sejong",
//       memo: "Follow up next quarter.",
//       address: "567 Sejong St, Sejong", // Provided a default address
//       homepage: "https://futurevision.kr",
//       nameCardImg: "image5.jpg" // Provided a default image
//   },
//   {
//       name: "Sophia Kim", // Provided a default name
//       companyName: "Future Vision",
//       position: "Marketing Lead",
//       mobileNumber: "010-8888-9999", // Provided a different default mobile number
//       email: "sophia.kim@futurevision.kr", // Provided a default email
//       contactNumber: "02-4444-5555", // Provided a default contact number
//       clientType: "투자사",
//       place: "Sejong",
//       memo: "Follow up next quarter.",
//       address: "567 Sejong St, Sejong", // Provided a default address
//       homepage: "https://futurevision.kr",
//       nameCardImg: "image6.jpg" // Provided a default image
//   },
//   {
//       name: "James Park", // Provided a default name
//       companyName: "Future Vision",
//       position: "Marketing Lead",
//       mobileNumber: "010-7777-8888", // Provided a different default mobile number
//       email: "james.park@futurevision.kr", // Provided a default email
//       contactNumber: "02-1234-5678", // Provided a default contact number
//       clientType: "투자사",
//       place: "Sejong",
//       memo: "Follow up next quarter.",
//       address: "567 Sejong St, Sejong", // Provided a default address
//       homepage: "https://futurevision.kr",
//       nameCardImg: "image7.jpg" // Provided a default image
//   },
//   {
//       name: "Olivia Lee", // Provided a default name
//       companyName: "Future Vision",
//       position: "Marketing Lead",
//       mobileNumber: "010-5555-6666", // Provided a different default mobile number
//       email: "olivia.lee@futurevision.kr", // Provided a default email
//       contactNumber: "02-9876-5432", // Provided a default contact number
//       clientType: "투자사",
//       place: "Sejong",
//       memo: "Follow up next quarter.",
//       address: "567 Sejong St, Sejong", // Provided a default address
//       homepage: "https://futurevision.kr",
//       nameCardImg: "image8.jpg" // Provided a default image
//   },
//   {
//       name: "Liam Choi", // Provided a default name
//       companyName: "Future Vision",
//       position: "Marketing Lead",
//   mobileNumber: "010-9999-0000",
//         email: 'null',
//   contactNumber: "02-333-4444",
//   clientType: "투자사",
//   place: "Sejong",
//   memo: "Follow up next quarter.",
//       address: "567 Sejong St, Sejong", // Provided a default address
//       homepage: "https://futurevision.kr",
//       nameCardImg: "image9.jpg" // Provided a default image
//   },
//   {
//       name: "Daniel Choi",
//       companyName: "Smart Solutions",
//       position: "CEO",
//       mobileNumber: "010-7777-8888",
//       email: "daniel.choi@smartsolutions.co.kr",
//       contactNumber: "031-555-1212",
//       clientType: "협력업체",
//       place: "Gyeonggi", // Provided a default place
//       memo: "Potential partnership.",
//       address: "1234 Gyeonggi Ave, Gyeonggi",
//       homepage: "https://smartsolutions.co.kr", // Provided a default homepage
//       nameCardImg: "image3.jpg"
//   },
// ];

interface NameCardListProps{
    nameCardList: NameCardDTO[]
}
export default function NameCardList({nameCardList}:NameCardListProps) {
  return (
    <section className='flex flex-col gap-[15px] pb-8'>
      {nameCardList.map((namecard, index) => (
          <NameCardOne key={index} namecard={namecard} />
      ))}
    </section>
  )
}
