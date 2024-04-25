import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Home = () => {
    const { name } = useContext(AuthContext)
    return (
        <div>
            <h1>this is home of the website and name is {name }</h1>
        </div>
    );
};

export default Home;