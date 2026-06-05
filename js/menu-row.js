const menu = document.getElementById('menu');
menu.innerHTML = `
<header>
<nav class="top">
    <a class="logo"  target="_self" >
      <img id ="logo_img" src="img/favicon.png" onclick="window.location.href='./index.html'">
      <p class="logo-font" id="lgt" style="" onclick="window.location.href='./index.html'">한국교육개발센터</p>
      <!-- <img alt="" src="img/logo_img.png" > -->
    
    </a>
    <div class="menu-btn">
        <!-- <button class="Event_Menu">Event</button> -->
       <button class="total_menu"><img src="img/hamburger.svg" style="width:17px"></button>
    </div>
</nav>


<div class="ham-con" data-depth="1"><!-- 메뉴 -->
    <div class="bg"></div>
    <div class="container-box">

        <div class="top">
            <div>
                <button class="back">
                    <svg fill="none" viewBox="0 0 24 24" preserveAspectRatio="xMinYMid" class="_SN-cw _SN-cx _SN-cy _SN-cz _SN-db _SN-od"><path d="M5 9l7 7 7 -7" stroke="currentColor" data-autoid="chevron:90" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1"></path></svg>
                </button>
                
                <p class="txt-cg">학생</p>
                
                <a class="logo"  target="_self" href="./index.html">
                    <img id="menu_logo" src="img/favicon.png" style="width:100%;min-width:20px;margin-right:4px;margin-bottom:4px;">
                    <p class="logo-font" id="menu_text"  style="margin:0px;"> 한국교육개발센터</p>
                  <!-- <img alt="" src="img/logo_img.png" > -->
                </a>
                <p class="close-btn ham-close-btn" style="margin:14px 0px;"><svg viewBox="0 0 24 24" class="_SN-cw _SN-cx _SN-cy _SN-cz _SN-da _SN-db"><path stroke="currentColor" d="M4.222 4.222l15.556 15.556M4.222 19.778L19.778 4.222"></path></svg></p>
            </div>
        </div>

        <div class="wrap">
            <div class="menu con-01"><!-- 메뉴 1depth-->

              
                <div class="middle">
                    <ul class="left" style="padding-left:0px;margin-top:15px;">                       
                        <li class="tab02" data-rel="menu-01" data-tit="국가자격증"><p><img src="img/favicon.png" style="width:20px;margin-right:4px;margin-bottom:4px;">국가자격증 취득 지원<span class="blink menu_event"> 교육비 전액 환급</span></p><img width="24" height="24" src="img/navigation.svg#light-primary" role="presentation" alt="" class="_SN-cu _SN-cv next_point" style="height:24px;margin-bottom:3px;"></li>
                        <li class="tab02" data-rel="menu-02" data-tit="높은 시급 자격증"><p><img src="img/lic_favicon.png" style="width:20px;margin-right:4px;margin-bottom:4px;">높은 시급 자격증 정보<span class="blink menu_event"> 무료 기출 문제</span></p><img width="24" height="24" src="img/navigation.svg#light-primary" role="presentation" alt="" class="_SN-cu _SN-cv next_point" style="height:24px;margin-bottom:3px;"></li>

                        <li class="tab02" data-rel="menu-03" data-tit="노후 대비 자격증"><p><img src="img/lic_favicon.png" style="width:20px;margin-right:4px;margin-bottom:4px;">노후 대비 자격증 정보<span class="blink menu_event"> 무료 기출 문제</span></p><img width="24" height="24" src="img/navigation.svg#light-primary" role="presentation" alt="" class="_SN-cu _SN-cv next_point" style="height:24px;margin-bottom:3px;"></li>
                        <!-- <li class="tab02" data-rel="menu-04" data-tit="다이어트 연재"><p>다이어트 연재</p><img width="24" height="24" src="img/navigation.svg#light-primary" role="presentation" alt="" class="_SN-cu _SN-cv next_point"></li> -->
                        
                    </ul>
                </div>
                <!-- <div class="bottom">
                  
                  
                </div> -->
            </div>
            <div class="menu02"><!-- 메뉴 2depth-->
                <div class="menu-01">
                    <div class="set-con">
                        <p>국가자격증</p>
                        <ul class="bottom">
                        <li><p><a target="_self" href="./kl-a.html">  <img src="img/favicon.png" style="width:20px;margin-right:4px;margin-bottom:4px;">손해평가사 <span class="blink menu_event"> 교육비 전액 환급</span><br><span class="menu_ex">[전문직 대우, 정년 없이 연봉 1억 가능]</span></a></p></li>
                         <li><p><a target="_self" href="./kl-b.html"> <img src="img/favicon.png" style="width:20px;margin-right:4px;margin-bottom:4px;">도로교통사고감정사 <span class="blink menu_event"> 교육비 부분 환급</span><br><span class="menu_ex">[대기업 스펙, 초봉 최대 6000만원]</span></a></p></li>
                        <li><p><a target="_self" href="./kl-c.html"> <img src="img/favicon.png" style="width:20px;margin-right:4px;margin-bottom:4px;">농산물품질관리사 <span class="blink menu_event"> 교육비 전액 환급</span><br><span class="menu_ex">[대기업 스펙, 초봉 최대 6000만원]</span></a></p></li>
                        <li><p><a target="_self" href="./kl-d.html"> <img src="img/favicon.png" style="width:20px;margin-right:4px;margin-bottom:4px;">반려견스타일리스트<br><span class="menu_ex">[창업, 프리랜서, 정년 없이 근무 가능]</span></a></p></li>
                        <li><p><a target="_self" href="./kl-e.html"> <img src="img/favicon.png" style="width:20px;margin-right:4px;margin-bottom:4px;">맞춤형화장품제조관리사<br><span class="menu_ex">[대기업 스펙, 화장품 회사 채용 가산점]</span></a></p></li>
                        </ul>
                    </div>
                    <!--<div class="set-con">
                        <p>재능</p>
                        <ul class="bottom">
                            <li><a target="_self" href="./potential-test.html"></a></li>
                        </ul>
                    </div>
                    <div class="set-con">
                      <p>학습법</p>
                      <ul class="bottom">
                          <li><a target="_self" href="./howtostudy.html"></a></li>
                          <li><a target="_self" href="./burnout-test.html"></a></li>
                      </ul>
                  </div>-->
                </div>
                <div class="menu-02">
                    <div class="set-con">
                        <p>높은 시급 아르바이트</p>
                        <ul class="bottom">
                        <li><p><a target="_self" href="./bs.html">  <img src="img/lic_favicon.png" style="width:20px;margin-right:4px;margin-bottom:4px;">베이비시터 <span class="blink menu_event"> 무료 기출 문제</span><br><span class="menu_ex">[시급 최대 6만원, 워라벨, 시간 조절 가능]</span></a></p></li>
                        </ul>
                    
                        
                    </div>
                
                </div> 

                <div class="menu-03">
                <div class="set-con">
                    <p>노후 대비 아르바이트</p>
                    <ul class="bottom">
                    <li><p><a target="_self" href="./gbs.html">  <img src="img/lic_favicon.png" style="width:20px;margin-right:4px;margin-bottom:4px;">간병사 <span class="blink menu_event"> 무료 기출 문제</span><br><span class="menu_ex">[하루 최대 15만원, 워라벨, 취업률 90% 이상]</span></a></p></li>
                    <li><p><a target="_self" href="./pia.html">  <img src="img/lic_favicon.png" style="width:20px;margin-right:4px;margin-bottom:4px;">PIA 사설탐정사 <span class="blink menu_event"> 무료 기출 문제</span><br><span class="menu_ex">[하루 시급 7만원,  정년 없는 특수 전문직]</span></a></p></li>
                    </ul>
                
                    
                </div>
            
            </div> 
            
                
                <!-- <div class="menu-04">
                    <div class="set-con pad">
                        <ul class="bottom">
                          <p style="padding: 30px 25px 10px;
                          letter-spacing: 0.02em;
                          line-height: 1.66667;
                          font-size: 12px;
                          font-weight: 500;
                          color: #707070;"></p>
                          <li><a target="_self" href=""></a></li>
                          <li><a target="_self" href=""></a></li>
                          <li><a target="_self" href=""></a></li>
                          <li><a target="_self" href=""></a></li>
                          <li><a target="_self" href=""></a></li>
                          <li><a target="_self" href=""></a></li>
                          
                        </ul>
                    </div>
                </div> -->
              
            </div>
        
        </div>
    </div>
</div>


</header>



`;

document.body.appendChild(menu.content);