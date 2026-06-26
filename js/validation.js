/**
 * 자격증 상담 신청 스크립트 (Supabase 전송)
 *
 * 기존 Google Forms 전송 → Supabase REST API로 변경
 * form_check1() 히든폼 동기화 + $('[name="fm"]').submit() 유지
 * 유효성 검사, UI, lic_pick 등 모두 그대로 유지
 *
 * ★ 설정: 아래 두 줄만 본인 값으로 변경하세요
 */

var SUPABASE_URL  = 'https://yiuioprceyuybwkgxmrm.supabase.co';
var SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpdWlvcHJjZXl1eWJ3a2d4bXJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3NDM1MDIsImV4cCI6MjA5NDMxOTUwMn0.SkkBCH9avPMZu-LeBtdOh5zsppcRMvbnilj38CkHEZs';

$(document).ready(function () {
  form_check();

  $('#send_message').click(function (e) {
    e.preventDefault();

    var error = false;
    const regex1 = /^[|가-힣a-zA-Z\s+]+$/;
    const regex = /^[|0-9|]+$/;
    var position = $('#position').val();
    var id = $('#id-number').val();
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var message = $('#message').val();
    var agree = $('#agree11').is(':checked');

    $('#name,#phone,#message,#agree11,#position').click(function () {
      $(this).removeClass('error_input');
    });

    if (!regex1.test(name) || name.length < 1) {
      error = true;
      $('#name').addClass('error_input');
      alert('이름 입력을 확인하세요.');
    } else {
      $('#name').removeClass('error_input');
    }

    if (phone.substr(0, 3) == '010' && phone.length == 11 && regex.test(phone)) {
      $('#phone').removeClass('error_input');
    } else {
      error = true;
      $('#phone').addClass('error_input');
      alert('휴대폰 번호 입력을 확인하세요.');
    }

    if (id >= 23 && id <= 55 && regex.test(id)) {
      $('#id-number').removeClass('error_input');
    } else {
      error = true;
      $('#id-number').addClass('error_input');
      alert('23 ~ 55세까지 신청가능합니다.');
    }

    if (position == null) {
      error = true;
      $('#position').addClass('error_input');
      alert('통화 가능 시간을 선택해주세요.');
    } else {
      $('#position').removeClass('error_input');
    }

    if (agree == false) {
      error = true;
      $('#agree11').addClass('error_input');
      alert('개인정보동의를 체크해주세요.');
    } else {
      $('#agree11').removeClass('error_input');
    }

    if (error == false) {
      $('#send_message').attr({ disabled: 'true', value: '전송 중입니다' });
      $('#send_message').css({ transition: '1s', background: '#222222', color: '#fff' });

      // ★ 수정 1) 제출 직전 나이 기준 폼 라우팅 재확정 (손해평가사 30세 이상 → form6)
      lic_pick();

      // 1) form_check1 실행 → 히든폼 값 동기화
      form_check1();

      // 2) 히든폼 submit (기존 로직 유지)
      $('[name="fm"]').submit();

      // 3) Supabase 전송
      submitLicenseToSupabase();
    }
  });

  $('#name,#phone,#position,#id-number,#message,#agree11,#license').bind('keyup click change', form_check);
  $('#name,#phone,#position,#id-number,#message,#license').bind('keyup click change', form_check1);

  // ★ 수정 2) 나이(#id-number) 변경 시에도 lic_pick 실행되도록 바인딩 추가
  $('#license,#id-number').bind('keyup click change', lic_pick);
});

// ================================================================
//  Supabase 전송
// ================================================================
function getLeadSource() {
  return $('meta[name="lead-source"]').attr('content') || '';
}

