import type { Dispatch, SetStateAction } from "react";
import type { CartLineItem } from "./cart";

export interface FinalContextValue {
  NavCartNo: number;
  setNavCartNo: Dispatch<SetStateAction<number>>;
  totalCartPrice: number;
  settotalCartPrice: Dispatch<SetStateAction<number>>;
  prodect: CartLineItem[];
  setProdects: Dispatch<SetStateAction<CartLineItem[]>>;
  cartUser: string;
  setcartUser: Dispatch<SetStateAction<string>>;
}
