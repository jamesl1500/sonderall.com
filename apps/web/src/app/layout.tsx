export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
  keywords: process.env.NEXT_PUBLIC_APP_KEYWORDS,
  authors: [
    { name: process.env.NEXT_PUBLIC_APP_NAME, url: process.env.NEXT_PUBLIC_APP_URL }, 
    { name: process.env.NEXT_PUBLIC_APP_AUTHOR, url: process.env.NEXT_PUBLIC_APP_AUTHOR_URL }
  ],
  creator: process.env.NEXT_PUBLIC_APP_AUTHOR,
  publisher: process.env.NEXT_PUBLIC_APP_NAME,
  applicationName: process.env.NEXT_PUBLIC_APP_NAME,
  colorScheme: 'light dark',
  metadataBase: process.env.NEXT_PUBLIC_APP_URL ? new URL(process.env.NEXT_PUBLIC_APP_URL) : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="website">
          {children}
        </div>
      </body>
    </html>
  );
}
