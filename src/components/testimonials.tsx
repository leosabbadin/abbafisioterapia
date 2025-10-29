import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Marcos Vinicius',
    initials: 'MV',
    quote: 'Excelente atendimento!! Local muito bem estruturado e profissionais incríveis. Recomendo demais!!',
  },
  {
    name: 'Gabriel Alves',
    initials: 'GA',
    quote: 'Ótimo atendimento, a dr° é super atenciosa e uma ótima profissional!',
  },
  {
    name: 'Welligton Lemes',
    initials: 'WL',
    quote: 'Atendimento excepcional, do primeiro contato via WhatsApp até a avaliação. Me senti muito acolhido e saí com um direcionamento claro e objetivo sobre o meu tratamento. Recomendo muito!',
  },
  {
    name: 'Matheus',
    initials: 'M',
    quote: 'Fui muito bem atendido e recepcionado, ótimos profissionais, me ajudaram com meu problema, só tenho a agradecer, e super indico.',
  },
  {
    name: 'Cida Souza',
    initials: 'CS',
    quote: 'Fui muito bem atendida, são excelentes profissionais, eu recomendo.',
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-16 sm:py-24 scroll-mt-20">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            O que nossos pacientes dizem
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A confiança e o bem-estar de quem passa por aqui é a nossa maior recompensa.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="mx-auto mt-12 w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.name} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="flex h-full flex-col">
                    <CardContent className="flex flex-1 flex-col items-center justify-between p-6 text-center">
                      <div className="flex-1">
                        <div className="mb-4 flex justify-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-5 w-5 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <blockquote className="italic text-muted-foreground">
                          “{testimonial.quote}”
                        </blockquote>
                      </div>
                      <div className="mt-6 flex items-center gap-3">
                        <Avatar>
                           <AvatarFallback>{testimonial.initials}</AvatarFallback>
                        </Avatar>
                        <p className="font-semibold">{testimonial.name}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
