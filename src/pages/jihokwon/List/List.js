import React from 'react';
import './List.scss';
import TopsNav from './TopsNav';

function ListComponent() {
  return (
    <div>
      <TopsNav />

      <section>
        <ul class="menubar">
          <li>
            <p>콜드 브루 커피 ☕️ </p>
          </li>
          <li>
            <p> 디카페인 에스프레소 샷 추가 가능(일부 음료 제외)</p>
          </li>
        </ul>

        <div class="list">
          <ul>
            <div className="imgs">
              <img src="images/jihokwon/images/coffee.jpg" alt="" />
            </div>
            <li> 나이트로 바닐라 크림</li>
          </ul>
          <ul>
            <div className="imgs">
              <img src="images/jihokwon/images/nightColdBrew.jpg" alt="" />
            </div>
            <li>나이트 콜드 브루</li>
          </ul>
          <ul>
            <div className="imgs">
              <img src="images/jihokwon/images/vanilaCream.jpg" alt="" />
            </div>
            <li>바닐라크림 콜드 브루 </li>
          </ul>
          <ul>
            <div className="imgs">
              <img src="images/jihokwon/images/coldbrew.jpg" alt="" />
            </div>
            <li>콜드 브루</li>
          </ul>
        </div>

        <div className="list">
          <ul>
            <div className="imgs">
              <img src="images/jihokwon/images/latte.jpg" alt="" />
            </div>
            <li>돌체 콜드 브루</li>
          </ul>
          <ul>
            <div className="imgs">
              <img src="images/jihokwon/images/theblack.jpg" alt="" />
            </div>
            <li>시그니처 더 블랙 콜드 브루 </li>
          </ul>
          <ul>
            <div className="imgs">
              <img src="images/jihokwon/images/coldbrewlatte.jpg" alt="" />
            </div>
            <li>콜드 브루 오트 라떼</li>
          </ul>
          <ul>
            <div className="imgs">
              <img src="images/jihokwon/images/icecreamcoffe.jpg" alt="" />
            </div>
            <li>콜드 브루 플로트</li>
          </ul>
        </div>

        <div className="oneLine">
          <ul>
            <div className="imgs">
              <img src="images/jihokwon/images/molt.jpg" alt="" />
            </div>
            <li>콜드 브루 몰트</li>
          </ul>
          <ul>
            <div className="imgs">
              <img src="images/jihokwon/images/moca.jpg" alt="" />
            </div>
            <li>벨벳 다크 모카 나이트로</li>
          </ul>
        </div>
      </section>

      <section>
        <ul className="menubar">
          <li>
            <p>브루드 커피 ☕️ </p>
          </li>
          <li>
            <p> 디카페인 에스프레소 샷 추가 가능(일부 음료 제외)</p>
          </li>
        </ul>
        <div class="oneLine">
          <ul>
            <div className="imgs">
              <img src="images/jihokwon/images/icecoffee.jpg" alt="" />
            </div>
            <li>아이스 커피</li>
          </ul>
          <ul>
            <div className="imgs">
              <img src="images/jihokwon/images/americano.jpg" alt="" />
            </div>
            <li>오늘의 커피</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ListComponent;
