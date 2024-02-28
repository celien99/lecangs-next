import Image from 'next/image';
import './footer.css';
export default function Footer() {
  const linkList = [
    {
      uname: '乐歌官网',
      link: '#',
    },
    {
      uname: '联邦速递官网',
      link: '#',
    },
    {
      uname: '美国邮政官网',
      link: '#',
    },
    {
      uname: 'DHL官网',
      link: '#',
    },
    {
      uname: 'UPS官网',
      link: '#',
    },
    {
      uname: 'GLS官网',
      link: '#',
    },
  ];
  return (
    <>
      <footer className='footer'>
        <div className='content'>
          <div className='left'>
            <div className='relative w-32 h-10'>
              <Image
                src='/logo_footer.png'
                alt=''
                fill
                sizes='(max-width: 750px) 0, 130px'
              />
            </div>
            <div className='contact'>
              <h1>联系我们</h1>
              <p>公司地址：宁波市鄞州区首南街道学士路536号 金东大厦15-19层</p>
              <p>电话：400-835-8800</p>
              <p className='mb-0'>邮箱：info@lecangs.com</p>
            </div>
          </div>
          <div className='middle'>
            <h1>友情链接</h1>
            <ul className='linkList'>
              {linkList.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.uname}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className='icon-line'></div>
          <div className='right'>
            <h1>订阅乐歌海外仓电子报</h1>
            <div className='emainInput'>
              <div className='inputBox'>
                <div className='input'>
                  <input type='text' placeholder='邮箱' />
                </div>
                <div className='btn'>
                  <button type='submit'>
                    <div className='svg'>
                      <Image src='/foot.svg' alt='' fill />
                    </div>
                  </button>
                </div>
              </div>
              <p className='hint'>提交邮箱以订阅我们最新的优惠信息和行业文章</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
