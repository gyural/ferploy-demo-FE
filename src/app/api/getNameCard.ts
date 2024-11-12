import { ClientType } from "../collection/components/NameCardList";
import axiosInstance from "./axiosInstance";

// NameCardDTO 타입 정의
export interface NameCardDTO {
  name: string;
  companyName?: string | null;
  position?: string | null;
  mobileNumber: string;
  email: string;
  contactNumber?: string | null;
  clientType?: ClientType | null; // assuming ClientType is an enum you define separately
  place?: string | null;
  memo?: string | null;
  address?: string | null;
  homepage?: string | null;
  nameCardImg?: string | null;
  profileImg?: string | null;
  bgColor?: string | null;
  textColor?: string | null;
  greetingMessage?: string | null;
}

export interface GetNameCardResponse {
  myNameCardList: NameCardDTO[];
  nameCardList: NameCardDTO[];
}

// Category 타입 정의
export interface Category {
  id: number;
  name: string;
}
// getTable API function to fetch table details
export const getAllNameCards = async (accessToken: string): Promise<GetNameCardResponse> => {
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