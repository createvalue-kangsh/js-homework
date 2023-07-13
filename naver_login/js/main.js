
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

//이메일을 제대로 입력했는지 실시간으로 체크하는 코드
function printEmail(){
  //이메일 입력창, 이메일 입력조건 불만족 시 하단에 표시되는 경고 텍스트 변수에 할당
  const email = document.querySelector('#userEmail');

  
  //이메일창의 값이 이메일 형태와 맞지 않게 입력된 경우
  if(!emailReg(email.value)){
    email.classList.add('is--invalid')
  }
  
  // 이메일 형태에 적합하게 입력된 경우
  else{
    email.classList.remove('is--invalid')
  
  }
  
}



//이메일   체크하는 함수
function emailReg(text){
  //이메일 형식에 맞게 입력했는지 체크
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase()) //형식에 맞는 경우에는 true 리턴
}


//비밀번호 실시간 체크
function printPw(){
  //비밀번호 입력창, 비밀번호 경고 텍스트 변수 할당
  const pw =document.querySelector('#userPassword');

  //입력한 비밀번호가 6~16자가 아닌경우
  if(!pwReg(pw.value)){ //여기 .value는 사용자가 입력한 pw의 값을 받아온다.
    pw.classList.add('is--invalid')
  }

    // 비밀번호 형태에 적합하게 입력된 경우
    else{
      pw.classList.remove('is--invalid')
    }
  
}

//비밀번호 정규식 체크하는 함수
function pwReg(text){ //여기의 text는 아래 비밀번호 문자열을 받아와서 리턴하는 함수
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
  //String.prototype.toLowerCase() : 소문자로 변환된 호출 문자열 값을 반환
}

function btnCheck(){
  //이메일, 비밀번호, 로그인 버튼 변수 할당
  // input email
  const email = document.querySelector('#userEmail');
  const pw =document.querySelector('#userPassword');
  
  
  //이메일과 패스워드가 모두 일치하는 경우
  if(user.id===email.value && user.pw===pw.value){
    window.location.href = 'welcome.html'
    email.classList.remove('is--invalid')
    pw.classList.remove('is--invalid')
  }

  //아이디는 일치하지만 패스워드는 일치하지 않는 경우
    else if(user.id===email.value && user.pw!==pw.value){
      email.classList.remove('is--invalid')
      alert('비밀번호가 일치하지 않습니다.')
  }
  //1. 아이디와 패스워드 모두 일치하지 않는 경우 , 아이디는 일치하지 않고 패스워드는 일치
    else{
      alert('이메일이 일치하지 않습니다.')
  }


}










