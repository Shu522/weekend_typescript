// 문자 타입 만들기
const moive: string = "10";
// 숫자 타입 만들기
const num: number = 10;
// 불리언 타입 만들기
const isDark: boolean = true;

// 문자 배열 타입
const coffees: string[] = ["아메리카노", "라떼"];
const coffees1: Array<string> = ["디카페인", "고구마라떼"];

// 숫자 배열 타입
const num1: number[] = [10, 20];
const num2: Array<Number> = [30, 40];

// 불리언 배열 타입
const isLight: boolean[] = [true, false];
const isLight1: Array<boolean> = [false, true];

// 오브젝트
const student: { name: string; age: number } = {
  name: "김민정",
  age: 23,
};

const latte: { shots: number; kcal: number; ingredients: string[] } = {
  shots: 2,
  kcal: 100,
  ingredients: ["우유", "커피"],
};

const car: {
  name: string;
  model: string;
  engine: { name: string; model: string; power: number };
}[] = [
  {
    name: "테슬라",
    model: "Y",
    engine: { name: "abcx", model: "k1", power: 100 },
  },
  {
    name: "비비",
    model: "마",
    engine: { name: "ㅇㅇ", model: "ㅁㅁ", power: 200 },
  },
];

const donut: {
  name: string;
  kcal: number;
  ingredient: { name: string; content: number }[];
}[] = [
  {
    name: "도넛",
    kcal: 100,
    ingredient: [
      { name: "소금", content: 20 },
      { name: "설탕", content: 10 },
    ],
  },
];
