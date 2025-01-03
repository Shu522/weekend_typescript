type Pair<T, U> = {
  first: T;
  second: U;
};

const test: Pair<string, boolean> = {
  first: "김땡땡",
  second: false,
};

type Mac<T, U, V> = {
  main: T;
  sub: U;
  drink: V;
};
const macSet: Mac<string, string, string> = {
  main: "불고기버거",
  sub: "감튀",
  drink: "오렌지주스",
};

type Pizza<T, U> = {
  cheese: T;
  topping: U[];
  crust: boolean;
};
type Cheese = "모짜렐라" | "슈레드" | "앙팡";
type Topping = "불고기" | "피망" | "올리브" | "양파";

const myPizza: Pizza<Cheese, Topping> = {
  cheese: "모짜렐라",
  topping: ["불고기", "올리브"],
  crust: false,
};
