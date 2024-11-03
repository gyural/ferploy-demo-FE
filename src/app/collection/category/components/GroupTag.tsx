import React from 'react';

interface GroupTagProps {
  name: string;
}

export default function GroupTag({ name }: GroupTagProps) {
  return (
    <div className='py-1 px-2.5 border border-[#898989] text-[10px] text-[#898989] font-semibold rounded-[50px]'>
      # {name}
    </div>
  );
}