import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function FinalCta() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container text-center">
        <h2 className="font-headline text-3xl font-bold md:text-4xl">
          Dê o primeiro passo para uma vida com mais movimento e sem dor.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Sua recuperação funcional começa com uma avaliação precisa. Estamos
          prontos para te ajudar a retomar sua qualidade de vida.
        </p>
        <Button asChild size="lg" className="mt-8 h-12 px-8 font-bold text-base">
          <Link
            href="https://wa.me/5562986025326?text=Ol%C3%A1%2C%20vim%20do%20Google%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
            target="_blank"
            rel="noopener noreferrer"
          >
            Agende sua Avaliação Agora Mesmo
          </Link>
        </Button>
      </div>
    </section>
  );
}
