'use client';
import { tabType } from '@/utils/staticData';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './banner.css';
export default function BannerBtn(prop: { tabList: Array<tabType> }) {
  const { tabList } = prop;
  const pathname = usePathname();
  return (
    <div className='navbar-tab'>
      <ul className='tab-list'>
        {tabList.map((item: tabType) => (
          <Link href={item.path}>
            <div className='tabImage'>
              <Image
                src={
                  item.path === pathname ? item.activeImage : item.inactiveImage
                }
                alt=''
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}
