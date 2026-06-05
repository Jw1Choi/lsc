const form = document.getElementById('form');
form.innerHTML = `
<div class="form-box" id="fm-box">
<div class="inner" style="text-align:-webkit-center;">
<div style="text-align:-webkit-center;border:1.5px solid #000;width:95%;padding:10px 20px;max-width:450px;" > 
<a href="" class="scroll box" style="border-color:#000;text-align:-webkit-center;">
                    
    <span class="timer" style="color:#000;font-size:14px;font-weight:600;">
        최신 혜택 | <span id="day1" style="font-weight:600;"></span> ( <span id="countdown1" style="font-weight:600;"></span>)
    </span>
</a></div><br><br>
    <h1 class="form-top-title">무료 자격증 정보 받기 <br> 
</h1>

    <div class="form-box-inner">
        <form action="" id="form_e11" method="POST" target="hidden_iframe11" onsubmit="dll(); submitted=true;">
            <input type="hidden" name="entry.1278266430" id="book-name" value="">
            <div class="form-box-tb-out">
            <br>
                <table class="form-box-tb">
                    <tbody>
                        <tr id="select_lic" style="display:none;">
                            <th><!--<i class="fa fa-user" aria-hidden="true"></i>-->자격증<br></th>
                            <td>

                                <!--<select name='entry.302176945' id='license' class="form-control" placeholder="현재 조건">

                                    <option value="자격증 선택" selected disabled>자격증 선택</option>
                                        <option value="손해평가사">손해평가사</option>
                                        <!-- <option value="도로교통사고감정사">도로교통사고감정사</option> -->
                                        <option value="농산물품질관리사">농산물품질관리사</option>
                                        <option value="반려견스타일리스트">반려견스타일리스트</option>
                                        <option value="맞춤형화장품제조관리사">화장품제조관리사 (서울, 수도권 거주자 한정)</option>
                                      
                                </select> -->

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
                        <th><!--<i class="fa fa-phone" aria-hidden="true"></i>-->이메일</th>
                        <td>
                            <input type='text' name='entry.440436541' id='email' class="form-control" placeholder="이메일 주소">
                        </td>
                    </tr>
                  
                  
                    <tr>
                        <td colspan="2" style="border-bottom: none"> 
                            <!-- <span class="red-txt">신용 8~10등급은 접수 불가합니다.</span> -->
                        
                            <input class="submit-btn" type='submit' id='send_message' value='무료 자격증 정보 받기' disabled style="background:#595959">
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



`;

document.body.appendChild(form.content);