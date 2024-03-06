type bannerType = {
  banner: string;
  title: string;
  desc?: string;
};
import './banner.css';
export default function Banner(props: bannerType) {
  return (
    <>
      <div
        className='banner-img'
        style={{ backgroundImage: `url(${props.banner})` }}
      >
        <div className='title'>
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
        </div>
      </div>
    </>
  );
}
