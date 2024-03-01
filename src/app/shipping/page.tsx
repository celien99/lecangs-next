import Image from 'next/image';
import style from './style.module.css';
export default function Shipping() {
  return (
    <div className={style.main}>
      <div className={style.content}>
        <div className={style.top}>
          <div className={style.common}>
            <h2>一站式解决方案</h2>
            <h3>
              指由乐仓安排，为工厂安排海运订舱，随后将货物从工厂安排拖车到码头，安排拖车报关截单事宜，最终成功上船；直到海运到目的港之前，安排提单电放，将货权放给目的港的全部流程。
            </h3>
          </div>
          <ul className={style.solutionList}>
            <li>
              <div>
                <span>
                  更优势的海运费，尾程清关拖车费
                  <br />
                  提供整柜订舱，端到端的服务
                </span>
              </div>
              <p>整柜(FCL)</p>
            </li>
            <li>
              <div>
                <span>
                  将海运服务与报关服务相结合确保为您的海运货物高效办理通关手续与我们的Trusted
                  Advisor专家合作计算税费、正确分类商品并确保合规
                </span>
              </div>
              <p>报关和贸易合规</p>
            </li>
            <li>
              <div>
                <span>
                  给每一位使用乐仓头程服务的海外仓客户赠送海运险，保护海运货物价值
                </span>
              </div>
              <p>海上运输保险</p>
            </li>
            <li>
              <div>
                <span>
                  目的港长期合作清关公司
                  <br />
                  能够快速安排清关流程
                </span>
              </div>
              <p>清关</p>
            </li>
            <li>
              <div>
                <span>
                  自有车队，提供快速的拖卡、还柜服务降低产生目的港滞箱费风险
                </span>
              </div>
              <p>拖卡</p>
            </li>
            <li>
              <div>
                <span>
                  拥有先进的WMS系统以及优质的团队
                  <br />
                  让所有的问题无后顾之忧
                </span>
              </div>
              <p>入库、上架</p>
            </li>
          </ul>
        </div>
        <div className={style.middle}>
          <div className={style.common}>
            <h2>服务优势</h2>
          </div>
          <p>
            将头程交给乐仓，可以保证客户所有的出运事项，乐仓都有实时跟踪到，保障了客户的利益，又保证了出运的安全性，还能通过乐仓内部对应尾程的操作，乐仓内部的沟通能够减少操作上的失误或者对接事务时传递消息缺失与不及时，增加工作效率，减少客户的工作量，使得客户能够放心并且便捷的将所有出运事项托付给乐仓，资料也只需要提供一次。
          </p>
        </div>
        <div className={style.top}>
          <div className={style.common}>
            <h2>寻找适合您的货运报价</h2>
          </div>
          <div className={style.quote}>
            <h3>专家报价</h3>
            <div className={style.imgbox}>
              <Image src='/service/png_line@2x.png' alt='' fill />
            </div>
            <div className={style.desc}>
              我们的专家将根据您的货物特点和市场洞察，为您的下一批货物提供定制报价
              我们全方位的货运服务组合供您选择，您不需局限于单一运输模式
            </div>
            <div className={style.getQuote}>
              <a
                href='https://cn.lecangs.com/application-forms'
                target='_blank'
              >
                获取报价
              </a>
            </div>
            <a href='tel:400-835-8800'>400-835-8800</a>
          </div>
        </div>
        <div className={style.middle}>
          <div className={style.common}>
            <h2>如何合作</h2>
          </div>
          <p>
            客户在确认需要乐仓安排头程的时候，需要将电子委托书（以下简称“托书”）通过电子邮件的方式发送给乐仓货代操作组的同事，并且邮件主题上备注需要哪个船期、船公司以及其相对应的海运费；托书中需要印有该公司公章或者单证章；提供盖章合同，如时间紧急的情况下可以先提供扫描件，但是扫描件的文件上需标注该扫描件法律效应等同于正本。等候操作组的同事回复邮件，一般操作组会在收到托书后的半小时之内进行回复，不管是否订舱都会有回执。
          </p>
          <div className={style.cooperate}>
            <div className='email-text'>
              <p>操作组的公共邮箱为: doc@lecangs.com</p>
              <p>
                邮件主题格式:
                客户名称-需要船期-需要船公司-目的港-对应海运费-所需柜型、数量（例如1X40HQ）
              </p>
            </div>
          </div>
        </div>
        <div className={style.bottom}>
          <div className={style.common}>
            <h2>合作流程</h2>
          </div>
          <div className={style.bottomImg}>
            <Image src='/service/png_cooperation process@2x.png' alt='' fill />
          </div>
        </div>
      </div>
    </div>
  );
}
