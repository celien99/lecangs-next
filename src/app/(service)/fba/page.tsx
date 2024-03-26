import Image from 'next/image';
import style from './style.module.css';
export default function page() {
  interface fabType {
    id: number;
    activeImg: string;
    normalImg: string;
    title: string;
    desc: string;
  }
  const contentList: Array<fabType> = [
    {
      id: 1,
      activeImg: '/service/fba/16_1.png',
      normalImg: '/service/fba/16.png',
      title: '库位自由优势',
      desc: '可解决FBA仓库低配额的限制以及旺季爆仓无法入库的问题',
    },
    {
      id: 2,
      activeImg: '/service/fba/18_1.png',
      normalImg: '/service/fba/18.png',
      title: '配送时效优势',
      desc: '轻松掌控国内发货到乐仓的良性节奏，保证尾程配送时效',
    },
    {
      id: 3,
      activeImg: '/service/fba/15_1.png',
      normalImg: '/service/fba/15.png',
      title: '风险可控优势',
      desc: '大大降低封店后货物被封的风险',
    },
    {
      id: 4,
      activeImg: '/service/fba/17_1.png',
      normalImg: '/service/fba/17.png',
      title: '售后服务优势',
      desc: '很好地控制滞销情况造成的FBA产品积压及仓储成本增加',
    },
  ];
  return (
    <>
      <div className={style.top}>
        <div className={style.common}>
          <h2>服务简介</h2>
          <h3>
            客户头程备货至海外仓，FBA库存不足时，可及时从海外仓发货补足库存；价格优惠，免仓期长，加快配送时效，节省物流成本
          </h3>
        </div>
      </div>
      <div className={style.middle}>
        <div className={style.common}>
          <h2>服务优势</h2>
        </div>
        <ul className={style.transport}>
          {contentList.map((item: fabType) => (
            <li key={item.id}>
              <div className={style.active}>
                <Image
                  src={item.activeImg}
                  alt=''
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={style.normal}>
                <Image
                  src={item.normalImg}
                  alt=''
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={style.title}>{item.title}</div>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={style.bottom}>
        <div className={style.common}>
          <h2>合作服务商</h2>
        </div>
        <div className={style.cooperate}>
          <Image
            src='/service/fba/pic_hezuo_loge.png'
            alt=''
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </>
  );
}
