"use client";

import Link from "next/link";
import Image from 'next/image';
import { Button } from "@/components/ui/button";

export function Hero() {
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
    <section className="relative h-[calc(100vh-3.5rem)] w-full">
      <Image
        src="https://raw.githubusercontent.com/leosabbadin/imagem-abba/593d08e00bbd17757eb8206804b9a41a6afa60e9/ABBA.jpg"
        alt="Mulher sorrindo enquanto faz um exercício de fisioterapia com um profissional."
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
      <div className="container relative z-10 grid h-full place-items-center text-center">
        <div className="mx-auto w-full max-w-4xl text-white">
          <h1 className="font-headline text-4xl font-bold md:text-6xl lg:text-7xl">
            Chega de Viver com Limitações.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-200">
            Você encontrou a clínica certa. Nossa equipe de especialistas une
            tratamento avançado e cuidado humano para tirar você da crise e
            devolver seu movimento.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="font-bold">
              <Link
                href="https://wa.me/5562986025326"
                target="_blank"
                rel="noopener noreferrer"
              >
                QUERO ALIVIAR MINHA DOR AGORA
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-bold bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <Link href="#servicos" onClick={handleScroll}>
                CONHECER OS TRATAMENTOS
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
