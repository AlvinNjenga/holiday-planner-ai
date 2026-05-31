import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const menuOptions = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact-us' },
];

const Header = () => {

  return (
    <div className='flex items-center justify-between p-4'>
        {/* Logo */}
        <div className='flex gap-2 items-center'>
            <Image src="/logo.svg" alt="Logo" width={30} height={30} />
            <h2 className='font-bold text-2xl'>AI Trip Planner</h2>
        </div>
        {/* Menu Options */}
        <div className='flex gap-10 items-center'>
            {menuOptions.map((option) => (
                <Link key={option.name} href={option.href} className='text-gray-600 hover:text-gray-900'>
                    <h2 className='text-lg hover:scale-105 transition-all hover:text-primary'>{option.name}</h2>
                </Link>
            ))}
        </div>

        {/* Get Started Button */}
        <Button size='lg'>Get Started</Button>
    </div>
  )
}

export default Header