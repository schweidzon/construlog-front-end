'use client'
import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

const MenuSanduiche = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-w-300px absolute top-3">
      <button onClick={toggleMenu} className="p-2 ">
        <FiMenu size={32} />
      </button>
      {isOpen && (
        <div className=" bg-white absolute top-14 left-0 ">
          <ul className="flex flex-col min-w-[100px]">
            <li className='border border-solid w-full p-2'>
              <a href="/login" className=" hover:underline">Login</a>
            </li>
            <li className='border border-solid w-full p-2'>
              <a href="/contatos" className=" hover:underline">Contatos</a>
            </li>
            <li className='border border-solid w-full p-2'>
              <a href="/sobre-nos" className=" hover:underline">Sobre nós</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuSanduiche;
