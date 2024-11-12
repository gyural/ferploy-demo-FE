import axiosInstance from "./axiosInstance";

// NameCardDTO 타입 정의
export interface NameCardDTO {
  id: number;
  name: string;
  companyName: string;
  position: string;
  mobileNumber: string;
  email: string;
  contactNumber: string;
  clientType: string; // ClientType Enum으로 정의 가능
  place: string;
  memo: string;
  address: string;
  homepage: string;
  nameCardImg: string;
  profileImg: string;
  bgColor: string;
  textColor: string;
  greetingMessage: string;
  isMe: boolean;
  categories: Category[];
}

// Category 타입 정의
export interface Category {
  id: number;
  name: string;
}
// getTable API function to fetch table details
export const getAllNameCards = async (accessToken: string): Promise<NameCardDTO[]> => {
  try {
    const response = await axiosInstance.get("/namecard", {
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("에러 발생: ", error);
    throw error;
  }
};