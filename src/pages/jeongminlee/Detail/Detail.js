import './Detail.scss'
import TopNav from '../List/TopNav';

function Detail() {
    return (
        <div className="body_detail">
            <div className="high">
                <TopNav />
                <div className="second_nav">
                    <div className="big_name">
                        콜드 브루
                    </div>
                    <div className="Kategorie">홈 > MENU > 음료 > 에스프레소 > 화이트 초콜릿 모카</div>
                </div>
                <div className="picture_explain">

                    <img alt="coffee" src="/images/jeongminlee/coffee12.jpg" />

                    <div className='right_detail'>
                        <div className="explain1">
                            <div className="name">
                                <div className="hangul_name">
                                    화이트 초콜릿 모카
                                </div>
                                <span className="english_name">
                                    White Chocolate Mocha
                                </span>
                            </div>
                            <i className="far fa-heart"></i>
                            <i className="fas fa-heart"></i>
                        </div>
                        <hr className="hr_first" />
                        <div className="explain2">
                            <div className="explain2_explain">
                                달콤하고 부드러운 화이트 초콜릿 시럽과 에스프레소를 스팀 밀크와
                                섞어 휘핑크림으로 마무리한 음료로 달콤함과 강렬한 에스프레소가 부드럽게 어우러진 커피
                            </div>
                        </div>
                        <hr className="hr_second" />
                        <div className="explain3">
                            <span className="explain3_explain1">
                                제품 영양 정보
                            </span>
                            <span className="explain3_explain2">
                                Tall(톨) / 355ml (12 fl oz)
                            </span>
                        </div>
                        <hr className="hr_third" />
                        <div className="explain4">
                            <table className="table01">
                                <tr>
                                    <th>1회 지공량 (kcal)</th>
                                    <td>345</td>
                                    <th className="th1">나트륨 (mg)</th>
                                    <td>150</td>
                                </tr>
                                <tr>
                                    <th>포화지방 (g)</th>
                                    <td>11</td>
                                    <th className="th1">당류 (g)</th>
                                    <td>35</td>
                                </tr>
                                <tr>
                                    <th>단백질 (g)</th>
                                    <td>11</td>
                                    <th className="th1">카페인 (mg)</th>
                                    <td>75</td>
                                </tr>
                            </table>
                        </div>
                        <div className="explain5">
                            <div className="explain5_explain">
                                알레르기 유발 요인 : 우유
                            </div>
                        </div>
                        <div className="explain6">
                            <div className="review_title">
                                리뷰
                            </div>
                            <hr />
                            <div className="reviews">
                                <div className="review">
                                    <span className="review_id">coffee_lover</span>
                                    <span className="review_content">너무 맛있어요!</span>
                                </div>
                                <div className="review">
                                    <span className="review_id">CHOCO7</span>
                                    <span className="review_content">오늘도 화이트 초콜릿 모카를 마시러 갑니다.</span>
                                </div>
                                <div className="review">
                                    <span className="review_id">legend_dev</span>
                                    <span className="review_content">진짜 화이트 초콜릿 모카는 전설이다. 진짜 화이트 초콜릿 모카는 전설이다. 진짜 화이트 초···</span>
                                </div>
                                <div className="explain7">
                                    <input className="explain7_explain" placeholder="리뷰를 입력해주세요." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom">
                <div className="bottom_list1">
                    <div className="highest">COMPANY</div>
                    한눈에 보기<br />
                    위벅스 사명<br />
                    위벅스 소개<br />
                    국내 뉴스룸<br />
                    세계의 스타벅스<br />
                    글로벌 뉴스룸<br />
                </div>
                <span className="bottom_list2">
                    <div className="highest">CORPORATE SALES</div>
                    단체 및 기업 구매 안내
                </span>
                <span className="bottom_list3">
                    <div className="highest">PARTNERSHIP</div>
                    신규 입점 제의<br />
                    협력 고객사 등록 신청
                </span>
                <span className="bottom_list4">
                    <div className="highest">ONLINE COMMUNITY</div>
                    페이스북<br />
                    트위터<br />
                    유튜브<br />
                    블로그<br />
                    인스타그램
                </span>
                <span className="bottom_list5">
                    <div className="highest">RECRUIT</div>
                    채용 소개<br />
                    채용 지원하기
                </span>
                <span className="bottom_list6">
                    <div className="highest">WEBUCKS</div>
                </span>
            </div>
        </div>
    )
}

export default Detail;