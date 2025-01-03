type Person = { name: string; age: number };
type Test = keyof Person;
const test: Test = "age";

// 커피 타입 이름, 샷수, 성분
// 키오브 사용 test1에서 샷수를 변수로 담는 코드
type Coffee = {
  name: string;
  shots: number;
  ingredents: string[];
};

type KeyCoffee = keyof Coffee;
const test1: KeyCoffee = "shots";

type Student = { name: string; age: number };
type StudentKey = keyof Student;

const getStudentProperty = (student: Student, key: StudentKey) => {
  return student[key];
};

const kim: Student = { name: "김", age: 21 };
getStudentProperty(kim, "age"); // 21

// Colors 타입을 만들고 primary, secondary, success, danger
// 키오브로 키값들을 추출
// 만약에 키값들로 이름을 주었을 때, 해당  색상들을 돌려주는 함수를 만들면 됨

//ex getColor("primary") => green

type Colors = {
  primary: string;
  secondary: string;
  success: string;
  danger: string;
};

const color: Colors = {
  primary: "skyblue",
  secondary: "pink",
  danger: "red",
  success: "green",
};
type ColorsKey = keyof Colors;

const getColor = (key: ColorsKey) => color[key];

getColor("secondary"); // pink

type BackgroundColor = {
  first: string;
  second: string;
  deactived: string;
  hover: string;
};
const bgColor: BackgroundColor = {
  first: "green",
  second: "blue",
  deactived: "grey",
  hover: "skyblue",
};

type BgColorKey = keyof BackgroundColor;
const getBgColor = (bgkey: BgColorKey) => bgColor[bgkey];

getBgColor("deactived"); // grey
