'use client';

import { ReactNode, useEffect, useState } from "react";
import AuthContext, { IUserDetail } from "../context/AuthContext";
import { Credentials } from "@/components/auth/LoginForm";
import axiosSvc from "../services/AxiosService";
import Cookies from "js-cookie"

export default function AuthProvider({children}: Readonly<{children: ReactNode}>) {
  const [loading, setLoading] = useState<boolean>(false)
  const [loggedInUser, setLoggedInUser] = useState<IUserDetail>()
  
  async function login(data: Credentials) {
    try{
      setLoading(true)
      const response = await axiosSvc.post("/auth/login", {
        ...data,
        expiresInMins: 180
      });
      Cookies.set("_at_68", response.data.accessToken, {
        expires: 1, secure: true
      })
      Cookies.set("_rt_68", response.data.refreshToken, {
        expires: 1,
        secure: true,
      });
      
      return await getLoggedInUserDetail()
    } catch(exception) {
      throw exception
    } finally {
      setLoading(false)
    }
  }

  async function getLoggedInUserDetail() {
    try {
      setLoading(true)
      const response = await axiosSvc.get('/auth/me', {
        headers: {
          Authorization: `Bearer `+Cookies.get("_at_68")
        }
      })
      setLoggedInUser(response.data)
      return response.data as IUserDetail
    } catch(exception) {
      throw exception;
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    return () => {
      getLoggedInUserDetail()
    }
  }, [])
  
  return loading ? (
    <>Loading...(Splash Screen)</>
  ) : (
    <AuthContext.Provider
      value={{
        loggedInUser: loggedInUser as IUserDetail,
        login,
        getLoggedInUserDetail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}