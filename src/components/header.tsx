
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from '@/lib/utils';

export function Header() {
    const [open, setOpen] = useState(false);
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    setOpen(false);
  };

  const navLinks = (
    <>
      <Button variant="link" asChild className="text-primary-foreground hover:text-accent transition-colors text-base">
          <Link href="#servicos" onClick={handleScroll}>Serviços</Link>
      </Button>
      <Button variant="link" asChild className="text-primary-foreground hover:text-accent transition-colors text-base">
          <Link href="#depoimentos" onClick={handleScroll}>Depoimentos</Link>
      </Button>
      <Button variant="link" asChild className="text-primary-foreground hover:text-accent transition-colors text-base">
          <Link href="#localizacao" onClick={handleScroll}>Localização</Link>
      </Button>
    </>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-primary text-primary-foreground">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <Image
            src="https://raw.githubusercontent.com/leosabbadin/imagem-abba/593d08e00bbd17757eb8206804b9a41a6afa60e9/Screenshot%20(31)%20(1).png"
            alt="Abba Fisioterapia Logo"
            width={100}
            height={100}
            className="h-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
            {navLinks}
        </nav>
         <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-primary text-primary-foreground border-l-primary-foreground/20">
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
