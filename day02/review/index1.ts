// 피자 주문 타입

// 아이티 피자 세트
// 메인 피자: [마르게리따,곤졸라,불고기,하와이안,콤비네이션],

type MainPizza = "마르게리따" | "곤졸라" | "불고기" | "하와이안" | "콤비네이션";
// 토핑 종류: [버섯,피망,치즈,크러스트,고기,양파]
type Topping = "버섯" | "피망" | "치즈" | "크러스트" | "고기" | "양파";
// 음료 종류: [콜라,사이다,오렌지주스]
type Drink = "콜라" | "사이다" | "오렌지주스";

type ITPizzaSet = {
  main: MainPizza;
  toppings: Topping[];
  drink: Drink;
};

const orderPizza = (pizza: ITPizzaSet) => {
  console.log(
    `주문하신 피자: ${pizza.main} 토핑 종류: ${pizza.toppings} 음료 종류: ${pizza.drink}`
  );
};

// 노트북 설정 타입
// brand: 애플, hp, 레노버, 아서스, 삼성, 엘지
// cpu: i5, i7, i9 ryzen5, ryzen7
// ram: 8gb, 16gb, 32gb, 64gb
// storage: ssd-256, ssd-512, ssd-1024, hdd-256, hdd512

// 마이노트북으로 노트북 설정 타입을 갖는 변수 선언하기

type Brand = "애플" | "hp" | "레노버" | "아서스" | "삼성" | "엘지";

type Cpu = "i5" | "i7" | "i9" | "ryzen5" | "ryzen7";

type Ram = "8gb" | "16gb" | "32gb" | "64gb";

type Storages = "ssd-512" | "ssd-1024" | "hdd-256" | "hdd-512";

type LaptopConfig = { brand: Brand } & { cpu: Cpu } & { ram: Ram } & {
  storages: Storages;
};

const myLaptop: LaptopConfig = {
  brand: "애플",
  cpu: "i5",
  ram: "32gb",
  storages: "ssd-512",
};
