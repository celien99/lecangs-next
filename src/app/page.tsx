import Advantage from '@/components/advantage/Advantage';
import News from '@/components/news/News';
import Card from '@/components/service/Card';
import USAMap from '@/components/uasMap/USAMap';
import VideoCom from '@/components/video/VideoCom';
import { Carousel } from 'antd';
import Image from 'next/image';
export default function Home() {
  const imgData = [
    '/front/icon_banner.png',
    '/front/icon_beijing.png',
    '/front/icon_honor.png',
  ];
  return (
    <>
      <Carousel autoplay>
        {imgData.map((item, index) => (
          <div className='w-screen' key={index}>
            <Image src={item} alt='' width={1920} height={1276} />
          </div>
        ))}
      </Carousel>
      <VideoCom />
      <Advantage />
      <Card />
      <USAMap />
      <News />
    </>
  );
}
