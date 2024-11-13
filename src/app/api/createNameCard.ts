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
  clientType: string;
  bgColor: string;
  textColor: string;
}

const colorChips = [
  { bgColor: '#FFC1CC', textColor: 'black' }, // Pastel Pink
  { bgColor: '#FFDDC1', textColor: 'black' }, // Pastel Peach
  { bgColor: '#FFF3B0', textColor: 'black' }, // Pastel Yellow
  { bgColor: '#C1FFC1', textColor: 'black' }, // Pastel Green
  { bgColor: '#C1E1FF', textColor: 'black' }, // Pastel Blue
  { bgColor: '#E1C1FF', textColor: 'white' }, // Pastel Purple
  { bgColor: '#FFC1E1', textColor: 'black' }, // Pastel Magenta
  { bgColor: '#D1FFC1', textColor: 'black' }, // Pastel Lime
];
export const createNameCard = async (accessToken: string, nameCardData:FormData): Promise<NameCardDTO> => {
  const randomColorChip = colorChips[Math.floor(Math.random() * colorChips.length)];

  const reqData: NameCardRequest = {
    name: nameCardData.name,
    position: nameCardData.position,
    companyName: nameCardData.companyName,
    savedDate: nameCardData.savedDate,
    email: nameCardData.email,
    place: nameCardData.place,
    memo: nameCardData.memo,
    mobileNumber: nameCardData.mobileNumber,
    clientType: nameCardData.clientType || '',
    bgColor: randomColorChip.bgColor,  // Assign random bgColor
    textColor: randomColorChip.textColor // Assign corresponding textColor
  };
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
