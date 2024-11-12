import { OcrResult } from '../service/nameCardOcr';

interface FormData {
  name: string;
  companyName: string;
  position: string;
  mobileNumber: string;
  email: string;
  place: string;
  savedDate: string;
  memo: string;
  address: string;
}

export const preprocessOcrResult = (ocrResult: OcrResult): FormData => {
  const savedDate = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
  
  // 'DD/MM/YYYY' 형식으로 출력되는 것을 'YYYY-MM-DD'로 변환
  const formattedDate = savedDate.split('/').reverse().join('-');
  const formattedMobileNumber = ocrResult.mobile ? ocrResult.mobile.replace(/\./g, '-') : '';
  
  return {
    name: ocrResult.name || '',
    companyName: ocrResult.company || '',
    position : ocrResult.position,
    mobileNumber: formattedMobileNumber,
    // ocrResult.mobile은 010.7163.3983 이런형식인데 .을 -로 바꿔줘
    email: ocrResult.email || '',
    address: ocrResult.address || '',
    savedDate: formattedDate,
    memo: '',
    place: ''
  };
};