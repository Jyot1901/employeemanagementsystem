import React, { useContext, useEffect, useState } from 'react';
import Login from './Component/Auth/Login';
import EmployeeDashboard from './Component/Dashboard/EmployeeDashboard';
import AdminDashboard from './Component/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvided';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      if (parsedUser.role === 'admin') {
        setUser('admin');
      } else if (parsedUser.role === 'employee') {
        const employee = userData?.find((e) => e.email === parsedUser.data?.email);
        if (employee) {
          setUser('employee');
          setLoggedInUserData(employee);
        }
      }
    }
  }, [userData]);

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
      localStorage.setItem("loggedInUser", JSON.stringify({ role: 'admin' }));
    } else if (userData) {
      const employee = userData.find((e) => e.email === email && e.password === password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: 'employee', data: { email: employee.email } }));
      } else {
        alert("Invalid login credentials");
      }
    } else {
      alert("Invalid login credentials");
    }
  };

  return (
    <>
      {user === null ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard changeUser={setUser} />
      ) : (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      )}
    </>
  );
};

export default App;
