import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvided = ({ children }) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        // Set initial data in localStorage
        setLocalStorage()

        // Get data from localStorage
        const { employees, admin } = getLocalStorage()

        // Set user data
        setUserData(employees)
    }, [])

    return (
        <AuthContext.Provider value={[userData, setUserData]}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvided