import Banner from '@/components/banner/Banner';
import BannerBtn from '@/components/banner/BannerBtn';
import { clientTab } from '@/utils/staticData';
import React from 'react';
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Banner
        banner='/client/pic_chengnuo.png'
        desc='我们力求在LECANGS培养卓越的文化。我们的核心信念是持续改进的理念。正是这种对我们业务的态度转化为我们为客户提供的承诺、保证和对细节的关注'
      />
      <BannerBtn tabList={clientTab} />
      {children}
    </div>
  );
}
