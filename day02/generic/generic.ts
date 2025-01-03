type Container<T> = {
  value: T;
};
const test: Container<string> = {
  value: "장난감",
};
const test1: Container<boolean> = {
  value: false,
};

type FruitContainer<T> = {
  fruit: T;
};
const a: FruitContainer<string[]> = {
  fruit: ["사과", "바나나", "파인애플", "망고"],
};

type CarContainer<T> = {
  car: T;
};
const brandCar: CarContainer<string[]> = {
  car: ["페라리", "람보르기니"],
};

type Car1 = "현대" | "기아";
const carContainer: Container<Car1> = {
  value: "기아",
};
