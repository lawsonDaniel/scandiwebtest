export interface Products {
  id: string;
  sku: string;
  name: string;
  price: string;
  type: "DVD" | "BOOK" | "FURNITURE";
  payload: Partial<{
    height: string;
    width: string;
    length: string;
    size: string;
    weight: string;
  }>;
  will_delete?: boolean;
}
