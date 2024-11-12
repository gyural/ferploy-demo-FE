import axiosInstance from "@/app/api/axiosInstance";
// Define types for the response and result
export interface OcrResult {
  address: string;
  homepage: string;
  mobile: string;
  name: string;
  email: string;
  position: string;
  tel: string;
  company: string;
}

interface NameCardResponse {
  images: {
    nameCard: {
      result: {
        address: { text: string }[];
        homepage: { text: string }[];
        mobile: { text: string }[];
        name: { text: string }[];
        email: { text: string }[];
        position: { text: string }[];
        tel: { text: string }[];
        [key: string]: { text: string }[]; // For any additional fields
      };
    };
  }[];
}


const OCRnameCard = async (imgList: string[], formatList: string[]): Promise<OcrResult[] | false> => {
  const reqData = imgList.map((img, index) => ({
    base64Img: img,
    format: formatList[index],
  }));

  try {
    const res = await axiosInstance.post('/ocr/namecard', reqData, {
      headers: { "Content-Type": "application/json" },
    });

    const { data } = res;
    console.log('in error', data)
    if (data) {
      const { results }: { results: NameCardResponse[] } = data;
      if (results.length > 0) {
        return results.map((item) => parsOcrRes(item));
      }
      return [];
    }
  } catch (err) {
    console.error(err);
    return false;
  }
  return false; // Return false if data is not present
};

const parsOcrRes = (json: NameCardResponse): OcrResult => {
  const { images } = json;
  const { nameCard } = images[0];
  const { result } = nameCard;

  // Each field can have an array of results, we extract the first item
  const getFirstItem = (array: { text: string }[]) => (array.length > 0 ? array[0].text : 'N/A');

  return {
    address: getFirstItem(result.address),
    homepage: getFirstItem(result.homepage),
    mobile: getFirstItem(result.mobile),
    name: getFirstItem(result.name),
    email: getFirstItem(result.email),
    position: getFirstItem(result.position),
    tel: getFirstItem(result.tel),
    company: getFirstItem(result.company),
  };
};

export { OCRnameCard};