import { MenuOutlined, PhoneOutlined } from '@ant-design/icons';
import { Drawer, Menu } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
export default function MobileMenu() {
  const items = [
    {
      label: '首页',
      key: '/',
    },
    {
      label: '乐仓服务',
      key: '/service',
      children: [
        {
          label: '头程海运',
          key: '/shipping',
        },
        {
          label: '海外仓储',
          key: '/overseas',
        },
        {
          label: '一件代发',
          key: 'drop-shipping',
        },
        {
          label: '代理出口',
          key: '/export-agent',
        },
        {
          label: '供应链服务',
          key: '/supplyChain',
        },
        {
          label: 'FBA转运',
          key: '/fba',
        },
      ],
    },
    {
      label: '客户支持',
      key: '/customSupport',
      children: [
        {
          label: '乐仓承诺',
          key: '/promise',
        },
        {
          label: '亚马逊SPN',
          key: '/amazon-spn',
        },
        {
          label: '乐仓系统',
          key: '/lc-system',
        },
        {
          label: '合作案例',
          key: '/opp',
        },
        {
          label: '帮助支持',
          key: '/h-support',
        },
      ],
    },
    {
      label: '资讯动态',
      key: '/newslist',
    },
    {
      label: '生态合作',
      key: '/cooperative',
    },
    {
      label: '关于乐仓',
      key: '/about',
      children: [
        {
          label: '乐仓简介',
          key: '/info',
        },
        {
          label: '乐仓优势',
          key: '/advantage',
        },
        {
          label: '联系我们',
          key: '/contact-us',
        },
      ],
    },
  ];
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const clickMenu = ({ key }: { key: string }) => {
    router.push(key);
    setOpen(false);
  };
  const onClose = () => {
    setOpen(false);
  };
  const showDrawer = () => {
    setOpen(true);
  };
  return (
    <div className='mobile'>
      <div className='mobile-nav'>
        <div className='mobile-btn' onClick={showDrawer}>
          <MenuOutlined />
        </div>
        <div className='mobile-logo'>
          <Image
            src='/logo_haiwanc.png'
            alt=''
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <PhoneOutlined />
      </div>
      <Drawer
        title={
          <div className='drawer-logo'>
            <Image
              src='/logo_haiwanc.png'
              alt=''
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        }
        placement='left'
        onClose={onClose}
        open={open}
        width='100vw'
      >
        <Menu mode='inline' items={items} onClick={clickMenu} />
      </Drawer>
    </div>
  );
}
