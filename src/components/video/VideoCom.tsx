import Image from 'next/image';
import './video.css';
export default function VideoCom() {
  return (
    <div className='home-main'>
      <div className='video-bg-1'></div>
      <div className='video-bg-2'></div>
      <div className='video-header'>
        <div className='video-title'>
          <h2>乐歌海外仓专注中大件海外仓</h2>
        </div>
        <h3 className='video-subtitle'>乐仓，始于卖家，服务卖家，更懂卖家</h3>
      </div>
      <div className='home-video'>
        <video src='/front/xc.mp4' poster='/front/video_bg1.png'></video>
        <div className='video-play-icon'>
          <Image src='/front/icon_play.png' alt='' width={100} height={100} />
        </div>
        <div className='video-stop-icon'>
          <Image src='/front/video_stop.svg' alt='' width={100} height={100} />
        </div>
      </div>
      <div className='video-content-1'>
        <p className='video-item-title'>
          <span className='title-bg'></span>
          <span className='title-text'>仓库覆盖全美</span>
        </p>
        <div className='video-item-content'>
          <p>
            全美布局多个公共海外仓，一年流转上万个高柜，帮助卖家实现全美95%以上订单次日达的时效，大幅提升用户体验
          </p>
        </div>
      </div>
      <div className='video-content-2'>
        <p className='video-item-title'>
          <span className='title-bg'></span>
          <span className='title-text'>美国本土精英管理团队</span>
        </p>
        <div className='video-item-content'>
          <p>乐歌在美国旧金山硅谷，孟菲斯和休斯顿均设有分公司。</p>
        </div>
      </div>
      <div className='video-circle-1'></div>
      <div className='video-circle-2'></div>
      <div className='video-tip-1'>
        <Image src='/front/bg_ddddd.png' alt='' width={100} height={200} />
      </div>
      <div className='video-tip-2'>《〈《</div>
    </div>
  );
}
