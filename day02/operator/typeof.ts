const laptop = { cpu: "라이젠", ram: 32, gpu: "엔비디아" };

type Laptop = typeof laptop;

const youLapTop: Laptop = {
  cpu: "인텔",
  ram: 16,
  gpu: "엔비디아",
};

// 옷입기 (룩)
// 변수 상의, 하의, 악세사리, 코스메틱[화장품]
// 타입오브 연산자 사용 타입 추출하기

const clothes = {
  top: "스웨터",
  under: "청바지",
  accesories: ["반지", "귀걸이"],
  cosmetics: ["향수", "립밤"],
};
type Look = typeof clothes;
const myClothes: Look = {
  top: "가디건",
  under: "바지",
  accesories: [],
  cosmetics: ["선크림"],
};
