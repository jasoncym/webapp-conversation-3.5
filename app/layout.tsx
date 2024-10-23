import { getLocaleOnServer } from '@/i18n/server';

import './styles/globals.css';
import './styles/markdown.scss';
import Head from 'next/head'; // 导入 Head 组件

const LocaleLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const locale = getLocaleOnServer();
  return (
    <html lang={locale ?? 'en'} className="h-full">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/public/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/public/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/public/web-app-manifest-192x192.png" />
        <link rel="manifest" href="/public/site.webmanifest" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Head>
      <body className="h-full">
        <div className="overflow-x-auto">
          <div className="w-screen h-screen min-w-[300px]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default LocaleLayout;
