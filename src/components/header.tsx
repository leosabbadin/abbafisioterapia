
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Header() {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-primary text-primary-foreground backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
            <Button variant="link" asChild className="text-primary-foreground hover:text-accent">
                <Link href="#servicos" onClick={handleScroll}>Serviços</Link>
            </Button>
            <Button variant="link" asChild className="text-primary-foreground hover:text-accent">
                <Link href="#depoimentos" onClick={handleScroll}>Depoimentos</Link>
            </Button>
            <Button variant="link" asChild className="text-primary-foreground hover:text-accent">
                <Link href="#localizacao" onClick={handleScroll}>Localização</Link>
            </Button>
        </nav>
      </div>
    </header>
  );
}
