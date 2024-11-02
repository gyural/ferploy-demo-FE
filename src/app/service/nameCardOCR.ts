import axios from "axios";

// API 요청할 기본 URL
const baseURL: string = "http://localhost:8080/api";

// 타입 정의
interface NameCardRequestData {
  base64Img: string;
  format: string;
}

interface NameCardResponseData {
  address: string;
  homepage: string;
  mobile: string;
  name: string;
  email: string;
  position: string;
  tel: string;
}

// OCR 요청 함수
const OCRnameCard = async (imgList: string[], formatList: string[]): Promise<NameCardResponseData[] | false> => {
  const reqURL: string = baseURL + '/namecard';
  const reqData: NameCardRequestData[] = [];

  // 이미지와 포맷을 병렬적으로 순회하여 reqData에 저장
  imgList.forEach((img, index) => {
    const format = formatList[index];
    reqData.push({ base64Img: img, format });
  });

  try {
    const res = await axios.post(reqURL, JSON.stringify(reqData), {
      headers: { "Content-Type": "application/json" },
    });

    const { data } = res;
    if (data && data.results) {
      const { results } = data;
      if (results.length > 0) {
        return results.map((item: any) => parsOcrRes(item));
      }
      return [];
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};

// OCR 응답 데이터 파싱 함수
const parsOcrRes = (json: any): NameCardResponseData => {
  const { images } = json;
  const { nameCard } = images[0];
  const { result } = nameCard;
  const {
    address,
    homepage,
    mobile,
    name,
    position,
    tel,
    email,
  } = result;

  // 배열에서 첫 번째 항목만 추출하는 헬퍼 함수
  const getFirstItem = (array: any[]): string => (array.length > 0 ? array[0].text : 'N/A');

  return {
    address: getFirstItem(address),
    homepage: getFirstItem(homepage),
    mobile: getFirstItem(mobile),
    name: getFirstItem(name),
    email: getFirstItem(email),
    position: getFirstItem(position),
    tel: getFirstItem(tel),
  };
}

export { OCRnameCard, parsOcrRes };