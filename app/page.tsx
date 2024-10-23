import type { FC } from 'react';
import React from 'react';
import Head from 'next/head'; // 导入 Head 组件

import type { IMainProps } from '@/app/components';
import Main from '@/app/components';

const App: FC<IMainProps> = ({ params }: any) => {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/public/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/public/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/public/web-app-manifest-192x192.png" />
        <link rel="manifest" href="/public/site.webmanifest" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Head>
      <Main params={params} />
    </>
  );
};

export default React.memo(App);
