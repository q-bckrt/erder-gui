// This interface defines the structure of an Item object.
// It represents a 'contract' that the Item objects and the server must adhere to.
export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}
