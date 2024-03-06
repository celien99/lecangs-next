'use client';
import useCountAnimation from '@/hooks/useCountAnimation';
import Image from 'next/image';
import './advantage.css';
export default function Advantage() {
  interface ojb {
    icon: string;
    count: string;
    desc: string;
  }
  const dataList: ojb[] = [
    {
      icon: '/front/xz1.png',
      count: '>99%',
      desc: '单日处理订单',
    },
    {
      icon: '/front/xz2.png',
      count: '>90%',
      desc: '次日达订单',
    },
    {
      icon: '/front/xz3.png',
      count: '500W+',
      desc: '每年订单量',
    },
    {
      icon: '/front/xz4.png',
      count: '<24h',
      desc: '发货时效',
    },
    {
      icon: '/front/xz5.png',
      count: '99.9%',
      desc: '库存准确率',
    },
    {
      icon: '/front/xz6.png',
      count: '99.9%',
      desc: '发货准确率',
    },
    {
      icon: '/front/xz7.png',
      count: '100+',
      desc: 'IT团队(人)',
    },
    {
      icon: '/front/xz8.png',
      count: '100+',
      desc: '英语售后客服团队(人)',
    },
    {
      icon: '/front/xz9.png',
      count: '100+',
      desc: '美国本土团队(人)',
    },
    {
      icon: '/front/xz10.png',
      count: '11',
      desc: '海外仓运营经验(年)',
    },
    {
      icon: '/front/xz11.png',
      count: '14',
      desc: '跨境电商运营经验(年)',
    },
    {
      icon: '/front/xz12.png',
      count: '600+',
      desc: '服务客户(家)',
    },
  ];
  useCountAnimation();
  return (
    <div className='advan-box'>
      <div className='advantage-header'>
        <h2>我们拥有十二大优势</h2>
        <h3>始于卖家,服务卖家,更懂卖家</h3>
        <span>advantage</span>
      </div>
      <div className='advantage-body'>
        {dataList.map((item, index) => (
          <div className='advantage-item' key={index}>
            <div className='icon'>
              <Image
                src={item.icon}
                alt=''
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className='advantage-item-desc'>
              <p className='advantage-item-text'>
                <span className='text-count'>{item.count}</span>
              </p>
              <p className='advantage-item-type'>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='car-left'>
        <div className='car-box'>
          <Image
            src='/front/pic_kache_bg.png'
            alt=''
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className='car-right'>
        <div className='car-box'>
          <Image
            src='/front/pic_kache_bg.png'
            alt=''
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className='circle-1'></div>
      <div className='circle-2'></div>
      <div className='tip-1'>
        <Image
          src='/front/bg_dd.png'
          alt=''
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}
