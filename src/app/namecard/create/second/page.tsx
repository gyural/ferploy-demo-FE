'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import mainImage from '@/public/images/ferploy_title.png';
import BottomNav from '@/components/BottomNav';
import Link from 'next/link';
import SelectedNameCard from './components/SelectedNameCard';
import PlusNameCard from './components/PlusNameCard';
import NameCardForm from './components/NameCardForm';
import BottomSheet from './components/BottomSheet';
import ImageUploadModal from './components/ImageUploadModal'; // Import the modal
import { useSearchParams } from 'next/navigation';
import { OCRnameCard, OcrResult } from './service/nameCardOcr';
import { preprocessOcrResult } from './utils/preprocess';

const myCardData = [
  {
    bg: '#465EFE',
    text: '#ffffff',
    head: '처음,\n뵙겠습니다.',
    name_eng: 'John Doe',
    name: '존 도',
    position: 'Chief Executive Officer',
    phone: '010-1234-5678',
    email: 'john.doe@example.com',
    address: '1234 Seoul St, Korea',
  },
  {
    bg: '#eaeaea',
    text: '#111111',
    head: 'CTO',
    name_eng: 'Jane Smith',
    name: '제인 스미스',
    position: 'Chief Technology Officer',
    phone: '010-8765-4321',
    email: 'jane.smith@example.com',
    address: '4321 Busan Rd, Korea',
  },
];

export default function Page() {
  const [isFileSelcetModalOpen, setIsFileSelcetModalOpen] = useState(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState<string[]>([]);
  const [base64Image, setBase64Image] = useState<string[]>([]);
  const [imgFormat, setImgFormat] = useState<string[]>([]);
  const [ocrResult, setOcrResult] = useState<OcrResult>({
    address: '',
    homepage: '',
    mobile: '',
    name: '',
    email: '',
    position: '',
    tel: '',
    company: ''
  });
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const searchParams = useSearchParams();

  // Function to handle image upload
  const handleImageUpload = async (files?: FileList | File[]) => {
    const fileList = files;
  
    if (fileList && fileList.length > 0) {
      const readFilePromises = Array.from(fileList).map((file) => {
        return new Promise<{ base64: string; format: string }>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64WithHeader = reader.result as string;
            const formatMatch = base64WithHeader.match(/^data:image\/(png|jpeg|jpg);base64,/);
  
            if (formatMatch) {
              const format = formatMatch[1];
              const base64WithoutHeader = base64WithHeader.split(',')[1];
              resolve({ base64: base64WithoutHeader, format });
            } else {
              alert("허용되지 않은 이미지 포맷입니다. jpg, jpeg, png 파일만 업로드해주세요.");
              reject();
            }
          };
          reader.onerror = () => {
            alert("파일 읽기 중 오류가 발생했습니다.");
            reject();
          };
          reader.readAsDataURL(file);
        });
      });
  
      try {
        const results = await Promise.all(readFilePromises);
        const base64Image = results.map(result => result.base64);
        const imgFormat = results.map(result => result.format);

        setIsLoading(true); // Start loading
        const ocrResults = await OCRnameCard(base64Image, imgFormat);
        setIsLoading(false); // End loading

        if (ocrResults !== false) {
          setOcrResult(ocrResults[0]);
        }
        
      } catch (error) {
        setIsLoading(false); // End loading in case of error
        console.error('Error reading files:', error);
      }
    } else {
      alert("파일을 선택해주세요.");
    }
  };

  const openBottomSheet = () => setIsBottomSheetOpen(true);
  const closeBottomSheet = () => setIsBottomSheetOpen(false);

  useEffect(() => {
    const photoValid = searchParams.get('photo');
    if (photoValid === 'true') {
      setIsFileSelcetModalOpen(true); // Open the modal

      const params = new URLSearchParams(searchParams.toString());
      params.delete('photo');
      window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
    }
  }, [searchParams]);

  return (
    <section className='min-h-screen flex flex-col pt-[21px] px-[19px] pb-[13vh] w-full'>
      <div className='relative w-[20%] h-[30px] mb-[25px]'>
        <Image 
          src={mainImage} 
          alt="로그인 이미지" 
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>

      <div className='flex justify-start gap-[18px] mb-[9px] items-center'>
        <Link href='/namecard/mycard'>
          <p className='text-[#898989] text-[20px] font-bold'>내 명함</p>
        </Link>
        <p className='text-black text-[20px] font-bold'>명함등록하기</p>
      </div>

      <div className='flex-grow overflow-auto mt-6'>
        <div className='flex gap-2 items-center'>
        
        <SelectedNameCard 
          bg={myCardData[0].bg}
          text={myCardData[0].text}
          head={myCardData[0].head}
          name_eng={ocrResult.name || myCardData[0].name_eng}
          name={ocrResult.name || myCardData[0].name}
          position={ocrResult.company && ocrResult.position ? `${ocrResult.company} / ${ocrResult.position}` : ocrResult.company || ocrResult.position || myCardData[0].position}
          phone={ocrResult.mobile || myCardData[0].phone}
          email={ocrResult.email || myCardData[0].email}
          address={ocrResult.address || myCardData[0].address}
        />
          <PlusNameCard />
        </div>
        <NameCardForm onOpen={openBottomSheet} defaultValues={preprocessOcrResult(ocrResult)} />
      </div>

      {/* Loading Indicator */}
      {isLoading && (
        <div className='fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50'>
          <div className='flex flex-col items-center'>
            <div className="loader"></div>
            <p className="mt-4 text-lg">로딩 중입니다...</p>
          </div>
        </div>
      )}

      <ImageUploadModal
        isOpen={isFileSelcetModalOpen}
        onClose={() => setIsFileSelcetModalOpen(false)}
        onUpload={handleImageUpload}
      />
          
      <BottomSheet isOpen={isBottomSheetOpen} onClose={closeBottomSheet} />

      <div className='fixed bottom-0 left-0 w-full z-[999]'>
        <BottomNav activeTab={1} />
      </div>
    </section>
  );
}