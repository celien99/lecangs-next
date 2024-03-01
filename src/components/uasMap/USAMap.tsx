'use client';
import UseEcharts from '@/hooks/useEcharts';
import Image from 'next/image';
import './map.css';
export default function USAMap() {
  return (
    <div className='map-main'>
      <div className='commom-header'>
        <h2>乐歌海外仓布局</h2>
        <Image
          src='/front/icon_diwen.png'
          alt=''
          width={256}
          height={8}
          style={{ objectFit: 'cover' }}
        />
        <h3>乐歌海外仓布局图</h3>
        <span>layout</span>
      </div>
      <UseEcharts />
      <div className='map-dots'>
        <div className='map-dot'>
          <div className='dot-color' style={{ background: '#c0cbf7' }}></div>
          <div className='dot-text'>1日达</div>
        </div>
        <div className='map-dot'>
          <div className='dot-color' style={{ background: '#899ceb' }}></div>
          <div className='dot-text'>2日达</div>
        </div>
        <div className='map-dot'>
          <div className='dot-color' style={{ background: '#758cf0' }}></div>
          <div className='dot-text'>3日达</div>
        </div>
      </div>
    </div>
  );
}
