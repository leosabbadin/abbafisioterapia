import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script'; // <-- 1. IMPORTADO O COMPONENTE DE SCRIPT

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
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />

        {/* -- TAGS DO GOOGLE ADICIONADAS AQUI -- */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17371593025"
          strategy="afterInteractive" 
        />
        <Script id="google-ads-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17371593025');
          `}
        </Script>
        {/* -- FIM DAS TAGS DO GOOGLE -- */}
        
      </body>
    </html>
  );
}
