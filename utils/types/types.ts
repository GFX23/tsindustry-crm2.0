import firebase from "firebase/compat/app";

export type Order = {
  customer: string;
  date: string;
  id: string;
  op1: string;
  op2: string;
  orderNum: string;
  partCount: string;
  partName: string;
  price: string;
  time: string;
};

export type Customer = {
  name: string;
  hourRate: string;
};

export type Data = {
  user: firebase.User | null
  customers: Customer[];
  orders: Order[]
}

export type OrderNoId = {
  customer: string;
  date: string;
  op1: string;
  op2: string;
  orderNum: string;
  partCount: string;
  partName: string;
  price: string;
  time: string;
};

export type Todo = {
  subject: string;
  description: string;
  state: "created" | "active" | "done";
  date: string;
}
