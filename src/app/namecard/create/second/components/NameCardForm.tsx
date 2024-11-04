'use client'
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import FormInput from './FormInput'; // Adjust the import path as needed

interface FormData {
  name: string;
  companyAndPosition: string;
  mobile: string;
  email: string;
  location: string;
  date: string;
  

}

interface NameCardFormProps{
  onOpen: () => void
} 
export default function NameCardForm({onOpen}: NameCardFormProps) {
  const { register, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      name: "",
      companyAndPosition: "",
      mobile: "",
      email: "",
      location: "",
      date: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // Perform your submission logic here, e.g., send data to an API\
    onOpen()
    reset(); // Reset form after submission
  };

  return (
    <section className="py-4">
      <h2 className="text-xl font-bold mb-4">명함 편집</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <FormInput label={'이름'} register={register('name')} />
        <FormInput label={'회사 / 직책'} register={register('companyAndPosition')} />
        <FormInput label={'번호'} register={register('mobile')} />
        <FormInput label={'이메일'} register={register('email')} />
        <FormInput label={'저장된 장소'} register={register('location')} />
        <FormInput label={'메모 내용'} register={register('date')} />
        <FormInput label={'저장 날짜'} register={register('date')} />

        <button 
          type="submit" className="inline-block mt-4 w-full py-4 bg-[#465EFE] text-white rounded-[10px]">
          저장하기
        </button>
      </form>
    </section>
  );
}