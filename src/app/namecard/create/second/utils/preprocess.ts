import { OcrResult } from '../service/nameCardOcr';

interface FormData {
  name: string;
  companyAndPosition: string;
  mobile: string;
  email: string;
  location: string;
  date: string;
  memo: string;
}

export const preprocessOcrResult = (ocrResult: OcrResult): FormData => {
  return {
    name: ocrResult.name || '',
    companyAndPosition: ocrResult.company && ocrResult.position 
      ? `${ocrResult.company} / ${ocrResult.position}` 
      : ocrResult.company 
      ? ocrResult.company 
      : ocrResult.position 
      ? ocrResult.position 
      : '',
    mobile: ocrResult.mobile || '',
    email: ocrResult.email || '',
    location: ocrResult.address || '',
    date: new Date().toISOString().slice(0, 10), // 현재 날짜를 YYYY-MM-DD 형식으로
    memo: ''
  };
};