# 💚네이버 로그인 페이지 구현
![네이버 로고](https://github.com/createvalue-kangsh/js-homework/assets/128280528/b77c1cc9-bf83-4bbb-8783-ee850fde518b)

---

### ✅프로젝트 기간: 2023.07.12 ~ 2023.07.16
### 시연 영상
![naver gif](https://github.com/createvalue-kangsh/js-homework/assets/128280528/525c8f91-6af0-434a-9913-a8b4eb2602d5)

### Skills
 <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
---

## 구현할 페이지

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.

---
## 프로젝트 목표

- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.
- [x] 조건문을 이요하여 효율적인 로직을 구성합니다.
- [x]  브라우저 랜더링 속도를 고려하여 critical renderfing path를 최적화를 염두합니다.

---
## 성능 검사

![image](https://user-images.githubusercontent.com/128280528/253144958-e666ba8e-9cdd-4424-a5e8-c109940feff1.png)

---

## 함수

함수를 사용할 때는 재사용성을 고려하여 만듭니다.
함수는 프로그래밍에서 자주 사용하는 구문을 매 번 작성하지 않고 필요할 때 재사용성을 높이는 방법 중 하나입니다.
이번 과제의 코드에서도 자주 사용하는 구문을 함수로 만들어 재사용성을 높였습니다.

- 이메일을 형식대로 입력하였는지 실시간으로 확인하는 코드
  ```
  
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

  ```


## 조건문

로그인 코드 로직에서 조건문은 크게 중요한 역할을 합니다.

조건문을 사용하면 코드 로직을 간편하고 가독성을 향상시킬 수 있습니다.

조건문을 이해하여 로그인과 비밀번호를 입력하는 경우의 수에 따라 

email.classList.add("is--invalid")

email.classList.remove("is--invalid")

위의 코드를 적절한 곳에 배치해야 합니다.

(1) 사용자가 반환값과 이메일, 비밀번호 형태의 비교

```js
//이메일창의 값이 이메일 형태와 맞지 않게 입력된 경우
if (!emailReg(email.value)) {
  email.classList.add("is--invalid");
}

// 이메일 형태에 적합하게 입력된 경우
else {
  email.classList.remove("is--invalid");
}

//입력한 비밀번호가 6~16자가 아닌경우
if (!pwReg(pw.value)) {
  //여기 .value는 사용자가 입력한 pw의 값을 받아온다.
  pw.classList.add("is--invalid");
}

// 비밀번호 형태에 적합하게 입력된 경우
else {
  pw.classList.remove("is--invalid");
}
```

2. 사용자 반환 아이디, 패스워드와 지정된 아이디 패스워드를 조건문을 이용하여 비교한다.

```js
//이메일과 패스워드가 모두 일치하는 경우
if (user.id === email.value && user.pw === pw.value) {
  window.location.href = "welcome.html";
  email.classList.remove("is--invalid");
  pw.classList.remove("is--invalid");
}

//아이디는 일치하지만 패스워드는 일치하지 않는 경우
else if (user.id === email.value && user.pw !== pw.value) {
  email.classList.remove("is--invalid");
  alert("비밀번호가 일치하지 않습니다.");
}
//1. 아이디와 패스워드 모두 일치하지 않는 경우 , 아이디는 일치하지 않고 패스워드는 일치
else {
  alert("이메일이 일치하지 않습니다.");
}
```

## Rendering

dom 요소가 적을 수록, css 규칙이 작을 수록 dom tree가 작아지기 때문에 construction 과정이 빨라집니다.
그렇기에 불필요한 tag 남용을 지양했습니다.

## 📸경우의 수에 따른 시연 페이시

1. 이메일과 패스워드가 모두 일치하는 경우
![Alt text](image-4.png)

2. 아이디는 일치하지만 패스워드는 일치하지 않는 경우

(사용자가 반환한 비밀번호 값, 비밀번호 형식이 일치하지 않은 경우)
![Alt text](image.png)

(사용자가 반환한 비밀번호 값은 일치하지 않지만 비밀번호 형식은 일치하는 경우)
![Alt text](image-1.png)
비밀번호는 특수문자 포함 10자리를 포함하고 있다.


3. 아이디와 패스워드 모두 일치하지 않는 경우 , 아이디는 일치하지 않고 패스워드는 일치
![Alt text](image-2.png)  ![Alt text](image-3.png)

