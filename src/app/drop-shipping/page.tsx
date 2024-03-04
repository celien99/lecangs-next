import Image from 'next/image';
import style from './style.module.css';
export default function DropShipping() {
  interface img {
    id: number;
    src: string;
  }
  const imgList: img[] = [
    {
      id: 1,
      src: '/service/pic_dians@2x.png',
    },
    {
      id: 2,
      src: '/service/pic_pifa.png',
    },
    {
      id: 3,
      src: '/service/pic_yunfei.png',
    },
    {
      id: 4,
      src: '/service/pic_bentu.png',
    },
    {
      id: 5,
      src: '/service/pic_caozuo.png',
    },
  ];
  return (
    <div className='pt-10 bg-gray-800 text-center'>
      <div className='font-bold text-white'>
        <div className={style.Hmain}>
          <div className={style.drop}>
            <div className={style.title}>本土优质账号，中大件优惠快捷</div>
            <div className={style.common}>
              <h2>服务简介</h2>
              <h3>
                客户把货物发到海外仓，仓库接收货物并清点上架到仓库系统。客户在系统下订单，当天的订单当天处理发出。
              </h3>
            </div>
          </div>
        </div>
        <div className={style.advantage}>
          <div className='common-header'>
            <h2>服务优势</h2>
          </div>
          <div className={style.superiority}>
            <ul>
              {imgList.map((item) => (
                <li key={item.id}>
                  <Image
                    src={item.src}
                    alt=''
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
