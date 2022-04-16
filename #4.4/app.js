const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// string 값이 계속 쓰여야 하는데 그게 절대로 값이 틀리거나 하면 안될 때
// => 개발자의 실수로 바뀔수도 있음
// JS는 string이 틀린걸 지적해주지 않는다, 하지만 변수명이 바뀌는건 에러로 표기해줌

function onLoginSubmit(event) {
    event.preventDefault();
    // 브라우저의 기본 동작을 막아준다. => 페이지 새로고침을 막아준다.
    // loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    // console.log(username);
    // submit이 되면 hidden 이라는 클래스를 추가시켜 적용시킴

    // 밑에 로컬스토리지 개념, 메소드 설명
    localStorage.setItem(USERNAME_KEY, username);
    // 사용자가 값을 입력했을 때 개발자도구에서 Application에 Storage 보면 바뀜
    // 저장은 되는데, 이제 문제가 새로고침하면 앞에 내용 다 날아가버림(form이 표시됨)

    // greeting.innerText = "Hello " + username;
    // greeting.innerText = `Hello ${username}`;
    // //이걸로 쓰는거 익숙해지자 

    // greeting.classList.remove(HIDDEN_CLASSNAME);
    // // console.log(username);
    paintGreetings(username);
}

// loginForm.addEventListener("submit", onLoginSubmit);

// localStorage.setItem("username, "nico")
// Key = username , Value = nico

// 저장하고 난 다음 불러올 수 도 있음
//localStorage.getItem("username") // "nico"

//지울 수도 있음
// localStorage.removeItem("username")


// 이제 우리가 할거
// 로컬 스토리지에 유저 정보가 없다면? form이 먼저 표시 되도록 하기
// 이미 정보가 있으면 ? h1으로 내용 보여주기

// 어떻게??
// localStorage.getItem("username") 했을 때
// localStorage에 username이 없으면 null 값을 결과로 받는다. 

function paintGreetings(username) {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}

const saveUsername = localStorage.getItem(USERNAME_KEY);
// htnml 상에 JS가 업로드되고 제일 먼저 로컬스토리지를 확인할거야
// 이게 첫번째 스텝이야
// 만약 로컬 스토리지에 유저 정보가 없다면 null을 반환할 것이다.

// 이런 식으로 로직만 짜놔도 코딩 하기 편하다.
// Control Flow of program
if (saveUsername === null){
    // ==, === 차이
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(saveUsername);    
    // 사실 saveUsername은 로컬 스토리지에 저장되어 있으니 굳이 인자로 전해줄 필요가 없음
    // 근데 그러면 로컬 스토리지를 두 번 열어봐야겠지
}