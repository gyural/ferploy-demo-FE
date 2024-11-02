'use client'
import React, { useState, ChangeEvent } from 'react';
import { OCRnameCard } from '@/app/service/nameCardOCR';
import Button from '@/components/Button';

interface ClientInfo {
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

interface NameCardUploadProps {
  isOpen: boolean;
  onClose: () => void;
  setClientInfo: React.Dispatch<React.SetStateAction<ClientInfo | undefined>>; // 단일 객체로 설정
}

const NameCardUpload: React.FC<NameCardUploadProps> = ({ isOpen, onClose, setClientInfo }) => {
  const [imagePreview, setImagePreview] = useState<string[]>([]);
  const [base64Image, setBase64Image] = useState<string[]>([]);
  const [imgFormat, setImgFormat] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false); // 로딩 상태 관리

  // 이미지 업로드 핸들러
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();

        reader.onloadend = () => {
          const base64WithHeader = reader.result as string;
          const formatMatch = base64WithHeader.match(/^data:image\/(png|jpeg|jpg);base64,/);

          if (formatMatch) {
            const format = formatMatch[1];
            const base64WithoutHeader = base64WithHeader.split(',')[1];
            setImagePreview((prev) => [...prev, base64WithHeader]);
            setBase64Image((prev) => [...prev, base64WithoutHeader]);
            setImgFormat((prev) => [...prev, format]);
          } else {
            alert("허용되지 않은 이미지 포맷입니다. jpg, jpeg, png 파일만 업로드해주세요.");
          }
        };

        reader.readAsDataURL(file);
      });
    } else {
      alert("파일을 선택해주세요.");
    }
  };

  // 등록 버튼 클릭 시 처리
  const handleButtonClick = async () => {
    if (imagePreview.length > 0) {
      setIsLoading(true); // 로딩 시작
      const res = await OCRnameCard(base64Image, imgFormat);
      setIsLoading(false); // 로딩 끝

      const defaultValues = {
        registerDate: '',
        place: '',
        clientType: '파트너사',
        memo: ''
      };

      if (res && Array.isArray(res)) {
        const updatedClientInfo: ClientInfo = {
          ...defaultValues,
          ...res[0] // 첫 번째 항목만 사용하여 단일 객체 생성
        };

        setClientInfo(updatedClientInfo); // 단일 객체로 상태 업데이트
        onClose();
      } else {
        console.log('errorerror');
      }
    } else {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 bg-white shadow-md rounded-t-lg transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ maxHeight: '90vh', overflowY: 'auto' }}
    >
      {/* 로딩 오버레이 */}
      {isLoading && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="loader"></div> {/* 스피너 */}
        </div>
      )}

      {/* 메인 컨텐츠 (로딩 시 흐림 효과) */}
      <div className={`p-4 transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
        {/* 닫기 버튼 */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">명함 이미지 업로드</h2>
          <Button onClick={handleButtonClick}>
            {imagePreview.length > 0 ? '등록하기' : '닫기'}
          </Button>
        </div>

        {/* 파일 업로드 input */}
        <div className="mb-4">
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageUpload}
            multiple
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
          />
        </div>

        {/* 이미지 미리보기 */}
        {imagePreview.length > 0 && (
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-700 mb-2">미리보기:</h3>
            <div className="flex h-[200px] p-4 gap-3 overflow-x-scroll">
              {imagePreview.map((imgSrc, idx) => (
                <img key={idx} className="h-full" src={imgSrc} alt={`업로드된 명함-${idx}`} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NameCardUpload;