function submitLicenseToSupabase() {
  var payload = {
    license_type: $('#license').val() || '',
    name:         $.trim($('#name').val() || ''),
    phone:        String($('#phone').val() || '').replace(/[^0-9]/g, ''),
    age:          $.trim($('#id-number').val() || '') || null,
    call_time:    $('#position').val() || null,
    message:      $.trim($('#message').val() || '') || null,
    email:        $.trim($('#email').val() || '') || null,
    source:       getLeadSource()   // ← meta 태그에서 읽어옴
  };

  fetch(SUPABASE_URL + '/rest/v1/license_consultations', {
    method: 'POST',
    headers: {
      'Content-Type':  'application/json',
      'apikey':        SUPABASE_ANON,
      'Authorization': 'Bearer ' + SUPABASE_ANON,
      'Prefer':        'return=minimal'
    },
    body: JSON.stringify(payload)
  })
  .then(function (res) {
    if (!res.ok) throw new Error('저장 실패');

    try {
      if (window.karrotPixel && window.karrotPixel.track) {
        window.karrotPixel.track('SubmitApplication');
      }
    } catch (err) {}

    setTimeout(function () {
      alert('보시면 더 좋은 자격증 혜택!\n\n맞춤형화장품조제관리사 (초봉 3000 이상)\n농산물품질관리사 (초봉 4000 이상)\n수강료 지원 혜택');
      window.location.href = './result.html';
    }, 1500);
  })
  .catch(function (err) {
    alert('오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    $('#send_message').prop('disabled', false).val('혜택 지원 신청하기');
    $('#send_message').css({ background: '#0e3b64', color: '#fff', cursor: 'pointer' });
  });
}

// ================================================================
//  히든폼 값 동기화 (기존 로직 그대로)
// ================================================================
function form_check1() {
  var name = $('#name').val();
  var id = $('#id-number').val();
  var ph = $('#phone').val();
  var time = $('#position').val();
  var message = $('#message').val();
  var currentUrl = window.location.href;
  var mainUrl = new URL(currentUrl).href;
  var useragent = navigator.userAgent;
  $('input[name="refer_url"]').val(mainUrl);
  $('input[name="user_agent"]').val(useragent);
  $('[name="user_name"]').val(name);
  $('[name="나이"]').val(id);
  $('[name="휴대폰번호1"]').val('010');
  $('[name="휴대폰번호2"]').val(ph.substr(3, 4));
  $('[name="휴대폰번호3"]').val(ph.substr(7, 4));
  $('[name="통화가능시간"]').val(time);
  $('[name="상담가능시간"]').val(time);
  $('[name="문의사항"]').val(message);
}

// ================================================================
//  유효성 검사 (기존 로직 그대로)
// ================================================================
function form_check() {
  var regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regex2 = /^[가-힣]+$/;
  const regex = /^[|0-9|]+$/;
  var position = $('#position').val();
  var license = $('#license').val();
  var id = $('#id-number').val();
  var name = $('#name').val();
  var email = $('#email').val();
  var ph = $('#phone').val();
  var message = $('#message').val();
  var agree = $('#agree11').is(':checked');

  if (email.match(regExp) != null) {
    $('#send_message').css({ transition: '1s' });
    $('#send_message').css({ background: '#0e3b64' });
  } else if (email.length > 0) {
    $('#send_message').css({ transition: '1s' });
    $('#send_message').prop('disabled', true);
    $('#send_message').prop('value', '이메일 주소 입력을 확인하세요.');
    $('#send_message').css({ background: '#595959' });
    $('#send_message').css({ cursor: 'default' });
  }

  if (license != null) {
    if (regex2.test(name) && name.length > 1) {
      if (ph.substr(0, 3) == '010' && ph.length == 11 && regex.test(ph)) {
        if (regex.test(id) && id.length == 2 && id >= 30 && id < 56) {
          if (position != null) {
            if (message.length > 0) {
              if (agree == true) {
                $('#send_message').css({ transition: '1s' });
                $('#send_message').prop('disabled', false);
                $('#send_message').prop('value', '혜택 지원 신청하기');
                $('#send_message').css({ background: '#0e3b64' });
                $('#send_message').css({ cursor: 'pointer' });
              } else {
                $('#send_message').css({ transition: '1s' });
                $('#send_message').prop('disabled', true);
                $('#send_message').prop('value', '개인정보 동의를 해주세요');
                $('#send_message').css({ background: '#595959' });
                $('#send_message').css({ cursor: 'default' });
              }
            } else {
              $('#send_message').css({ transition: '1s' });
              $('#send_message').prop('disabled', true);
              $('#send_message').prop('value', '문의사항 입력을 확인하세요');
              $('#send_message').css({ background: '#595959' });
              $('#send_message').css({ cursor: 'default' });
            }
          } else {
            $('#send_message').css({ transition: '1s' });
            $('#send_message').prop('disabled', true);
            $('#send_message').prop('value', '통화 시간을 선택하세요.');
            $('#send_message').css({ background: '#595959' });
            $('#send_message').css({ cursor: 'default' });
          }
        } else if (id.length == 0) {
          $('#send_message').css({ transition: '1s' });
          $('#send_message').prop('disabled', true);
          $('#send_message').prop('value', '나이를 입력하세요.');
          $('#send_message').css({ background: '#595959' });
          $('#send_message').css({ cursor: 'default' });
        } else {
          $('#send_message').css({ transition: '1s' });
          $('#send_message').prop('disabled', true);
          $('#send_message').prop('value', '30 ~ 55세까지 가능합니다.');
          $('#send_message').css({ background: '#595959' });
          $('#send_message').css({ cursor: 'default' });
        }
      } else if (ph.length > 0) {
        $('#send_message').css({ transition: '1s' });
        $('#send_message').prop('disabled', true);
        $('#send_message').prop('value', '전화번호 입력을 확인하세요.');
        $('#send_message').css({ background: '#595959' });
        $('#send_message').css({ cursor: 'default' });
      } else {
        $('#send_message').css({ transition: '1s' });
        $('#send_message').prop('disabled', true);
        $('#send_message').prop('value', '전화번호를 입력하세요.');
        $('#send_message').css({ background: '#595959' });
        $('#send_message').css({ cursor: 'default' });
      }
    } else if (name.length > 0) {
      $('#send_message').css({ transition: '1s' });
      $('#send_message').prop('disabled', true);
      $('#send_message').prop('value', '성함 입력을 확인하세요.');
      $('#send_message').css({ background: '#595959' });
      $('#send_message').css({ cursor: 'default' });
    } else {
      $('#send_message').css({ transition: '1s' });
      $('#send_message').prop('disabled', true);
      $('#send_message').prop('value', '성함을 입력하세요.');
      $('#send_message').css({ background: '#595959' });
      $('#send_message').css({ cursor: 'default' });
    }
  } else {
    $('#send_message').css({ transition: '1s' });
    $('#send_message').prop('disabled', true);
    $('#send_message').prop('value', '자격증 종류를 선택하세요.');
    $('#send_message').css({ background: '#595959' });
    $('#send_message').css({ cursor: 'default' });
  }
}

// ================================================================
//  자격증 선택 → 히든폼 name="fm" 매핑
//  ★ 수정 3) 손해평가사: 29세 이하 → form1 / 30세 이상 → form6 분기
// ================================================================
function lic_pick() {
  var lic = $('#license').val();
  var age = parseInt($('#id-number').val(), 10);

  // 손해평가사: 30~39세는 form1, 40~60세는 form6로 접수
  if (lic === '손해평가사') {
    if (age >= 40) {
      $('#form1').attr('name', '');
      $('#form6').attr('name', 'fm');
    } else {
      $('#form1').attr('name', 'fm');
      $('#form6').attr('name', '');
    }
  } else {
    $('#form1').attr('name', '');
    $('#form6').attr('name', '');
  }

  if (lic === '도로교통사고감정사') { $('#form2').attr('name', 'fm'); } else { $('#form2').attr('name', ''); }
  if (lic === '농산물품질관리사') { $('#form3').attr('name', 'fm'); } else { $('#form3').attr('name', ''); }
  if (lic === '반려견스타일리스트') { $('#form4').attr('name', 'fm'); } else { $('#form4').attr('name', ''); }
  if (lic === '맞춤형화장품제조관리사') { $('#form5').attr('name', 'fm'); } else { $('#form5').attr('name', ''); }
}

// ================================================================
//  전역 유틸 (기존 로직 그대로)
// ================================================================
function dll() {}

function maxLengthCheck(object) {
  if (object.value.length > object.maxLength) {
    object.value = object.value.slice(0, object.maxLength);
  }
}

function hoa() {
  setTimeout(function () {
    alert('보시면 더 좋은 자격증 혜택!\n\n맞춤형화장품조제관리사 (초봉 3000 이상)\n농산물품질관리사 (초봉 4000 이상)\n수강료 지원 혜택');
    $(window).scrollTop(0);
    window.location.href = './result.html';
  }, 1500);
}

function site1111() {
  window.location.reload();
}