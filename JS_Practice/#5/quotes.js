const quotes = [
    {
        quote : "동해물과 백두산이",
        author : "1-1"
    },
    {
        quote : "마르고 달도록",
        author : "1-2"
    },
    {
        quote : "하나님이 보우하사",
        author : "1-3"
    },
    {
        quote : "우리나라 만세",
        author : "1-4"
    },
    {
        quote : "동해물과 백두산이",
        author : "2-1"
    },
    {
        quote : "마르고 달도록",
        author : "2-2"
    },
    {
        quote : "하나님이 보우하사",
        author : "2-3"
    },
    {
        quote : "우리나라 만세",
        author : "2-4"
    },
    {
        quote : "하나님이 보우하사",
        author : "3-1"
    },
    {
        quote : "우리나라 만세",
        author : "3-2"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


// console.log(quotes[0]);
// 0부터 9까지 랜덤으로 숫자를 세주는 함수가 필요하다. 배열 길이가 10이니까

// Math.random() * 10
// => 0에서 10사이 숫자 (floating)

// Math.round(1.1) => 1 (반올림)
// Math.ceil(1.2) => 2 (올림)
// Math.floor(1.99999) => 1 (내림)

// 우리가 쓸건 floor
// console.log(quotes[Math.floor(Math.random() * 10)]);
// 10 이라고 하드코딩 함 => 배열의 길이

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;