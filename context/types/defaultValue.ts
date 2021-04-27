import { User } from "../../types/User";
import { Product } from "../../components/Order/types";

export type ContextDefaultType = {
  user: User | null;
  basket: Array<Product>;
  qKey: any;
};
