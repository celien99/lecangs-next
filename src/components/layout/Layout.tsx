import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ReactNode } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className='flex min-h-screen flex-col'>
      <AntdRegistry>
        <Header />
        <div className='flex flex-1 flex-col mt-32'>{children}</div>
        <Footer />
      </AntdRegistry>
    </main>
  );
}
