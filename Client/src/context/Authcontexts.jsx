import React, { createContext, useContext, useEffect, useState } from 'react'



const Authcontexts = createContext()


export default function Authcontextsprovider({ children }) {

  const [user, setUser] = useState({})

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isAppLoading, setIsAppLoading] = useState(true)

  useEffect(() => {

    const getToken = localStorage.getItem("authToken")
    console.log('getToken', getToken)
      if (getToken) {
        setUser(getToken)
        setIsAuthenticated(true)
        
   
      } else {
        setIsAppLoading(false)
      }

  }, [])


  return (
    <Authcontexts.Provider value={{ user, isAuthenticated, setIsAuthenticated,isAppLoading }}>
      {children}
    </Authcontexts.Provider>
  )
}

export const useAuthcontexts = () => useContext(Authcontexts)


