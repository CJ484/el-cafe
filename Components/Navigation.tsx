import React from 'react'
import Link from 'next/link'
import { headerLinks } from '@/lib/const/routes'
import { MenuIcon, XIcon } from 'lucide-react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer" 

function DesktopNav() {
    return (
        <nav>
            {headerLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                    {link.label}
                </Link>
            ))}
        </nav>
    )
}

function MobileNav() {
    return(
      <nav>
        <Drawer>
            <DrawerTrigger>
                <MenuIcon />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Menu</DrawerTitle>
                    <DrawerClose>
                        <XIcon />
                    </DrawerClose>
                    <DrawerDescription>
                        {headerLinks.map((link) => (
                            <Link key={link.label} href={link.href}>
                                {link.label}
                            </Link>
                        ))}
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <span>El Cafe</span>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
        
      </nav> 
    )
}

export { DesktopNav, MobileNav }