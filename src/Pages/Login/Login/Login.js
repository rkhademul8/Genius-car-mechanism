import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const {signInUsingGoogle}=useAuth()
    return (
        <div>
            <p>Login Please</p>  <br />
            <button onClick={signInUsingGoogle} className='btn btn-danger'>Google Sign In</button>
        </div>
    );
};

export default Login;