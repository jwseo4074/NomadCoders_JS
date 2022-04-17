/* 
console 창에 document 를 치면? html(index.html 파일 자체)를
보여준다 => 작성한 html을 가져온다.

브라우저에 이미 존재하는 객체(object)이다.
접근할 수 있는 html을 가리키는 객체.

documnet 는 그저 객체일 뿐이다. 정말 많은 정보들이 들어가있는 객체
=> 우리의 웹 사이트를 의미한다.

document 정보에 보면
documnet.title = "Momentum" 이라고 나온다.
내 코드에서는 #3 이 뜨겠지? 굉장히 흥미로운 내용이다.

=> title 이라는 항목은, js 가 아니라? html 에 내가 정의한 항목이기 때문이다
JS에서 title을 정의하지 않았다

결론  = document 가 html을 보여주는 거다.
But JS 의 관점으로 보여진다. << object로 보인다. >>

핵심은? <<< JS에서 HTML document 객체로부터 title을
가지고 올 수 있다. >>> => 매우 중요한 개념
JS는 HTML에 접근하고 읽을 수 있게 설정이 되어있다.
JS는 HTML 을 읽어온다. 여기서 알 수 있듯이 HTML 코드를 JS 관점에서  보고있다.
Object 에서 properties 를 가지고 올 수 있다. 

만약에 콘솔창에서 document.title = "Hi" 하면?
값이 바뀐다.

JS 에서 HTML을 읽어올 뿐만 아니라 값을 바꿀 수도 있다.
물론 새로고침하면 다시 이전으로 돌아간다.
HTML과 JS를 연결할 필요가 하나도 없다. 자동으로 이미 연결이 다 되어 있다.

Js로 HTML에 있는 정보를 가지고 올 수 있는 방법은? 
메소드!! document와 element 를 가지고 오는 함수들을 쓰는 것이다.
*/


// const title = document.getElementById("title")
// console.log(title);
// console.log 대신에 element 를 좀 더 자세하게 보여주는
// console.dir 를 써보자
// console.dir(title);

// title.innerText = "Got you!!!";
// 이걸 안해야 밑에 titles 랑 titless 가 제대로 동작함
// 이걸 해주면 titles : 배열 길이 0
//          titless : null 이 나온다
// 왜 ?
// Tag 가 아예 사라지나보다

// console.log("title.innerText : ", title.innerText);
// console.log(title.id);
// console.log(title.className);

// const titles = document.getElementsByTagName('h1');
// // TagName : section, button 기타 등등 
// console.log("titles : ", titles);

// // element 를 가지고 오는 가장 멋진 방법
// // querySelector : CSS 방식으로 검색 가능
// // hello 라는 class 내부에 있는 h1을 가지고 올 수 있다는 걸 의미

// const titless = document.querySelector(".hello h1")
// // querySelector 매우 중요 거의 맨날 이거만 쓸거임
// // querySelector는 단 하나의 element만 리턴해줌
// // 똑같은게 여러개면 첫번째꺼만 나옴 (해당하는, 조건에 맞는게 여러개면)
// // querySelectorAll 은 전부 다 => 배열(Array) 반환
// // id 를 통해서 값을 찾고 싶더라도
// // document.getElementById 안하고 querySelector 쓸거임
// // document.qeurySelector(#title) 이런식으로
// console.log("titless : ", titless);

// const idFromQuerySelector = document.querySelector("#title");
// console.log("idFromQuerySelector : ", idFromQuerySelector);


// const title_change = document.querySelector(".hello:first-child h1")
// console.log("title_change =>  ",title_change);

// title_change.style.color = "blue";
// // h1의 style을 js에서 변경할 수 있다는 사실이 중요
// // js 에서 발생하는 event를 여기서 listen 하는게 중요

// function handleTitleClick(){
//     console.log("title was clicked");
//     title.style.color="red";

// }
// title_change.addEventListener("click", handleTitleClick);
// title_change.onclick = handleTitleClick 이랑 똑같음

// 오른쪽 인자에 handleTitleClick() 하면 그냥 바로 실행해버리는거자나
// 그게 아니라 함수만 넘겨주고 js 에서 함수 실행함
// 이 함수를 곧바로 실행하는게 아니라 click을 할 때만 실행
// 굳이 버튼일 필요가 없다, h1 태그에도 가능

// function handleMouseEnter(){
// title_change.innerText = "Mouse is here!!";
// }
// title_change.addEventListener("mouseenter", handleMouseEnter);
// // title_change.onmouseenter = handleMouseEnter; 이랑 똑같다
// // 마우스가 그 위로 올라가면

// function handleMouseLeave(){
//     title_change.innerText = "Mouse is gone!!";
// }
// title_change.addEventListener("mouseleave", handleMouseLeave);
// // 3개의 이벤트가 동시에 발생(병렬적으로)

// // addEventListener를 쓰는 이유는?  = removeEventListener를 통해서
// // event listener를 제거할 수 있다.

// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }
// window.addEventListener("resize", handleWindowResize)
// // title_change 처럼 document 안에 있는 h1 같은 element 는 안돼
// // window 정도의 사이즈? 폼? 에서만 가능

// function handleWindowCopy(){
//     alert("Copier!!");
// }
// window.addEventListener("copy", handleWindowCopy);

// // 패턴은 계속 똑같다
// // element 를 찾아서 event listener를 추가하고, event가 발생하면 반응을 해준다.

// function handleWindowOffline(){
//     alert("SOS no wifi");
// }

// function handleWindowOnline(){
//     alert("All Good");
// }

