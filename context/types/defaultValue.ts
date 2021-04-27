import { User } from "../../types/User";
import { Product } from "../../components/Order/types";

export type ContextDefaultType = {
  user: User;
  basket: Array<Product>;
  qKey: any;
};
