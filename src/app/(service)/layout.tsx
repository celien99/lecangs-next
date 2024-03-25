import Banner from '@/components/banner/Banner';
import BannerBtn from '@/components/banner/BannerBtn';
import { tabList } from '@/utils/staticData';
import React from 'react';
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Banner banner='/service/pic_fuwu.png' desc='乐仓能为您做什么' />
      <BannerBtn tabList={tabList} />
      {children}
    </div>
  );
}
