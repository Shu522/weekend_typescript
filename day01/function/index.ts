const add = (x: number, y: number): number => {
  return x + y;
};

// 곱하기 함수
const multiply = (x: number, y: number): number => x * y;

// 어떤 숫자를 입력하고 홀수면 콜라 짝수면 사이다
const numCheck = (x: number): string => (x % 2 ? "콜라" : "사이다");

// 어떤 문자가 들어가서 빈문자면 false, 아니면 true
const st = (x: string): boolean => !!x;

const printMsg = (str: string): void => {
  console.log(`${str} 출력`);
};

const callName = (first: string, last: string = "Guest") => {
  console.log(`${first}성 ${last}이름`);
};

const callName1 = (first: string, last?: string) => {
  console.log(`${first}성 ${last}이름`);
};
callName("김");
callName("김", "민정");
