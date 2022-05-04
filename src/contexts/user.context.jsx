import { createContext, useState } from "react"

// The actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

// Components that allows any children to use the value of the UserContext
export const UserProvider = ({ children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const value = { currentUser, setCurrentUser }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}