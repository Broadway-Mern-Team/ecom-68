import { Credentials } from "@/components/auth/LoginForm";
import { createContext } from "react";
export type AddressType = {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: {
      lat: number
      lng: number
    };
    country: string;
  }

export type IUserDetail = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  gender: string;
  email: string;
  phone: string;
  username: string;
  birthDate: Date;
  image: string;
  address: AddressType;
  role: string;
};

export type AuthContextType = {
  loggedInUser: null | IUserDetail,
  login(data: Credentials): Promise<void|IUserDetail>,
  getLoggedInUserDetail(): Promise<void|IUserDetail>
}

const AuthContext = createContext<AuthContextType>({
  loggedInUser: null,
  login: async() => {},
  async getLoggedInUserDetail() {},
})

export default AuthContext