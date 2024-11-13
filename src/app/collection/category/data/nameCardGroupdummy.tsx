export type ClientType = '파트너사' | '창업기업' | '투자사' | '기관' | '고객' | '협력업체' | '기타';

export interface NameCard {
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

interface NameCardGroup {
  groupName: string;
  hashtag: string[];
  NameCardList: NameCard[];
}

const nameCardGroupListDummy: NameCardGroup[] = [
  {
    groupName: "AI 신기술 사업",
    hashtag: ["녹음", "기록"],
    NameCardList: [
      {
        name: "Alice Kim",
        companyName: "Tech Solutions",
        position: "CEO",
        mobileNumber: "010-1234-5678",
        email: "alice@techsolutions.com",
        clientType: "파트너사",
        place: "Seoul",
        memo: "Discussed partnership opportunities",
        address: "123 Seoul St, Gangnam",
        homepage: "https://techsolutions.com",
        nameCardImg: "https://example.com/alice.jpg",
        backgroundColor: "#7428DE",
        textColor: "#FFFFFF",
      },
      {
        name: "Brian Lee",
        companyName: "SmartHub",
        position: "COO",
        mobileNumber: "010-2345-6789",
        email: "brian@smarthub.com",
        clientType: "파트너사",
        place: "Busan",
        memo: "Exploring new tech integration",
        address: "456 Haeundae St, Busan",
        homepage: "https://smarthub.com",
        nameCardImg: "https://example.com/brian.jpg",
        backgroundColor: "#E28449",
        textColor: "#000000",
      },
      {
        name: "Brian Lee",
        companyName: "SmartHub",
        position: "COO",
        mobileNumber: "010-2345-6789",
        email: "brian@smarthub.com",
        clientType: "파트너사",
        place: "Busan",
        memo: "Exploring new tech integration",
        address: "456 Haeundae St, Busan",
        homepage: "https://smarthub.com",
        nameCardImg: "https://example.com/brian.jpg",
        backgroundColor: "#49A2E2",
        textColor: "#FFFFFF",
      },
      // Additional entries...
    ],
  },
  {
    groupName: "거래처 모음집",
    hashtag: ["원단", "부자재"],
    NameCardList: [
      {
        name: "김원단",
        companyName: "InnovateNow",
        position: "Founder",
        mobileNumber: "010-3456-7890",
        email: "catherine@innovatenow.com",
        clientType: "창업기업",
        place: "Incheon",
        memo: "Seeking investment for AI projects",
        address: "789 Incheon Rd, Bupyeong",
        homepage: "https://innovatenow.com",
        nameCardImg: "https://example.com/catherine.jpg",
        backgroundColor: "#49E249",
        textColor: "#000000",
      },
      {
        name: "김나영",
        companyName: "어반스 골드",
        position: "CEO",
        mobileNumber: "010-4567-8901",
        email: "daniel@healthify.com",
        clientType: "창업기업",
        place: "Seoul",
        memo: "Discussed healthcare innovations",
        address: "101 Health St, Seoul",
        homepage: "https://healthify.com",
        nameCardImg: "https://example.com/daniel.jpg",
        backgroundColor: "#FFE500",
        textColor: "#000000",
      },
      {
        name: "임규성",
        companyName: "어반스 골드",
        position: "CEO",
        mobileNumber: "010-4567-8901",
        email: "daniel@healthify.com",
        clientType: "창업기업",
        place: "Seoul",
        memo: "Discussed healthcare innovations",
        address: "101 Health St, Seoul",
        homepage: "https://healthify.com",
        nameCardImg: "https://example.com/daniel.jpg",
        backgroundColor: "#49A2E2",
        textColor: "#FFFFFF",
      },
      // Additional entries...
    ],
  },
  {
    groupName: "거래처 모음집",
    hashtag: ["신속", "친밀함"],
    NameCardList: [
      {
        name: "이도경",
        companyName: "InnovateNow",
        position: "Founder",
        mobileNumber: "010-3456-7890",
        email: "catherine@innovatenow.com",
        clientType: "창업기업",
        place: "Incheon",
        memo: "Seeking investment for AI projects",
        address: "세종 조치원음 조치원1길 48",
        homepage: "https://innovatenow.com",
        nameCardImg: "https://example.com/catherine.jpg",
        backgroundColor: "#49E249",
        textColor: "#000000",
      },
      {
        name: "Daniel Cho",
        companyName: "Healthify",
        position: "CEO",
        mobileNumber: "010-4567-8901",
        email: "daniel@healthify.com",
        clientType: "창업기업",
        place: "Seoul",
        memo: "Discussed healthcare innovations",
        address: "101 Health St, Seoul",
        homepage: "https://healthify.com",
        nameCardImg: "https://example.com/daniel.jpg",
        backgroundColor: "#FFE500",
        textColor: "#000000",
      },
      // Additional entries...
    ],
  },
  // Additional groups...
];

export default nameCardGroupListDummy;