// widdow.addEventListener("offline", handleWindowOffline);
// widdow.addEventListener("online", handleWindowOnline);


// title을 한번 클릭하면 토마토로 색깔 바뀌고
// 다시 한번 더 누르면 파란새으로 바뀌게 하고 싶음   ==> 토글

// const title_change = document.querySelector(".hello:first-child h1")
// console.log("title_change =>  ",title_change);

// title_change.style.color = "blue";
// // h1의 style을 js에서 변경할 수 있다는 사실이 중요
// // js 에서 발생하는 event를 여기서 listen 하는게 중요

// function handleTitleClick(){
    // console.log("title_change.style.color => " , title_change.style.color);
    // // 이걸 getter 라고 함
    // title_change.style.color="red";
    // // 이걸 setter 라고 함
    // console.log("title_change.style.color => ", title_change.style.color);


    // if(title_change.style.color === "blue"){
    //     title_change.style.color = "tomato";
    // }
    // else {
    //     title_change.style.color = "blue";
    // }
    // console.log("title_change.style.color => ", title_change.style.color);


    // 이까지 좋아 근데 title_change.style.color 이걸 너무 많이 써
    // 좀 번거롭지? => 변수로 지정해서 현재 색깔을 저장해준다
    
    // const currentColor = title_change.style.color;
    // let newColor;
    // // let 은 값이 변경될 수 있다.
    // if(currentColor === "blue"){
    //     newColor = "tomato";
    // }
    // else {
    //     newColor = "blue";
    // }
    // title_change.style.color = newColor;
    // // 다 좋은데 css를 js에서 자꾸 바꾸면 안돼


    // title_change.className = "active";
    // 이렇게 하면 js가 css와 직접 대화하지 않는다.
    // js 는 html을 변경할거고 (html 에 h1 태그 className을 변경)
    // CSS 는 html 을 바라보고 있다.
    // 위에 코드보단 이게 더 좋다. 왜냐면 더 작은 js 코드로 동일한 결과니까

    // title_change의 className을 왔다리 갔다리 하고 싶어
    // if(title_change.className === "active"){
    //     title_change.className = "";
    // }
    // else {
    //     title_change.className = "active"
    // }
    // 토글 똑같이 구현
    // 하지만 아직 에러가 나올 가능성이 있음
    // active 는 내가 만들어준거고 2번이나 사용됨
    // 이걸 바꾸고 싶을 때 똑같이 바꿔줘야 해

    // const clickedClass = "active";

    // if(title_change.className === clickedClass){
    //     title_change.className = "";
    // }
    // else {
    //     title_change.className = clickedClass;
    // }
    // 버그를 고치는 방법 1 (사전에 예방하는 방법)

    // 두 번째 버그는? 처음에 className이 없는 상태로 시작하면 이게 맞아
    // 근데 className 이 있는 상태로 시작하면? 버그!!
    // sexy-font를 clickedClass 로 교체해버림
    // 해결 방법은? classList 사용하기!!

    // const clickedClass = "active";

    // if(title_change.classList.contains(clickedClass)){
    //     title_change.classList.remove(clickedClass);
    // }

    // << Element.classList >> 

    // Element.classList는 엘리먼트의 클래스 속성의 컬렉션인 활성 
    // DOMTokenList를 반환하는 읽기 전용 프로퍼티이다.


    // classList 사용은 공백으로 구분된 문자열인 
    // element.className을 통해 엘리먼트의 클래스 목록에 
    // 접근하는 방식을 대체하는 간편한 방법이다.

    // Element.classList는 엘리먼트의 클래스 속성의 컬렉션인 활성
    // DomTokenList 를 반환하는 읽기 전용 프로퍼티이다.

    // DOMTokenList란?
    // 인터페이스는 DOMTokenList 공백으로 구분된 토큰 집합을 나타냅니다. 
    // 이러한 집합은 Element.classList, 
    // HTMLLinkElement.relList (en-US) , 
    // HTMLAnchorElement.relList (en-US) , 
    // HTMLAreaElement.relList (en-US) , 
    // HTMLIframeElement.sandbox또는 에서 반환됩니다. 
    // HTMLOutputElement.htmlFor. 0JavaScript Array개체 에서와 
    // 같이 시작하여 인덱싱 됩니다. DOMTokenList항상 대소문자를 구분합니다.

    // DOM은 "HTML 문서의 계층적 구조"와 정보를 표현하며 이를 제어할 수 있는 API 
    // 즉, 프로퍼티와 메서드를 제공하는 트리 자료구조이다.

//     else {
//         title_change.classList.add(clickedClass);
//     }
//     이렇게하면 sexy-font는 그대로 내두고? active 만 생겼다 없어졌다 한다.
//     개발자들이 항상 하는 일이고, 이걸 편리하게 해줄 함수가 있다.
//     => toggle function
//     기본적으로 toggle function은 바로 위 코드를 구현해놓은 것이다.

//     const clickedClass = "active";
//     title_change.classList.toggle(clickedClass);
//     title_change의 classList에 clickedClass가 없으면 추가
//     있으면? 제거
//     졸라 좋다. 졸라 편하다.

//     결론 앞에 내용들을 다 이해하고, 사용은 toggle을 쓰기!!
//     toggle 정의 = toggles token, removing it
//     if it is present and adding if it is not

//     이제 application 만들기 시작하자!!!!!!!!!!
// }
// title_change.addEventListener("click", handleTitleClick);


console.log(0 == false); // true
console.log(null === undefined); // false