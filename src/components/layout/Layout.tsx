import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ReactNode } from 'react';
import Footer from './Footer/Footer';
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className='flex min-h-screen flex-col'>
      <AntdRegistry>
        <div className='flex flex-1 flex-col'>{children}</div>
        <Footer />
      </AntdRegistry>
    </main>
  );
}
