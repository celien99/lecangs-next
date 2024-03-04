import Image from 'next/image';
import './news.css';
export default function News() {
  const newsList = [
    {
      id: 1,
      href: '',
      imgSrc: '',
      imgTitle: '美国燃油附加费更新',
      day: '14',
      month: '11月',
      title: '美国燃油附加费更新',
      desc: 'xxxxxxxxxxxxxxxx',
    },
    {
      id: 2,
      href: '',
      imgSrc: '',
      imgTitle: '美国燃油附加费更新',
      day: '14',
      month: '11月',
      title: '美国燃油附加费更新',
      desc: 'xxxxxxxxxxxxxxxx',
    },
    {
      id: 3,
      href: '',
      imgSrc: '',
      imgTitle: '美国燃油附加费更新',
      day: '14',
      month: '11月',
      title: '美国燃油附加费更新',
      desc: 'xxxxxxxxxxxxxxxx',
    },
  ];
  return (
    <div className='news-main'>
      <div className='commom-header'>
        <h2>新闻资讯</h2>
        <h3>乐歌海外仓最新动态和政策</h3>
        <span>news</span>
      </div>
      <div className='news-body'>
        {newsList.map((item) => (
          <div className='news-item' key={item.id}>
            <a href={item.href}>
              <Image
                src={item.imgSrc}
                alt={item.imgTitle}
                fill
                style={{ objectFit: 'cover' }}
              />
            </a>
            <div className='news-date'>
              <div className='news-day'>{item.day}</div>
              <div className='news-month'>{item.month}</div>
            </div>
            <div className='new-main'>
              <span className='news-type'>企业新闻</span>
              <p className='news-title'>{item.title}</p>
              <p className='news-content'>{item.desc}</p>
              <div className='news-more'>
                <span>more</span>
                <span>》</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='news-circle-1'></div>
      <div className='news-circle-2'></div>
      <div className='news-other'>全部新闻</div>
    </div>
  );
}
