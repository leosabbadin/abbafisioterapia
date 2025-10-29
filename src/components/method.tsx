import { Search, HeartHandshake, Medal } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const methodPoints = [
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: 'Avaliação Precisa',
    description: 'Investigamos a fundo para entender a origem do problema.',
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: 'Atendimento Humanizado',
    description: 'Um ambiente acolhedor e empático onde você se sente seguro e ouvido.',
  },
  {
    icon: <Medal className="h-8 w-8 text-primary" />,
    title: 'Profissionais Qualificados',
    description: 'Equipe em constante atualização e comprometida com as melhores práticas.',
  },
];

export function Method() {
    const text = 'O nome "Abba" vem do aramaico e significa "Pai", uma expressão de intimidade, confiança e cuidado. Essa é a base da nossa filosofia. Nossa missão é promover um serviço inigualável, onde a excelência profissional encontra os valores éticos e cristãos. Aqui, você não é apenas um paciente; vemos você como um todo, cuidando do seu bem-estar físico, emocional e espiritual.';
  return (
    <section className="bg-muted/50 py-16 sm:py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6 text-center md:text-left">
              <h2 className="font-headline text-3xl font-bold md:text-4xl">
                Mais que Fisioterapia. Um Cuidado que Acolhe.
              </h2>
              <p className="text-lg text-muted-foreground">
                {text}
              </p>
              <div className="flex flex-col gap-4 mt-4">
                  {methodPoints.map((point) => (
                      <div key={point.title} className="flex items-start gap-4">
                          <div className="flex-shrink-0 pt-1">{point.icon}</div>
                          <div>
                              <h3 className="text-lg font-bold">{point.title}</h3>
                              <p className="text-muted-foreground">{point.description}</p>
                          </div>
                      </div>
                  ))}
              </div>
               <Button asChild size="lg" className="mt-4 h-12 px-8 font-bold text-base w-full md:w-auto self-center md:self-start">
                  <Link
                    href="https://wa.me/5562986025326"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fale com um Especialista
                  </Link>
                </Button>
            </div>
            <div className="relative aspect-square w-full h-auto">
                <Image
                    src="https://raw.githubusercontent.com/leosabbadin/imagem-abba/593d08e00bbd17757eb8206804b9a41a6afa60e9/WhatsApp%20Image%202025-10-28%20at%2010.16.36.jpeg"
                    alt="Equipe Abba Fisioterapia"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                />
            </div>
        </div>
      </div>
    </section>
  );
}
