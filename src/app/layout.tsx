import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script'; // <-- 1. IMPORTADO O COMPONENTE NATIVO

export const metadata: Metadata = {
  title: 'Abba Fisioterapia Integrada',
  description: 'Chega de Viver com Limitações. Encontre alívio para sua dor e recupere seu movimento com nossa equipe de especialistas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />

        {/* 2. CÓDIGO DO GTM (HEAD) ADICIONADO AQUI */}
        <Script id="google-tag-manager-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PVFWJVHR');
          `}
        </Script>
        {/* FIM DO GTM (HEAD) */}
      </head>

      <body className="font-body antialiased">
        
        {/* 3. CÓDIGO DO GTM (NOSCRIPT) ADICIONADO AQUI */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PVFWJVHR"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* FIM DO GTM (NOSCRIPT) */}

        {children}
        <Toaster />
      </body>
    </html>
  );
}
