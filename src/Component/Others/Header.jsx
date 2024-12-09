import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Header = ({ changeUser }) => {
  const [firstName, setFirstName] = useState(null);

  // Get the logged-in user's details from localStorage
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
      setFirstName(loggedInUser.firstName); // Set the first name of the logged-in user
    }
  }, []);

  // Log out the user by clearing localStorage and updating the state
  const logOutUser = () => {
    localStorage.removeItem('loggedInUser');
    changeUser(null);
  };

  return (
    <div className="flex items-center justify-between pb-16">
      {firstName ? (
        <h1 className="text-2xl font-medium">
          Hello, <br />
          <span className="font-semibold text-3xl">{firstName} 👋🏻</span>
        </h1>
      ) : (
        <h1 className="text-2xl font-medium">Welcome!</h1>
      )}
      <button
        onClick={logOutUser}
        className="hover:bg-orange-600 rounded-lg text-lg font-medium bg-orange-500 text-white px-8 py-2"
      >
        Log Out
      </button>
    </div>
  );
};

// PropTypes for validating the passed props
Header.propTypes = {
  changeUser: PropTypes.func.isRequired, // `changeUser` function to update the user state
};

export default Header;
