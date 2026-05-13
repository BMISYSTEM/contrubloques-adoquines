'use client'
import  { useState } from 'react';

export const Acordion = ({ title, content }:{title:string,content:string}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex flex-col w-full gap-5 ">
      <div className="flex w-full text-lg font-semibold justify-between" onClick={() => setIsActive(!isActive)}>
        <div className='cursor-pointer'>{title}</div>
        <div className='cursor-pointer'>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content" dangerouslySetInnerHTML={{ __html: content }}/>}
    </div>
  );
};

