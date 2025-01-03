type Job = "sales" | "engineer" | "account";

type Worker_ = {
  [key in Job]: string;
};

const myJob: Worker_ = {
  engineer: "자바",
  account: "회계",
  sales: "판매",
};

type SubWayBread = "bread" | "cheese" | "vegitable" | "source";
type Order = {
  [key in SubWayBread]: string | string[];
};

const mySubway: Order = {
  bread: "플랫브레드",
  cheese: "슈레드",
  vegitable: ["양파", "상추"],
  source: ["랜치", "마요네즈"],
};
