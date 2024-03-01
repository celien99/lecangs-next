import Image from 'next/image';
import Link from 'next/link';
import './service.css';
export default function Card() {
  const cardList = [
    {
      id: 1,
      url: '/',
      title: '头程海运',
      desc: '更优势的海运费,尾程清关拖车费,提供整柜订舱,端到端的服务。',
      backgroundImage: '/front/toucheng1.jpg',
    },
    {
      id: 2,
      url: '/',
      title: '一件代发',
      desc: '客户把货物发到海外仓,仓库接受货点上架到仓库系统。客户在系统下订单,当天的订单当天处理发出。',
      backgroundImage: '/front/toucheng2.jpg',
    },
    {
      id: 3,
      url: '/',
      title: 'FBA转运',
      desc: '客户头程备货至乐歌海外仓,FBA库存不足时,可及时从海外仓发货补足库存,价格优惠,免仓期长,加快配送时效,节省物流成本。',
      backgroundImage: '/front/toucheng3.jpg',
    },
    {
      id: 4,
      url: '/',
      title: '仓储服务',
      desc: 'PriceDepot独立站自有流量,实现产品的高动销高周转。',
      backgroundImage: '/front/toucheng4.jpg',
    },
    {
      id: 5,
      url: '/',
      title: '增值服务',
      desc: '产品视频拍摄，售后客服托管，已上架产品拍照、商品尺寸重量复核、销毁、尾程订单拦截或改派等。',
      backgroundImage: '/front/toucheng5.jpg',
    },
  ];
  return (
    <div className='service-main'>
      <div className='commom-header'>
        <h2>乐歌海外仓服务</h2>
        <Image
          src='/front/icon_diwen.png'
          alt=''
          width={256}
          height={8}
          style={{ objectFit: 'cover' }}
        />
        <h3>“头程+海外仓”端到端一站式跨境物流服务</h3>
        <span>service</span>
      </div>
      <div className='card-box'>
        {cardList.map((item) => (
          <div
            className='service_bg'
            style={{ backgroundImage: `url(${item.backgroundImage})` }}
            key={item.id}
          >
            <div className='bg'></div>
            <Link href={item.url}>
              <div className='serviceName'>{item.title}</div>
            </Link>
            <div className='desc'>{item.desc}</div>
          </div>
        ))}
      </div>
      <div className='service-tip-1'>《〈《</div>
    </div>
  );
}
