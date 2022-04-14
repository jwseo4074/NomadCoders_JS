// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input")
// const loginButton = loginForm.querySelector("button")

// loginInput 이나 loginButton을 document 가 아닌 loginForm 에서 찾을 수 있다.

// 더 짧게 쓰려면?

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

const link = document.querySelector("a");

function onLoginBtnClick() {
    const username = loginInput.value;
    console.log(username);
    // if (username === ""){
    //     alert("please write your name");
    // } else if (username.length) {
    //     alert("Your name is too long")
    // } else {

    // }

    // 이렇게 js 에서 짜도 되긴한데 html 태그의 기능을 쓰는 것도 상당히 좋은 방법이다.
}

function onLoginSubmit(event) {
    event.preventDefault();
    // event의 기본 행동이든지 발생되지 않도록 막는 역할
    // 가본 행동이란 어떤 function에 대해 브라우저가 기본적으로 수행하는 동작
    // 누군가 form 을 submit하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어있다.
    // 그 기본 동작을 막는다.

    const username = loginInput.value;
    console.log("username = ", username);
    // ??? 나왔다가 바로 사라져버림, 입력밧 받아오는건 되는데 새로고침은 계속 돼
    // 브라우저는 엔터를 누를때 서밋을 하게 되어있다.

    console.log("event = ", event);
    // info =  SubmitEvent {isTrusted: true, 
    //     submitter: button, type: 'submit', 
    //     target: form#login-form, 
    //     currentTarget: form#login-form, …}
    // 이걸로 많은 것을 하게 될거야
    // 보통 event로 적는게 관행
}
// 이 함수가 HTML로 부터 하나의 argument를 받도록 하고 그걸 JS에 넘겨준다.
// 누가 form 을 submit 하면 JS가 이 function을 호출하도록 하고 있다.

// loginButton.addEventListener("click",onLoginBtnClick)

loginForm.addEventListener("submit", onLoginSubmit);
// loginForm.addEventListener("submit", onLoginSubmit());
// 이거는 뒤에 함수를 즉시 실행하겠다는 건데 그러고 싶지 않아
// 괄호가 없어야 이벤트가 일어났을 때 그 함수를 실행시킨다 라는 의미

// 이 때 그냥 함수를 호출하는게 아니라 첫번째 인자로 argument를 같이 넘겨준다!! 
// 함수의 console.log 에서 확인

// onLoginSubmit()
// 브라우저가 이걸 보자마자 바로 실행해버릴거야
// addEventListener를 활용할 때는 함수 이름만 적어준다.

// addEventListener 의 첫번째 argument는 항상 지금 막 벌어진 일들에 대한 정보이다.
// 받는 함수에서 인자로 적어주기만 하면 됨 , 보내는건 코드에 적어놓지 않아도 JS가알아서 해줌

function handleLinkClick(event) {
    console.log(event);
    event.preventDefault();
    // 링크를 눌러도 페이지 이동 하지 않음, 왜 ? 
    // 링크의 Js 기본 동작인 링크 누르면 웹 페이지 이동하는 기능(기본기능)을 막고 있거든
    
    // alert("click!");
    // 이 경고창이 웹사이트가 다른 행동을 하는걸 막고 있다. (Blocking)
    // Js가 모든걸 Stop

    // 이게 이벤트를 활용하는 방법이고, preventDefault를 사용하는 방법
}
link.addEventListener("click", handleLinkClick);

// handleLinkClick() => 내가 함수를 실행하는거야 
// 근데 우린 이걸 원하지 않아, 클릭을 했을 때 JS가 실행을 시켜주는걸 원해

handleLinkClick({})
// 괄호(객체)를 안에 넣어주게 되면 함수를 실행 시키는 동시에 첫번째 인자로
// 객체를 전달, 이 객체에는 많은 정보가 들어있음 (방금 일어난 event에 대한 정보들)
// { information : about the event that just happend }
 
// JS가 자동으로 객체를 전달해줄거야, 우리는 해당 함수에서 자리(공간, 파라미터를 받을 준비)만
// 만들어주면 돼