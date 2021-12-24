import 'antd/dist/antd.css';
import 'styles/globals.css';

import { Layout } from 'antd';
import LayoutFooter from 'components/layouts/footer';
import LayoutNavbar from 'components/layouts/navbar';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const { Header, Footer, Content } = Layout;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Header>
        <Head>
          <title>Nadama</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <LayoutNavbar />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div
          style={{
            minHeight: '280px',
            padding: '24px',
            background: '#fff',
          }}
        >
          <Component {...pageProps} />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <LayoutFooter />
      </Footer>
    </Layout>
  );
};

export default MyApp;
