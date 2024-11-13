'use client'
import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import FormInput from './FormInput';
import { createNameCard } from '@/app/api/createNameCard';
import { useAuthStore } from '@/app/hooks/useAuthStore';
import { ClientType } from '@/app/collection/components/NameCardList';
import FormSelect from './FormSelect';

export interface FormData {
  name: string;
  companyName: string;
  position: string;
  mobileNumber: string;
  email: string;
  place: string;
  savedDate: string;
  memo: string;
  clientType?: ClientType;
}

interface NameCardFormProps {
  onOpen: () => void;
  defaultValues?: FormData; // defaultValues prop to receive initial form values
}

export default function NameCardForm({ onOpen, defaultValues }: NameCardFormProps) {
  const { user } = useAuthStore();
  
  // Get the accessToken if user is available
  const globalAccessToken = user?.accessToken;
  const { register, handleSubmit, reset } = useForm<FormData>({
    defaultValues: defaultValues ?? {
      name: "",
      position: "",
      companyName: "",
      savedDate: "",
      email: "",
      place: "",
      memo: "",
      mobileNumber: "",
      clientType: "고객",
    },
  });

  // Effect to reset the form when defaultValues changes
  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      console.log('datata', data)
      // Call the API to submit the data
      if(globalAccessToken){
        await createNameCard(globalAccessToken, data);
      }else{
        alert("로그인 후 이용해주세요")
        // logountHandler
      }

      alert('정상 저장되었습니다.');
      onOpen(); // Trigger any UI update or modal
      reset(data); // Reset form with the submitted data

    } catch (error) {
      // Handle error (for example, display an error message)
      console.error('Error submitting form: ', error);
      alert('저장 중 오류가 발생했습니다.');
    }
  };
  return (
    <section className="py-4">
      <h2 className="text-xl font-bold mb-4">명함 편집</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <FormInput label={'이름'} register={register('name')} />
        <FormInput label={'회사'} register={register('companyName')} />
        <FormInput label={'직책'} register={register('position')} />
        <FormInput label={'번호'} register={register('mobileNumber')} />
        <FormInput label={'이메일'} register={register('email')} />
        <FormInput label={'저장된 장소'} register={register('place')} />
        <FormInput label={'메모 내용'} register={register('memo')} />
        <FormInput label={'저장 날짜'} register={register('savedDate')} />
        <FormSelect label="클라이언트 유형" register={register('clientType')} />
        <button 
          type='submit'
          className="inline-block mt-4 w-full py-4 bg-[#465EFE] text-white rounded-[10px]">
          저장하기
        </button>
      </form>
    </section>
  );
}