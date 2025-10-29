"use client";

import Link from "next/link";
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
    <section className="container grid min-h-[calc(100vh-3.5rem)] place-items-center py-20 md:py-32">
      <div className="mx-auto w-full max-w-4xl text-center">
        <h1 className="font-headline text-4xl font-bold md:text-6xl lg:text-7xl">
          Chega de Viver com Limitações.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
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
          <Button asChild variant="outline" size="lg" className="font-bold">
            <Link href="#servicos" onClick={handleScroll}>
              CONHECER OS TRATAMENTOS
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
