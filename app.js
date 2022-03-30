// 기본 강의
// 데이터 타입 - null, undefined => 호이스팅 개념, object <<객체>> 개념
// 함수
// 계산기 만들기

// 무조건 const를 쓰는데!!! 값이 변할수도 있다? 그럼 let 쓰기
// var는 절대 안쓰는 습관을 들이자

// 객체나 배열도 마찬가지로 const로 해도 된다. => 값이 바뀐다
// onst는 재할당이 금지됩니다.
// 이는 const 변수의 타입이 객체인 경우, 
// 객체에 대한 참조를 변경하지 못한다는 것을 의미합니다. 
// 하지만 이 때 객체의 프로퍼티는 보호되지 않습니다. 
// 즉 재할당은 불가능하지만 할당된 객체의 내용(프로퍼티의 추가,삭제,값의 변경)은 
// 변경할 수 있다는 뜻입니다.

const user = { name: 'Lee' };

// const 변수는 재할당이 금지
// user = {}; // TypeError: Assignment to constant variable.

// 객체의 내용은 변경가능
user.name = 'Kim';
console.log(user); // { name: 'Kim' }

const calculator = {
    plus : function (a, b) {
        console.log(a+b);
    },
    minus : function (a,b ) {
        console.log(a-b);
    },
    times : function (a, b) {
        console.log(a*b);
    },
    divide : function (a, b) {
        console.log(a/b);
    },
    power : function (a, b) {
        return a ** b;       
    }
}

calculator.plus(2,3);
calculator.minus(2,3);
calculator.times(2,3);
calculator.divide(2,3);
calculator.power(2,3);
// alert(calculator.power(2,3));

// 더 나은 예제 : 1-11

const age = 96;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
    // return 이 없으면? undefined 가 나오겠지
}

const KrAge = calculateKrAge(age);
console.log(KrAge)

//위에 계산기 전부 함수 리턴으로 바꿀 수 있음

const inputAge = prompt("How old are you");
// 이 때 js는 잠깐 멈춘 상태, js 코드의 실행을 멈추게 해버린다
// css 적용도 안되고, 안예쁨 => 이제 prompt 함수 안써

console.log(typeof inputAge);
// 뭘 적든, 안적든 무조건 string

console.log(typeof "15", typeof parseInt("1"));
console.log(inputAge, parseInt(inputAge));
//parseInt(inputAge) => number => 대소 비교 가능
// 사용자가 입력을 했는데 숫자가 아니면 ? NaN
// 문자열을 숫자로 바꾸려고 하니까

// NaN 인지 아닌지 확인하기 => isNaN

console.log(isNaN(inputAge));
// return boolean => 조건문에 condition 으로 넣으면 되겠네?

if(isNaN(inputAge)){
    alert("Please write a number");
} else if (inputAge < 18){
    alert("Thanks");
} else {
    
}
