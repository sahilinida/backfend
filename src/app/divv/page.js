'use client'
import Link from 'next/link';
import styled from 'styled-components';
import { useState } from 'react';

const NavbarContainer = styled.div`
  background-color: ;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: ;
    padding: 1rem;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

const NavbarLink = styled.a`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer className=' bg-purple-400 rounded-sm shadow-md '>
      <Link href="/">
        <NavbarLink className=' text-base no-underline' ><label className=' text-[24px]'> Techword..</label></NavbarLink>
      </Link>

      <NavbarLinks className=' sm:bg-purple-300  tb:bg-purple-300 rounded-md mr-10 hidden' isOpen={isOpen}>
      <Link className=' text-white   mx-auto  no-underline hover:bg-gray-700 px-1 rounded-md   ' href="/contact">
          {/* <NavbarLink>About</NavbarLink> */} Home
        </Link>
        <Link className=' text-white   mx-auto  no-underline hover:bg-gray-700 px-1 rounded-md   ' href="/contact">
          {/* <NavbarLink>About</NavbarLink> */} Contact
        </Link>
        <Link className=' text-white   mx-auto no-underline hover:bg-gray-700 px-1 rounded-md   ' href="/about">
          {/* <NavbarLink>About</NavbarLink> */} home
        </Link>
        <Link className=' text-white    mx-auto  no-underline hover:bg-gray-700 px-1 rounded-md  ' href="/about">
          {/* <NavbarLink>About</NavbarLink> */} home
        </Link>
      
      </NavbarLinks>

      <button className=' bg-red-600 text-white   md:hidden'  onClick={toggleNavbar}><img className=' w-10 rounded-sm bg-white' src='./menu.png' alt=''/>
      </button>
    </NavbarContainer>
  );
};

export default Navbar;
