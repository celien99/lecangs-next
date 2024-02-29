import Image from 'next/image';
export default function NavTop() {
  return (
    <>
      <div className='w-full h-16 bg-white shadow-md flex justify-around items-center flex-row'>
        <div className='flex justify-between items-center'>
          <div>
            <p className='text-xs font-MicrosoftYaHei text-gray-700 leading-3 mb-1'>
              股票代码：300729
            </p>
            <p className='text-xs font-MicrosoftYaHei text-gray-700 leading-3'>
              股票简称：乐歌股份
            </p>
          </div>
          <a
            href='tel: 400-835-8800'
            className='text-red-600 font-MicrosoftYaHei text-base leading-12 ml-20'
          >
            电话: 400-835-8800
          </a>
        </div>
        <div className='relative w-20 h-4'>
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
