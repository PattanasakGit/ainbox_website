import React from 'react';

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>
        <div className="bg-[url('/bg.webp')] bg-cover bg-no-repeat bg-fixed w-screen h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
