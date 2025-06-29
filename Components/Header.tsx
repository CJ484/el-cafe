import React from 'react'
import Link from 'next/link';

const headerLinks: { label: string, href: string }[] = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Menu',
        href: '/menu'
    },
    {
        label: 'About Us',
        href: '/about-us'
    },
    {
        label: 'Contact Us',
        href: '/contact-us'
    }
]

export default function Header() {
  return (
    <header>
        <h1>El Cafe</h1>
        <nav>
           {headerLinks.map((link) => (
            <Link key={link.label} href={link.href}>
                {link.label}
            </Link>
           ))} 
        </nav>
        
    </header>
  )
}
