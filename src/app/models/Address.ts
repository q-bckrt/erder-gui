// This interface defines the structure of a Address object.
// It represents a 'contract' that the Address objects and the server must adhere to.
export interface Address {
  country: string;
  city: string;
  zip: string;
  street: string;
  streetNumber: string;
}
