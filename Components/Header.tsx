'use client'
import React from 'react'
import { useWindowSize } from 'usehooks-ts';
import Link from 'next/link';
import { ShoppingCartIcon } from 'lucide-react';
import { DesktopNav, MobileNav } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import styles from '@/styles/components.module.scss';

export default function Header() {
    const isMobile = useWindowSize();

  return (
    <header className={styles.header}>
        <Link href="/" className={styles.header__logo}>El Cafe</Link>
        {isMobile.width < 768 ? <MobileNav /> : <DesktopNav />}
        <Button asChild size="sm" className={styles.header__orderButton}>
            <Link href="/">                
                <ShoppingCartIcon /> Order Now
            </Link>
        </Button>
    </header>
  )
}
