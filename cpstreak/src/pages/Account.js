import React, { useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';
// import { useNavigate } from 'react-router';

const Account = () => {
    const {logOut, user} = UserAuth();

    // const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await logOut();
            // navigate('/Signin')
        } catch (error) {
            console.log(error)
        }
    }

    // useEffect( () => {
    //     if(user != null){
    //         navigate('/Signin')
    //     }
    // }, [user])

  return (
    <div className='w-[300px] m-auto'>
      <h1 className='text-center text-2xl font-bold pt-12'>Account</h1>
      <div>
        <p>Welcome, {user?.displayName}</p>
      </div>
      <button className='border py-2 px-5 mt-10' onClick={handleSignOut}>
        Logout
      </button>
    </div>
  );
};

export default Account;