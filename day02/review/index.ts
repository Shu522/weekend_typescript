// 캐릭터 타입 만들기
// 기본으로 모든 캐릭터는 이름과 레벨 갖는다
type Character = {
  name: string;
  level: number;
};

// 전사 캐릭터 타입: 힘과 사용하는 무기
type Warrior = {
  strength: number;
  weapon: string[];
};

// 마법사 : 마나와 사용하는 주문
type Magician = {
  mana: number;
  skills: string[];
};
// 도적 : 민첩도와 사용하는 은신
type Theif = {
  Agility: number;
  Stealth: string[];
};
// 궁수 : 정확도와 사용하는 활
type Archer = {
  acurrancy: number;
  bow: string[];
};

const myChar: Character & Warrior = {
  name: "전사",
  level: 23,
  strength: 120,
  weapon: ["도끼", "검"],
};

const yourChar: Character & Archer = {
  name: "궁수",
  level: 15,
  acurrancy: 30,
  bow: ["은화살", "빙화살"],
};
