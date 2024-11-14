import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

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

interface Member {
  id: string;
  name: string;
  email: string;
  profilePicture: string;
  google_acc: string;
  google_refresh: string;
  role: "USER" | "ADMIN"; // Assuming roles are either USER or ADMIN
}

interface Category {
  id: number;
  name: string;
  nameCards: string[]; // Assuming this is an array of name card IDs or references
  member: Member;
}

interface CreateNamecardResponse {
  id: number;
  member: Member;
  name: string;
  companyName: string;
  position: string;
  mobileNumber: string;
  email: string;
  contactNumber: string;
  clientType: string; // Example: "파트너사"
  place: string;
  memo: string;
  address: string;
  homepage: string;
  nameCardImg: string;
  profileImg: string;
  bgColor: string;
  textColor: string;
  greetingMessage: string;
  categories: Category[];
  me: boolean;
}

const createNameCard = async (nameCardData: nameCardReqData): Promise<CreateNamecardResponse | null> => {
  const reqURL: string = baseURL + "/namecard/create";

  try {
    const response = await axios.post(reqURL, nameCardData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      return response.data; // Return the response data as a CreateNamecardResponse object
    } else {
      console.error("Failed to create name card, status code:", response.status);
      return null;
    }
  } catch (error) {
    console.error("Error creating name card:", error);
    return null;
  }
};

export { createNameCard };