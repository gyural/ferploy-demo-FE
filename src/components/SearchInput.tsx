import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr';
import React from 'react';

interface SearchInputProps {
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, onChange }) => {
  return (
    <div className="relative w-full ">
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className="w-full bg-[#F5F5F5] text-[12px] text-[#AFAFAF] mb-5
        test-[12px] font-medium p-[9px] rounded-[5px] border-[#D9D9D9] border-[1px] pr-10
        outline-none
        "
        
      />
      <div className="absolute right-2 top-1/3 transform -translate-y-1/2">
        <MagnifyingGlass size={20} className="text-[#AFAFAF]" />
      </div>
    </div>
  );
};

export default SearchInput;