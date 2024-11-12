import { NameCard } from "@/app/collection/components/NameCardList";

export const mockData: NameCard[] = [
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
      companyName: "", // replaced null with empty string
      position: "Freelance Developer",
      mobileNumber: "010-3333-4444",
      email: "bob.lee@example.com",
      contactNumber: "", // replaced null with empty string
      clientType: "창업기업",
      place: "Busan",
      memo: "", // replaced null with empty string
      address: "456 Busan Rd, Busan",
      homepage: "", // replaced null with empty string
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
      nameCardImg: "" // replaced null with empty string
  },
  {
      name: "Daniel Choi",
      companyName: "Smart Solutions",
      position: "CEO",
      mobileNumber: "010-7777-8888",
      email: "daniel.choi@smartsolutions.co.kr",
      contactNumber: "031-555-1212",
      clientType: "협력업체",
      place: "", // replaced null with empty string
      memo: "Potential partnership.",
      address: "1234 Gyeonggi Ave, Gyeonggi",
      homepage: "", // replaced null with empty string
      nameCardImg: "image3.jpg"
  },
  {
      name: "Daniel", // replaced null with empty string
      companyName: "Future Vision",
      position: "Marketing Lead",
      mobileNumber: "010-9999-0000",
      email: "", // replaced null with empty string
      contactNumber: "02-333-4444",
      clientType: "투자사",
      place: "Sejong",
      memo: "Follow up next quarter.",
      address: "", // replaced null with empty string
      homepage: "https://futurevision.kr",
      nameCardImg: "" // replaced null with empty string
  }
];