import { FormData } from "../namecard/create/second/components/NameCardForm";
import axiosInstance from "./axiosInstance";
import { NameCardDTO } from "./getNameCard";
interface NameCardRequest {
  name: string;
  position: string;
  companyName: string;
  savedDate: string;
  email: string;
  place: string;
  memo: string;
  mobileNumber: string;
}

export const createNameCard = async (accessToken: string, nameCardData:FormData): Promise<NameCardDTO> => {
  const reqData: NameCardRequest = {
    name: nameCardData.name,
    position: nameCardData.position,
    companyName: nameCardData.companyName,
    savedDate: nameCardData.savedDate,
    email: nameCardData.email,
    place: nameCardData.place,
    memo: nameCardData.memo,
    mobileNumber: nameCardData.mobileNumber
  }
  try {
    // Changed to POST and sending reqData in the request body
    const response = await axiosInstance.post("/namecard", reqData, {
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
