import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin } from 'lucide-react';

const WhatsAppIconSvg = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>WhatsApp</title>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.204-1.634a11.86 11.86 0 005.785 1.47h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
);
const InstagramIconSvg = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Instagram</title>
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.784.305-1.459.717-2.126 1.384S.935 3.356.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.783.718 1.459 1.384 2.126.667.666 1.343 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.783-.305 1.459-.718 2.126-1.384.666-.667 1.079-1.343 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.277.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.148-.558-2.913-.305-.783-.718-1.459-1.384-2.126C21.314 1.65 20.638 1.237 19.854.935 19.09.637 18.22.435 16.947.377 15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.42-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.859 0-3.211.016-3.586.061-4.859.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.38.42-.42.819-.69 1.379-.9.42-.165 1.065-.36 2.235-.413C8.414 2.175 8.79 2.16 12 2.16zm0 5.48c-2.432 0-4.397 1.965-4.397 4.397s1.965 4.397 4.397 4.397 4.397-1.965 4.397-4.397-1.965-4.397-4.397-4.397zm0 7.232c-1.573 0-2.835-1.262-2.835-2.835s1.262-2.835 2.835-2.835 2.835 1.262 2.835 2.835-1.262 2.835-2.835 2.835zm6.406-7.857c-.666 0-1.203.536-1.203 1.203s.537 1.203 1.203 1.203 1.203-.536 1.203-1.203c0-.666-.536-1.203-1.203-1.203z" />
    </svg>
);


export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="flex flex-col items-center text-center gap-4">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Image
              src="https://raw.githubusercontent.com/leosabbadin/imagem-abba/593d08e00bbd17757eb8206804b9a41a6afa60e9/Screenshot%20(31)%20(1).png"
              alt="Abba Fisioterapia Logo"
              width={100}
              height={100}
              className="h-auto"
            />
          </Link>
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Visite-nos e sinta a diferença
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="flex flex-col gap-4">
                <h3 className="font-headline text-xl font-bold">Informações de Contato</h3>
                <a href="https://wa.me/5562986025326" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors">
                    <WhatsAppIconSvg className="h-5 w-5 flex-shrink-0 fill-current" />
                    <span className="font-medium">(62) 9 8602-5326</span>
                </a>
                <a href="mailto:abbafisioterapia@gmail.com" className="flex items-center gap-3 hover:text-accent transition-colors">
                    <Mail className="h-5 w-5 flex-shrink-0" />
                    <span className="font-medium">abbafisioterapia@gmail.com</span>
                </a>
                <a href="https://www.instagram.com/abba_fisioterapia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors">
                    <InstagramIconSvg className="h-5 w-5 flex-shrink-0 fill-current" />
                    <span className="font-medium">@abba_fisioterapia</span>
                </a>
                <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                    <span className="font-medium">Avenida Ipanema, N. 684, Qd.03, Lt.14-Sala 01, Jardim Atlântico, Goiânia/GO</span>
                </div>
            </div>
            <div id="localizacao" className="h-full min-h-[300px] w-full overflow-hidden rounded-lg border scroll-mt-20">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.1438914616256!2d-49.297316925911466!3d-16.71986891901867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef7402685cb5b%3A0x28f74233e5c9893!2sAv.%20Ipanema%2C%20684%20-%20Jardim%20Atl%C3%A2ntico%2C%20Goi%C3%A2nia%20-%20GO%2C%2074343-010%2C%20Brazil!5e0!3m2!1sen!2s!4v1683833917457!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Abba Fisioterapia Location"
                ></iframe>
            </div>
        </div>
        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground/80">
            <p>&copy; {new Date().getFullYear()} Abba Fisioterapia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
