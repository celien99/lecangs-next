import Banner from '@/components/banner/Banner';
import React from 'react';
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Banner banner='/service/pic_fuwu.png' desc='乐仓能为您做什么' />
      {children}
    </div>
  );
}
