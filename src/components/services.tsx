import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope, HeartPulse, FilePlus2, Trophy, Hand, Bone, PersonStanding } from 'lucide-react';
import Image from 'next/image';

const PilatesIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4.2 10.8c.6-.6 1.5-1 2.3-1s1.7.4 2.3 1c.6.6 1 1.5 1 2.3s-.4 1.7-1 2.3c-.6.6-1.5 1-2.3 1s-1.7-.4-2.3-1c-.6-.6-1-1.5-1-2.3s.4-1.7 1-2.3Z" />
        <path d="M10.2 3.8c.6-.6 1.5-1 2.3-1s1.7.4 2.3 1c.6.6 1 1.5 1 2.3s-.4 1.7-1 2.3c-.6.6-1.5 1-2.3 1s-1.7-.4-2.3-1c-.6-.6-1-1.5-1-2.3s.4-1.7 1-2.3Z" />
        <path d="m14 8-4.5 4.5" />
        <path d="M10.2 17.8c.6-.6 1.5-1 2.3-1s1.7.4 2.3 1c.6.6 1 1.5 1 2.3s-.4 1.7-1 2.3c-.6.6-1.5 1-2.3 1s-1.7-.4-2.3-1c-.6-.6-1-1.5-1-2.3s.4-1.7 1-2.3Z" />
        <path d="m18 12 2-2" />
        <path d="m6 6-2-2" />
        <path d="M10 22a2 2 0 1 0-4 0" />
        <path d="M14.5 14.5 18 18" />
    </svg>
);


const servicesList = [
    {
        icon: <Stethoscope className="h-8 w-8 text-primary" />,
        title: "Fisioterapia Especializada",
        description: "Avaliação precisa e tratamento focado na recuperação funcional de traumas ortopédicos e disfunções.",
        imageUrl: "https://raw.githubusercontent.com/leosabbadin/imagem-abba/593d08e00bbd17757eb8206804b9a41a6afa60e9/Fisioterapia%20preventiva%20.jpg"
    },
    {
        icon: <HeartPulse className="h-8 w-8 text-primary" />,
        title: "Dores Crônicas e Agudas",
        description: "Abordagem terapêutica para o tratamento de condições agudas e crônicas, visando o alívio da dor e a restauração do seu bem-estar.",
        imageUrl: "https://raw.githubusercontent.com/leosabbadin/imagem-abba/593d08e00bbd17757eb8206804b9a41a6afa60e9/IMG_1749.jpg"
    },
    {
        icon: <FilePlus2 className="h-8 w-8 text-primary" />,
        title: "Fisioterapia no Pré e Pós-Operatório",
        description: "Acompanhamento completo, da avaliação à alta, para acelerar a recuperação funcional de cirurgias de coluna, joelho, ombro e mais.",
        imageUrl: "https://raw.githubusercontent.com/leosabbadin/imagem-abba/593d08e00bbd17757eb8206804b9a41a6afa60e9/WhatsApp%20Image%202025-10-27%20at%2016.34.36.jpeg",
    },
    {
        icon: <Trophy className="h-8 w-8 text-primary" />,
        title: "Fisioterapia Esportiva",
        description: "Foco na prevenção de lesões, reabilitação acelerada e otimização da performance de atletas, do amador ao profissional.",
        imageUrl: "https://raw.githubusercontent.com/leosabbadin/imagem-abba/593d08e00bbd17757eb8206804b9a41a6afa60e9/IMG_1759.jpg"
    },
    {
        icon: <Hand className="h-8 w-8 text-primary" />,
        title: "Osteopatia",
        description: "Terapia manual que investiga e trata a causa raiz da dor, buscando reequilibrar o corpo de forma integrada.",
        imageUrl: "https://raw.githubusercontent.com/leosabbadin/imagemclinicaabba/eb101ea98fd09d143313fa2f8804989323ab20b7/WhatsApp%20Image%202025-10-28%20at%2014.22.58%20(1).jpeg",
    },
    {
        icon: <Bone className="h-8 w-8 text-primary" />,
        title: "Quiropraxia",
        description: "Ajustes precisos na coluna e articulações para alívio imediato da dor e correção de desalinhamentos.",
        imageUrl: "https://raw.githubusercontent.com/leosabbadin/imagem-abba/593d08e00bbd17757eb8206804b9a41a6afa60e9/WhatsApp%20Image%202025-10-27%20at%2015.21.16.jpeg",
    },
    {
        icon: <PersonStanding className="h-8 w-8 text-primary" />,
        title: "RPG (Reeducação Postural Global)",
        description: "Método de correção postural que trata desequilíbrios musculares de forma global, aliviando dores estruturais.",
        imageUrl: "https://raw.githubusercontent.com/leosabbadin/imagem-abba/593d08e00bbd17757eb8206804b9a41a6afa60e9/WhatsApp%20Image%202025-10-27%20at%2017.13.20.jpeg",
    },
    {
        icon: <PilatesIcon className="h-8 w-8 text-primary" />,
        title: "Pilates",
        description: "Foco no fortalecimento do core, flexibilidade e controle corporal para bem-estar e qualidade de vida.",
        imageUrl: "https://raw.githubusercontent.com/leosabbadin/imagem-abba/593d08e00bbd17757eb8206804b9a41a6afa60e9/WhatsApp%20Image%202025-10-27%20at%2015.22.37%20(1).jpeg",
    },
];

export function Services() {
  return (
    <section id="servicos" className="scroll-mt-20 py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Uma Abordagem Integrada para sua Saúde
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Não tratamos apenas o sintoma, tratamos o paciente. Utilizamos uma combinação de técnicas especializadas para garantir um diagnóstico preciso e um tratamento eficaz:
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicesList.map((service) => (
            <Card key={service.title} className="flex flex-col overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              {service.imageUrl ? (
                <div className="relative h-96 w-full">
                  <Image src={service.imageUrl} alt={service.title} fill className="object-cover" />
                </div>
              ) : (
                <CardHeader className="items-center pt-8">
                  {service.icon}
                </CardHeader>
              )}
              <CardContent className="flex flex-1 flex-col items-center gap-2 text-center p-6">
                <CardTitle className="font-headline text-xl font-semibold">{service.title}</CardTitle>
                <p className="text-muted-foreground flex-1">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
