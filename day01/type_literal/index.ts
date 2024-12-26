// 리터럴 타입
type Course = "리액트" | "자바" | "파이썬" | "C언어";
const Eclass: Course = "리액트";

type StatusCode = 200 | 404 | 500;

const getData = (code: StatusCode) => {
  if (code == 200) console.log("통과");
  else if (code == 404) console.log("클라 에러");
  else if (code == 500) console.log("서버 에러");
  else console.log("특수 에러");
};

// 맥도날드 세트 타입
// 메인메뉴: 빅맥, 치즈, 새우, 불고기, 상하이
// 서브메뉴: 감튀, 코우슬로, 치즈스틱
// 음료메뉴: 콜라, 제로콜라, ...

type Main = "빅맥" | "치즈" | "새우" | "불고기" | "상하이";
type Sub = "감튀" | "코우슬로" | "치즈스틱";
type Drink = "콜라" | "제로콜라" | "사이다" | "오렌지주스";
type MacSet = {
  main: Main;
  sub: Sub;
  drink: Drink;
};

type MakeSet = (main: Main, sub: Sub, drink: Drink) => MacSet;

const order: MakeSet = (main, sub, drink) => {
  return { main, sub, drink };
};

const myOrder = order("불고기", "감튀", "사이다");
const yourOrder = order("새우", "치즈스틱", "제로콜라");

// 빵, 치즈, 야채, 소스

type Bread = "flat" | "ott" | "gar";
type Cheese = "mozz" | "cheda";
type No = "picle" | "tomato";
type Source = "hot" | "ok";
type Subway = {
  bread: Bread;
  cheese: Cheese;
  no: No[];
  source: Source;
};

const orderSub = (bread: Bread, cheese: Cheese, no: No[], source: Source) => {
  return { bread, cheese, no, source };
};

const myOrder1 = orderSub("flat", "cheda", ["picle", "tomato"], "hot");
