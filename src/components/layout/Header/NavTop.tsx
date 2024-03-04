import Image from 'next/image';
export default function NavTop() {
  return (
    <>
      <div className='top-nav'>
        <div className='nav-left'>
          <div>
            <p>股票代码：300729</p>
            <p>股票简称：乐歌股份</p>
          </div>
          <a href='tel: 400-835-8800'>电话: 400-835-8800</a>
        </div>
        <div className='nav-right'>
          <Image
            src='/logo_amazonspn.png'
            alt=''
            fill
            sizes='(max-width: 750px) 0, 130px'
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </>
  );
}
