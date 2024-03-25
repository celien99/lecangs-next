import './export.css';
export default function page() {
  return (
    <div className='content-export'>
      <div className='top'>
        <div className='common'>
          <h2>代理出口服务</h2>
          <h3>
            我们提供合规的报关出口和收汇服务，以及高效便捷的退税服务，帮助您降低成本，提升业务效益。
          </h3>
        </div>
        <div className='export-content'>
          <ul className='content-list'>
            <li>
              <div className='title'>代理出口</div>
              <p>
                我们提供标准化的通关、退税和物流等服务，以确保您的进出口流程顺利进行。同时，您可以享受到我们提供的出口优惠补贴，帮助您降低成本，提升出口效益。
              </p>
            </li>
            <li>
              <div className='title'>代理退税</div>
              <p>
                我们提供专业、简便的代办退税服务，帮助您高效地解决退税问题。
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
