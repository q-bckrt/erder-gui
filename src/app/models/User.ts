// This interface defines the structure of a User object.
// It represents a 'contract' that the User objects and the server must adhere to.
import {Address} from './Address';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: number;
  phone: number;
  addressDTO: Address;
}
