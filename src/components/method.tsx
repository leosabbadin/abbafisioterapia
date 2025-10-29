import { Search, HeartHandshake, Medal } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const methodPoints = [
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: 'Avaliação Precisa',
    description: 'Investigamos a fundo para entender a origem do problema.',
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-primary" />,
    title: 'Atendimento Humanizado',
    description: 'Um ambiente acolhedor e empático onde você se sente seguro e ouvido.',
  },
  {
    icon: <Medal className="h-10 w-10 text-primary" />,
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
            <div className="text-center md:text-left">
              <h2 className="font-headline text-3xl font-bold md:text-4xl">
                Mais que Fisioterapia. Um Cuidado que Acolhe.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {text}
              </p>
            </div>
            <div className="relative aspect-video w-full">
                <Image 
                    src="https://raw.githubusercontent.com/leosabbadin/imagem-abba/593d08e00bbd17757eb8206804b9a41a6afa60e9/WhatsApp%20Image%202025-10-28%20at%2010.16.36.jpeg"
                    alt="Equipe Abba Fisioterapia"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                />
            </div>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {methodPoints.map((point) => (
            <Card key={point.title} className="border-2 border-primary/10 bg-card shadow-lg">
              <CardHeader className="items-center pt-8">
                {point.icon}
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-2 text-center">
                <CardTitle className="font-headline text-xl font-semibold">{point.title}</CardTitle>
                <p className="text-muted-foreground">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
