type StudentMathScore = { [name: string]: number };

const classOne: StudentMathScore = {
  kim: 50,
  lee: 60,
  park: 55,
};

// 영어 점수, 등급 [A~F]

type StudentEngScore = { [index: string]: number };

const classTwo: StudentEngScore = {
  kim: 30,
  lee: 78,
  park: 90,
};

type Grade = "A" | "B" | "C" | "D" | "F";
type StudentKorScore = { [index: string]: number | Grade } & { grade: Grade };
//                                              -> | Grade 부분집합의 개념 [타입 안정화, 에러 방지]
const classThree: StudentKorScore[] = [
  { kim: 30, grade: "D" },
  { lee: 50, grade: "C" },
];

type Dictionary = { [key: string]: string };

const eng: Dictionary = {
  apple: "사과",
  orange: "오렌지",
  kiwi: "키위",
};
