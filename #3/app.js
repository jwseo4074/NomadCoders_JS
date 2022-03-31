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


const title = document.getElementById("title")
// console.log(title);
// console.log 대신에 element 를 좀 더 자세하게 보여주는
// console.dir 를 써보자
console.dir(title);

// title.innerText = "Got you!!!";
// 이걸 안해야 밑에 titles 랑 titless 가 제대로 동작함
// 이걸 해주면 titles : 배열 길이 0
//          titless : null 이 나온다
// 왜 ?
// Tag 가 아예 사라지나보다

console.log("title.innerText : ", title.innerText);
console.log(title.id);
console.log(title.className);

const titles = document.getElementsByTagName('h1');
// TagName : section, button 기타 등등 
console.log("titles : ", titles);

// element 를 가지고 오는 가장 멋진 방법
// querySelector : CSS 방식으로 검색 가능
// hello 라는 class 내부에 있는 h1을 가지고 올 수 있다는 걸 의미

const titless = document.querySelector(".hello h1")
// querySelector 매우 중요 거의 맨날 이거만 쓸거임
// querySelector는 단 하나의 element만 리턴해줌
// 똑같은게 여러개면 첫번째꺼만 나옴 (해당하는, 조건에 맞는게 여러개면)
// querySelectorAll 은 전부 다 => 배열(Array) 반환
// id 를 통해서 값을 찾고 싶더라도
// document.getElementById 안하고 querySelector 쓸거임
// document.qeurySelector(#title) 이런식으로
console.log("titless : ", titless);

const idFromQuerySelector = document.querySelector("#title");
console.log("idFromQuerySelector : ", idFromQuerySelector);