import React from "react";
import "./List.scss";
import { Link } from "react-router-dom";
import Nav from "../Component/Nav/Nav";

function List() {
    return (
        <div className="full-page">
            <div className="container">
                <Nav />
                <div>
                    <h1 className="coffee-category">
                        콜드 브루 커피 &nbsp; <i className="fas fa-mug-hot"></i>
                        <span>
                        &nbsp; 디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
                        </span>
                    </h1>
                    <section className="coffee-menu-list">
                        <div>
                            <Link to = '/detail-songyipark'>
                            <img className = "coffee-img" alt="나이트로 바닐라 크림" src="/images/songyipark/c1.jpg" />
                            </Link>
                            <div>나이트로 바닐라 크림</div>
                        </div>
                        <div>
                            <img className = "coffee-img" alt="시그니처 더 블랙 콜드 브루" src="/images/songyipark/c2.jpg" />
                            <div>시그니처 더 블랙 콜드 브루</div>
                        </div>
                        <div>
                            <img className = "coffee-img" alt="제주 비자림 콜드 브루" src="/images/songyipark/c3.jpg" />
                            <div>제주 비자림 콜드 브루</div>
                        </div>
                        <div>
                            <img className = "coffee-img" alt="콜드 브루 몰트" src="/images/songyipark/c4.jpg" />
                            <div>콜드 브루 몰트</div>
                        </div>
                        <div>
                            <img className = "coffee-img" alt="콜드 브루 오트 라떼" src="/images/songyipark/c5.jpg" />
                            <div>콜드 브루 오트 라떼</div>
                        </div>
                        <div>
                            <img className = "coffee-img" alt="나콜드 브루 플로트" src="/images/songyipark/c6.jpg" />
                            <div>나콜드 브루 플로트</div>
                        </div>
                        <div>
                            <img className = "coffee-img" alt="프렌치 애플 타르트 나이트로" src="/images/songyipark/c7.jpg" />
                            <div>프렌치 애플 타르트 나이트로</div>
                        </div>
                        <div>
                            <img className = "coffee-img" alt="벨벳 다크 모카 나이트로" src="/images/songyipark/c8.jpg" />
                            <div>벨벳 다크 모카 나이트로</div>
                        </div>
                        <div>
                            <img className = "coffee-img" alt="나이트로 콜드 브루" src="/images/songyipark/c9.jpg" />
                            <div>나이트로 콜드 브루</div>
                        </div>
                        <div>
                            <img className = "coffee-img" alt="돌체 콜드 브루" src="/images/songyipark/c10.jpg" />
                            <div>돌체 콜드 브루</div>
                        </div>
                    </section>
                    <h1 className="coffee-category">
                        브루드 커피 &nbsp; <i className="fas fa-mug-hot"></i>
                        <span>
                        &nbsp; 디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
                        </span>
                    </h1>
                    <section className="coffee-menu-list">
                        <div>
                            <img className = "coffee-img" alt="오늘의 커피" src="/images/songyipark/c12.jpg" />
                            <div>오늘의 커피</div>
                        </div>
                        <div>
                            <img className = "coffee-img" alt="아이스 커피" src="/images/songyipark/c11.jpg" />
                            <div>아이스 커피</div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default List;