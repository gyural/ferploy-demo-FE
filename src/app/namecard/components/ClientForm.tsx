'use client'
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import FormInput from './FormInput';
import { createNameCard } from '@/app/service/nameCardApi';
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

interface ClientFormProps {
  clientInfo?: ClientInfo;
  
}

export default function ClientForm({ clientInfo }: ClientFormProps ) {
  const { register, handleSubmit, setValue, reset } = useForm<ClientInfo>();
  // 초기값을 빈 문자열로 설정
  const [formValue, setFormValue] = useState<ClientInfo>({
    name: '',
    position: '',
    address: '',
    homepage: '',
    tel: '',
    email: '',
    mobile: '',
    clientType: '파트너사',
    registerDate: '',
    place: '',
    memo: '',
    ...clientInfo, // clientInfo가 있을 경우 그 값을 덮어씀
  });
  // clientInfo의 특정 항목을 업데이트하는 함수
  const updateClientInfoField = (field: keyof ClientInfo, value: string) => {
    setFormValue(prev => {
      // prev는 ClientInfo 타입으로 유지되어야 하므로, 클론을 만들어 업데이트
      const updatedClientInfo: ClientInfo = {
        ...prev,
        [field]: value, // 특정 필드를 업데이트
      };
      return updatedClientInfo; // 업데이트된 상태 반환
    });
  };

  const  onSubmitForm: SubmitHandler<ClientInfo> = async (data) => {
    const resData = await createNameCard(data);
    console.log(resData)
    reset();
  };
  
  // clientInfo가 업데이트되면 폼 필드 값을 설정
  useEffect(() => {
    if (clientInfo) {
      setValue('name', clientInfo.name || '');
      setValue('position', clientInfo.position || '');
      setValue('address', clientInfo.address || '');
      setValue('homepage', clientInfo.homepage || '');
      setValue('tel', clientInfo.tel || '');
      setValue('email', clientInfo.email || '');
      setValue('mobile', clientInfo.mobile || '');
      setValue('clientType', clientInfo.clientType || '');
      setValue('registerDate', clientInfo.registerDate || '');
      setValue('place', clientInfo.place || '');
      setValue('memo', clientInfo.memo || '');
    }
  }, [clientInfo, setValue]);

  return (
    <section className='p-5 flex flex-col items-center'>
      <h1 className='text-3xl font-semibold m-2'>명함 정보 등록하기</h1>
      <form 
        className='w-[400px]'
        onSubmit={handleSubmit(onSubmitForm)}>
        {/* 고객 타입을 선택하는 select 태그 */}
        <div>
          <label className="block mb-1 text-left">고객 타입:</label>
          <select
            {...register('clientType')}
            className="w-full p-2 mb-2 border rounded"
            onChange={(e) => updateClientInfoField('clientType', e.target.value)}
          >
            <option value="파트너사">파트너사</option>
            <option value="창업기업">창업기업</option>
            <option value="투자사">투자사</option>
            <option value="기관">기관</option>
            <option value="고객">고객</option>
            <option value="기타">기타</option>
          </select>
        </div>

        <FormInput 
          label="이름" 
          name="name" 
          register={register}
          onChange={(e) => updateClientInfoField('name', e.target.value)} 
        />
        <FormInput 
          label="이메일" 
          name="email" 
          register={register}
          onChange={(e) => updateClientInfoField('email', e.target.value)} 
        />
        <FormInput 
          label="등록일" 
          name="registerDate" 
          register={register} 
          onChange={(e) => updateClientInfoField('registerDate', e.target.value)} 
        />
        <FormInput 
          label="장소" 
          name="place" 
          register={register}
          onChange={(e) => updateClientInfoField('place', e.target.value)} 
        />
        <FormInput 
          label="메모" 
          name="memo" 
          register={register} 
          onChange={(e) => updateClientInfoField('memo', e.target.value)} 
        />
        <FormInput 
          label="직책" 
          name="position" 
          register={register} 
          onChange={(e) => updateClientInfoField('position', e.target.value)} 
        />
        <FormInput 
          label="주소" 
          name="address" 
          register={register} 
          onChange={(e) => updateClientInfoField('address', e.target.value)} 
        />
        <FormInput 
          label="홈페이지" 
          name="homepage" 
          register={register} 
          onChange={(e) => updateClientInfoField('homepage', e.target.value)} 
        />
        <FormInput 
          label="전화번호" 
          name="tel" 
          register={register} 
          onChange={(e) => updateClientInfoField('tel', e.target.value)} 
        />
        <FormInput 
          label="모바일" 
          name="mobile" 
          register={register} 
          onChange={(e) => updateClientInfoField('mobile', e.target.value)} 
        />
      <Button type="submit">Submit</Button>
      </form>
    </section>
  );
}