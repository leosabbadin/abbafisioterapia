import { HeartPulse, Stethoscope, Trophy, PersonStanding, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const painPointsList = [
  {
    icon: <HeartPulse className="h-8 w-8 text-primary" />,
    description: 'Dores crônicas ou agudas que limitam seus movimentos.',
  },
  {
    icon: <Stethoscope className="h-8 w-8 text-primary" />,
    description: 'Recuperação de cirurgias (Pré e Pós-Operatório).',
  },
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    description: 'Lesões esportivas que te afastaram do que você ama.',
  },
  {
    icon: <PersonStanding className="h-8 w-8 text-primary" />,
    description: 'Desconforto postural (RPG) ou tensão diária.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    description: 'Insegurança para retomar suas atividades após um trauma.',
  },
];

export function PainPoints() {
  return (
    <section className="bg-muted/50 py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            A dor não precisa fazer parte da sua rotina.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Seja uma dor aguda que apareceu de repente ou uma condição crônica que
            limita seu dia a dia, nós entendemos o impacto que ela causa. Nossa
            equipe está pronta para ajudar você se você sofre com:
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {painPointsList.map((point) => (
             <Card key={point.description} className="bg-card text-center flex flex-col items-center justify-start p-4">
              <CardHeader className="p-2">
                {point.icon}
              </CardHeader>
              <CardContent className="p-2">
                <p className="font-semibold">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
