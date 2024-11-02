'use client';
import React, { useState } from 'react';
import ClientForm from './components/ClientForm';
import NameCardUpload from './components/NameCardUpload';
import Button from '@/components/Button';

export default function Page() {
  // ClientInfo 타입 정의
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



  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false); // Boolean을 boolean으로 수정
  const [clientInfo, setClientInfo] = useState<ClientInfo | undefined>(undefined); // 단일 객체로 설정
  // 바텀 시트 열기/닫기 함수
  const openBottomSheet = () => setIsBottomSheetOpen(true);
  const closeBottomSheet = () => setIsBottomSheetOpen(false);

  return (
    <div>
      {/* ClientForm에 clientInfo 전달 */}
      <ClientForm clientInfo={clientInfo} />

      {/* 명함 등록 버튼 */}
      <Button onClick={openBottomSheet}>명함 등록하기</Button>

      {/* NameCardUpload 컴포넌트 */}
      <NameCardUpload
        onClose={closeBottomSheet}
        isOpen={isBottomSheetOpen}
        setClientInfo={setClientInfo}
      />
    </div>
  );
}