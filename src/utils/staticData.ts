// banner title对应文案
const map = new Map<string, string>([
  ['/shipping', '头程海运'],
  ['/drop-shipping', '一件代发'],
  ['/overseas', '海外仓储'],
  ['/export-agent', '代理出口'],
  ['/supplyChain', '供应链服务'],
  ['/fba', 'FBA转运'],
  ['/promise', '我们的承诺'],
  ['/amazon-span', '亚马逊SPN'],
  ['/lc-system', '乐仓系统'],
  ['/kehuanli', '客户案例'],
  ['/h-support', '帮助与支持'],
]);

// service 模块 tabtup
export interface tabType {
  path: string;
  activeImage: string;
  inactiveImage: string;
}
const tabList: Array<tabType> = [
  {
    path: '/shipping',
    activeImage: '/service/tab/touchengactive.png',
    inactiveImage: '/service/tab/touchenhaiyun.png',
  },
  {
    path: '/overseas',
    activeImage: '/service/tab/icon_haiwaicangchuactive.png',
    inactiveImage: '/service/tab/icon_haiwaicangchu.png',
  },
  {
    path: '/drop-shipping',
    activeImage: '/service/tab/icon_yijiandaifactive.png',
    inactiveImage: '/service/tab/icon_yijiandaifa.png',
  },
  {
    path: '/export-agent',
    activeImage: '/service/tab/dailichukouactive.png',
    inactiveImage: '/service/tab/dailichukou.png',
  },
  {
    path: '/supplyChain',
    activeImage: '/service/tab/gongyinglianactive.png',
    inactiveImage: '/service/tab/gongylian.png',
  },
];
const clientTab: Array<tabType> = [
  {
    path: '/promise',
    activeImage: '/client/tab/icon_lecangchengnuo_active.png',
    inactiveImage: '/client/tab/icon_lecangchengnuo_nav.png',
  },
  {
    path: '/azmazon-spn',
    activeImage: '/client/tab/icon_yamaxun.png',
    inactiveImage: '/client/tab/icon_yamaxun_nav.png',
  },
  {
    path: '/lc-system',
    activeImage: '/client/tab/icon_lecangxitong.png',
    inactiveImage: '/client/tab/icon_lecangxitong_nav.png',
  },
  {
    path: '/kehuanli',
    activeImage: '/client/tab/icon_hezuoanli.png',
    inactiveImage: '/client/tab/icon_hezuoanli_nav.png',
  },
  {
    path: '/h-support',
    activeImage: '/client/tab/icon_bangzhuzhichi.png',
    inactiveImage: '/client/tab/icon_bangzhuzhichi_nav.png',
  },
];

export { map, tabList, clientTab };
