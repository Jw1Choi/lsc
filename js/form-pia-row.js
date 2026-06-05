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
    <h1 class="form-top-title">혜택 지원 신청하기</h1>
    <div class="form-box-inner">
        <form action="" id="form_e11" method="POST" target="hidden_iframe11" onsubmit="dll(); submitted=true;">
        <input type="hidden" name="entry.925560115" value="" >
            <div class="form-box-tb-out">
            <br>
                <table class="form-box-tb">
                    <tbody>
                        <tr id="select_lic">
                            <th><!--<i class="fa fa-user" aria-hidden="true"></i>-->자격증<br></th>
                            <td>

                                <select name='entry.302176945' id='license' class="form-control" placeholder="현재 조건">

                                    <option value="자격증 선택" selected disabled>자격증 선택</option>
                                        <option value="손해평가사">손해평가사</option>
                                        <option value="도로교통사고감정사">도로교통사고감정사</option>
                                        <option value="농산물품질관리사">농산물품질관리사</option>
                                        <option value="반려견스타일리스트">반려견스타일리스트</option>
                                        <option value="맞춤형화장품제조관리사">화장품제조관리사 (서울, 수도권 거주자 한정)</option>
                                        <option value="pia사설탐정">pia사설탐정</option>
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
                            <textarea name='entry.2051055902' id='message' class="form-control" placeholder="문의사항을 적어주세요." style="min-height:100px"></textarea>
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
<form accept-charset="euc-kr"  checkform action="https://marketclub.cafe24.com/pr_test2.php" method="post" name="" onsubmit="document.charset='euc-kr';" target="hidden_iframe12" id="form1">
<input type="hidden" name="partner_id" value="flosmarketing">
<INPUT type=hidden name=item_no value="82">
<input type=hidden name="refe" value="/form_make/form.php?it=82&pt=flosmarketing">
<input type="hidden" name="sub_url" id="url" value="https://marketclub.cafe24.com/form_make/form.php?it=82&pt=flosmarketing">
<input type=hidden name="refer_url" value="">
<input type="hidden" name="user_agent" id="user_agent" value="">
    
<div class="detfm2" style="padding:20px;">

<div class="fmfrm">
  <div><input type="text" placeholder="이름" name="user_name" required/></div>
  <div style="margin-top: 10px;"><input type="text" placeholder="나이" name="나이" inputmode="numeric" required maxlength=2 oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"/></div>
  <div style="margin-top: 10px; display: flex">
    <div style="width: 30%;margin: 0px;padding: 0px">
        <select name='휴대폰번호1' required style="height:40px;">
          <option value='010' >010</option>
          <option value='011' >011</option>
          <option value='016' >016</option>
          <option value='017' >017</option>
          <option value='018' >018</option>
          <option value='019' >019</option>
        </select>
    </div>
    <div style="width: 5%;display: inline-block;text-align: center;font-size: 10px;padding:0px;margin: 0px;padding-top: 12px;">-</div>
    <div style="width: 30%;margin: 0px;padding: 0px">
      <input type="text"  name="휴대폰번호2" required maxlength="4" style="height:40px" inputmode="numeric" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');">
    </div>
    <div style="width: 5%;display: inline-block;text-align: center;font-size: 10px;padding:0px;margin: 0px;padding-top: 12px;">-</div>
    <div style="width: 30%;margin: 0px;padding: 0px">
      <input type="text"  name="휴대폰번호3" required maxlength="4" style="height:40px;" inputmode="numeric" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');">
    </div>
    
    

  </div>
  <div style="margin-top: 10px;">
      <select name='상담가능시간' required style="height:40px;width: 99.6%">
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
  <div style="margin-top: 10px;"><input type="text" placeholder="문의사항" name="문의사항"  ></div>
  <div class="" style="margin-top: 10px;">
    <input type="checkbox" type="checkbox" name="all_chk"checked  required/> 개인정보취급방침에 동의합니다.
  </div>
  <div style="width:100%;margin:0 auto;margin-top: 10px;"><input type="submit" value="무료상담신청하기" class="btn_submit" id="btn_submit_id"/></div>
  
</div>
</div>
<div class="c"></div>
</div>
</form>
                            </div>

`;

document.body.appendChild(form.content);