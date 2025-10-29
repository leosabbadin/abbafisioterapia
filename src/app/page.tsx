import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Method } from '@/components/method';
import { FinalCta } from '@/components/final-cta';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Method />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
