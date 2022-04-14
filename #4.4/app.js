const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    // console.log(username);
    // submit이 되면 hidden 이라는 클래스를 추가시켜 적용시킴

    // greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`;
    //이걸로 쓰는거 익숙해지자

    greeting.classList.remove(HIDDEN_CLASSNAME);
    // console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);
