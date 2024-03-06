'use client';
import { map } from '@/utils/staticData';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import './banner.css';
type bannerType = {
  banner: string;
  desc?: string;
};
export default function Banner(props: bannerType) {
  const pathname = usePathname();
  const [title, setTitle] = useState<string>();
  useEffect(() => {
    if (pathname && map.has(pathname)) {
      setTitle(map.get(pathname));
    }
  });
  return (
    <>
      <div
        className='banner-img'
        style={{ backgroundImage: `url(${props.banner})` }}
      >
        <div className='title'>
          <h2>{title}</h2>
          <p>{props.desc}</p>
        </div>
      </div>
    </>
  );
}
