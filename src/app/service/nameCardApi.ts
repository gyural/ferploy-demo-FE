import axios from "axios";

const baseURL = "http://localhost:8080/api/v1";

interface nameCardReqData {
  name?: string;
  position?: string;
  address?: string;
  homepage?: string;
  tel?: string;
  email?: string;
  mobile?: string;
  clientType?: string;
  registerDate?: string;
  place?: string;
  memo?: string;
}

const createNameCard = async (nameCardData: nameCardReqData): Promise<any> => {
  const reqURL: string = baseURL + "/namecard/create";
  
  try {
    const response = await axios.post(reqURL, nameCardData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Failed to create name card, status code:", response.status);
      return null;
    }
  } catch (error) {
    console.error("Error creating name card:", error);
    return null;
  }
};

export {createNameCard};