import Image from 'next/image';
import './amazon.css';
export default function AmazonSPN() {
  return (
    <>
      <div className='top-content'>
        <div className='common'>
          <h2>亚马逊SPN官方推荐物流服务商</h2>
          <div className='logo'>
            <img src='/client/yamaxun_logo.png' alt='' />
          </div>
        </div>
        <div className='spn-content'>
          <div className='spn_left'>
            <Image
              src='/client/pic_Pinterest.png'
              alt=''
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <ul className='spn_right'>
            <li>
              <Image
                src='/client/pic_guanfang.png'
                alt=''
                fill
                style={{ objectFit: 'cover' }}
              />
            </li>
            <li>
              <Image
                src='/client/pic_kaopu.png'
                alt=''
                fill
                style={{ objectFit: 'cover' }}
              />
            </li>
            <li>
              <Image
                src='/client/pic_qiangda.png'
                alt=''
                fill
                style={{ objectFit: 'cover' }}
              />
            </li>
            <li>
              <Image
                src='/client/pic_gaoxiao.png'
                alt=''
                fill
                style={{ objectFit: 'cover' }}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
