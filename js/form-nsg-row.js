const form = document.getElementById('form');
form.innerHTML = `
<div class="form-box" id="fm-box">
<div class="inner" style="text-align:-webkit-center;">
<div style="text-align:-webkit-center;border:1.5px solid #000;width:95%;padding:10px 20px;max-width:450px;" > 
<a href="" class="scroll box" style="border-color:#000;text-align:-webkit-center;">
                    
    <span class="timer" style="color:#000;font-size:14px;font-weight:600;">
        혜택 마감 | <span id="day1" style="font-weight:600;"></span> ( <span id="countdown1" style="font-weight:600;"></span>)
    </span>
</a></div><br><br>
    <h1 class="form-top-title" id="form-title">혜택 지원 신청하기</h1>
    <!-- <h1 class="form-top-title"><span class="blink"> (지도사 자격증 무료 혜택은, 신청폼 아래 섹션을 참조하세요.)</span></h1> -->

    <div class="form-box-inner">
        <form action="" id="form_e11" method="POST" target="hidden_iframe11" onsubmit="dll(); submitted=true;">

            <div class="form-box-tb-out">
            <br>
                <table class="form-box-tb">
                    <tbody>
                        <tr id="select_lic">
                            <th><!--<i class="fa fa-user" aria-hidden="true"></i>-->자격증<br></th>
                            <td>

                                <select name='entry.302176945' id='license' class="form-control" placeholder="현재 조건">

                                    <option value="자격증 선택" disabled>자격증 선택</option>
                                    <option selected  value="간병사">간병사</option>
                                        <option selected  value="베이비시터">베이비시터</option>
                                        <!-- <option value="방과후아동미술지도사">방과후아동미술지도사(미술시터 가능)</option>
                                        <option value="초등영어지도사">초등영어지도사(영어시터 가능)</option>
                                        <option value="놀이체육지도사">놀이체육지도사(놀이시터 가능)</option>
                                        <option value="코딩교육지도사">코딩교육지도사(코딩시터 가능)</option> -->
                                      
                                </select>

                                <!--한번에 여러개 신청하는 기능-->
                                <!-- <input type='checkbox' name='lic' class="chk_lic" id='license1'  value="손해평가사" style="display:none;"> <label for="license1"> 손해평가사 </label>
                                <input type='checkbox' name='lic' class="chk_lic" id='license2'  value="도로교통사고감정사" style="display:none;"> <label for="license2" > 도로교통사고감정사</label>
                                <input type='checkbox' name='lic' class="chk_lic" id='license3'  value="농산물품질관리사" style="display:none;"> <label for="license3" > 농산물품질관리사</label>
                                <input type='checkbox' name='lic' class="chk_lic" id='license4'  value="반려견스타일리스트" style="display:none;"> <label for="license4" > 반려견스타일리스트</label>
                                <input type='checkbox' name='lic' class="chk_lic" id='license5'  value="화장품조제관리사" style="display:none;"> <label for="license5"> 화장품조제관리사</label>
                                <input type="text" name='entry.302176945' id="selected_licenses" readonly style="display:none;">
                                <script>
                                const checkboxes = document.querySelectorAll('.chk_lic');
                                const selectedLicenses = document.getElementById('selected_licenses');
                                    
                                    checkboxes.forEach(function(checkbox) {
                                      checkbox.addEventListener('click', function() {
                                        const selectedValues = [];
                                        checkboxes.forEach(function(checkbox) {
                                          if (checkbox.checked) {
                                            selectedValues.push(checkbox.value);
                                          }
                                        });
                                        selectedLicenses.value = selectedValues.join(', ');
                                      });
                                    });</script> -->
                                    <!--한번에 여러개 신청하는 기능 끝-->
                            </td>
                        </tr>
                    <tr>
                        <th><!--<i class="fa fa-user" aria-hidden="true"></i>-->이름</th>
                        <td>
                            <input type='text' name='entry.286048134' id='name' class="form-control" placeholder="성함" maxlength="4">
                        </td>
                    </tr>
                    <tr>
                        <th><!--<i class="fa fa-phone" aria-hidden="true"></i>-->연락처</th>
                        <td>
                            <input type='text' name='entry.440436541' id='phone' class="form-control" placeholder="휴대폰번호" maxlength="11">
                        </td>
                    </tr>
                    <tr>
                        <th>나이</th>
                        <td>
                            <input type='text' name='entry.1336420307' id='id-number' class="form-control" placeholder="나이" maxlength="2">
                           
                        </td>
                    </tr>
                    <tr>
                        <th>통화가능시간</th>
                        <td>
                            <select name="entry.882151947" id='position' class="form-control" placeholder="현재 조건">

                                <option value="통화가능시간" selected disabled>통화가능시간
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
                        </td>
                    </tr>
                    <tr>
                        <th>문의사항</th>
                        <td>
                            <textarea name='entry.2051055902' id='message' class="form-control" placeholder="문의사항을 적어주세요.(선택)" style="min-height:100px"></textarea>
                        </td>
                    </tr>
                   
                    <tr>
                    <th>이메일</th>
                    <td>
                        <span>* 맞춤 무료 자격증 정보를 전달드립니다.</span>
                        <br><input type="text" name='entry.1667605872' id='email' class="form-control" placeholder="이메일 주소 (선택)" >
                    </td>
                </tr>
                  

                    <tr>
                        <td colspan="2" style="border-bottom: none"> 
                          
                        
                            <input class="submit-btn" type='submit' id='send_message' value='혜택 지원 신청하기' disabled style="background:#595959">
                            <div class="form-agree-box">
                                <p class="form-info-agree">
                                    <span>
                                       
                                        <input type="checkbox" name="agree11" id="agree11" value="개인정보보호정책 동의" checked>
                                        <label style="color:black; font-weight:300;font-size:13px;margin-top:-3px;" for="agree11">개인정보보호정책</label>
                    
                    
                                        <span class="privacyBtn" style="color:black;font-weight:400; font-size: 13px;margin-top:-3px; " onclick="privacyPopUp()">
                                            [자세히 보기]
                                        </span>
                                    </span>
                                </p>

                                <script type="text/javascript">var submitted = false;</script>

                                <iframe name="hidden_iframe11" id="hidden_iframe11" style="display:none;" onload=""></iframe>
                                <iframe name="hidden_iframe12" id="hidden_iframe12" style="display:none;" onload=""></iframe>
                               
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </form>
    </div>
</div>
</div><!----form-end------>

<div style="display:none;">
    <form accept-charset="euc-kr"  checkform action="https://marketclub.cafe24.com/pr_test2.php" method="post" name="fm" onsubmit="document.charset='euc-kr';" target="hidden_iframe12" id="form1">
    <input type="hidden" name="partner_id" value="flosmarketing">
    <INPUT type=hidden name=item_no value="840">
    <input type=hidden name="refe" value="/insert_form0.php?it=840&pt=flosmarketing">
    <input type="hidden" name="sub_url" id="url" value="http://marketclub.cafe24.com/insert_form0.php?it=840&pt=flosmarketing">
    <input type=hidden name="refer_url" value="">
    <input type="hidden" name="user_agent" id="user_agent" value="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36">

    <div class="cms-item-row">
    <div class="cms-width-48pro">
        <input type="text" name="user_name" maxlength="5" required="required" placeholder="이름" class="cms-input-text cms-input-color0">
    </div>
    <div class="cms-width-4pro">&nbsp;</div>
    <div class="cms-width-48pro">
        <input type="text" name="나이" maxlength="2" required="required" placeholder="나이" class="cms-input-text cms-input-color0">
    </div>
    <div class="cms-clear-both"></div>
</div>

<div class="cms-item-row cms-margin-top-10">
    <div class="cms-width-30pro">
<select name="휴대폰번호1" required="required" placeholder="연락처" class="cms-input-text cms-input-color0">
<option value="010">010</option>
<option value="011">011</option>
<option value="016">016</option>
<option value="017">017</option>
<option value="018">018</option>
<option value="019">019</option>
</select>
</div>
    <div class="cms-width-5pro">-</div>
    <div class="cms-width-30pro">
        <input type="tel" name="휴대폰번호2" maxlength="4" required="required" placeholder="연락처" class="cms-input-text cms-input-color0">
    </div>
    <div class="cms-width-5pro">-</div>
    <div class="cms-width-30pro">
        <input type="tel" name="휴대폰번호3" maxlength="4" required="required" placeholder="연락처" class="cms-input-text cms-input-color0">
    </div>
    <div class="cms-clear-both"></div>
</div>

<div class="cms-item-row cms-margin-top-10">
<select name="통화가능시간" required="required" class="cms-input-text cms-input-color0">
<option value="">통화가능시간 선택</option>
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

<div class="cms-item-row cms-margin-top-10">
    <input type="text" name="문의사항" maxlength="100" placeholder="문의사항" class="cms-input-text cms-input-color0">
</div>


<div class="cms-item-row cms-margin-top-10">
<ul>
<li class="cms-radio-li cms-radio-color0">
<input type="checkbox" required="required" id="" checked><label for=""> 개인정보 수집·이용 동의</label>
<a href="/01.html" target="_blank" class="Color-Box">[보기]</a>
</li>
</ul>
    <div class="cms-clear-both"></div>
</div>

<div class="cms-button cms-btn-color0 cms-margin-top-10">
                <button ><span ><b>무료상담신청하기</b></span></button>
</div>



</form>
    
    
    
    
        
                                </div>


`;

document.body.appendChild(form.content);