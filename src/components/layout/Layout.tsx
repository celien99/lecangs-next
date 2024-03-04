import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ReactNode } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './layout.css';
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className='main'>
      <AntdRegistry>
        <Header />
        <div className='main-content'>{children}</div>
        <Footer />
      </AntdRegistry>
    </main>
  );
}
