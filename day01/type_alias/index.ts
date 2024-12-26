type coffee = { name: string; price: number };
const americano: coffee = { name: "아아", price: 3000 };

// 타입 빵 이름, 칼로리, 성분, 가격
// 빵메뉴 변수 만들기
type bread = {
  name: string;
  kcal: number | string;
  ingredient: string[];
  price: number;
};
const menu: bread[] = [
  {
    name: "소금빵",
    kcal: "100",
    ingredient: ["소금", "밀가루"],
    price: 1500,
  },
  {
    name: "단팥빵",
    kcal: 250,
    ingredient: ["팥", "밀가루"],
    price: 2000,
  },
];

//대학생 타입 이름, 나이, 전공, 학번, 학년
type Person = { name: string; age: number };
type Student = { major: string; id: string; grade: number };
type University = Person & Student;

const kim: University = {
  name: "김제방",
  age: 23,
  grade: 3,
  id: "11113",
  major: "제빵학과",
};

// User 타입: id, username
// Profile 타입: firstname, lastname, email
// UserProfile
type User = { id: string; username: string };
type Profile = {
  firstname: string;
  lastname: string;
  email: string;
};
type UserProfile = User & Profile;
const jonh: UserProfile = {
  id: "10341",
  username: "바바",
  firstname: "존",
  lastname: "박",
  email: "akdl@naver.com",
};

// 블로그 게시글
// Post 타입: postid, title, content
// Aurhor 타입: authorId, name, gender
// PostWithAuthor

type Post = { postId: number; title: string; content: string };
type Author = { authorId: number; name: string; gender: string };
type PstWithAuthor = Post & Author;

// 함수타입 알리아스 만들기
// 두 배개변수 더하는 함수 타입 만들기
type Operation = (x: number, y: number) => number;

const add1: Operation = (x, y) => x + y;
const minus: Operation = (x, y) => x - y;
