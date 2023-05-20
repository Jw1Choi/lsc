const testbody = document.getElementById('test_body');
testbody.innerHTML = `
<!-- main -->
<div class="main">
    <div class="inner">
        <div class="title">
            <a href="#sec05" class="scroll box">
                <span class="timer">
                    접수마감 | <span id="today_date" style="bottom:0;"> ( <span id="countdown"></span>)
                </span>
                <span class="today_date1" style="bottom:0;"></span>
                <span class="today_date2" style="bottom:0;"></span>
            </a> <br><br>
            <img src="./img/gov.png" style="width:150px">
            <p class="top wow fadeInUp">취업 준비 특별 지원</p>
            <h1 class="wow fadeInUp">국가자격증<br>손해평가사<br>취득 지원 센터</h1>
        </div>
        <img src="img/bg4.png" class="bg" style="opacity: 0.6;">
        <img src="img/main4.png" class="img-main wow fadeInUp">
        <ul class="listWrap">
            <li class="wow fadeInUp">
                <div>
                   누구나 가능<br>
                <span class="num">24~55</span> 세 까지
                </div>
            </li>
            <li class="wow fadeInUp" data-wow-delay=".1s">
                <div>
                    수임 1 건 당<br>
                    <span class="num">20~40</span> 만원<br>
                </div>
                <!-- <span class="small">집·자동차 소유자는<wbr> 한도2배</span> -->
            </li>
            <li class="wow fadeInUp" data-wow-delay=".2s">
                <div>
                    본업, 노후대비<br>
                 <u style="color:yellow">전문직 자격증</u>
                </div>
            </li>
        </ul>
        <!-- <div class="wow fadeIn">
            <a href="#sec05" class="scroll btn-main">
                안심대출 신청하기
            </a>
        </div> -->
    </div>
</div>
<!-- end main -->
<!-- contents -->
<div class="contentsWrap">


    <div class="sec01 contents bg-light">
        <div class="inner">
            <div class="box">
                <h3 style="line-height:1.4"><img src="./img/favicon.png" style="width:30px;"> 손해평가사<br><span>자격증 취득 지원</span> 혜택</h3>
                <p class="p-text">
                    자금 부담 없는 교육 지원을 위해 <span class="blink" >교육비 전액 지원 혜택 안내 (신청자 한정)</span><br>
                    빠른 자격증 취득을 위해 <span>시험정보 및 기출문제 제공</span>
                </p>
                <p class="m-text">
                    자금 부담 없는 교육 지원을 위해 <br><span class="blink" style="font-size:17px;">교육비 전액 지원 혜택 안내 (신청자 한정)</span><br>
                    빠른 자격증 취득을 위해<br><span style="font-size:17px;">시험정보 및 기출문제 제공</span>
                </p>
            </div>
            <!-- <div class="wow fadeInUp">
                <a href="#sec05" class="scroll btn-default">한도 조회하기</a>
            </div> -->
        </div>
    </div>
    <div class="sec02 contents">
        <ul class="inner">
            <li class="wow fadeInUp">
                <div class="title">손해평가사</div>
                <div class="txt">
                    - 농업재해로 인한 농작물의 피해 조사로 보험 지급을 위한 손해액을 평가하는 일을 수행<br><br>
                    - 전문직 대우 및 정년 없이 근무 가능
                </div>
            </li>
            <li class="wow fadeInUp" data-wow-delay=".1s">
                <div class="title">지원대상 및 신청방법</div>
                <div class="txt">
                    <span style="bottom:0px;">지원대상: </span> 24세 ~ 55세 성인 누구나<br>
                    <span style="bottom:0px;">신청방법: </span> 하단 신청란에 신청 가능<br>
                   
                </div>
            </li>
            <li class="wow fadeInUp" data-wow-delay=".2s">
                <div class="title">신청기간</div>
                <div class="txt">
                    교육 예산 소진시까지
                </div>
            </li>

        </ul>
    </div>
    <div class="sec03 contents bg-light">
        <div class="inner">
            <div class="row">
                <div class="col-md-4 col-12 wow fadeInLeft">
                    <div class="row">
                        <h2 class="col-md-12 col-6">
                            가능 수익<br><span>조건마다<br>다를 수 있습니다.</span>
                        </h2>
                        <div class="col-md-12 col-6">
                            <img src="img/won.png">
                        </div>
                    </div>
                </div>
                <div class="col-md-8 col-12 wow fadeInRight">
                    <p>
                        프리랜서 1건당 <span>30~40만원</span><br>
                        정규직<br><span class="counter">3,000</span><span>만원 이상</span>
                       
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="sec04 contents" id="sec05">
        <div class="inner">
            <div class="row">
                <div class="col-md-6 col-12 left wow fadeInLeft">
                    <h2>
                        <img src="img/icon2.png">
                        근로자 특별지원<br><span>신청 대상자</span>
                    </h2>
                    <p>
                        대출상품은 조건이 다양하므로<br>
                        본인에게 적합한 대출상품에 대해 구체적으로 확인 후<br>
                        진행하여야 합니다.<br><br>
                        모바일 안심신청시 대출 사기나 불법 사채에 대한<br>
                        걱정 없이 안전하게 상담을 받을 수 있습니다.
                    </p>
                </div>
                <div class="col-md-6 col-12 right wow fadeInRight">
                    <p><em>대상</em>4대보험 가입 직장인 및 소득증빙 가능자</p>

                    <p><em>소득</em>재직기간 3개월 이상 근로자</p>
                    <p><em>신용</em>신용점수 600점 이상 우대</p>
                    <p><em>나이</em>만 25세~55세 대상</p>
                    <p><em>부채</em>담보대출을 제외한 연봉대비 200% 미만</p>

                </div>
            </div>
        </div>
    </div> -->
    <!-- <div class="sec05 contents bg-light">
        <div class="inner">
            <div class="box">
                <div class="row">
                    <div class="col wow fadeInLeft">
                        <h4>지원대상</h4>
                        <img src="img/circle1.png">
                        <p>
                            <span>만 25세 이상 55세 이하</span><br>
                            소득확인이 가능한 자
                        </p>
                    </div>
                    <div class="col wow fadeInLeft" data-wow-delay=".2s">
                        <h4>신청방법</h4>
                        <img src="img/circle2.png">
                        <p>
                            <span>하단 신청란에서 신청</span><br>
                            (무방문, 무서류, 당일승인)
                        </p>
                    </div>
                    <div class="col wow fadeInLeft" data-wow-delay=".3s">
                        <h4 class="txt-red">신청불가 대상</h4>
                        <img src="img/circle3.png">
                        <p>
                            <span class="txt-red">연체·무직·군미필</span>은<br>
                            지원이 불가합니다
                        </p>
                    </div>
                </div>
            </div> 
            <br><br>
          
        </div>
    </div> -->

<br>
    <link href="./css/style3.css" rel="stylesheet">
    <div class="detbx" style="text-align: -webkit-center;">
        <div class="detfm" >
            <h1 class="form-top-title">혜택 지원 신청하기</h1>
    <form accept-charset="euc-kr"  checkform action="https://marketclub.cafe24.com/pr_test2.php" method="post" name="fm" onsubmit="document.charset='euc-kr';" target="_self">
    <input type="hidden" name="partner_id" value="flosmarketing">
    <INPUT type=hidden name=item_no value="444">
    <input type="hidden" name="refe" value=" ">
    <input type="hidden" name="mcheck" value=" ">
    <input type="hidden" name="ru" value=""><!-- 마케터수동입력 -->
    
                    <div class="detfm2" style="padding:10px 10px 10px 10px;max-width:700px;">
                        <h4 class="rgb4"></h4>                            
<div class="fmfrm">
    <table style="width:100%">
    <tbody>
    <tr>
        <th><!--<i class="fa fa-user" aria-hidden="true"></i>-->성함</th>
            
        <td >
            <div><input type="text" placeholder="성함" name="user_name" ></div>
        </td>
    </tr>


    <tr >
        <th ><!--<i class="fa fa-user" aria-hidden="true"></i>-->나이</th>
    
        <td>
            <div><input type="text" placeholder="나이" name="나이"  ></div>
        </td>
    </tr>
    

    <tr >
        <th ><!--<i class="fa fa-user" aria-hidden="true"></i>-->연락처</th>
        <td>
            <div>
                <div style="width:30%;float:left;">
                    <select name='휴대폰번호1'  style="width:100%;height:35px;background-color: white;padding-left:3px;font-size:14px;">
                    <option value='010' selected >010</option>
                    <option value='011' >011</option>
                    <option value='016' >016</option>
                    <option value='017' >017</option>
                    <option value='018' >018</option>
                    <option value='019' >019</option>
                    </select>
                </div>
                <div style="width:5%;float:left;text-align:center;"></div>
                <div style="width:30%;float:left;">
                    <input type="text"  name="휴대폰번호2"  maxlength="4" >
                </div>
                <div style="width:5%;float:left;text-align:center;"></div>
                <div style="width:30%;float:left;">
                    <input type="text"  name="휴대폰번호3"  maxlength="4" >
                </div>
    
            </div>
        </td>
    </tr>
 
    <tr >
        <th ><!--<i class="fa fa-user" aria-hidden="true"></i>-->통화가능시간</th>
    
        <td>
            <div>

                <div style="width:100%;float:left;">
                    <select name='상담가능시간' style="width:100%;height:35px;padding-left:3px;font-size:14px;">
                        <option selected  disabled>통화가능시간 선택</option>
                        <option value="언제나 통화 가능">언제나 통화 가능</option>
                        <option value="오전 09:00~10:00">오전 09:00 ~ 10:00</option>
                        <option value="오전 10:00~11:00">오전 10:00 ~ 11:00</option>
                        <option value="오전 11:00~12:00">오전 11:00 ~ 12:00</option>
                        <option value="점심 12:00~01:00">점심 12:00 ~ 01:00</option>
                        <option value="오후 01:00~02:00">오후 01:00 ~ 02:00</option>
                        <option value="오후 02:00~03:00">오후 02:00 ~ 03:00</option>
                        <option value="오후 03:00~04:00">오후 03:00 ~ 04:00</option>
                        <option value="오후 04:00~05:00">오후 04:00 ~ 05:00</option>
                        <option value="오후 05:00~06:00">오후 05:00 ~ 06:00</option>
                        <option value="오후 06:00~07:00">오후 06:00 ~ 07:00</option>
                    </select>
                </div>
            </div>
        </td>
    </tr>


    <tr style="height:120px">
        <th ><!--<i class="fa fa-user" aria-hidden="true"></i>-->문의사항</th>
    
        <td >
            <div><input type="text" placeholder="문의사항(선택)" name="문의사항" style="height:100px !important;"></div>
        </td>
    </tr>
  
    <tr style="border-bottom:0px;">
        <td colspan="2" style="border-bottom:0px;">
            <div style="width:100%;margin:0 auto;"><input type="submit" value="혜택 지원 신청하기" class="btn_submit" id="btn_submit_id" disabled style="background: #696969;"></div>
            <div class="chks" >
              
                <input type="checkbox" type="checkbox" name="all_chk"  checked > 개인정보취급방침에 동의합니다.
                <span class="privacyBtn" onclick="privacyPopUp()">
                    [자세히 보기]
                </span>
        
            </div>
        </td>
    </tr>
   
 
</div>
</div>
<div class="c"></div>
</div>

<input type=hidden name="refe" value="/form_make/form.php?it=444&pt=flosmarketing"> 
<input type=hidden name="refer_url" value="">

</form>
</tbody>
</table>
</div>
</div>




<div class="wrap linkWrap">
    <div class="sec00 contents" style="padding-top:80px;">
        <div class="inner">
        <p>
            <script language="javascript" type="text/javascript">
                today=new Date()
                document.write(today.getFullYear(),"년 ",today.getMonth()+1,"월 ",today.getDate(),"일 기준") 
            </script><br>
            현재 <span class="counter" style="bottom:1px;">142</span> 명이 신청 대기 중입니다.
        </p>
        <div class="box_02">
            <div class="box_02_1">
                <div style="position:relative;height:150px;overflow:hidden;">
                    <div id="ticker_wrap" style="position: absolute;top:0px;right:0px;width:100%;">
                        <table id="ticker" class="tg">
                        <tbody>
                            <tr>
                                <td class="tg-0lax"><span class="submit_02">손해평가사</span></td>
                                <td class="tg-02ax">35세 / 신청 완료</td>
                                <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                            </tr>
                            <tr>
                                <td class="tg-0lax"><span class="submit_02">손해평가사</span></td>
                                <td class="tg-02ax">50세 / 신청 완료</td>
                                <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                            </tr>
                            <tr>
                                <td class="tg-0lax"><span class="submit_02">손해평가사</span></td>
                                <td class="tg-02ax">26세 / 신청 완료</td>
                                <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                            </tr>
                            <tr>
                                <td class="tg-0lax"><span class="submit_02">손해평가사</span></td>
                                <td class="tg-02ax">25세 / 신청 완료</td>
                                <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                            </tr>
                            <tr>
                                <td class="tg-0lax"><span class="submit_02">손해평가사</span></td>
                                <td class="tg-02ax">42세 / 신청 완료</td>
                                <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                            </tr>
                            <tr>
                                <td class="tg-0lax"><span class="submit_02">손해평가사</span></td>
                                <td class="tg-02ax">31세 / 신청 완료</td>
                                <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                            </tr>
                            <tr>
                                <td class="tg-0lax"><span class="submit_02">손해평가사</span></td>
                                <td class="tg-02ax">49세 / 신청 완료</td>
                                <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                            </tr>
                            <tr>
                                <td class="tg-0lax"><span class="submit_02">손해평가사</span></td>
                                <td class="tg-02ax">38세 / 신청 완료</td>
                                <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                            </tr>
                            <tr>
                                <td class="tg-0lax"><span class="submit_02">손해평가사</span></td>
                                <td class="tg-02ax">27세 / 신청 완료</td>
                                <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</div>
<div class="bottom">
    <footer>
        한국교육개발센터
    </footer>
</div>


<div id="privacy">
    <div id="privacyContent">
        <div class="titWrap">
            <span>개인정보취급방침</span>
            <i style="margin-top:-23px !important" class="ion-close-circled closeBtn"></i>
        </div>
        <div style="line-height:1.2" class="conWrap">
            개인정보취급방침<br><br>
            수집하는 개인정보의 항목<br>
            "플로스"는 적법하고 공정한 수단에 의해서만 개인정보를 수집하며, 회원가입약관 또는 개인정보의 제공, 활용 동의서의 내용에 대해 이용자의 개인정보를 수집하는 경우에 당해<br> 이용자가 동의함 또는 동의하지 않음 버튼을 클릭 하는 등의 이용자의 동의를 얻는 절차를 거칩니다.<br>
            <br>
            수집하는 개인정보 항목<br>
            회사는 회원가입, 상담, 서비스 신청 등등을 위해 아래와 같은 개인정보를 수집하고 있습니다.<br><br>
    
            ● 수집항목 : 이름 , 휴대전화번호 , 필요시기, 직업구분, 대출신청종류 등 개인맞춤 서비스를 제공하기 위해 수집됩니다.<br>
            ● 개인정보 수집방법 : 홈페이지(회원가입.상담게시판.) , 전화를 통한 고객상담.<br>
            <br>
            개인정보의 수집 및 이용목적<br>
            회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.<br><br>
    
            ● 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산<br>
            콘텐츠 제공 , 금융거래 본인 인증 및 금융 서비스<br><br>
            ● 회원 관리<br>
            개인 식별 , 고지사항 전달<br><br>
            ● 마케팅 및 광고에 활용<br>
            이벤트 등 광고성 정보 전달<br><br>
    
            개인정보의 보유 및 이용기간><br>
            원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.<br><br>
    
            보존 항목 : 이름 , 휴대전화번호 , 필요시기, 직업구분, 대출신청종류 등.<br>
            보존 근거 : 고객의요청이 있을시 즉시폐기<br>
            보존 기간 : 3년<br><br>
    
            그리고 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.<br><br>
    
            소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 (전자상거래등에서의 소비자보호에 관한 법률)<br>
            신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년 (신용정보의 이용 및 보호에 관한 법률)<br><br>
    
            개인정보의 파기절차 및 방법<br>
            회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.<br><br>
    
            ● 파기절차<br>
            회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기되어집니다.<br><br>
    
            별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지 않습니다.<br><br>
    
            ● 파기방법<br>
            - 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.<br>
            - 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.<br><br>
    
            
            이용자 및 법정대리인의 권리와 그 행사방법<br>
            이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다.<br><br>
    
            이용자들의 개인정보 조회,수정을 위해서는 '개인정보변경'(또는 '회원정보수정' 등)을 가입해지(동의철회)를 위해서는 "회원탈퇴"를 클릭하여 본인 확인 절차를 거치신 후 직접 열람, 정정 또는 탈퇴가 가능합니다.<br><br>
    
            혹은 개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체없이 조치하겠습니다.<br><br>
    
            귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체없이 통지하여 정정이 이루어지도록 하겠습니다.<br><br>
    
            회사는 이용자의 요청에 의해 해지 또는 삭제된 개인정보는 "회사가 수집하는 개인정보의 보유 및 이용기간"에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.<br><br>
    
    
            개인정보에 관한 민원서비스<br>
            회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보관리책임자를 지정하고 있습니다.<br>
            <br>
        귀하께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다. 회사는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.<br><br>
    
            기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.<br>
            1.개인분쟁조정위원회 (https://www.1336.or.kr/1336)<br>
            2.정보보호마크인증위원회 (https://www.eprivacy.or.kr/02-580-0533~4)<br>
            3.대검찰청 인터넷범죄수사센터 (02-3480-3600)<br>
            4.경찰청 사이버테러대응센터 (https://www.ctrc.go.kr/02-392-0330)<br />
            <br />

        </div>
    </div>
</div>
<!--footer 끝-->
`;

document.body.appendChild(testbody.content);