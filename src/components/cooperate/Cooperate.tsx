'use client';
import useAutoScroll from '@/hooks/useAutoScroll';
import Image from 'next/image';
import './cooperate.css';
export default function Cooperate() {
  const scrollRef = useAutoScroll(10, 100);
  const cooperative = [
    {
      id: 1,
      arrObj: [
        {
          id: 1,
          imgSrc: '/logo1.png',
        },
        {
          id: 2,
          imgSrc: '/logo2.png',
        },
        {
          id: 3,
          imgSrc: '/logo3.png',
        },
      ],
    },
    {
      id: 2,
      arrObj: [
        {
          id: 1,
          imgSrc: '/logo4.png',
        },
        {
          id: 2,
          imgSrc: '/logo5.png',
        },
        {
          id: 3,
          imgSrc: '/logo6.png',
        },
      ],
    },
    {
      id: 3,
      arrObj: [
        {
          id: 1,
          imgSrc: '/logo7.png',
        },
        {
          id: 2,
          imgSrc: '/logo8.png',
        },
        {
          id: 3,
          imgSrc: '/logo9.png',
        },
      ],
    },
    {
      id: 4,
      arrObj: [
        {
          id: 1,
          imgSrc: '/logo10.png',
        },
        {
          id: 2,
          imgSrc: '/logo11.png',
        },
        {
          id: 3,
          imgSrc: '/logo12.png',
        },
      ],
    },
    {
      id: 5,
      arrObj: [
        {
          id: 1,
          imgSrc: '/logo13.png',
        },
        {
          id: 2,
          imgSrc: '/logo14.png',
        },
        {
          id: 3,
          imgSrc: '/logo15.png',
        },
      ],
    },
    {
      id: 6,
      arrObj: [
        {
          id: 1,
          imgSrc: '/logo16.png',
        },
        {
          id: 2,
          imgSrc: '/logo17.png',
        },
        {
          id: 3,
          imgSrc: '/logo18.png',
        },
      ],
    },
    {
      id: 7,
      arrObj: [
        {
          id: 1,
          imgSrc: '/logo19.png',
        },
        {
          id: 2,
          imgSrc: '/logo20.png',
        },
        {
          id: 3,
          imgSrc: '/logo21.png',
        },
      ],
    },
    {
      id: 8,
      arrObj: [
        {
          id: 1,
          imgSrc: '/logo22.png',
        },
        {
          id: 2,
          imgSrc: '/logo23.png',
        },
      ],
    },
  ];
  return (
    <div className='coo-main'>
      <div className='commom-header'>
        <h2>合作伙伴</h2>
        <h3>乐歌海外仓合作伙伴</h3>
        <span>logistics</span>
      </div>
      <div className='col-body'>
        <div className='col-left'>
          <div className='col-items'>
            <div className='scroll_div' ref={scrollRef}>
              <ul>
                {cooperative.map((item) => (
                  <li key={item.id}>
                    {item.arrObj.map((i) => (
                      <div className='pic' key={i.id}>
                        <Image
                          src={i.imgSrc}
                          alt=''
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='col-bottom-line'></div>
        </div>
        <div className='col-right'>
          <Image
            src='/icon_jizhuangxiang.png'
            alt=''
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className='col-circle-1'></div>
        <div className='col-circle-2'></div>
        <div className='col-circle-3'></div>
      </div>
    </div>
  );
}
